import type { NestedMH } from "./types";

export const reorganizeHeadingsInTree = (heads: NestedMH[]) => {
  let newOrder: NestedMH[] = [];

  heads.forEach((h) => {
    if (h.depth === 2) {
      h.children = [];
      newOrder.push(h);
    } else {
      newOrder[newOrder.length - 1]?.children?.push(h);
    }
  });

  return newOrder;
};
