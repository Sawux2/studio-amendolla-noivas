"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiagem para Madrinhas de Casamento - Studio Amendolla",
  description: 
    "Maquiagem profissional para madrinhas na Zona Norte de SP. Looks harmoniosos e elegantes que combinam com o estilo do casamento e valorizam a beleza natural.",
  detailedDescription: `
    O Studio Amendolla oferece serviços especializados para madrinhas:

    SERVIÇOS EXCLUSIVOS:
    - Maquiagem personalizada para cada madrinha
    - Harmonização com o tema do casamento
    - Produtos de alta durabilidade
    - Cílios postiços inclusos
    - Preparação especial da pele
    - Técnicas fotogênicas
    
    DIFERENCIAIS:
    - Atendimento em grupo
    - Horários coordenados
    - Dicas de cuidados com a pele
    - Suporte durante o evento
    - Kit retoque personalizado

    Pacotes especiais para grupos de madrinhas com condições diferenciadas.`,
  image: "/images/maquiagem-madrinhas-1.webp",
  images: [
    "/images/maquiagem-madrinhas-1.webp",
    "/images/maquiagem-madrinhas-2.webp",
  ],
};

const faqData = [
  {
    question: "Quantas madrinhas podem ser atendidas simultaneamente?",
    answer: "Nosso espaço comporta até 4 madrinhas simultaneamente, com profissionais dedicados para cada uma.",
  },
  {
    question: "Oferecem pacotes para o grupo completo de madrinhas?",
    answer: "Sim! Temos pacotes especiais que incluem todas as madrinhas, com descontos progressivos conforme o número de pessoas.",
  },
  {
    question: "É possível fazer um teste antes do casamento?",
    answer: "Sim! Recomendamos o teste prévio para garantir que o resultado atenda às expectativas de todas.",
  },
  {
    question: "A maquiagem é coordenada com o estilo da noiva?",
    answer: "Sim! Trabalhamos em harmonia com o visual da noiva e o tema do casamento, criando uma produção coesa para as fotos.",
  },
];

const MaquiagemMadrinhasPage = () => {
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
      { name: "Maquiagem Madrinhas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-madrinhas-casamento" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Madrinhas de Casamento - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem Madrinhas`,
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
                alt={`Maquiagem Madrinhas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Madrinhas</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para Madrinhas</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default MaquiagemMadrinhasPage;
