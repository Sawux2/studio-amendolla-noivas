"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Olhos Redondos - Studio Amendolla',
  description: 'Descubra técnicas de maquiagem que realçam e valorizam olhos redondos, criando um olhar marcante e equilibrado.',
  detailedDescription: `
    A maquiagem para olhos redondos busca criar equilíbrio e profundidade no olhar. 
    Técnicas como esfumado diagonal e uso estratégico de delineadores ajudam a alongar e definir os olhos, 
    enquanto sombras em tons neutros e cintilantes complementam o visual. 
    No Studio Amendolla, utilizamos produtos de alta qualidade e técnicas personalizadas para destacar a beleza única de cada cliente.`,
  image: '/images/maquiagem-olhos-redondos.webp',
  images: [
    '/images/maquiagem-olhos-redondos-1.webp',
    '/images/maquiagem-olhos-redondos-2.webp',
  ],
};

const faqData = [
  {
    question: 'Quais técnicas ajudam a maquiar olhos redondos?',
    answer: 'Para olhos redondos, técnicas como delineado em formato “gatinho” e esfumado lateral ajudam a criar a ilusão de alongamento. O uso de sombras mais escuras nos cantos externos também é eficaz.',
  },
  {
    question: 'Quais produtos são ideais para olhos redondos?',
    answer: 'Sombras de tons neutros, delineadores precisos e máscaras de cílios que alongam são ideais para destacar olhos redondos, equilibrando o formato natural.',
  },
  {
    question: 'A maquiagem para olhos redondos é indicada para todos os eventos?',
    answer: 'Sim! A maquiagem pode ser adaptada para eventos formais e informais, garantindo um olhar marcante e harmonioso.',
  },
  {
    question: 'É possível usar cílios postiços em olhos redondos?',
    answer: 'Claro! Cílios postiços em formatos mais alongados nos cantos externos ajudam a criar um efeito equilibrado e destacado.',
  },
];

const MaquiagemOlhosRedondosPage = () => {
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
      { name: 'Maquiagem para Olhos Redondos', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-olhos-redondos' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Olhos Redondos - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Olhos Redondos`,
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
                alt={`Maquiagem para Olhos Redondos - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Olhos Redondos</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Olhos Redondos</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemOlhosRedondosPage;
