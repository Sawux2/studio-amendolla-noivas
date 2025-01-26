"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Casamento em Pele Negra - Studio Amendolla",
  description:
    "Realce a beleza da pele negra em casamentos com maquiagem que destaca sua tonalidade única. Utilizamos técnicas personalizadas para um acabamento impecável e duradouro, ideal para o grande dia.",
  detailedDescription: `
    A maquiagem para casamento em pele negra exige técnicas específicas para valorizar sua tonalidade única e destacar a beleza natural. No Studio Amendolla, utilizamos bases e corretivos com subtons adequados, garantindo uma cobertura perfeita e natural. Realçamos a pele com iluminadores e blushes em tons dourados ou avermelhados, que harmonizam com a pele negra e criam um efeito deslumbrante. Para os olhos, aplicamos sombras com alta pigmentação em tons que variam dos neutros aos metálicos, sempre respeitando o estilo da noiva. Os lábios podem ser destacados com batons vibrantes ou mantidos em tons nude sofisticados. A maquiagem é cuidadosamente elaborada para durar todo o evento e refletir a confiança e a elegância da noiva no seu dia especial.
  `,
  image: "/images/maquiagem-casamento-pele-negra.webp",
  images: [
    "/images/maquiagem-casamento-pele-negra-1.webp",
    "/images/maquiagem-casamento-pele-negra-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais produtos são recomendados para maquiagem em pele negra?",
    answer:
      "Produtos com subtons adequados, como bases e corretivos que respeitam os subtons quentes ou frios da pele negra, são fundamentais. Iluminadores dourados e blushes avermelhados também ajudam a realçar a beleza natural.",
  },
  {
    question: "Como garantir um acabamento impecável para pele negra no casamento?",
    answer:
      "O preparo da pele é essencial. Começamos com uma boa hidratação e primers específicos. Usamos produtos de alta pigmentação e aplicamos em camadas leves para obter um acabamento uniforme e duradouro.",
  },
  {
    question: "Quais tons de sombra combinam com pele negra em casamentos?",
    answer:
      "Tons metálicos, como dourado, cobre e bronze, são ideais para destacar os olhos. Tons neutros, como marrom e bege, também são ótimos para um visual mais clássico e elegante.",
  },
  {
    question: "A maquiagem para pele negra é resistente para eventos longos?",
    answer:
      "Sim! Utilizamos produtos de longa duração e técnicas de fixação que garantem que a maquiagem permaneça impecável durante todo o casamento, mesmo em eventos prolongados.",
  },
];

const MaquiagemCasamentoPeleNegraPage = () => {
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
      { name: "Maquiagem para Casamento em Pele Negra", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-casamento-pele-negra" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Casamento em Pele Negra - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Casamento em Pele Negra`,
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
                alt={`Maquiagem para Casamento em Pele Negra - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Casamento em Pele Negra</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Casamento em Pele Negra</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemCasamentoPeleNegraPage;
