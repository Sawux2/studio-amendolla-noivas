"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Pele Secas - Studio Amendolla',
  description: 'A maquiagem para pele seca foca na hidratação e no brilho natural da pele, utilizando produtos que mantêm a hidratação e garantem um acabamento radiante e saudável.',
  detailedDescription: `
    A maquiagem para pele seca tem como objetivo fornecer hidratação profunda, destacando o brilho natural e saudável da pele. No Studio Amendolla, utilizamos bases e primers com ingredientes hidratantes para garantir que sua pele fique suave e iluminada, sem ressecar ao longo do dia. Também utilizamos iluminadores e pós leves que deixam a pele radiante, sem pesar ou craquelar. Essa maquiagem é ideal para quem deseja um acabamento luminoso e natural, valorizando a pele seca de maneira saudável.`,
  image: '/images/maquiagem-seca.webp',
  images: [
    '/images/maquiagem-seca-1.webp',
    '/images/maquiagem-seca-2.webp',
    '/images/maquiagem-seca-3.webp',
  ],
};

const faqData = [
  {
    question: 'O que caracteriza a maquiagem para pele seca?',
    answer: 'A maquiagem para pele seca é caracterizada pelo uso de produtos que hidratam e garantem um acabamento luminoso, sem deixar a pele opaca ou ressecada. Bases e primers com ingredientes hidratantes são essenciais para uma pele saudável e radiante.',
  },
  {
    question: 'Quais produtos são indicados para pele seca?',
    answer: 'Para a pele seca, recomendamos o uso de primers e bases hidratantes, que ajudam a manter a pele suave e hidratada. Iluminadores líquidos e pós soltos também são ideais para um acabamento luminoso e natural.',
  },
  {
    question: 'A maquiagem para pele seca é indicada para todos os tipos de pele?',
    answer: 'Embora seja especialmente indicada para peles secas, a maquiagem com acabamento luminoso pode ser adaptada para peles mistas ou até oleosas, desde que os produtos utilizados sejam adequados ao tipo de pele.',
  },
  {
    question: 'Como manter a pele seca hidratada durante o dia?',
    answer: 'É importante usar produtos com fórmulas hidratantes e não comedogênicas. Além disso, aplicar um bom hidratante antes da maquiagem e escolher produtos que retenham a umidade na pele durante o dia pode garantir uma maquiagem duradoura e com aparência fresca.',
  },
];

const MaquiagemParaPeleSecasPage = () => {
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
      { name: 'Maquiagem para Pele Secas', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-pele-secass' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Pele Secas - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Pele Secas`,
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
                alt={`Maquiagem para Pele Secas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Pele Secas</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Pele Secas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaPeleSecasPage;
