module.exports = {
  siteUrl: 'https://studioamendollanoivas.com.br',
  generateRobotsTxt: true,
  // Não exclua as páginas da pasta /paginaSeo
  // exclude: ['/paginaSeo/*'], // Remova ou ajuste essa linha conforme necessário

  transform: async (config, path) => {
    // Ajuste para remover "/paginaSeo" apenas se necessário
    if (path.startsWith('/paginaSeo')) {
      path = path.replace('/paginaSeo', '');
    }

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    };
  },

  additionalPaths: async (config) => {
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
