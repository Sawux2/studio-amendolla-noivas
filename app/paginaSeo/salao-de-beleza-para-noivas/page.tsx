"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Salão de Beleza para Noivas - Studio Amendolla, Zona Norte SP',
  description: 'O Studio Amendolla oferece serviços exclusivos de salão de beleza para noivas na Zona Norte de São Paulo. Com profissionais especializados, garantimos uma experiência única para que você brilhe no seu grande dia.',
  detailedDescription: `No **Studio Amendolla**, nosso salão de beleza para noivas oferece um atendimento completo, com pacotes personalizados para o Dia da Noiva. Além de maquiagem e penteado, trabalhamos com serviços de cuidados com a pele, cabelo e unhas, oferecendo uma experiência completa e única para que a noiva se sinta confiante e deslumbrante no seu grande dia. 
  Localizado na **Zona Norte de São Paulo**, nosso salão é o ambiente ideal para um dia de beleza tranquilo e sofisticado. Cada detalhe é cuidadosamente pensado para atender às suas necessidades e garantir que você tenha o visual perfeito. Nossa equipe de profissionais especializados se dedica a criar um look que combine com sua personalidade e estilo, usando produtos de alta qualidade e técnicas modernas.`,
  image: '/images/salao-beleza-noiva-sp.webp',
  images: [
    '/images/salao-beleza-noiva-sp.webp',
    '/images/salao-beleza-noiva-penteado.webp',
    '/images/salao-beleza-noiva-maquiagem.webp',
  ],
};

const faqData = [
  {
    question: 'Por que escolher o Studio Amendolla para o salão de beleza da noiva?',
    answer: 'Escolher o Studio Amendolla é garantir que você tenha um atendimento exclusivo e personalizado. Nossa equipe de especialistas oferece serviços de beleza de alta qualidade, cuidando de cada detalhe para que você se sinta radiante e confiante no grande dia.',
  },
  {
    question: 'Quais serviços estão incluídos no salão de beleza para noivas?',
    answer: 'Oferecemos uma gama completa de serviços de beleza, incluindo maquiagem, penteado, cuidados com a pele, unhas e muito mais. Tudo é personalizado para garantir que o visual da noiva seja perfeito e de acordo com seu estilo e preferências.',
  },
  {
    question: 'Como é feito o atendimento no salão de beleza para noivas?',
    answer: 'O atendimento é totalmente personalizado. Realizamos uma consulta prévia para entender o estilo da noiva e suas preferências. No dia do evento, nossa equipe se dedica ao cuidado de todos os detalhes, garantindo que a noiva tenha o visual dos seus sonhos.',
  },
  {
    question: 'Qual é o valor dos pacotes de salão de beleza para noivas?',
    answer: 'Os pacotes de salão de beleza para noivas variam conforme os serviços escolhidos. Oferecemos opções personalizadas para cada noiva, de acordo com suas necessidades. Entre em contato conosco para mais informações e para solicitar um orçamento.',
  },
];

const SalaoDeBelezaParaNoivasPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Salão de Beleza para Noivas - Studio Amendolla, Zona Norte SP',
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
      { name: 'Salão de Beleza para Noivas', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/salao-de-beleza-para-noivas' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Salão de Beleza para Noivas no Studio Amendolla - Zona Norte de São Paulo',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Salão de Beleza para Noivas no Studio Amendolla`,
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
      <h1>Salão de Beleza para Noivas - Studio Amendolla, Zona Norte SP</h1>
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
                alt={`Salão de Beleza para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre o Salão de Beleza para Noivas</h2>
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
          <h2>Solicite um Orçamento para Studio Amendolla Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default SalaoDeBelezaParaNoivasPage;
