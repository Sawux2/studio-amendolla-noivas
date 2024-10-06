import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Função para percorrer o diretório app e capturar todas as páginas
const getAllPages = (dirPath: string, removeDir: string = ''): string[] => {
  if (!fs.existsSync(dirPath)) {
    console.error(`Diretório não encontrado: ${dirPath}`);
    return [];
  }

  const files = fs.readdirSync(dirPath);
  let arrayOfFiles: string[] = [];

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = arrayOfFiles.concat(getAllPages(filePath, removeDir));
    } else {
      console.log(`Arquivo encontrado: ${filePath}`); // Log para verificação
      arrayOfFiles.push(filePath.replace(removeDir, ''));
    }
  });

  return arrayOfFiles;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://studioamendollanoivas.com.br'; // Altere para seu domínio
  const appPagesDir = path.join(process.cwd(), 'app', 'paginaSeo'); // Caminho correto

  console.log(`Buscando páginas em: ${appPagesDir}`); // Verifica se o caminho está correto

  // Obtenha todas as páginas no diretório 'app/paginaSeo'
  const staticPages = getAllPages(appPagesDir)
    .map((page) => {
      const relativePath = page.replace(process.cwd() + '/app/', '').replace('.tsx', '');
      const route = relativePath === 'index' ? '' : relativePath;
      console.log(`Rota gerada: ${route}`); // Log para verificação das rotas
      return `${baseUrl}/${route}`;
    });

  if (staticPages.length === 0) {
    console.warn('Nenhuma página encontrada para o sitemap.');
  }

  // Gerar o sitemap em XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
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

  // Enviar o sitemap como resposta
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
