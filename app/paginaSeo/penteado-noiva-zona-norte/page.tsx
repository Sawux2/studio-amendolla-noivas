"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Penteado para Noivas na Zona Norte SP - Studio Amendolla",
  description: 
    "Penteados exclusivos para noivas na Zona Norte de São Paulo. Profissionais especializados, técnicas modernas e atendimento personalizado para criar o penteado perfeito para seu casamento.",
  detailedDescription: `
    O Studio Amendolla é especialista em penteados para noivas na Zona Norte de São Paulo. Nossa equipe oferece:

    - Penteados modernos e clássicos
    - Técnicas exclusivas de modelagem
    - Produtos profissionais de alta fixação
    - Teste de penteado incluso
    - Harmonização com véu e acessórios
    - Análise do tipo de cabelo
    
    Nossos hair stylists são especializados em diversos estilos de penteados:
    - Coques modernos e clássicos
    - Penteados semi-presos
    - Tranças elaboradas
    - Ondulações naturais
    - Estilos vintage e contemporâneos

    Trabalhamos com as melhores marcas de produtos para garantir que seu penteado permaneça impecável durante toda a celebração.`,
  image: "/images/penteado-noiva-zona-norte-1.webp",
  images: [
    "/images/penteado-noiva-zona-norte-1.webp",
    "/images/penteado-noiva-zona-norte-2.webp",
  ],
};

const faqData = [
  {
    question: "Como escolher o penteado ideal para meu casamento?",
    answer: "Durante a consulta, analisamos seu tipo de cabelo, estilo do vestido, acessórios e tema do casamento para criar um penteado que harmonize perfeitamente com sua proposta.",
  },
  {
    question: "É necessário fazer teste do penteado?",
    answer: "Sim! O teste é essencial para definirmos o estilo, tempo de execução e avaliar a adaptação com véu e acessórios.",
  },
  {
    question: "Trabalham com apliques e extensões?",
    answer: "Sim! Oferecemos serviços de aplicação de extensões e apliques de alta qualidade para criar o volume e comprimento desejados.",
  },
  {
    question: "Quanto tempo antes devo lavar o cabelo?",
    answer: "Recomendamos lavar o cabelo no dia anterior ao penteado, seguindo nossas orientações específicas de produtos para garantir o melhor resultado.",
  },
];

const PenteadoNoivaZonaNortePage = () => {
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
      { name: "Penteado Noiva Zona Norte", url: "https://www.studioamendollanoivas.com.br/paginaSeo/penteado-noiva-zona-norte" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Penteado para Noivas Zona Norte SP - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Penteado Noiva Zona Norte`,
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
                alt={`Penteado Noiva Zona Norte - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Penteado para Noivas</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para seu Penteado</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default PenteadoNoivaZonaNortePage;
