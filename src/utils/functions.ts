import type { MarkdownInstance } from "astro";
import type { Article } from "./types";

function unslugify(slug: string) {
  const result = slug.replace(/\-/g, " ");
  return result.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

export function getCategories(
  articles: MarkdownInstance<Article>[],
  pathname: string
) {
  const categoriesWithDup = articles.map((a) => {
    const slug = a.url?.replace(pathname + "/", "").replace(/\/.*/, "");
    return { href: `${pathname}/${slug}`, name: unslugify(slug!) };
  });

  return categoriesWithDup.filter((c, i) => {
    return i === categoriesWithDup.findIndex((other) => c.href === other.href);
  });
}

export function sortMdByDate(articles: MarkdownInstance<Article>[] = []) {
  return articles.sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  );
}
