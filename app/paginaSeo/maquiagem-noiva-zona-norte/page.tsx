"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiagem para Noivas na Zona Norte SP - Studio Amendolla",
  description: 
    "Maquiagem profissional para noivas na Zona Norte de São Paulo. Produtos premium, técnicas exclusivas e anos de experiência para garantir uma make perfeita no seu grande dia.",
  detailedDescription: `
    O Studio Amendolla é referência em maquiagem para noivas na Zona Norte de São Paulo. Nossa equipe de maquiadores oferece:

    - Técnicas avançadas de maquiagem profissional
    - Produtos de marcas premium com alta durabilidade
    - Expertise em todos os tipos de pele
    - Teste de maquiagem incluso
    - Análise de coloração pessoal
    - Harmonização com o estilo do casamento
    
    Nossos profissionais são constantemente atualizados com as últimas tendências em maquiagem para noivas, garantindo um resultado sofisticado e atemporal para suas fotos.

    Utilizamos produtos à prova d'água e de longa duração, especialmente selecionados para garantir que sua maquiagem permaneça impecável durante toda a celebração.`,
  image: "/images/maquiagem-noiva-zona-norte-1.webp",
  images: [
    "/images/maquiagem-noiva-zona-norte-1.webp",
    "/images/maquiagem-noiva-zona-norte-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais marcas de produtos são utilizadas?",
    answer: "Trabalhamos apenas com marcas premium reconhecidas mundialmente, como MAC, Dior, Charlotte Tilbury e outras marcas profissionais de alta performance.",
  },
  {
    question: "É necessário fazer teste de maquiagem?",
    answer: "Sim! O teste é fundamental para definirmos juntas o estilo ideal, testar a durabilidade e fazer eventuais ajustes para o grande dia.",
  },
  {
    question: "A maquiagem inclui cílios postiços?",
    answer: "Sim! Oferecemos diferentes opções de cílios postiços, desde os mais naturais até os mais dramáticos, inclusos no serviço.",
  },
  {
    question: "Vocês também atendem madrinhas e mães?",
    answer: "Sim! Temos pacotes especiais para o cortejo, garantindo uma harmonia visual perfeita para as fotos do casamento.",
  },
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
      { name: "Maquiagem Noiva Zona Norte", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-noiva-zona-norte" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Noivas Zona Norte SP - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem Noiva Zona Norte`,
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
                alt={`Maquiagem Noiva Zona Norte - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noivas</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para sua Maquiagem</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default MaquiagemNoivaZonaNortePage;
