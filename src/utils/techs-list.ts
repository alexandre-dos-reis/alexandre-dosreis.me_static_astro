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
};
