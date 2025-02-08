"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';
import ServiceSimulator from 'app/components/calculadora';
import FeaturesCards from 'app/components/FeaturesCards';

const serviceData = {
  title: 'Maquiagem para Evento Formal - Studio Amendolla',
  description: 'A maquiagem para evento formal é sofisticada e elegante, ideal para ocasiões que exigem um visual refinado. A maquiagem é feita para durar, com foco em um look clássico, que realça a beleza de maneira sutil e elegante.',
  detailedDescription: `
    A maquiagem para eventos formais exige uma abordagem mais clássica e refinada, com a aplicação de produtos de longa duração para garantir que o visual se mantenha perfeito ao longo do evento. O foco principal está em realçar os traços naturais de forma delicada, sem exageros. O look ideal para eventos formais é equilibrado e sofisticado, com pele impecável, olhos discretos, e lábios suaves. As técnicas utilizadas são pensadas para dar um toque de elegância sem perder a naturalidade.`,
  image: '/images/maquiagem-evento-formal.webp',
  images: [
    '/images/maquiagem-evento-formal-1.webp',
    '/images/maquiagem-evento-formal-2.webp',
  ],
};

const faqData = [
  {
    question: 'Qual a principal diferença da maquiagem para evento formal?',
    answer: 'A maquiagem para evento formal é mais discreta e sofisticada. O objetivo é realçar a beleza de maneira natural, sem exageros. Focamos em pele impecável, olhos discretos e lábios suaves. É uma maquiagem que se adapta a diferentes estilos e tipos de eventos formais.',
  },
  {
    question: 'Como garantir que a maquiagem dure o evento todo?',
    answer: 'Para garantir que a maquiagem dure o evento todo, utilizamos produtos de longa duração e fixadores. A preparação da pele também é essencial para que a maquiagem fique intacta por mais tempo, mesmo durante eventos mais longos.',
  },
  {
    question: 'Posso optar por um visual mais glamouroso para um evento formal?',
    answer: 'Sim, a maquiagem para evento formal pode ser mais glamourosa dependendo do tipo de evento. Por exemplo, para um jantar de gala ou evento de alto nível, podemos intensificar o olhar com sombras mais escuras ou cílios volumosos, mantendo sempre a elegância e sofisticação.',
  },
  {
    question: 'A maquiagem para evento formal é adequada para qualquer tipo de pele?',
    answer: 'Sim, a maquiagem para evento formal pode ser adaptada para todos os tipos de pele. Usamos produtos específicos para cada tipo de pele, seja seca, oleosa ou mista, garantindo que o visual se mantenha impecável durante todo o evento.',
  },
];


const MaquiagemParaEventoFormalPage = () => {
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
      { name: 'Maquiagem para Evento Formal', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-evento-formal' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: image,
      description: `Maquiagem para Evento Formal - Studio Amendolla - Foto ${index + 1}`,
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Evento Formal`,
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
      license: 'https://creativecommons.org/licenses/by/4.0/'
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
            alt={`Maquiagem para Evento Formal no Studio Amendolla - Foto ${currentImage + 1}`}
            width={600}
            height={400}
            className={styles.serviceImage}
            quality={85}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Evento Formal</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Evento Formal</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
      <ServiceSimulator />
    </div>
    
  );
};

export default MaquiagemParaEventoFormalPage;
