import type { MDXInstance } from "astro";
import type { Article } from "./types";

export function unslugify(slug: string) {
  const result = slug.replace(/\-/g, " ");
  return result.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

export function getCategories(articles: MDXInstance<Article>[], pathname: string) {
  const categoriesWithDup = articles.map((a) => {
    const slug = a.url?.replace(removeTrailingSlash(pathname) + "/", "").replace(/\/.*/, "");
    return { href: `${pathname}/${slug}`, name: unslugify(slug!), slug };
  });

  return categoriesWithDup.filter((c, i) => {
    return i === categoriesWithDup.findIndex((other) => c.href === other.href);
  });
}

export function sortMdByDate(articles: MDXInstance<Article>[]) {
  return articles.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());
}

export function sortCategoriesAlphabetically(categories: ReturnType<typeof getCategories>) {
  return categories.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

export function removeTrailingSlash(pathname: string): string {
  if (pathname.endsWith("/")) {
    return pathname.slice(0, pathname.length - 1);
  }
  return pathname;
}

export const iter = <TObj extends Record<string | number | symbol, unknown>, TRet extends any>(
  obj: TObj,
  callback: (arg: TObj[keyof TObj], key: keyof TObj, index: number) => TRet,
): TRet[] => {
  return Object.keys(obj).map((key, i) => {
    const keyOfObj = key as keyof typeof obj;
    return callback(obj[keyOfObj], keyOfObj, i);
  });
};
