import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://generatorswitchguide.com',
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize: (item) => {
        if (item.url.includes('/guides/') || item.url.includes('/reviews/')) {
          item.priority = 0.9;
        }
        if (item.url.includes('/tools/')) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
    icon(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  output: 'static',
  compressHTML: true,
});
