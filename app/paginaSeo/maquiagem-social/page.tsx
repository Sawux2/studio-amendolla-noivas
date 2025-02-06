"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from 'app/schemas/UnifiedSchemas'; // Componente unificado de schemas

const serviceData = {
  title: 'Maquiagem Social',
  description: 'Realce sua beleza natural com nossa maquiagem social, perfeita para todas as ocasiões. Nossa equipe de especialistas garante um look impecável.',
  detailedDescription: `A maquiagem social no Studio Amendolla é ideal para eventos como casamentos, formaturas, festas e outros momentos especiais. 
  Utilizamos produtos de alta qualidade e técnicas avançadas para garantir uma durabilidade estendida, adaptada a diferentes tipos de pele.`,
  image: '/images/maquiagem-social.webp',
  images: [
    '/images/maquiagem-social1.webp',
    '/images/maquiagem-social2.webp',
    '/images/maquiagem-social3.webp',
  ],
};

const faqData = [
  { question: 'Qual o preço da maquiagem social?', answer: 'consulte nossos valores com base em nossa calculadora.' },
  { question: 'Qual a duração da maquiagem?', answer: 'A maquiagem social tem duração média de 10 a 24 horas, dependendo do tipo de pele e ambiente.' },
  { question: 'Por que escolher o Studio Amendolla para maquiagem social?', answer: 'Nossos maquiadores são experientes e utilizam produtos de alta qualidade para garantir o melhor resultado.' },
];

const MaquiagemSocialPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem Social no Studio Amendolla',
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-07',
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
      { name: 'Maquiagem Social', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-social' },
    ],
    images: [
      {
        url: `https://www.studioamendollanoivas.com.br${serviceData.image}`,
        description: serviceData.description,
        width: 600,
        height: 400,
        name: 'Imagem Principal de Maquiagem Social no Studio Amendolla',
        datePublished: '2024-10-07',
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
      },
      ...serviceData.images.map((image, index) => ({
        url: `https://www.studioamendollanoivas.com.br${image}`,
        description: `Imagem ${index + 1} da Maquiagem Social no Studio Amendolla`,
        width: 600,
        height: 400,
        name: `Imagem ${index + 1} de Maquiagem Social no Studio Amendolla`,
        datePublished: '2024-10-07',
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
    ],
  };
  

  return (
    <div className={styles.servicePage}>
      <h1>Maquiagem Social - Studio Amendolla Noivas</h1>
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
                alt={`Imagem ${currentImage + 1} da Maquiagem Social`}
                width={400}
                height={300}
                className={styles.serviceImage}
                quality={80}
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
            <h2>Perguntas Frequentes sobre Maquiagem Social</h2>
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
          <h2>Solicite um Orçamento para Maquiagem Social</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemSocialPage;
