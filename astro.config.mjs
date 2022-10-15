import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMdxImages from 'remark-mdx-images';
import wrap from 'rehype-wrap-all'
import autoFrontmatter from '@mdxvac/remark-astro-frontmatter';
import autoImports from '@mdxvac/remark-astro-autoimports';
import autoComponents from '@mdxvac/remark-astro-autocomponents';
import sectionize from 'remark-sectionize'
import moveHeadingsIdToSection from './src/utils/rehype/move-heading-id-to-section'
import { remarkReadingTime } from './src/utils/remark/remark-reading-time'

export default defineConfig({
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
      theme: 'material-darker'
    },
  },
  integrations: [tailwind(), mdx({
    extendDefaultPlugins: true,
    remarkPlugins: [autoImports, autoComponents, autoFrontmatter, remarkMdxImages, sectionize, remarkReadingTime],
    rehypePlugins: [
      moveHeadingsIdToSection,
      [wrap, { selector: 'table', wrapper: 'div.overflow-x-auto' }],
    ]
  })]
});