"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Pele Sensível - Studio Amendolla',
  description: 'A maquiagem para pele sensível é ideal para quem busca um visual impecável sem irritar a pele. Utilizamos produtos hipoalergênicos e de alta qualidade para garantir um acabamento natural e duradouro.',
  detailedDescription: `
    A maquiagem para pele sensível é desenvolvida para garantir conforto e segurança durante o uso, sem causar irritações. No Studio Amendolla, utilizamos produtos dermatologicamente testados e livres de fragrâncias fortes, que respeitam as necessidades de peles mais delicadas. Nosso objetivo é proporcionar um visual perfeito, com uma cobertura leve e natural, sem comprometer a saúde da pele. Ideal para quem tem sensibilidades ou alergias, a maquiagem para pele sensível é a escolha certa para um look deslumbrante e seguro.`,
  image: '/images/maquiagem-pele-sensivel.webp',
  images: [
    '/images/maquiagem-pele-sensivel-1.webp',
    '/images/maquiagem-pele-sensivel-2.webp',
    '/images/maquiagem-pele-sensivel-3.webp',
  ],
};

const faqData = [
  {
    question: 'O que caracteriza a maquiagem para pele sensível?',
    answer: 'A maquiagem para pele sensível é formulada com produtos hipoalergênicos e sem fragrâncias fortes, garantindo conforto e segurança para peles mais delicadas. A cobertura é leve e natural, e os ingredientes são cuidadosamente selecionados para minimizar o risco de irritações.',
  },
  {
    question: 'Quais produtos são usados na maquiagem para pele sensível?',
    answer: 'Utilizamos bases e corretivos sem fragrâncias, livre de parabenos, e com ingredientes calmantes, como a aloe vera. Além disso, as sombras e batons são livres de componentes que podem causar alergias, oferecendo um acabamento natural e duradouro.',
  },
  {
    question: 'A maquiagem para pele sensível é indicada para todos os tipos de pele?',
    answer: 'Sim, a maquiagem para pele sensível é indicada especialmente para pessoas com pele delicada ou propensa a alergias, mas também pode ser usada por quem busca produtos de alta qualidade e cuidados especiais para a pele.',
  },
  {
    question: 'Quais cuidados devo ter com a maquiagem para pele sensível?',
    answer: 'É importante remover a maquiagem corretamente ao final do dia, usando demaquilantes suaves. Também recomendamos o uso de produtos que hidratem e protejam a pele ao longo do dia, como protetor solar e cremes calmantes.',
  },
];

const MaquiagemParaPeleSensivelPage = () => {
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
      { name: 'Maquiagem para Pele Sensível', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-pele-sensivel' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Pele Sensível - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Pele Sensível`,
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
                alt={`Maquiagem para Pele Sensível - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Pele Sensível</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Pele Sensível</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaPeleSensivelPage;
