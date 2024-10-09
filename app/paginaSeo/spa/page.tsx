"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from 'app/schemas/UnifiedSchemas'; // Componente unificado de schemas

const serviceData = {
  title: 'SPA e Relaxamento Dia de Noivas',
  description: 'Experimente os tratamentos de SPA do Studio Amendolla, incluindo massagem relaxante, spa dos pés, peeling facial e mais. Rejuvenescimento e relaxamento garantidos.',
  detailedDescription: `No Studio Amendolla, oferecemos uma experiência completa de SPA e relaxamento. Desde massagem relaxante para aliviar o estresse até spa dos pés e tratamentos de peeling facial, nosso espaço é ideal para quem busca momentos de tranquilidade e cuidado pessoal. Nossos profissionais são especializados em proporcionar uma experiência única, garantindo que você saia renovada.`,
};

const faqData = [
  { question: 'O que inclui a massagem relaxante?', answer: 'A massagem relaxante inclui técnicas para aliviar tensões musculares e promover o bem-estar geral, com duração de 60 minutos.' },
  { question: 'Como funciona o spa dos pés?', answer: 'O spa dos pés inclui esfoliação, hidratação profunda e massagem nos pés, proporcionando relaxamento e alívio de tensões.' },
  { question: 'Quais os benefícios do peeling facial?', answer: 'O peeling facial renova a pele, reduz manchas e linhas finas, deixando o rosto com um aspecto mais jovem e saudável.' },
  { question: 'Como agendar uma sessão de SPA?', answer: 'Entre em contato pelo WhatsApp ou telefone para agendar sua sessão de SPA no Studio Amendolla.' },
];

const imageKeywords = [
  'massagem-relaxante-studio-amendolla',
  'spa-dos-pes',
  'massagem-para-noivas',
  'massagem-zona-norte',
  'dia-de-noiva-zona-norte',
];

const serviceImages = imageKeywords.map((keyword, index) => ({
  src: `/images/${keyword}.webp`,
  alt: `Imagem ${index + 1} - ${keyword.replace(/-/g, ' ')}`,
}));

const SpaPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceImages.length) % serviceImages.length);
  };

  const pageData = {
    article: {
      headline: 'SPA e Relaxamento no Studio Amendolla',
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-07',
      image: `https://www.studioamendollanoivas.com.br${serviceImages[0].src}`,
    },
    services: [
      {
        title: serviceData.title,
        description: serviceData.description,
        image: serviceImages[0].src,
      },
    ],
    faq: faqData,
    breadcrumb: [
      { name: 'Home', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
      { name: 'SPA e Relaxamento', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/spa-relaxamento' },
    ],
    images: serviceImages.map((image) => ({
      url: `https://www.studioamendollanoivas.com.br${image.src}`,
      description: image.alt,
      width: 600,
      height: 400,
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>SPA e Relaxamento Dia de Noiva</h1>
      <CanonicalURL />
      <UnifiedSchemas pageData={pageData} />

      <div className={styles.gridContainer}>
        {/* Primeira Coluna: Carrossel de Imagens e Descrição Detalhada */}
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceImages[currentImage].src}
                alt={serviceImages[currentImage].alt}
                width={400}
                height={300}
                className={styles.serviceImage}
                quality={80}
                priority={currentImage === 0} // Dá prioridade à primeira imagem para melhorar o LCP
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
            <h2>Perguntas Frequentes sobre o SPA</h2>
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
          <h2>Solicite um Orçamento para nossos Serviços de SPA</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default SpaPage;
