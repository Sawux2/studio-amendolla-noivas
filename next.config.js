// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml', // Mapeia a rota para o arquivo sitemap.xml.ts
      },
      {
        source: '/robots.txt',
        destination: '/api/robots.txt', // Mapeia a rota para o arquivo robots.txt.ts
      },
      {
        source: '/:slug', // Quando o slug for acessado diretamente
        destination: '/paginaSeo/:slug', // Redireciona para a página dentro do diretório paginaSeo
      },
    ];
  },
};

module.exports = nextConfig;
