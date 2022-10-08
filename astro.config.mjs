import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMdxImages from 'remark-mdx-images';
import remarkGfm from 'remark-gfm';
import wrap from 'rehype-wrap'
import urls from 'rehype-urls'

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
      theme: 'material-darker'
    },
    remarkPlugins: [remarkMdxImages, remarkGfm],
    rehypePlugins: [[wrap, {selector: 'table', wrapper: 'div.overflow-x-auto'}], [urls, (url, node) => {
      if (url.href.startsWith('http')) {
        node.properties.target = '_blank'
        node.properties.rel = 'noreferrer noopener'
      }
    }]]
  },
  integrations: [tailwind(), mdx()]
});