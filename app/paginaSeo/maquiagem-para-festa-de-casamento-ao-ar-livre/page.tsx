"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Festa de Casamento ao Ar Livre - Studio Amendolla",
  description:
    "A maquiagem para casamento ao ar livre é pensada para resistir ao clima e garantir que a noiva esteja radiante e fresca o dia todo. Apostamos em uma maquiagem de longa duração e resistente ao calor, realçando a beleza natural da noiva sem perder a leveza.",
  detailedDescription: `
    Para um casamento ao ar livre, a maquiagem precisa ser especialmente pensada para resistir ao calor e à umidade, mantendo a noiva impecável durante a cerimônia e a festa. No Studio Amendolla, utilizamos produtos de alta fixação, que garantem uma maquiagem duradoura sem pesar. A base é leve, mas de alta cobertura, ideal para resistir ao calor, enquanto o iluminador realça o brilho natural da pele. Para os olhos, apostamos em um olhar expressivo, com sombras que duram e são resistentes à transpiração. A maquiagem para lábios também é escolhida com cuidado, garantindo uma cor vibrante, mas duradoura. A ideia é criar um look natural, mas com a durabilidade necessária para uma festa de casamento ao ar livre.
  `,
  image: "/images/maquiagem-casamento-ar-livre.webp",
  images: [
    "/images/maquiagem-casamento-ar-livre-1.webp",
    "/images/maquiagem-casamento-ar-livre-2.webp",
  ],
};

const faqData = [
  {
    question: "Como escolher a maquiagem para um casamento ao ar livre?",
    answer:
      "Para casamentos ao ar livre, é essencial escolher produtos de longa duração e resistentes ao calor e à umidade. A maquiagem precisa ser leve, mas com cobertura suficiente para garantir durabilidade, e deve ser feita com produtos de alta fixação.",
  },
  {
    question: "A maquiagem para casamento ao ar livre é diferente de outros tipos de casamento?",
    answer:
      "Sim, a maquiagem para casamento ao ar livre exige mais atenção para garantir que ela dure o dia todo, mesmo em climas quentes ou úmidos. A escolha dos produtos e a técnica de aplicação devem ser adaptadas para garantir resistência e leveza.",
  },
  {
    question: "Posso optar por uma maquiagem mais suave para um casamento ao ar livre?",
    answer:
      "Sim, para um casamento ao ar livre, podemos criar um look mais suave, mas sempre priorizando a durabilidade e resistência da maquiagem. A leveza é um ponto importante, mas sempre mantendo a maquiagem intacta durante o evento.",
  },
  {
    question: "Como garantir que a maquiagem se mantenha fresca durante a festa?",
    answer:
      "Utilizamos primers e sprays fixadores que ajudam a manter a maquiagem intacta durante a festa, independentemente do calor ou da umidade. A escolha de produtos matificantes e resistentes também contribui para garantir que a maquiagem se mantenha fresca.",
  },
];

const MaquiagemCasamentoArLivrePage = () => {
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
      { name: "Maquiagem para Festa de Casamento ao Ar Livre", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-festa-de-casamento-ao-ar-livre" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Festa de Casamento ao Ar Livre - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Festa de Casamento ao Ar Livre`,
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
                alt={`Maquiagem para Festa de Casamento ao Ar Livre - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Festa de Casamento ao Ar Livre</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Festa de Casamento ao Ar Livre</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemCasamentoArLivrePage;
