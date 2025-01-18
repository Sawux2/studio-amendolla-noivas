"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Noiva Moderna - Studio Amendolla',
  description: 'A maquiagem para noiva moderna é ousada e sofisticada, perfeita para mulheres que buscam um visual contemporâneo no dia do casamento, com acabamentos impecáveis e elegantes.',
  detailedDescription: `
    A maquiagem para noiva moderna combina inovação e sofisticação, com destaque para técnicas de contorno, olhos esfumados marcantes e tons elegantes, como nude, dourado e metalizados. 
    Esse estilo reflete uma noiva confiante, que deseja destacar sua personalidade única no grande dia. Ideal para cerimônias urbanas ou em locais com uma proposta contemporânea.`,
  image: '/images/maquiagem-noiva-moderna.webp',
  images: [
    '/images/maquiagem-noiva-moderna-1.webp',
    '/images/maquiagem-noiva-moderna-2.webp',
  ],
};

const faqData = [
  {
    question: 'Quais são os diferenciais da maquiagem para noiva moderna?',
    answer: 'A maquiagem para noiva moderna utiliza técnicas de contorno, olhos bem marcados e acabamentos sofisticados, refletindo um visual contemporâneo e impactante.',
  },
  {
    question: 'Esse estilo combina com casamentos realizados em locais modernos?',
    answer: 'Sim, esse estilo de maquiagem é perfeito para casamentos urbanos, em ambientes minimalistas, industriais ou com uma proposta contemporânea.',
  },
  {
    question: 'Quais produtos são usados na maquiagem para noiva moderna?',
    answer: 'São utilizados produtos de alta qualidade, incluindo bases de longa duração, iluminadores sofisticados e sombras com acabamento metalizado ou matte.',
  },
  {
    question: 'É possível personalizar o estilo de maquiagem moderna?',
    answer: 'Claro! O estilo moderno pode ser adaptado para destacar os traços únicos de cada noiva, mantendo a essência contemporânea e ousada.',
  },
];

const MaquiagemParaNoivaModernaPage = () => {
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
      { name: 'Maquiagem para Noiva Moderna', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-noiva-moderna' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Noiva Moderna - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Noiva Moderna`,
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
                alt={`Maquiagem para Noiva Moderna - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noiva Moderna</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Noiva Moderna</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaNoivaModernaPage;
