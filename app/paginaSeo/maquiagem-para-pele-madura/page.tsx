"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Pele Madura - Studio Amendolla',
  description: 'A maquiagem para pele madura foca em suavizar linhas finas e realçar a beleza natural, utilizando técnicas e produtos que proporcionam luminosidade e suavidade à pele.',
  detailedDescription: `
    A maquiagem para pele madura tem como objetivo suavizar as linhas finas e rugas, enquanto realça a beleza e a luminosidade da pele. No Studio Amendolla, trabalhamos com técnicas que oferecem cobertura leve e hidratante, utilizando bases que não marcam as expressões faciais. Além disso, produtos como iluminadores e blushes cremosos são ideais para dar um toque de frescor e jovialidade, deixando a pele radiante e sem acentuar imperfeições. O objetivo é garantir um acabamento natural, sem pesar, e que realce os traços únicos de cada cliente.`,
  image: '/images/maquiagem-madura.webp',
  images: [
    '/images/maquiagem-madura-1.webp',
    '/images/maquiagem-madura-2.webp',
    '/images/maquiagem-madura-3.webp',
  ],
};

const faqData = [
  {
    question: 'O que caracteriza a maquiagem para pele madura?',
    answer: 'A maquiagem para pele madura é caracterizada pelo uso de técnicas e produtos que suavizam as linhas finas e rugas, proporcionando um acabamento natural e luminoso. O foco está na hidratação e em uma cobertura leve que não acumula nas linhas de expressão.',
  },
  {
    question: 'Quais produtos são indicados para pele madura?',
    answer: 'Para pele madura, são recomendados produtos com fórmulas hidratantes, como bases e corretivos de acabamento luminoso. Blushes cremosos e iluminadores suaves ajudam a dar frescor ao rosto, sem marcar as linhas de expressão.',
  },
  {
    question: 'A maquiagem para pele madura é indicada para todas as idades?',
    answer: 'Sim! Embora seja especialmente indicada para peles maduras, as técnicas de maquiagem que visam suavizar imperfeições e realçar a luminosidade podem ser adaptadas para pessoas de diferentes idades, proporcionando um look radiante e natural.',
  },
  {
    question: 'Como escolher a base para pele madura?',
    answer: 'A base ideal para pele madura é aquela de cobertura leve a média, com acabamento hidratante e luminoso. Evite bases de alta cobertura, que podem acentuar linhas finas e marcas. Produtos líquidos ou cremosos são mais indicados para esse tipo de pele.',
  },
];

const MaquiagemParaPeleMaduraPage = () => {
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
      { name: 'Maquiagem para Pele Madura', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-pele-madura' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Pele Madura - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Pele Madura`,
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
                alt={`Maquiagem para Pele Madura - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Pele Madura</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Pele Madura</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaPeleMaduraPage;
