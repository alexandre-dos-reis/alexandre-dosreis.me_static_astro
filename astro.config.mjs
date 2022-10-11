import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMdxImages from 'remark-mdx-images';
import remarkGfm from 'remark-gfm';
import wrap from 'rehype-wrap'
import frontmatter from '@mdxvac/remark-astro-frontmatter';
import autoImports from '@mdxvac/remark-astro-autoimports';
import autoComponents from '@mdxvac/remark-astro-autocomponents';
// import dynamicImport from 'vite-plugin-dynamic-import'
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  // vite: {
  //   resolve: {
  //     alias: {
  //       '@': path.join(__dirname, 'src'),
  //     }
  //   },
  //   plugins: [
  //     dynamicImport(), 
  //   ]
  // },
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