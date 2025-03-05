"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Pacote Completo para Noivas na Zona Norte SP - Studio Amendolla",
  description: 
    "Pacote completo com maquiagem, penteado e dia da noiva na Zona Norte de São Paulo. Estrutura premium, equipe especializada e localização privilegiada para sua produção completa.",
  detailedDescription: `
    O Studio Amendolla oferece um pacote completo e integrado para noivas na Zona Norte, incluindo:

    SERVIÇOS PREMIUM:
    - Maquiagem profissional com produtos de alta durabilidade
    - Penteado personalizado com técnicas exclusivas
    - Dia da noiva com ambiente privativo
    - Testes de make e hair inclusos
    - Welcome drink e café da manhã
    
    VANTAGENS EXCLUSIVAS:
    - Localização privilegiada na Zona Norte
    - Estacionamento próprio
    - Equipe completa de profissionais
    - Assistência durante todo o evento
    - Deslocamento facilitado para igrejas e buffets da região

    Nosso pacote foi desenvolvido pensando em cada detalhe para proporcionar uma experiência completa e sem preocupações no seu grande dia.`,
  image: "/images/pacote-noiva-zona-norte-1.webp",
  images: [
    "/images/pacote-noiva-zona-norte-1.webp",
    "/images/pacote-noiva-zona-norte-2.webp",
  ],
};

const faqData = [
  {
    question: "O que está incluso no pacote completo?",
    answer: "O pacote inclui maquiagem, penteado, dia da noiva com ambiente privativo, testes prévios, café da manhã, kit emergência e assistência completa durante o evento.",
  },
  {
    question: "Qual a duração do atendimento no dia?",
    answer: "O pacote completo tem duração média de 6 a 8 horas, permitindo tempo adequado para cada etapa da produção com todo conforto.",
  },
  {
    question: "Posso incluir serviços para madrinhas e mães?",
    answer: "Sim! Oferecemos condições especiais para incluir a produção do cortejo no seu pacote, mantendo o mesmo padrão de qualidade.",
  },
  {
    question: "Como funciona o cronograma dos testes?",
    answer: "Agendamos os testes de make e hair com antecedência, normalmente 30 dias antes do casamento, para definir todos os detalhes da produção.",
  },
];

const PacoteCompletoNoivaZonaNortePage = () => {
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
      author: "Studio Amendolla",
      datePublished: "2025-01-18",
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
      { name: "Início", url: "https://www.studioamendollanoivas.com.br" },
      { name: "Serviços", url: "https://www.studioamendollanoivas.com.br/servicos" },
      { name: "Pacote Completo Zona Norte", url: "https://www.studioamendollanoivas.com.br/paginaSeo/pacote-completo-noiva-zona-norte" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Pacote Completo para Noivas Zona Norte SP - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Pacote Completo Noiva Zona Norte`,
      datePublished: "2025-01-18",
      author: "Studio Amendolla",
      publisher: {
        "@type": "Organization",
        name: "Studio Amendolla",
        logo: {
          "@type": "ImageObject",
          url: "https://www.studioamendollanoivas.com.br/images/logo.webp",
        },
      },
      inLanguage: "pt-BR",
      license: "https://creativecommons.org/licenses/by/4.0/",
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>{serviceData.title}</h1>
      <CanonicalURL />
      <UnifiedSchemas pageData={pageData} />

      <div className={styles.gridContainer}>
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Pacote Completo Noiva Zona Norte - ${currentImage + 1}`}
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

        <div className={styles.contentColumn}>
          <div className={styles.descriptionSection}>
            <p>{serviceData.description}</p>
          </div>
          <div className={styles.faqSection}>
            <h2>Perguntas Frequentes sobre o Pacote Completo</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para seu Pacote Completo</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default PacoteCompletoNoivaZonaNortePage;
