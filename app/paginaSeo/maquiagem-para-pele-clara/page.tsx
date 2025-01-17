"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
    title: 'Maquiagem para Pele Clara - Studio Amendolla',
    description: 'Especialistas em maquiagem para pele clara, proporcionando uma maquiagem suave e sofisticada, ideal para qualquer ocasião.',
    detailedDescription: `A maquiagem para pele clara exige cuidado na escolha de tons, iluminadores e produtos que valorizem a luminosidade natural da pele. No Studio Amendolla, trabalhamos com técnicas de maquiagem que garantem um visual impecável, adaptado às características únicas da pele clara. Utilizamos bases leves e corretivos de alta cobertura para uniformizar a pele e realçar sua beleza. Seja para um evento especial ou maquiagem do dia a dia, garantimos um resultado radiante e duradouro.`,
    image: '/images/maquiagem-pele-clara.webp',
    images: [
      '/images/maquiagem-pele-clara-1.webp',
      '/images/maquiagem-pele-clara-2.webp',
      '/images/maquiagem-pele-clara-3.webp',
    ],
};

const faqData = [
    {
      question: 'Quais produtos são recomendados para maquiagem em pele clara?',
      answer: 'Para pele clara, indicamos bases leves e corretivos com cobertura média a alta, para criar um acabamento natural. Iluminadores e blushes em tons pêssego ou rosados ajudam a dar um toque saudável e suave à maquiagem.',
    },
    {
      question: 'Como escolher a base ideal para pele clara?',
      answer: 'A base ideal para pele clara deve ser do tom exato da sua pele. Prefira fórmulas de acabamento natural ou luminoso, que proporcionam um efeito radiante sem pesar.',
    },
    {
      question: 'Posso usar maquiagem colorida com pele clara?',
      answer: 'Sim, você pode usar maquiagem colorida com pele clara! Tons como azul, verde e roxo criam um contraste bonito. Lembre-se de equilibrar com cores mais neutras nos lábios ou blush para manter o look harmônico.',
    },
    {
      question: 'Como fazer a maquiagem durar o dia todo em pele clara?',
      answer: 'Comece com uma boa preparação da pele, utilizando primer e fixador. Escolha produtos de longa duração, como bases e sombras com boa fixação, para garantir que sua maquiagem permaneça impecável o dia todo.',
    },
];

const MaquiagemPeleClaraPage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
    };

    const handlePrevImage = () => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
    };

    const pageData = {
      article: {
        headline: 'Maquiagem para Pele Clara - Studio Amendolla',
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
        { name: 'Maquiagem para Pele Clara', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-pele-clara' },
      ],
      images: serviceData.images.map((image, index) => ({
        url: `https://www.studioamendollanoivas.com.br${image}`,
        description: 'Maquiagem para Pele Clara - Studio Amendolla',
        width: 600,
        height: 400,
        name: `Imagem ${index + 1} - Maquiagem para Pele Clara`,
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
        <h1>Maquiagem para Pele Clara - Studio Amendolla</h1>
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
                  alt={`Maquiagem para Pele Clara - ${currentImage + 1}`}
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
              <h2>Perguntas Frequentes sobre Maquiagem para Pele Clara</h2>
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
            <h2>Solicite um Orçamento para Maquiagem para Pele Clara</h2>
            <OrcamentoForm />
          </div>
        </div>
      </div>
    );
};

export default MaquiagemPeleClaraPage;
