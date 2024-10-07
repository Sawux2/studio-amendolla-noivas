/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml', // Rota para o arquivo sitemap.xml
      },
      {
        source: '/robots.txt',
        destination: '/api/robots.txt', // Rota para o arquivo robots.txt
      },
      {
        source: '/:slug',
        destination: '/paginaSeo/:slug', // Rota para páginas SEO dinâmicas
      },
    ];
  },
};

module.exports = nextConfig;
