/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://studioamendollanoivas.com.br', // Substitua pelo seu domínio
  generateRobotsTxt: true, // Gera o arquivo robots.txt
  exclude: ['/paginaSeo/*'], // Exclui todas as rotas dentro de /paginaSeo
  transform: async (config, path) => {
    // Remove o segmento "/paginaSeo" das URLs
    if (path.startsWith('/paginaSeo')) {
      path = path.replace('/paginaSeo', '');
    }

    return {
      loc: path, // URL da página
      lastmod: new Date().toISOString(), // Data da última modificação
      changefreq: 'monthly', // Frequência de mudança
      priority: 0.8, // Prioridade
    };
  },
  additionalPaths: async (config) => {
    // Adiciona manualmente as páginas dinâmicas
    const dynamicPages = [
      '/beleza-para-formatura-sao-paulo',
      '/casamento',
      '/formatura',
    ];

    return dynamicPages.map((page) => ({
      loc: page,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    }));
  },
};