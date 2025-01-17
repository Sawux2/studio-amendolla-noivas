"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
    title: 'Maquiagem para Casamento de Dia - Studio Amendolla',
    description: 'A maquiagem para casamento de dia precisa ser leve, fresca e duradoura. Criamos looks perfeitos para casamentos diurnos, com foco em naturalidade e elegância.',
    detailedDescription: `No Studio Amendolla, entendemos que a maquiagem para casamento de dia deve ser suave, com acabamentos naturais e que resistam à luz e ao calor. Nosso time de maquiadores especializados cria looks frescos e radiantes, utilizando produtos de alta qualidade que garantem a fixação durante todo o evento. Seja um casamento ao ar livre ou em um salão, a maquiagem para casamento diurno é feita para destacar a beleza natural da noiva, com um toque de sofisticação e leveza.`,
    image: '/images/maquiagem-casamento-dia.webp',
    images: [
      '/images/maquiagem-casamento-dia-1.webp',
      '/images/maquiagem-casamento-dia-2.webp',
      '/images/maquiagem-casamento-dia-3.webp',
    ],
};

const faqData = [
    {
      question: 'Como é a maquiagem ideal para casamento de dia?',
      answer: 'A maquiagem para casamento de dia é caracterizada por um acabamento mais leve e fresco. Utilizamos tons suaves e técnicas que garantem a durabilidade, respeitando a luz natural do ambiente.',
    },
    {
      question: 'A maquiagem vai durar durante todo o casamento?',
      answer: 'Sim! Usamos técnicas de fixação e produtos de alta durabilidade que garantem que sua maquiagem permaneça impecável desde a cerimônia até a festa, mesmo sob luz natural e calor.',
    },
    {
      question: 'Posso usar maquiagem iluminada em casamento de dia?',
      answer: 'Sim! A maquiagem iluminada é uma excelente escolha para casamento de dia. Usamos iluminadores sutis que conferem um brilho natural, sem exageros, para um look radiante e fresco.',
    },
    {
      question: 'Quando devo fazer o teste de maquiagem para casamento de dia?',
      answer: 'Recomendamos que o teste de maquiagem seja feito de 2 a 3 semanas antes do casamento, para que você possa ver como o look se adapta à sua pele e ao estilo do casamento.',
    },
];

const MaquiagemParaCasamentoDiaPage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
    };

    const handlePrevImage = () => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
    };

    const pageData = {
      article: {
        headline: 'Maquiagem para Casamento de Dia - Studio Amendolla',
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
        { name: 'Maquiagem para Casamento de Dia', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-casamento-dia' },
      ],
      images: serviceData.images.map((image, index) => ({
        url: `https://www.studioamendollanoivas.com.br${image}`,
        description: 'Maquiagem para Casamento de Dia - Studio Amendolla',
        width: 600,
        height: 400,
        name: `Imagem ${index + 1} - Maquiagem para Casamento de Dia`,
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
        <h1>Maquiagem para Casamento de Dia - Studio Amendolla</h1>
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
                  alt={`Maquiagem para Casamento de Dia - ${currentImage + 1}`}
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
              <h2>Perguntas Frequentes sobre Maquiagem para Casamento de Dia</h2>
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
            <h2>Solicite um Orçamento para Maquiagem para Casamento de Dia</h2>
            <OrcamentoForm />
          </div>
        </div>
      </div>
    );
};

export default MaquiagemParaCasamentoDiaPage;
