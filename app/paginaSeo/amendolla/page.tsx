"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "@/components/OrcamentoForm";
import styles from "@/styles/PaginaSeo.module.css";
import CanonicalURL from "@/components/CanonicalURL";
import ArticleSchema from "@/schemas/ArticleSchema";
import BreadcrumbSchema from "@/schemas/BreadcrumbSchema";
import FAQSchema from "@/schemas/FAQSchema";
import ImageObjectSchema from "@/schemas/ImageObjectSchema";
import ServiceSchema from "@/schemas/ServiceSchema";
import OrganizationSchema from "@/schemas/organizationSchema";
import WebsiteSchema from "@/schemas/WebsiteSchema";
import FeaturesCards from "@/components/FeaturesCards";
import ServiceSimulator from "@/components/calculadora";
import GaleriaDeFotos from '@/components/GaleriaDeFotos'; // Ajuste o caminho conforme a estrutura do seu projeto


const serviceData = {
  title: "Maquiagem para Casamento de Dia - Priscila Helena",
  description:
    "Descubra a maquiagem ideal para casamentos diurnos com Priscila Helena, especialista em criar visuais leves, naturais e sofisticados que realçam a beleza de forma sutil e harmoniosa.",
  detailedDescription: `
    A maquiagem para casamentos durante o dia exige um equilíbrio entre leveza e sofisticação. Com Priscila Helena, cada maquiagem é pensada para realçar a beleza natural da noiva, com uma pele bem preparada e um acabamento suave. Utilizamos produtos de alta qualidade, como bases leves e iluminadores estratégicos, para garantir um brilho saudável e natural. Os olhos são destacados com sombras em tons neutros e terrosos, e cílios discretos para um visual elegante e atemporal. Os lábios podem variar entre tons nude ou rosados, completando o look com harmonia. Toda a maquiagem é projetada para resistir ao calor e à luz natural, garantindo que você tenha um visual impecável durante todo o evento.`,
  image: "/images/maquiagem-casamento-dia-priscila.webp",
  images: [
    "/images/maquiagem-casamento-dia-priscila-1.webp",
    
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

  // Schema data
  const articleData = {
    headline: serviceData.title,
    description: serviceData.description,
    author: "Priscila Helena",
    datePublished: "2025-01-18",
    image: serviceData.images.map(img => 
      `https://www.studioamendollanoivas.com.br${img}`
    ),
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/amendolla"
  };

  const breadcrumbData = {
    items: [
      { name: "Início", item: "/", position: 1 },
      { name: "Serviços", item: "/servicos", position: 2 },
      { name: "Maquiagem para Casamento de Dia", item: "/paginaSeo/amendolla", position: 3 }
    ]
  };

  const faqSchemaData = {
    items: faqData
  };

  const serviceSchemaData = {
    name: serviceData.title,
    description: serviceData.description,
    provider: "Studio Amendolla",
    areaServed: "São Paulo",
    image: serviceData.images.map(img => 
      `https://www.studioamendollanoivas.com.br${img}`
    ),
    url: "/paginaSeo/amendolla",
    serviceType: "Maquiagem para Noivas",
    offers: [{
      price: 500,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      validFrom: "2024-05-17"
    }]
  };

  const organizationData = {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: "Especialistas em maquiagem e penteados para noivas em São Paulo",
    logoUrl: "/images/logo.webp",
    telephone: "+55 11 97767-0498",
    contactType: "customer service",
    areaServed: "São Paulo",
    sameAs: [
      "https://www.instagram.com/studioamendolla",
      "https://www.facebook.com/studioamendolla"
    ],
    address: {
      streetAddress: "Avenida Julio Buono 2386",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "02201-002",
      addressCountry: "BR"
    }
  };

  const websiteData = {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: "Especialistas em maquiagem e penteados para noivas em São Paulo",
    inLanguage: "pt-BR",
    keywords: ["maquiagem noiva", "casamento de dia", "São Paulo"]
  };

  const imageData = serviceData.images.map((image, index) => ({
    url: image,
    contentUrl: image,
    description: serviceData.title,
    width: 400,
    height: 300,
    name: `Imagem ${index + 1} - Maquiagem para Casamento de Dia`,
    caption: "Serviço de maquiagem profissional para noivas",
    representativeOfPage: index === 0,
    creator: {
      name: "Studio Amendolla",
      url: "https://www.studioamendollanoivas.com.br"
    },
    datePublished: "2024-05-17"
  }));

  return (
    <div className={styles.servicePage}>
      <h1>{serviceData.title}</h1>
      
      {/* SEO Schemas */}
      <CanonicalURL />
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema data={breadcrumbData} />
      <FAQSchema data={faqSchemaData} />
      <ServiceSchema data={serviceSchemaData} />
      <OrganizationSchema data={organizationData} />
      <WebsiteSchema data={websiteData} />
      {imageData.map((imgData, index) => (
        <ImageObjectSchema key={index} data={imgData} />
      ))}

      {/* Existing content structure */}
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
      <GaleriaDeFotos/>
    </div>
  );
};

export default MaquiagemCasamentoDiaPage;
