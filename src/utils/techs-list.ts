export const techCategories = {
  web: { label: "Web", color: "bg-red-900" },
  server: { label: "Serveur", color: "bg-cyan-900" },
  infra: { label: "Infrastructure", color: "bg-orange-900" },
  network: { label: "Réseau", color: "bg-lime-900" },
  database: { label: "Base de données", color: "bg-slate-900" },
  sysadmin: { label: "Administrateur système", color: "bg-violet-900" },
  devops: { label: "Devops", color: "bg-pink-900" },
  editor: { label: "Êditeur", color: "bg-stone-800" },
  code: { label: "Code", color: "bg-yellow-900" },
} satisfies Record<string, { label: string; color: string }>;

type Tech = { label: string; cat: keyof typeof techCategories };

export const techList = {
  astro: {
    label: "Astro",
    cat: "web",
  },
  directus: {
    label: "Directus",
    cat: "database",
  },
  nodejs: {
    label: "NodeJS",
    cat: "server",
  },
  bun: {
    label: "Bun",
    cat: "server",
  },
  mariadb: {
    label: "MariaDB",
    cat: "database",
  },
  nextjs: {
    label: "NextJS",
    cat: "web",
  },
  react: {
    label: "React",
    cat: "web",
  },
  htmx: {
    label: "Htmx",
    cat: "web",
  },
  symfony: {
    label: "Symfony",
    cat: "web",
  },
  typescript: {
    label: "Typescript",
    cat: "code",
  },
  javascript: {
    label: "Javascript",
    cat: "code",
  },
  rust: {
    label: "Rust",
    cat: "code",
  },
  webcomponent: {
    label: "Web Components",
    cat: "web",
  },
  ansible: {
    label: "Ansible",
    cat: "devops",
  },
  caddy: {
    label: "Caddy",
    cat: "devops",
  },
  docker: {
    label: "Docker",
    cat: "devops",
  },
  graphql: {
    label: "GraphQL",
    cat: "server",
  },
  postgres: {
    label: "PostGreSQL",
    cat: "database",
  },
  trpc: {
    label: "tRPC",
    cat: "server",
  },
  tailwind: {
    label: "Tailwind",
    cat: "web",
  },
  vscode: {
    label: "VSCode",
    cat: "editor",
  },
  neovim: {
    label: "Neovim",
    cat: "editor",
  },
} satisfies Record<string, Tech>;

export const subTechList = {
  plausible: {
    label: "Plausible",
    cat: "infra",
  },
  jotai: {
    label: "Jotai",
    cat: "web",
  },
  sqlserver: {
    label: "Sql Server",
    cat: "database",
  },
  dotnet: {
    label: "Dotnet",
    cat: "code",
  },
  angular: {
    label: "Angular",
    cat: "web",
  },
  preact: {
    label: "Preact",
    cat: "web",
  },
  css: {
    label: "CSS",
    cat: "web",
  },
} satisfies Record<string, Tech>;

export const allTypes = {
  ...techList,
  ...subTechList,
};

export type TechType = keyof typeof techList;
export type SubTechType = keyof typeof subTechList;
export type AllTechType = keyof typeof allTypes;
