"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiagem para Pele Negra - Studio Amendolla",
  description:
    "Realce sua beleza natural com maquiagens profissionais para pele negra. Produtos de alta qualidade e técnicas especializadas para um acabamento impecável.",
  detailedDescription: `
    Nossa equipe é especializada em realçar a beleza da pele negra com técnicas avançadas e produtos específicos para tons quentes e frios.
    Criamos looks que vão do natural ao sofisticado, garantindo que sua maquiagem esteja impecável para qualquer ocasião.
    Oferecemos atendimento personalizado, analisando seu tom e subtom de pele para um resultado perfeito e duradouro.
  `,
  image: "/images/maquiagem-pele-negra-1.webp",
  images: [
    "/images/maquiagem-pele-negra-2.webp",
    "/images/maquiagem-pele-negra-1.webp",
  
  ],
};

const faqData = [
  {
    question: "Quais produtos são usados para pele negra?",
    answer:
      "Utilizamos bases, corretivos e pós específicos para pele negra, garantindo um acabamento natural e sem efeito acinzentado.",
  },
  {
    question: "Posso escolher um estilo específico de maquiagem?",
    answer:
      "Sim! Criamos maquiagens naturais, glamourosas e ousadas, de acordo com sua preferência e ocasião.",
  },
  {
    question: "A maquiagem dura por quanto tempo?",
    answer:
      "Utilizamos técnicas de fixação e produtos de longa duração para garantir que sua maquiagem permaneça impecável por horas.",
  },
  {
    question: "O serviço pode ser feito a domicílio?",
    answer:
      "Sim, atendemos tanto no nosso studio quanto no local do evento, para maior comodidade.",
  },
];

const MaquiagemPeleNegraPage = () => {
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
      datePublished: "2025-02-24",
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
      { name: "Maquiagem para Pele Negra", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-pele-negra" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem Profissional para Pele Negra",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Pele Negra`,
      datePublished: "2025-02-24",
      author: "Studio Amendolla",
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
                alt={`Maquiagem para Pele Negra - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Pele Negra</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento</h2>
          <OrcamentoForm />
        </div>
      </div>

      <FeaturesCards />
    </div>
  );
};

export default MaquiagemPeleNegraPage;
