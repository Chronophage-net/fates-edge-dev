export async function GET(context) {
  const paths = [
    '', 'contribute/', 'workflow/', 'architecture/', 'art-bible/', 'no-ai-art/', 'design-tokens/', 'roadmap/', 'press-kit/',
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${new URL(`/${p}`, context.site).href}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
