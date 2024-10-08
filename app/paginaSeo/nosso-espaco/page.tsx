"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from 'app/schemas/UnifiedSchemas'; // Componente unificado de schemas

const serviceData = {
  title: 'Nosso Espaço',
  description: 'Conheça o espaço exclusivo do Studio Amendolla, ideal para noivas e suas madrinhas. Ambiente confortável e acolhedor para que cada momento seja especial.',
  detailedDescription: `No Studio Amendolla, você encontrará um espaço pensado para proporcionar conforto e exclusividade no seu grande dia. Nosso ambiente é preparado para atender noivas, madrinhas e acompanhantes, oferecendo um atendimento personalizado em um espaço acolhedor. Cada detalhe do nosso espaço foi planejado para garantir que você se sinta em casa enquanto se prepara para momentos inesquecíveis.`,
  image: '/images/nosso-espaco.webp',
  images: [
    '/images/nosso-espaco-sala.webp',
    '/images/nosso-espaco-sala1.webp',
    '/images/nosso-espaco-sala2.webp',
    '/images/nosso-espaco-sala3.webp',
    '/images/nosso-espaco-sala4.webp',
    '/images/nosso-espaco-sala5.webp',
    '/images/nosso-espaco-sala6.webp',
    '/images/nosso-espaco-sala7.webp',
    '/images/nosso-espaco-sala8.webp',
    '/images/nosso-espaco-sala9.webp',
    '/images/nosso-espaco-sala10.webp',
    '/images/nosso-espaco-sala11.webp',
    '/images/nosso-espaco.webp',
  ],
};

const faqData = [
  { question: 'Como agendar uma visita ao nosso espaço?', answer: 'Entre em contato pelo WhatsApp ou telefone para agendar uma visita ao Studio Amendolla e conhecer nosso espaço.' },
  { question: 'Quantas pessoas comportam em nosso espaço?', answer: 'já atendemos 22 madrinhas no mesmo dia temos equipe preparada, nosso estudio é exclusivo para noivas e suas acompanhantes, garantindo um atendimento confortável e exclusivo para noivas e madrinhas.' },
  { question: 'O Studio Amendolla oferece serviços de maquiagem e penteado no local?', answer: 'Sim, realizamos todos os serviços de maquiagem, penteados e cuidados especiais em nosso espaço, garantindo um atendimento completo.' },
  { question: 'Vocês têm estacionamento?', answer: 'Sim, temos 3 vagas na porta do estabelecimento para maior comodidade de nossas clientes.' },
];

const NossoEspacoPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Nosso Espaço no Studio Amendolla',
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
      { name: 'Nosso Espaço', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/nosso-espaco' },
    ],
    images: serviceData.images.map((image) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Nosso espaço no Studio Amendolla - Imagem ${serviceData.images.indexOf(image) + 1}`,
      width: 600,
      height: 400,
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>Nosso Espaço - Studio Amendolla Noivas</h1>
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
                alt={`Nosso Espaço - Imagem ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Nosso Espaço</h2>
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
          <h2>Solicite um Orçamento para Serviços em Nosso Espaço</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default NossoEspacoPage;
