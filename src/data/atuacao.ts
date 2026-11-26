/* Presença da NID por estado, conforme lista enviada pela própria NID (esteve ou está presente).
   Em `cities`, a primeira é a capital, marcada no mapa em `pin` (coordenadas do viewBox).

   Empresas:
   `ok: true`  → cidade/UF confirmada em fonte pública (CNPJ, site ou imprensa).
   `ok: false` → distribuição vem da proposta em vídeo; cidade ainda a confirmar com a NID. */
export type Company = { name: string; slug?: string; city: string; ok: boolean };
export type StateInfo = {
  id: string;
  uf: string;
  name: string;
  region: string;
  hq?: boolean;
  cities: string[];
  pin: { x: number; y: number };
  companies: Company[];
};

export const STATES: StateInfo[] = [
  {
    id: "sp", uf: "SP", name: "São Paulo", region: "Sudeste", hq: true,
    cities: [
      "São Paulo", "Santo André", "São Caetano do Sul", "São Bernardo do Campo", "Barueri",
      "Osasco", "Guarulhos", "Limeira", "Campinas", "Valinhos",
      "Vinhedo", "Caraguatatuba", "Ubatuba", "Guarujá", "Santos",
      "São José dos Campos", "Taubaté", "Jundiaí", "Assis", "Avaré",
      "Itapecerica da Serra", "Mogi das Cruzes", "Hortolândia", "Suzano",
    ],
    pin: { x: 428, y: 457 },
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
    id: "ba", uf: "BA", name: "Bahia", region: "Nordeste",
    cities: ["Salvador", "Vitória da Conquista", "Barra do Choça"],
    pin: { x: 554, y: 289 },
    companies: [],
  },
  {
    id: "ce", uf: "CE", name: "Ceará", region: "Nordeste",
    cities: ["Fortaleza"],
    pin: { x: 554, y: 141 },
    companies: [
      { name: "Sete Copa Engenharia", slug: "setecopa", city: "Fortaleza", ok: false },
      { name: "Duo Construtora", slug: "duo", city: "Fortaleza", ok: false },
      { name: "Construtora Monte Cristo", slug: "montecristo", city: "Fortaleza", ok: false },
      { name: "Dinamic", city: "Fortaleza", ok: false },
    ],
  },
  {
    id: "go", uf: "GO", name: "Goiás", region: "Centro-Oeste",
    cities: ["Goiânia"],
    pin: { x: 385, y: 349 },
    companies: [
      { name: "Cooperluxo", slug: "cooperluxo", city: "Goiânia", ok: true },
    ],
  },
  {
    id: "es", uf: "ES", name: "Espírito Santo", region: "Sudeste",
    cities: ["Vitória"],
    pin: { x: 525, y: 407 },
    companies: [],
  },
  {
    id: "pr", uf: "PR", name: "Paraná", region: "Sul",
    cities: ["Curitiba", "Astorga", "Maringá", "Londrina"],
    pin: { x: 385, y: 489 },
    companies: [
      { name: "Maper", slug: "maper", city: "Astorga", ok: true },
      { name: "Casacchi", slug: "casacchi", city: "Astorga", ok: true },
    ],
  },
  {
    id: "mt", uf: "MT", name: "Mato Grosso", region: "Centro-Oeste",
    cities: ["Cuiabá"],
    pin: { x: 278, y: 331 },
    companies: [],
  },
  {
    id: "ms", uf: "MS", name: "Mato Grosso do Sul", region: "Centro-Oeste",
    cities: ["Campo Grande"],
    pin: { x: 301, y: 410 },
    companies: [],
  },
  {
    id: "df", uf: "DF", name: "Distrito Federal", region: "Centro-Oeste",
    cities: ["Brasília"],
    pin: { x: 406, y: 334 },
    companies: [],
  },
  {
    id: "sc", uf: "SC", name: "Santa Catarina", region: "Sul",
    cities: ["Florianópolis"],
    pin: { x: 396, y: 524 },
    companies: [],
  },
  {
    id: "rs", uf: "RS", name: "Rio Grande do Sul", region: "Sul",
    cities: ["Porto Alegre"],
    pin: { x: 354, y: 563 },
    companies: [],
  },
  {
    id: "mg", uf: "MG", name: "Minas Gerais", region: "Sudeste",
    cities: ["Belo Horizonte"],
    pin: { x: 469, y: 401 },
    companies: [
      { name: "Star San", slug: "starsan", city: "Uberlândia", ok: false },
    ],
  },
  {
    id: "pb", uf: "PB", name: "Paraíba", region: "Nordeste",
    cities: ["João Pessoa"],
    pin: { x: 611, y: 195 },
    companies: [],
  },
];
