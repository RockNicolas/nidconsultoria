import { ImageResponse } from "next/og";

export const alt = "NID Consultoria — Processos organizados. Obras sob controle.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#14181f,#2b3344)", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 800, color: "#f0b323", letterSpacing: 6 }}>NID CONSULTORIA</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 76, fontWeight: 800, lineHeight: 1.08, maxWidth: 980 }}>Processos organizados. Obras sob controle.</div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 30, color: "#cbd2e0" }}>Necessidade · Inovação · Domínio — 10 anos</div>
        <div style={{ display: "flex", position: "absolute", left: 0, bottom: 0, width: "100%", height: 14, background: "#f0b323" }} />
      </div>
    ),
    size,
  );
}
