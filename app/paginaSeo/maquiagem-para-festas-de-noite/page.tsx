"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Festas de Noite - Studio Amendolla',
  description:
    'A maquiagem para festas de noite oferece um visual glamouroso e sofisticado, perfeito para eventos noturnos que exigem elegância e estilo.',
  detailedDescription: `
    A maquiagem para festas de noite é projetada para destacar sua beleza de forma marcante e glamourosa. No Studio Amendolla, utilizamos técnicas avançadas para criar um look perfeito para eventos noturnos, com olhos bem delineados, sombras esfumadas em tons ricos e uma pele impecável com acabamento iluminado. Trabalhamos com produtos de longa duração para garantir que sua maquiagem permaneça impecável durante toda a festa, proporcionando confiança e sofisticação.`,
  image: '/images/maquiagem-festas-noite.webp',
  images: [
    '/images/maquiagem-festas-noite-1.webp',
    '/images/maquiagem-festas-noite-2.webp',
  ],
};

const faqData = [
  {
    question: 'Quais são as características da maquiagem para festas de noite?',
    answer:
      'A maquiagem para festas de noite é caracterizada por um visual glamouroso, com olhos marcantes, tons intensos e acabamento iluminado. Ela é ideal para eventos formais e ocasiões especiais.',
  },
  {
    question: 'Que tipo de produtos são usados na maquiagem noturna?',
    answer:
      'Utilizamos produtos de longa duração, como bases de alta cobertura, sombras pigmentadas e batons intensos. Além disso, iluminadores e técnicas de contorno são aplicados para um acabamento impecável.',
  },
  {
    question: 'A maquiagem para festas de noite combina com todos os estilos?',
    answer:
      'Sim! Ela pode ser adaptada para diferentes preferências, desde um visual clássico com tons neutros até looks mais ousados com cores vibrantes e brilho.',
  },
  {
    question: 'Posso escolher as cores da maquiagem?',
    answer:
      'Claro! Nossos profissionais trabalham com base nas suas preferências e no estilo do evento, garantindo que o resultado final esteja alinhado com suas expectativas.',
  },
];

const MaquiagemFestasNoitePage = () => {
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
      {
        name: 'Maquiagem para Festas de Noite',
        url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-festas-noite',
      },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Festas de Noite - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Festas de Noite`,
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
                alt={`Maquiagem para Festas de Noite - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Festas de Noite</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Festas de Noite</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemFestasNoitePage;
