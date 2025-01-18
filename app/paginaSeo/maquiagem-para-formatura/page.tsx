"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Formatura - Studio Amendolla",
  description:
    "A maquiagem para formatura realça a beleza da formanda, garantindo um visual deslumbrante para esse momento especial. Técnicas e produtos de longa duração para que sua maquiagem dure a noite toda.",
  detailedDescription: `
    A maquiagem para formatura é pensada para proporcionar à formanda um visual que seja ao mesmo tempo elegante e marcante. No Studio Amendolla, utilizamos técnicas de contorno e iluminação para valorizar os traços do rosto e garantir um acabamento perfeito. A escolha de produtos de alta durabilidade é essencial, já que a maquiagem precisa se manter impecável durante toda a cerimônia e festa. Para a maquiagem de formatura, trabalhamos com tons sofisticados, desde o mais suave até o mais ousado, para que você se sinta confiante e radiante no grande dia.
  `,
  image: "/images/maquiagem-formatura.webp",
  images: [
    "/images/maquiagem-formatura-1.webp",
    "/images/maquiagem-formatura-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais produtos são ideais para maquiagem de formatura?",
    answer:
      "Para garantir uma maquiagem duradoura e impecável durante a noite, utilizamos produtos de alta cobertura e longa duração, como bases e corretivos de alta resistência e iluminadores que proporcionam um acabamento perfeito e radiante.",
  },
  {
    question: "A maquiagem de formatura pode ser mais ousada?",
    answer:
      "Sim! A maquiagem de formatura é uma oportunidade de ousar mais nos olhos, no contorno ou no batom. Podemos criar um look sofisticado e glamouroso com olhos esfumados ou até mesmo um delineado dramático, sem perder a elegância.",
  },
  {
    question: "Como garantir que a maquiagem dure durante a festa de formatura?",
    answer:
      "A chave para uma maquiagem de longa duração é a preparação adequada da pele com hidratação e o uso de primers específicos. Além disso, trabalhamos com produtos de longa duração para garantir que sua maquiagem permaneça impecável durante toda a festa.",
  },
  {
    question: "Posso escolher um look mais natural ou mais glamouroso para minha formatura?",
    answer:
      "Você pode escolher o estilo que melhor combina com sua personalidade. Podemos criar desde um look mais leve e natural até um visual mais marcante, com foco nos olhos ou nos lábios, tudo para que você se sinta única e especial na sua formatura.",
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
      { name: "Maquiagem para Formatura", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-formatura" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Formatura - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Formatura`,
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
                alt={`Maquiagem para Formatura - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Formatura</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Formatura</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemFormaturaPage;
