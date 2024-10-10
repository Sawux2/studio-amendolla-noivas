// pages/api/sitemap.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://studioamendollanoivas.com.br';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Caminho para a pasta que contém suas páginas em `app`
  const paginaSeoDir = path.join(process.cwd(), 'app', 'paginaSeo');

  // Função para buscar as URLs das páginas dentro de `paginaSeo`
  const getUrlsFromDir = (dir: string, basePath: string = ''): string[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    return entries.flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      const urlPath = path.join(basePath, entry.name.replace(/\.tsx|\.ts|\.js/, ''));

      if (entry.isDirectory()) {
        return getUrlsFromDir(fullPath, `${urlPath}/`);
      }

      if (entry.isFile() && /\.(tsx|ts|js)$/.test(entry.name)) {
        const slug = urlPath.replace(/\\/g, '/').replace(/\/index$/, '');
        return `${baseUrl}/paginaSeo/${slug}`;
      }

      return [];
    });
  };

  // URLs estáticas para as outras páginas em `app`
  const staticUrls = [
    `${baseUrl}/`,
    `${baseUrl}/contato`,
    `${baseUrl}/servicos`,
    `${baseUrl}/sobre`
  ];

  // URLs dinâmicas das páginas em `paginaSeo`
  const dynamicUrls = getUrlsFromDir(paginaSeoDir, '');

  // Combina as URLs estáticas e dinâmicas
  const allUrls = [...staticUrls, ...dynamicUrls];

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

  // Define o cabeçalho do sitemap
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
