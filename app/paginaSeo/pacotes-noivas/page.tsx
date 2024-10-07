"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from 'app/schemas/UnifiedSchemas'; // Componente unificado de schemas

const serviceData = {
  title: 'Pacotes para Noivas',
  description: 'Descubra os pacotes exclusivos do Studio Amendolla para noivas, ideais para o seu grande dia. Oferecemos serviços completos para que você esteja radiante em cada momento.',
  detailedDescription: `No Studio Amendolla, você encontra pacotes de beleza personalizados para noivas, que incluem maquiagem, penteados e cuidados especiais para garantir que cada detalhe esteja perfeito no seu grande dia. 
  Escolha entre os nossos pacotes *Bronze*, *Prata* e *Ouro*, cada um com características exclusivas, sempre adaptados às suas necessidades. Atendemos também a domicílio, garantindo conforto e praticidade para o seu momento.`,
  image: '/images/pacotes-noivas.webp',
  images: [
    '/images/pacotes-noivas-bronze.webp',
    '/images/pacotes-noivas-prata.webp',
    '/images/pacotes-noivas-ouro.webp',
  ],
  videoUrl: 'https://www.youtube.com/watch?v=XNAwRj1IuLI',
};

const faqData = [
  { question: 'Quais pacotes de noiva vocês oferecem?', answer: 'Oferecemos os pacotes Bronze, Prata e Ouro, adaptados para diferentes necessidades e preferências das noivas.' },
  { question: 'Vocês atendem a domicílio?', answer: 'Sim, atendemos a domicílio para maior conforto, com valores sob consulta.' },
  { question: 'Como funciona o pacote Ouro?', answer: 'O pacote Ouro inclui maquiagem, penteado, massagem relaxante e um tratamento completo de pele, ideal para noivas que desejam um cuidado especial.' },
  { question: 'Os preços são fixos?', answer: 'Os valores dos pacotes são sob consulta, pois variam conforme as necessidades e os serviços adicionais desejados.' },
];

const PacotesNoivasPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Pacotes para Noivas no Studio Amendolla',
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
      { name: 'Pacotes para Noivas', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/pacotes-noivas' },
    ],
    images: serviceData.images.map((image) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: serviceData.description,
      width: 600,
      height: 400,
    })),
    video: {
      name: 'Pacotes para Noivas no Studio Amendolla',
      description: serviceData.description,
      thumbnailUrl: `https://img.youtube.com/vi/XNAwRj1IuLI/maxresdefault.jpg`,
      uploadDate: '2024-10-07',
      contentUrl: serviceData.videoUrl,
      embedUrl: `https://www.youtube.com/embed/XNAwRj1IuLI`,
    },
  };

  return (
    <div className={styles.servicePage}>
      <h1>Pacotes para Noivas - Studio Amendolla Noivas</h1>
      <CanonicalURL />
      <UnifiedSchemas pageData={pageData} />

      <div className={styles.gridContainer}>
        {/* Primeira Coluna: Carrossel de Imagens, Descrição Detalhada e Vídeo */}
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`${serviceData.title} - Imagem ${currentImage + 1}`}
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
          <div className={styles.videoPlayer}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/XNAwRj1IuLI"
              title="Pacotes para Noivas no Studio Amendolla"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Segunda Coluna: Conteúdo e FAQ */}
        <div className={styles.contentColumn}>
          <div className={styles.descriptionSection}>
            <p>{serviceData.description}</p>
          </div>
          <div className={styles.faqSection}>
            <h2>Perguntas Frequentes sobre Pacotes para Noivas</h2>
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
          <h2>Solicite um Orçamento para Pacotes de Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default PacotesNoivasPage;
