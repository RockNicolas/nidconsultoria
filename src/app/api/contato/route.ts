import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const clean = (v: unknown, max = 1000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// limite simples por IP (memória do processo): 5 envios / 10 min
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 5;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (limited(ip)) return NextResponse.json({ ok: false, error: "Muitas tentativas. Tente em alguns minutos." }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 400 });
  }
  if (clean(body.site)) return NextResponse.json({ ok: true }); // honeypot: bots preenchem

  const lead = {
    nome: clean(body.nome, 120),
    empresa: clean(body.empresa, 120),
    whatsapp: clean(body.whatsapp, 40),
    email: clean(body.email, 120),
    mensagem: clean(body.mensagem, 2000),
    em: new Date().toISOString(),
  };
  if (!lead.nome || lead.whatsapp.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "Informe nome e WhatsApp válidos." }, { status: 400 });
  }

  // 1) guarda o lead (JSON por linha). Em hospedagem serverless o disco é efêmero: use o e-mail como registro principal.
  try {
    const dir = process.env.LEADS_DIR ?? path.join(process.cwd(), ".leads");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "leads.jsonl"), JSON.stringify(lead) + "\n");
  } catch (e) {
    console.error("[contato] não foi possível gravar o lead:", e);
  }
  console.log("[contato] novo lead:", JSON.stringify(lead));

  // 2) e-mail via Resend (se configurado)
  const key = process.env.RESEND_API_KEY;
  let emailed = false;
  if (key) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM ?? "Site NID <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO ?? "contato@nidconsultoria.com.br"],
          reply_to: lead.email || undefined,
          subject: `Novo contato pelo site: ${lead.nome}${lead.empresa ? ` (${lead.empresa})` : ""}`,
          html: `<h2>Novo pedido de diagnóstico</h2>
<p><b>Nome:</b> ${esc(lead.nome)}<br><b>Empresa:</b> ${esc(lead.empresa)}<br><b>WhatsApp:</b> ${esc(lead.whatsapp)}<br><b>E-mail:</b> ${esc(lead.email)}</p>
<p><b>Desafio:</b><br>${esc(lead.mensagem).replace(/\n/g, "<br>")}</p>`,
        }),
      });
      emailed = r.ok;
      if (!r.ok) console.error("[contato] Resend:", r.status, await r.text());
    } catch (e) {
      console.error("[contato] erro ao enviar e-mail:", e);
    }
  }

  return NextResponse.json({ ok: true, emailed });
}
