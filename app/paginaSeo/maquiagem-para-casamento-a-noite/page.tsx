"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Casamento à Noite - Studio Amendolla',
  description: 'A maquiagem para casamento à noite é ideal para noivas e convidadas que desejam um look impactante, com acabamento sofisticado e resistente à luz artificial. A maquiagem é pensada para realçar a beleza sob a luz noturna, garantindo que o visual se mantenha perfeito durante todo o evento.',
  detailedDescription: `
    A maquiagem para casamento à noite exige um cuidado especial, com produtos que garantem durabilidade e resistência sob a iluminação artificial. As técnicas usadas são focadas em destacar os olhos, com sombras mais intensas e cílios marcantes, sem perder a suavidade necessária para o rosto. Usamos bases e produtos de longa duração para garantir que o visual permaneça perfeito por horas. Para esse tipo de evento, o foco está em criar um visual glamouroso e sofisticado, que se destaca na pista de dança e nas fotos, sem perder a elegância e a leveza.`,
  image: '/images/maquiagem-casamento-noite.webp',
  images: [
    '/images/maquiagem-casamento-noite-1.webp',
    '/images/maquiagem-casamento-noite-2.webp',
  ],
};

const faqData = [
  {
    question: 'Quais são as principais diferenças da maquiagem para casamento à noite?',
    answer: 'A maquiagem para casamento à noite é mais intensa, com foco nos olhos e na aplicação de produtos que resistem à luz artificial. Normalmente, sombras mais escuras e cílios volumosos são usados, além de uma base mais resistente e de longa duração para garantir que a maquiagem se mantenha perfeita durante toda a noite.',
  },
  {
    question: 'A maquiagem para casamento à noite é resistente ao calor e à luz?',
    answer: 'Sim, usamos produtos de alta qualidade que são resistentes ao calor e à luz artificial. Para casamentos à noite, é importante garantir que a maquiagem não derreta com a luz e o calor do ambiente, mantendo a pele fresca e o visual intacto.',
  },
  {
    question: 'Posso escolher um estilo mais dramático para a maquiagem?',
    answer: 'Sim, para casamentos à noite, podemos optar por um estilo mais dramático, com ênfase nos olhos, mais contornos e um acabamento mais refinado. Podemos personalizar o look para que você se sinta maravilhosa e confiante no seu grande dia.',
  },
  {
    question: 'A maquiagem para casamento à noite precisa de retoques durante o evento?',
    answer: 'Embora a maquiagem seja feita para durar a noite toda, é sempre bom ter alguns produtos à mão, como um pó compacto ou um batom, para pequenos retoques durante o evento. No entanto, com os produtos de longa duração que usamos, geralmente não são necessários retoques frequentes.',
  },
];

const MaquiagemParaCasamentoANoitePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: serviceData.title,
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-10',
      image: `https://www.studioamendollanoivas.com.br${serviceData.image}`,
    },
    services: [
      {
        title: serviceData.title,
        description: serviceData.description,
        image: serviceData.image,
      },
    ],
    faq: faqData,
    breadcrumb: [
      { name: 'Início', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
      { name: 'Maquiagem para Casamento à Noite', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-casamento-a-noite' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Casamento à Noite - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Casamento à Noite`,
      datePublished: '2024-10-10',
      author: 'Studio Amendolla',
      publisher: {
        '@type': 'Organization',
        name: 'Studio Amendolla',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.studioamendollanoivas.com.br/images/logo.webp',
        },
      },
      inLanguage: 'pt-BR',
      license: 'https://creativecommons.org/licenses/by/4.0/',
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>{serviceData.title}</h1>
      <CanonicalURL />
      <UnifiedSchemas pageData={pageData} />

      <div className={styles.gridContainer}>
        {/* Primeira Coluna: Carrossel de Imagens e Descrição Detalhada */}
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Maquiagem para Casamento à Noite - ${currentImage + 1}`}
                width={400}
                height={300}
                className={styles.serviceImage}
                quality={80}
                priority={currentImage === 0}
              />
            </div>
            <button onClick={handleNextImage} className={styles.carouselButton}>❯</button>
          </div>
          <div className={styles.detailedDescription}>
            <p>{serviceData.detailedDescription}</p>
          </div>
        </div>

        {/* Segunda Coluna: Conteúdo e FAQ */}
        <div className={styles.contentColumn}>
          <div className={styles.descriptionSection}>
            <p>{serviceData.description}</p>
          </div>
          <div className={styles.faqSection}>
            <h2>Perguntas Frequentes sobre Maquiagem para Casamento à Noite</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terceira Coluna: Formulário de Orçamento */}
        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para Maquiagem para Casamento à Noite</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaCasamentoANoitePage;
