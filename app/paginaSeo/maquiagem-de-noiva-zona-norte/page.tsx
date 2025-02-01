"use client";

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from 'app/schemas/UnifiedSchemas'; // Componente unificado de schemas
import FeaturesCards from 'app/components/FeaturesCards';

const serviceData = {
  title: 'Maquiagem de Noiva Zona Norte',
  description: 'No Studio Amendolla Noivas, somos especialistas em maquiagem de noiva na Zona Norte de São Paulo. Oferecemos serviços personalizados para o seu grande dia, com produtos de alta qualidade e técnicas profissionais.',
  detailedDescription: `O Studio Amendolla Noivas é referência em maquiagem de noiva na Zona Norte de São Paulo. Nossa equipe de profissionais altamente qualificados utiliza produtos premium e técnicas avançadas para garantir um visual impecável e duradouro. Oferecemos pacotes completos que incluem maquiagem e penteados, com atendimento personalizado e exclusivo para cada noiva. Seja para um casamento tradicional, moderno ou temático, estamos prontos para transformar o seu sonho em realidade.`,
  image: '/images/maquiagem-noiva-zona-norte.webp',
  images: [
    '/images/maquiagem-noiva-tradicional-zona-norte.webp',
    '/images/maquiagem-noiva-moderna-zona-norte.webp',
  ],
};

const faqData = [
  { question: 'Por que escolher o Studio Amendolla Noivas para maquiagem de noiva na Zona Norte?', answer: 'Somos especialistas em maquiagem e penteados para noivas, com anos de experiência e produtos de alta qualidade. Oferecemos atendimento personalizado e resultados impecáveis.' },
  { question: 'Quais tipos de maquiagem para noivas oferecemos?', answer: 'Oferecemos maquiagem para noivas tradicionais, modernas e temáticas, com pacotes personalizados para cada estilo.' },
  { question: 'Vocês realizam atendimento a domicílio?', answer: 'Sim, realizamos atendimento a domicílio em toda a Zona Norte de São Paulo, com valores sob consulta.' },
  { question: 'Como agendar um horário para maquiagem de noiva?', answer: 'Entre em contato pelo WhatsApp ou telefone para verificar a disponibilidade e realizar seu agendamento.' },
];

const MaquiagemNoivaZonaNortePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem de Noiva Zona Norte | Studio Amendolla Noivas',
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
      { name: 'Maquiagem de Noiva Zona Norte', url: 'https://www.studioamendollanoivas.com.br/maquiagem-noiva-zona-norte' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Maquiagem de noiva na Zona Norte no Studio Amendolla - ${image.split('-')[2].replace('.webp', '')}`,
      width: 600,
      height: 400,
      name: `Imagem de maquiagem para noivas ${index + 1}`,
      datePublished: '2024-10-07',
      author: 'Studio Amendolla',
      publisher: 'Studio Amendolla',
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>Maquiagem de Noiva Zona Norte | Studio Amendolla Noivas</h1>
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
                alt={`Maquiagem de Noiva Zona Norte - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem de Noiva na Zona Norte</h2>
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
          <h2>Solicite um Orçamento para Maquiagem de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default MaquiagemNoivaZonaNortePage;