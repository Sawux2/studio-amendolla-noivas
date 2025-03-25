// app/data/galeriaData.ts
export interface Foto {
  id: string;
  url: string;
  alt: string;
  categoria: string;
  descricao?: string;
}

export const fotos: Foto[] = [
  { 
    id: 'foto1',
    url: '/images/dia-da-noiva-no-studio-amendolla.webp', 
    alt: 'Maquiagem para noiva com acabamento natural e elegante', 
    categoria: 'maquiagem',
    descricao: 'Produção completa para noiva realizada em nosso estúdio. Maquiagem com acabamento natural e duradouro, perfeita para cerimônias ao ar livre.'
  },
  { 
    id: 'foto2',
    url: '/images/maquiagem-noiva-classica.webp', 
    alt: 'Maquiagem clássica para noiva com pele luminosa', 
    categoria: 'maquiagem',
    descricao: 'Look clássico e atemporal para noivas que buscam elegância e sofisticação. Pele luminosa com efeito glow que dura o dia todo.'
  },
  { 
    id: 'foto3',
    url: '/images/maquiagem-noiva-pele-negra.webp', 
    alt: 'Maquiagem para noiva com pele negra valorizada', 
    categoria: 'maquiagem',
    descricao: 'Maquiagem especializada para valorizar a beleza natural da pele negra. Trabalhamos com tons e texturas que realçam o seu brilho único.'
  },
  { 
    id: 'foto4',
    url: '/images/maquiagem-para-noivas-luxo.webp', 
    alt: 'Penteado elegante para noiva com acessórios', 
    categoria: 'penteado',
    descricao: 'Penteado sofisticado com acessórios que complementam o visual da noiva. Perfeito para quem busca um look único e memorável.'
  },
  { 
    id: 'foto5',
    url: '/images/nosso-espaco-sala9.webp', 
    alt: 'Massagem relaxante pré-cerimônia em ambiente aconchegante', 
    categoria: 'massagem',
    descricao: 'Nosso espaço de massagem oferece um ambiente tranquilo e aconchegante para a noiva relaxar antes do grande dia.'
  },
  { 
    id: 'foto6',
    url: '/images/nosso-espaco-sala1.webp', 
    alt: 'Espaço premium para noivas no Studio Amendolla', 
    categoria: 'studio',
    descricao: 'Conheça nosso espaço exclusivo para noivas, com ambientação sofisticada e todos os serviços necessários para seu dia especial.'
  },

  { 
    id: 'foto8',
    url: '/images/cabelo-de-noiva-2.webp', 
    alt: 'Penteado romântico para noiva com véu', 
    categoria: 'penteado',
    descricao: 'Penteado romântico que se integra perfeitamente com o véu, criando um visual harmônico e sofisticado para a noiva.'
  },
  // Adicione mais fotos conforme necessário
];