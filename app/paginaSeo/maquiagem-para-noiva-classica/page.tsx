"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Noiva Clássica - Studio Amendolla',
  description: 'A maquiagem clássica para noiva é atemporal, com foco em um visual elegante e sofisticado, perfeito para casamentos tradicionais e formais.',
  detailedDescription: `
    A maquiagem para noiva clássica é um estilo atemporal que nunca sai de moda. No Studio Amendolla, destacamos a elegância e a sofisticação da noiva com técnicas que equilibram tons neutros e acabamentos impecáveis. Trabalhamos com produtos de longa duração e alta qualidade para garantir que o look permaneça perfeito durante toda a celebração. Essa maquiagem combina com cerimônias formais e grandiosas, onde o clássico encontra o inesquecível.
  `,
  image: '/images/maquiagem-noiva-classica.webp',
  images: [
    '/images/maquiagem-noiva-classica-1.webp',
    '/images/maquiagem-noiva-classica-2.webp',
  ],
};

const faqData = [
  {
    question: 'O que caracteriza a maquiagem para noiva clássica?',
    answer: 'A maquiagem clássica é caracterizada por uma pele impecável, olhos com delineado elegante, tons neutros e um batom marcante, como vermelho ou nude sofisticado.',
  },
  {
    question: 'Quais produtos são usados na maquiagem clássica para noivas?',
    answer: 'Utilizamos bases de alta cobertura, delineadores precisos, sombras em tons neutros e batons de longa duração para criar um visual atemporal e refinado.',
  },
  {
    question: 'Esse estilo combina com quais tipos de casamento?',
    answer: 'A maquiagem clássica é ideal para casamentos formais, em igrejas ou grandes salões, onde a elegância e a sofisticação são o foco.',
  },
  {
    question: 'A maquiagem clássica é indicada para todos os tons de pele?',
    answer: 'Sim, a maquiagem clássica pode ser adaptada para todos os tons de pele, respeitando as características e preferências de cada noiva.',
  },
];

const MaquiagemNoivaClassicaPage = () => {
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
      { name: 'Maquiagem para Noiva Clássica', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-noiva-classica' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Noiva Clássica - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Noiva Clássica`,
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
                alt={`Maquiagem para Noiva Clássica - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noiva Clássica</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Noiva Clássica</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaClassicaPage;
