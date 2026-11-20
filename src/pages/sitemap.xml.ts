import type { APIRoute } from 'astro';

// lastmod se actualiza solo con cada publicación (fecha del build)
const paginas = [
  { ruta: '/', prioridad: '1.0', frecuencia: 'weekly' },
  { ruta: '/black-friday', prioridad: '0.9', frecuencia: 'daily' },
  { ruta: '/vestidos', prioridad: '0.8', frecuencia: 'weekly' },
];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString();
  const urls = paginas
    .map(
      (p) => `  <url>
    <loc>${new URL(p.ruta, site).href}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.frecuencia}</changefreq>
    <priority>${p.prioridad}</priority>
  </url>`,
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
