import type { MarkdownHeading } from "astro";

export interface Article {
  title: string;
  date: string;
  draft: boolean;
  imageSrc?: string;
  minutes: number
}

export interface NestedMH extends MarkdownHeading {
  depth: number;
  slug: string;
  text: string;
  children?: NestedMH[];
}