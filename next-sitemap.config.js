/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://studioamendollanoivas.com.br', // Substitua pelo seu domínio
    generateRobotsTxt: true, // Gera o arquivo robots.txt
    sitemapSize: 7000, // Define o tamanho máximo do sitemap (opcional)
    exclude: ['/paginaSeo/[slug]'], // Exclui a página dinâmica de slug diretamente
    transform: async (config, path) => {
      return {
        loc: path, // URL da página
        lastmod: new Date().toISOString(), // Data da última modificação
        changefreq: 'monthly', // Frequência de mudança
        priority: 0.8, // Prioridade
      };
    },
  };
  