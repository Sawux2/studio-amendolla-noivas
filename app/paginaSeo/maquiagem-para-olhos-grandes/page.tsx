"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Olhos Grandes - Studio Amendolla',
  description: 'Realce a beleza dos olhos grandes com técnicas de maquiagem que valorizam seu formato único e proporcionam harmonia ao rosto.',
  detailedDescription: `
    Olhos grandes são um destaque natural, e a maquiagem certa pode deixá-los ainda mais deslumbrantes. No Studio Amendolla, usamos técnicas específicas para valorizar o formato dos olhos grandes, como esfumados elegantes, delineados estratégicos e combinações de cores que destacam a beleza natural. Nossa equipe utiliza produtos de alta qualidade para garantir um acabamento impecável, perfeito para qualquer ocasião.
  `,
  image: '/images/maquiagem-olhos-grandes.webp',
  images: [
    '/images/maquiagem-olhos-grandes-1.webp',
    '/images/maquiagem-olhos-grandes-2.webp',
  ],
};

const faqData = [
  {
    question: 'Como destacar olhos grandes com maquiagem?',
    answer: 'Para destacar olhos grandes, técnicas como esfumados em tons mais escuros nas extremidades, delineados clássicos e cílios volumosos ajudam a realçar a beleza natural e equilibrar o olhar.',
  },
  {
    question: 'Quais cores de sombra são indicadas para olhos grandes?',
    answer: 'Cores neutras, como marrons e beges, combinadas com tons cintilantes no centro da pálpebra, ajudam a destacar os olhos grandes sem exagerar.',
  },
  {
    question: 'Olhos grandes combinam com delineado gatinho?',
    answer: 'Sim, o delineado gatinho é perfeito para olhos grandes, pois define o formato e adiciona um toque sofisticado ao olhar.',
  },
];

const MaquiagemParaOlhosGrandesPage = () => {
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
      { name: 'Maquiagem para Olhos Grandes', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-olhos-grandes' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Olhos Grandes - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Olhos Grandes`,
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
                alt={`Maquiagem para Olhos Grandes - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Olhos Grandes</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Olhos Grandes</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaOlhosGrandesPage;
