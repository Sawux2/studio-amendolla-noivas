"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Noiva em Pele Negra - Studio Amendolla',
  description: 'Somos referência em maquiagem para noivas com pele negra na Zona Norte de São Paulo. Realçamos a beleza natural com técnicas exclusivas e produtos de alta qualidade.',
  detailedDescription: `No Studio Amendolla, somos especialistas em realçar a beleza única de cada noiva, com um cuidado especial para noivas com pele negra. A maquiagem para pele negra requer uma abordagem cuidadosa na escolha dos produtos e técnicas, garantindo que a pele tenha um acabamento perfeito e iluminado. 
  Utilizamos bases que respeitam os subtons, iluminadores que realçam os pontos altos do rosto e técnicas de contorno que definem as feições, sempre priorizando a naturalidade e a elegância. Localizados na Zona Norte de São Paulo, somos referência para noivas que buscam um serviço de excelência, valorizando a individualidade e garantindo um visual impecável em todos os momentos do grande dia.`,
  image: '/images/maquiagem-noiva-pele-negra.webp',
  images: [
    '/images/maquiagem-noiva-pele-negra.webp',
    '/images/maquiagem-noiva-pele-negra-olhos.webp',
    '/images/maquiagem-noiva-pele-negra-sorriso.webp',
  ],
};

const faqData = [
  {
    question: 'Qual a importância de um especialista em pele negra para maquiagem de noiva?',
    answer: 'A maquiagem para pele negra requer conhecimento sobre subtons e texturas específicas, garantindo um acabamento uniforme e natural, valorizando a beleza única de cada noiva.',
  },
  {
    question: 'Como é feita a preparação da pele negra para o dia do casamento?',
    answer: 'A preparação inclui hidratação, primer específico para controle de oleosidade e escolha de uma base de alta cobertura que respeita o subtom da pele, proporcionando um acabamento impecável e duradouro.',
  },
  {
    question: 'Quais são os produtos ideais para maquiagem em pele negra?',
    answer: 'Utilizamos produtos que oferecem alta pigmentação e durabilidade, como bases, corretivos e iluminadores específicos para pele negra, garantindo um resultado que destaque a beleza natural da noiva.',
  },
  {
    question: 'Qual é o valor da maquiagem para noiva em pele negra?',
    answer: 'Nossos serviços de maquiagem para noivas com pele negra consulte nossos valores, e adicione previa de maquiagem e agendamento da data. Ou entre em contato para personalizar seu pacote.',
  },
];

const MaquiagemNoivaPeleNegraPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem para Noiva em Pele Negra no Studio Amendolla',
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
      { name: 'Home', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
      { name: 'Maquiagem para Noiva em Pele Negra', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-noiva-pele-negra' },
    ],
    images: serviceData.images.map((image) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Maquiagem para Noiva em Pele Negra no Studio Amendolla - Especialistas em Pele Negra na Zona Norte de São Paulo`,
      width: 600,
      height: 400,
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>Maquiagem para Noiva em Pele Negra - Studio Amendolla Noivas</h1>
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
                alt={`Maquiagem para Noiva em Pele Negra - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noiva em Pele Negra</h2>
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
          <h2>Solicite um Orçamento para Maquiagem em Pele Negra</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaPeleNegraPage;
