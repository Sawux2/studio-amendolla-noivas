export type SeoPageRecord = {
  title: string;
  slug: string;
  status: 'published' | 'draft' | 'review';
  category: 'service' | 'location' | 'article';
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  updatedAt: string;
};

export const seoPageRecords: SeoPageRecord[] = [
  {
    title: 'Dia da Noiva Zona Norte',
    slug: 'dia-da-noiva-zona-norte',
    status: 'published',
    category: 'location',
    metaTitle: 'Dia da Noiva Zona Norte | Studio Amendolla Noivas',
    metaDescription: 'Pacotes de dia da noiva na Zona Norte de São Paulo com maquiagem, penteado e preparação completa.',
    primaryKeyword: 'dia da noiva zona norte',
    updatedAt: '2026-03-20',
  },
  {
    title: 'Maquiagem para Noivas em São Paulo',
    slug: 'maquiagem-para-noivas-em-sao-paulo',
    status: 'published',
    category: 'service',
    metaTitle: 'Maquiagem para Noivas em São Paulo | Studio Amendolla Noivas',
    metaDescription: 'Atendimento especializado em maquiagem para noivas com teste, visagismo e acabamento duradouro.',
    primaryKeyword: 'maquiagem para noivas em são paulo',
    updatedAt: '2026-03-18',
  },
  {
    title: 'Tendências de Maquiagem para Noivas',
    slug: 'tendencias-de-maquiagem',
    status: 'review',
    category: 'article',
    metaTitle: 'Tendências de Maquiagem para Noivas | Studio Amendolla Noivas',
    metaDescription: 'Guia editorial com tendências de maquiagem bridal, acabamento, pele glow e estilos para cerimônia.',
    primaryKeyword: 'tendências de maquiagem para noivas',
    updatedAt: '2026-03-15',
  },
  {
    title: 'Pacotes para Noivas',
    slug: 'pacotes-noivas',
    status: 'draft',
    category: 'service',
    metaTitle: 'Pacotes para Noivas | Studio Amendolla Noivas',
    metaDescription: 'Página comercial para pacotes de noiva com serviços, diferenciais e CTA para orçamento.',
    primaryKeyword: 'pacotes para noivas',
    updatedAt: '2026-03-14',
  },
];

export const findSeoPageRecord = (slug: string) => seoPageRecords.find((record) => record.slug === slug);
