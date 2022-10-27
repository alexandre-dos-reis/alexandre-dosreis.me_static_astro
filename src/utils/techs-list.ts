export type TechType =
  | "nextjs"
  | "symfony"
  | "mariadb"
  | "preact"
  | "webcomponent"
  | "react"
  | "directus9"
  | "astro"
  | "typescript"
  | "nodejs"
  | "trpc"
  | "docker"
  | "pgsql"
  | "caddy"
  | "vscode"
  | "kubernetes"
  | "graphql"
  | "angular"
  | "sqlserver"
  | "ansible"
  | "dotnet"
  | (string & {});

export type Tech = { label: string; color: string };

export const techList: Record<TechType, Tech> = {
  astro: {
    label: "Astro",
    color: "bg-[#65219e]",
  },
  directus9: { label: "Directus 9", color: "bg-[#607D8B]" },
  nodejs: { label: "NodeJS", color: "bg-[#3d863d]" },
  mariadb: { label: "MariaDB", color: "bg-[#E35169]" },
  nextjs: { label: "NextJS", color: "bg-[#97890C]" },
  preact: { label: "Preact", color: "bg-[#9E8DE4]" },
  react: { label: "React", color: "bg-[#00C897]" },
  symfony: { label: "Symfony", color: "bg-[#1d4fd8]" },
  typescript: { label: "Typescript", color: "bg-[#3379c6]" },
  webcomponent: { label: "Web Components", color: "bg-[#F7971C]" },
  angular: { label: "Angular", color: "bg-[#c50931]" },
  ansible: { label: "Ansible", color: "bg-[#15191c]" },
  caddy: { label: "Caddy", color: "bg-[#0eab0f]" },
  docker: { label: "Docker", color: "bg-[#2497ed]" },
  dotnet: { label: "Dotnet", color: "bg-[#5629e3]" },
  graphql: { label: "GraphQL", color: "bg-[#e10598]" },
  kubernetes: { label: "Kubernetes", color: "bg-[#306ce7]" },
  pgsql: { label: "PostGreSQL", color: "bg-[#2a6da0]" },
  sqlserver: { label: "Sql Server", color: "bg-[#0179d5]" },
  trpc: { label: "tRPC", color: "bg-[#388cca]" },
  vscode: { label: "VSCode", color: "bg-[#0067b9]" },
};
