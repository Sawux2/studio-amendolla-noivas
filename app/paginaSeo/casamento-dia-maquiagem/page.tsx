"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";
import ServiceSimulator from "app/components/calculadora";

const serviceData = {
  title: "Maquiagem para Casamento de Dia - Studio Amendolla",
  description:
    "Descubra a maquiagem ideal para casamentos diurnos, com um visual leve, natural e sofisticado, que realça sua beleza de forma sutil e harmoniosa.",
  detailedDescription: `
    A maquiagem para casamentos durante o dia exige um equilíbrio entre leveza e sofisticação. No Studio Amendolla, focamos em realçar a beleza natural com uma pele bem preparada e acabamento suave. Utilizamos bases leves e iluminadores estratégicos para um brilho saudável e natural. Os olhos podem ser destacados com tons neutros e terrosos, acompanhados de cílios discretos para um visual elegante, mas sem exageros. Os lábios podem variar entre tons nude ou rosados, complementando o look com harmonia. Nossa maquiagem é pensada para resistir ao calor e à luz natural, garantindo um resultado impecável durante todo o evento.`,
  image: "/images/maquiagem-casamento-dia.webp",
  images: [
    "/images/maquiagem-casamento-dia-1.webp",
    "/images/maquiagem-casamento-dia-2.webp",
  ],
};

const faqData = [
  {
    question: "Como escolher a maquiagem ideal para um casamento de dia?",
    answer:
      "Priorize produtos leves e de longa duração, como bases fluidas e iluminadores naturais. Aposte em cores neutras e suaves para olhos e lábios.",
  },
  {
    question: "A maquiagem para casamento de dia é resistente ao calor?",
    answer:
      "Sim! Utilizamos primers e sprays fixadores que garantem a durabilidade da maquiagem, mesmo em dias mais quentes ou sob luz solar direta.",
  },
  {
    question: "Quais cores são indicadas para maquiagem de dia?",
    answer:
      "Tons neutros, como bege, marrom claro, dourado suave e rosados, são perfeitos para criar um visual fresco e elegante para o dia.",
  },
  {
    question: "Como destacar os olhos na maquiagem para casamento de dia?",
    answer:
      "Utilize sombras em tons neutros ou pastéis e finalize com cílios naturais ou máscara de cílios à prova d'água para realçar os olhos sem pesar.",
  },
];

const MaquiagemCasamentoDiaPage = () => {
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
      author: "Priscila Amendolla",
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
      { name: "Maquiagem para Casamento de Dia", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-casamento-dia" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Casamento de Dia - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Casamento de Dia`,
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
        {/* Primeira Coluna: Carrossel de Imagens e Descrição Detalhada */}
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Maquiagem para Casamento de Dia - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Casamento de Dia</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Casamento de Dia</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
      <ServiceSimulator/>
    </div>
  );
};

export default MaquiagemCasamentoDiaPage;
