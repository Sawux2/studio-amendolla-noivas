// app/data/galeriaData.ts
export interface Foto {
    url: string;
    alt: string;
    categoria: string;
  }
  
  export const fotos: Foto[] = [
    { url: '/images/dia-da-noiva-no-studio-amendolla.webp', alt: 'Maquiagem para noiva', categoria: 'maquiagem' },
    { url: '/images/maquiagem-noiva-classica.webp', alt: 'Maquiagem para noiva', categoria: 'maquiagem' },
    { url: '/images/maquiagem-noiva-pele-negra.webp', alt: 'Maquiagem para noiva', categoria: 'maquiagem' },
    { url: '/images/maquiagem-para-noivas-luxo.webp', alt: 'Penteado para noiva', categoria: 'penteado' },
    { url: '/images/nosso-espaco-sala9.webp', alt: 'Massagem relaxante', categoria: 'massagem' },
    { url: '/images/nosso-espaco-sala1.webp', alt: 'Fotos do Studio', categoria: 'studio' },
    { url: '/images/maquiagem-a-domicio.webp', alt: 'Atendimento a domicílio', categoria: 'domicilio' },
    { url: '/images/cabelo-de-noiva-2.webp', alt: 'vestido-de-noiva', categoria: 'studio' },
    // Adicione mais fotos conforme necessário
  ];