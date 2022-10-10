import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMdxImages from 'remark-mdx-images';
import remarkGfm from 'remark-gfm';
import wrap from 'rehype-wrap'
import frontmatter from '@mdxvac/remark-astro-frontmatter';
import autoImports from '@mdxvac/remark-astro-autoimports';
import autoComponents from '@mdxvac/remark-astro-autocomponents';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
      theme: 'material-darker'
    },
  },
  integrations: [tailwind(), mdx({
    extendDefaultPlugins: true,
    remarkPlugins: [autoImports, autoComponents, frontmatter, remarkMdxImages, remarkGfm],
    rehypePlugins: [
      [wrap, {selector: 'table', wrapper: 'div.overflow-x-auto'}],
    ]
  })]
});