/* Empresas por estado.
   `ok: true`  → cidade/UF confirmada em fonte pública (CNPJ, site ou imprensa).
   `ok: false` → distribuição vem da proposta em vídeo; cidade ainda a confirmar com a NID. */
export type Company = { name: string; slug?: string; city: string; ok: boolean };
export type StateInfo = { id: string; uf: string; name: string; region: string; hq?: boolean; companies: Company[] };

export const STATES: StateInfo[] = [
  {
    id: "sp", uf: "SP", name: "São Paulo", region: "Sudeste", hq: true,
    companies: [
      { name: "CTL Engenharia", slug: "ctl", city: "São Paulo", ok: true },
      { name: "Habras", slug: "habras", city: "São Paulo", ok: true },
      { name: "Dubai", slug: "dubai", city: "Grande São Paulo", ok: true },
      { name: "Basilar", slug: "basilar", city: "ABC Paulista", ok: true },
      { name: "VL Barros", slug: "vlbarros", city: "São Paulo", ok: true },
      { name: "Pilotti Engenharia", slug: "pilotti", city: "a confirmar", ok: false },
    ],
  },
  {
    id: "pr", uf: "PR", name: "Paraná", region: "Sul",
    companies: [
      { name: "Maper", slug: "maper", city: "Astorga", ok: true },
      { name: "Casacchi", slug: "casacchi", city: "Astorga", ok: true },
    ],
  },
  {
    id: "ce", uf: "CE", name: "Ceará", region: "Nordeste",
    companies: [
      { name: "Sete Copa Engenharia", slug: "setecopa", city: "Fortaleza", ok: false },
      { name: "Duo Construtora", slug: "duo", city: "Fortaleza", ok: false },
      { name: "Construtora Monte Cristo", slug: "montecristo", city: "Fortaleza", ok: false },
      { name: "Dinamic", city: "Fortaleza", ok: false },
    ],
  },
  {
    id: "go", uf: "GO", name: "Goiás", region: "Centro-Oeste",
    companies: [{ name: "Cooperluxo", slug: "cooperluxo", city: "Goiânia", ok: true }],
  },
  {
    id: "mg", uf: "MG", name: "Minas Gerais", region: "Sudeste",
    companies: [{ name: "Star San", slug: "starsan", city: "Uberlândia", ok: false }],
  },
];
