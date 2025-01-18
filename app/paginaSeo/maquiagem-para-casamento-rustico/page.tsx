"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Casamento Rústico - Studio Amendolla",
  description:
    "A maquiagem para casamento rústico busca um visual natural e elegante, com acabamento leve e sofisticado. Para este tipo de evento, apostamos em tons suaves e iluminados que harmonizam com a rusticidade do ambiente.",
  detailedDescription: `
    O casamento rústico é caracterizado por uma atmosfera aconchegante e simples, muitas vezes realizada em locais ao ar livre ou em fazendas. Para esse tipo de evento, a maquiagem deve refletir a beleza natural da noiva, com um toque de sofisticação. Usamos bases leves e de acabamento matte, que garantem durabilidade sem pesar. O iluminador é aplicado de forma sutil, proporcionando um brilho natural. Os olhos são realçados com tons neutros e suaves, que complementam a vibe intimista do casamento. Para os lábios, as cores são suaves e discretas, dando um toque delicado ao visual. O objetivo é garantir que a noiva se sinta confortável e radiante, sem perder a leveza que o casamento rústico pede.
  `,
  image: "/images/maquiagem-casamento-rustico.webp",
  images: [
    "/images/maquiagem-casamento-rustico-1.webp",
    "/images/maquiagem-casamento-rustico-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual é o estilo de maquiagem ideal para um casamento rústico?",
    answer:
      "Para casamentos rústicos, a maquiagem deve ser natural e leve, com tons suaves que combinem com a atmosfera do evento. A maquiagem é mais discreta, mas ainda assim elegante e sofisticada, com um toque de brilho natural.",
  },
  {
    question: "A maquiagem para casamento rústico é mais simples?",
    answer:
      "Sim, a maquiagem para casamento rústico é mais suave e natural, refletindo a simplicidade e a beleza do evento. Contudo, ela precisa ser bem feita para garantir que a noiva esteja impecável durante toda a celebração.",
  },
  {
    question: "Posso usar tons mais escuros na maquiagem para casamento rústico?",
    answer:
      "Embora a maquiagem para casamento rústico seja mais suave, você pode optar por detalhes em tons mais escuros nos olhos ou lábios. No entanto, é importante manter o equilíbrio e a leveza, sem exageros, para manter a harmonia com o estilo rústico.",
  },
  {
    question: "A maquiagem para casamento rústico é resistente?",
    answer:
      "Sim! Embora o estilo seja leve, a maquiagem é feita com produtos de longa duração, garantindo que a noiva se mantenha impecável ao longo de todo o evento, sem perder o brilho e frescor.",
  },
];

const MaquiagemCasamentoRusticoPage = () => {
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
      { name: "Maquiagem para Casamento Rústico", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-casamento-rustico" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Casamento Rústico - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Casamento Rústico`,
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
                alt={`Maquiagem para Casamento Rústico - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Casamento Rústico</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Casamento Rústico</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemCasamentoRusticoPage;
