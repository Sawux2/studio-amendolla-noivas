"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem de Dia para Noiva - Studio Amendolla",
  description:
    "A maquiagem de dia para noiva é delicada e natural, ideal para casamentos ao ar livre ou cerimônias mais íntimas. Ela realça a beleza da noiva de forma suave e elegante, garantindo um visual impecável durante todo o evento.",
  detailedDescription: `
    A maquiagem de dia para noiva é pensada para proporcionar um look leve e natural, mantendo a noiva radiante e confortável em casamentos ao ar livre, na praia ou em celebrações mais simples. Utilizamos produtos que garantem a luminosidade e a frescor da pele, como bases leves, blushes em tons suaves e iluminadores discretos. A maquiagem de olhos é suavemente esfumaçada, enquanto os lábios ganham um tom suave e delicado, para um visual fresco e natural. O objetivo é destacar a beleza única da noiva, sem sobrecarregar, criando um look romântico e fresco, perfeito para o dia.
  `,
  image: "/images/maquiagem-dia-noiva.webp",
  images: [
    "/images/maquiagem-dia-noiva-1.webp",
    "/images/maquiagem-dia-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual o principal foco da maquiagem de dia para noiva?",
    answer:
      "O foco principal é criar um look natural e fresco, destacando a beleza da noiva de forma sutil. Usamos produtos leves, que garantem uma pele iluminada e um acabamento suave, ideal para cerimônias durante o dia.",
  },
  {
    question: "A maquiagem de dia para noiva é adequada para todos os tipos de pele?",
    answer:
      "Sim, a maquiagem de dia pode ser adaptada para diferentes tipos de pele. Para cada tonalidade de pele, escolhemos as melhores bases e produtos que proporcionam uma aparência natural e duradoura.",
  },
  {
    question: "Posso escolher um look mais ousado para meu casamento durante o dia?",
    answer:
      "Para um casamento durante o dia, a maquiagem tende a ser mais suave e delicada, mas se desejar um toque mais ousado, podemos incorporar elementos como delineado discreto ou um toque de cor nos lábios, sempre mantendo a elegância.",
  },
  {
    question: "Como a maquiagem de dia se mantém durante todo o evento?",
    answer:
      "Usamos produtos de longa duração e técnicas de fixação para garantir que a maquiagem se mantenha fresca e impecável durante todo o evento, mesmo em ambientes ao ar livre ou com temperaturas mais elevadas.",
  },
];

const MaquiagemDiaNoivaPage = () => {
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
      { name: "Maquiagem de Dia para Noiva", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-de-dia-para-noiva" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem de Dia para Noiva - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem de Dia para Noiva`,
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
                alt={`Maquiagem de Dia para Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem de Dia para Noiva</h2>
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
          <h2>Solicite um Orçamento para Maquiagem de Dia para Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemDiaNoivaPage;
