"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem Natural para Noiva - Studio Amendolla',
  description: 'A maquiagem natural para noiva realça a beleza de forma sutil e elegante, oferecendo um visual leve e radiante, ideal para casamentos ao ar livre ou cerimônias intimistas.',
  detailedDescription: `
    A maquiagem natural para noiva visa realçar a beleza da noiva de forma sutil e elegante. No Studio Amendolla, usamos técnicas refinadas para equilibrar suavidade e sofisticação, garantindo um look que valoriza os traços naturais da noiva. Trabalhamos com produtos de alta qualidade e acabamentos naturais para que a noiva se sinta confiante e bonita, sem perder seu estilo único. Ideal para casamentos ao ar livre ou cerimônias intimistas, onde o frescor e a leveza são essenciais.`,
  image: '/images/maquiagem-natural-noiva.webp',
  images: [
    '/images/maquiagem-natural-noiva-1.webp',
    '/images/maquiagem-natural-noiva-2.webp',
    '/images/maquiagem-natural-noiva-3.webp',
  ],
};

const faqData = [
  {
    question: 'O que caracteriza a maquiagem natural para noiva?',
    answer: 'A maquiagem natural para noiva é caracterizada por uma aplicação suave que realça a beleza discreta da noiva. A pele recebe uma cobertura leve e um brilho saudável, enquanto olhos e lábios são suavemente destacados para criar um visual fresco e natural.',
  },
  {
    question: 'Quais produtos são usados na maquiagem natural para noivas?',
    answer: 'Utilizamos bases de cobertura leve, corretivos sutis e iluminadores discretos, garantindo um efeito luminoso e natural. As sombras são em tons neutros e os batons são discretos, mantendo o visual fresco e elegante.',
  },
  {
    question: 'A maquiagem natural é indicada para todos os tipos de pele?',
    answer: 'Sim! A maquiagem natural pode ser adaptada para todos os tipos de pele, com produtos específicos para cada necessidade, desde peles secas até oleosas, garantindo sempre um acabamento perfeito e natural.',
  },
  {
    question: 'Qual estilo de casamento combina com maquiagem natural?',
    answer: 'A maquiagem natural é ideal para casamentos ao ar livre, cerimônias durante o dia e eventos intimistas. Seu estilo suave combina perfeitamente com ambientes descontraídos e românticos, onde a leveza e a beleza natural são essenciais.',
  },
];

const MaquiagemNaturalParaNoivasPage = () => {
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
      { name: 'Maquiagem Natural para Noivas', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-natural-para-noivas' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem Natural para Noivas - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem Natural para Noivas`,
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
                alt={`Maquiagem Natural para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem Natural para Noivas</h2>
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
          <h2>Solicite um Orçamento para Maquiagem Natural para Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNaturalParaNoivasPage;
