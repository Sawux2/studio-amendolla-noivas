// pages/api/sitemap.ts
import { NextApiRequest, NextApiResponse } from 'next';

const baseUrl = 'https://studioamendollanoivas.com.br';

// URLs estáticas (home, contato, etc.)
const staticUrls = [
  '',
  'contato',
  'servicos',
  'sobre',
];

// URLs dinâmicas que você pode ter em 'app/paginaSeo'
const dynamicPages = [
  'dia-da-noiva',
  'maquiagem-social',
  'combo-madrinhas',
  'nosso-espaco',
  'pacotes-noivas',
  'spa'
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const allUrls = [
    ...staticUrls.map((slug) => `${baseUrl}/${slug}`),
    ...dynamicPages.map((slug) => `${baseUrl}/paginaSeo/${slug}`),
  ];

  // Gera o XML do sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map((url) => {
        return `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>`;
      })
      .join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
