const fs = require('fs');
const path = require('path');

module.exports = {
  siteUrl: 'https://studioamendollanoivas.com.br',
  generateRobotsTxt: true,

  // Função para pegar as imagens das páginas a partir do schema
  transform: async (config, path) => {
    // Remover "/paginaSeo" se necessário
    if (path.startsWith('/paginaSeo')) {
      path = path.replace('/paginaSeo', '');
    }

    // Aqui você pode incluir a lógica que já tem para acessar as imagens via seu schema (JSON ou outra forma).
    // Supondo que você tenha um arquivo local "public/imagesData.json" que contém essas informações.

    const imageData = require('./public/imagesData.json'); // Carregar o arquivo de imagens
    const images = imageData[path] || [];

    // Se não tiver imagens, apenas retorna as informações de URL normais
    if (images.length === 0) {
      return {
        loc: path,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8,
      };
    }

    // Retorna o sitemap com as imagens
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
      images: images.map((image) => ({
        loc: image.url,
        title: image.title,
      })),
    };
  },

  // Para páginas dinâmicas como "/casamento", "/formatura", etc
  additionalPaths: async (config) => {
    const dynamicPages = [
      '/beleza-para-formatura-sao-paulo',
      '/casamento',
      '/formatura',
    ];

    return dynamicPages.map((page) => {
      const imageData = require('./public/imagesData.json'); // Carregar as imagens para cada página
      const images = imageData[page] || [];

      return {
        loc: page,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8,
        images: images.map((image) => ({
          loc: image.url,
          title: image.title,
        })),
      };
    });
  },
};
