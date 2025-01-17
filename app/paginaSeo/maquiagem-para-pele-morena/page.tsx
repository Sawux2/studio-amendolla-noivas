"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
    title: 'Maquiagem para Pele Morena - Studio Amendolla',
    description: 'Especialistas em maquiagem para pele morena, proporcionando uma maquiagem radiante e duradoura para todos os tipos de ocasiões.',
    detailedDescription: `A maquiagem para pele morena requer atenção a tonalidades que valorizam a beleza natural, com destaque para os contornos, iluminação e aplicação de produtos que oferecem um acabamento perfeito e duradouro. No Studio Amendolla, nossos profissionais utilizam técnicas específicas para ressaltar a harmonia da pele morena, garantindo que você esteja pronta para qualquer evento, seja uma festa, casamento ou ocasião especial. Trabalhamos com uma gama de produtos que se adaptam perfeitamente à sua pele, criando looks modernos e sofisticados.`,
    image: '/images/maquiagem-pele-morena.webp',
    images: [
      '/images/maquiagem-pele-morena-1.webp',
      '/images/maquiagem-pele-morena-2.webp',
      '/images/maquiagem-pele-morena-3.webp',
    ],
};

const faqData = [
    {
      question: 'Quais produtos são recomendados para maquiagem em pele morena?',
      answer: 'Utilizamos bases e corretivos de alta cobertura e que se adequam perfeitamente ao tom de pele morena, com destaque para produtos que não deixam a pele oleosa, mas que mantêm o acabamento radiante e natural.',
    },
    {
      question: 'Como criar um contorno perfeito para pele morena?',
      answer: 'O contorno em pele morena deve ser suave, utilizando tons mais quentes para iluminar e escurecer as áreas certas do rosto, como abaixo das maçãs do rosto e na linha da mandíbula.',
    },
    {
      question: 'Quais são as cores ideais para maquiagem em pele morena?',
      answer: 'Cores como bronze, dourado, cobre e tons mais intensos de vermelho e rosa combinam perfeitamente com a pele morena, criando um contraste elegante e sofisticado.',
    },
    {
      question: 'Como garantir que a maquiagem dure o dia todo em pele morena?',
      answer: 'A preparação da pele é essencial, com o uso de primers específicos para pele morena, seguidos de produtos que oferecem longa duração, como bases de alta resistência e fixadores de maquiagem.',
    },
];

const MaquiagemPeleMorenaPage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
    };

    const handlePrevImage = () => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
    };

    const pageData = {
      article: {
        headline: 'Maquiagem para Pele Morena - Studio Amendolla',
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
        { name: 'Maquiagem para Pele Morena', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-pele-morena' },
      ],
      images: serviceData.images.map((image, index) => ({
        url: `https://www.studioamendollanoivas.com.br${image}`,
        description: 'Maquiagem para Pele Morena - Studio Amendolla',
        width: 600,
        height: 400,
        name: `Imagem ${index + 1} - Maquiagem para Pele Morena`,
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
        <h1>Maquiagem para Pele Morena - Studio Amendolla</h1>
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
                  alt={`Maquiagem para Pele Morena - ${currentImage + 1}`}
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
              <h2>Perguntas Frequentes sobre Maquiagem para Pele Morena</h2>
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
            <h2>Solicite um Orçamento para Maquiagem para Pele Morena</h2>
            <OrcamentoForm />
          </div>
        </div>
      </div>
    );
};

export default MaquiagemPeleMorenaPage;
