export const siteConfig = {
  name: 'Studio Amendolla Noivas',
  siteUrl: 'https://studio-amendolla-noivas.vercel.app',
  instagramUrl: 'https://www.instagram.com/studioamendolla/',
  whatsappNumber: '5511977670498',
  seo: {
    defaultTitle: 'Studio Amendolla Noivas',
    defaultDescription: 'Salão especializado em maquiagem, penteados e pacotes de dia da noiva.',
    defaultImage: '/images/favicon.ico',
    defaultKeywords:
      'maquiagem para noivas, penteados para noivas, maquiagem para madrinhas, maquiagem debutantes, dia da noiva',
  },
} as const;

export const buildAbsoluteUrl = (path: string = '/') => {
  if (path.startsWith('http')) {
    return path;
  }

  return `${siteConfig.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
};
