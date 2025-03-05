"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiagem para Formatura na Zona Norte SP - Studio Amendolla",
  description: 
    "Maquiagem profissional para formatura na Zona Norte de São Paulo. Realce sua beleza com produtos premium e técnicas exclusivas para fotos e vídeos perfeitos na sua formatura.",
  detailedDescription: `
    O Studio Amendolla é especialista em maquiagem para formaturas, oferecendo:

    SERVIÇOS ESPECIAIS PARA FORMANDAS:
    - Maquiagem de alta durabilidade
    - Produtos específicos para fotos e vídeos
    - Técnicas anti-brilho para cerimônia
    - Cílios postiços inclusos
    - Teste de maquiagem opcional
    - Produtos à prova d'água
    
    BENEFÍCIOS EXCLUSIVOS:
    - Localização privilegiada na Zona Norte
    - Estacionamento próprio
    - Iluminação profissional
    - Atendimento nos horários da formatura
    - Dicas de cuidados com a pele

    Pacotes especiais para grupos de formandas com condições diferenciadas.`,
  image: "/images/maquiagem-formatura-1.webp",
  images: [
    "/images/maquiagem-formatura-1.webp",
    "/images/maquiagem-formatura-2.webp",
  ],
};

const faqData = [
  {
    question: "Quanto tempo antes da formatura devo fazer a maquiagem?",
    answer: "Recomendamos iniciar a produção com 4-5 horas de antecedência do horário da cerimônia, garantindo tempo para fotos e deslocamento.",
  },
  {
    question: "Oferecem pacotes para grupos de formandas?",
    answer: "Sim! Temos condições especiais para grupos, com descontos progressivos e horários coordenados para todas as formandas.",
  },
  {
    question: "A maquiagem dura toda a festa?",
    answer: "Sim! Utilizamos produtos de alta durabilidade e técnicas específicas para garantir que sua maquiagem permaneça perfeita durante toda a cerimônia e festa.",
  },
  {
    question: "Preciso levar algum produto?",
    answer: "Não é necessário! Trabalhamos com produtos profissionais completos. Apenas sugerimos trazer seu batom preferido para retoques.",
  },
];

const MaquiagemFormaturaPage = () => {
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
      { name: "Maquiagem Formatura", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-formatura-zona-norte" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Formatura Zona Norte SP - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem Formatura`,
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
                alt={`Maquiagem Formatura - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Formatura</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para sua Formatura</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default MaquiagemFormaturaPage;
