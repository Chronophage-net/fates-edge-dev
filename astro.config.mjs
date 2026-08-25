import { defineConfig } from 'astro/config';

// Served at https://dev.fates-edge.com via the CNAME in /public
// (sitemap is hand-rolled in src/pages/sitemap.xml.js — @astrojs/sitemap
// was dropped after it threw "Cannot read properties of undefined
// (reading 'reduce')" during CI builds; not worth chasing a plugin
// version bug for a handful of static pages.)
export default defineConfig({
  site: 'https://dev.fates-edge.com',
});
