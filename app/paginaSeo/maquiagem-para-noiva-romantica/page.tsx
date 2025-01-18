"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Noiva Romântica - Studio Amendolla',
  description: 'A maquiagem para noiva romântica é delicada e cheia de elegância. Ideal para quem deseja um visual clássico e encantador no dia do casamento, com foco em tons suaves e acabamento impecável.',
  detailedDescription: `
    A maquiagem para noiva romântica é inspirada em um estilo atemporal e delicado. Ela combina tons suaves, como rosa, nude e pêssego, com acabamentos iluminados que destacam a naturalidade da pele. O objetivo é criar um visual que realce a beleza da noiva sem exageros, proporcionando um look encantador para o grande dia. É perfeita para casamentos realizados em ambientes clássicos, como igrejas e salões, mas também se adapta a cerimônias ao ar livre.`,
  image: '/images/maquiagem-noiva-romantica.webp',
  images: [
    '/images/maquiagem-noiva-romantica-1.webp',
    '/images/maquiagem-noiva-romantica-2.webp',
  ],
};

const faqData = [
  {
    question: 'Quais são as principais características da maquiagem para noiva romântica?',
    answer: 'A maquiagem para noiva romântica é delicada, elegante e clássica. Ela utiliza tons suaves e naturais, como rosa e nude, além de um acabamento iluminado para realçar a beleza natural da noiva.',
  },
  {
    question: 'A maquiagem para noiva romântica combina com todos os estilos de casamento?',
    answer: 'Sim, esse estilo de maquiagem é versátil e se adapta a diversos tipos de cerimônia, especialmente as mais tradicionais ou realizadas ao ar livre, como em jardins ou fazendas.',
  },
  {
    question: 'Os produtos utilizados garantem durabilidade durante toda a cerimônia?',
    answer: 'Sim, utilizamos produtos de alta qualidade e longa duração para garantir que a maquiagem permaneça impecável durante toda a celebração.',
  },
  {
    question: 'Posso personalizar a maquiagem para noiva romântica?',
    answer: 'Com certeza! Cada noiva tem sua própria personalidade, e a maquiagem pode ser adaptada para refletir isso, mantendo a essência romântica.',
  },
];

const MaquiagemParaNoivaRomanticaPage = () => {
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
      { name: 'Maquiagem para Noiva Romântica', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-noiva-romantica' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Noiva Romântica - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Noiva Romântica`,
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
                alt={`Maquiagem para Noiva Romântica - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noiva Romântica</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Noiva Romântica</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaNoivaRomanticaPage;
