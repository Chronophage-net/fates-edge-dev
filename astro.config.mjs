import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served at https://dev.fates-edge.com via the CNAME in /public
export default defineConfig({
  site: 'https://dev.fates-edge.com',
  integrations: [sitemap()],
});
