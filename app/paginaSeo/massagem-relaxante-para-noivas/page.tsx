"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Massagem Relaxante para Noivas - Studio Amendolla",
  description:
    "Acalme sua mente e prepare-se para o grande dia com uma massagem relaxante exclusiva para noivas. Experiência única para reduzir o estresse e renovar as energias.",
  detailedDescription: `
    Nossa massagem relaxante é ideal para noivas que desejam aliviar a tensão antes do casamento.
    Usamos técnicas terapêuticas suaves para reduzir o estresse, aliviar dores musculares e promover um bem-estar completo.
    Oferecemos pacotes personalizados, permitindo que você aproveite este momento especial de autocuidado antes do grande dia.
  `,
  image: "/images/massagem-relaxante-1.webp",
  images: [
    "/images/massagem-relaxante-2.webp",
    "/images/massagem-relaxante-1.webp",
  ],
};

const faqData = [
  {
    question: "Quais os benefícios da massagem relaxante para noivas?",
    answer:
      "A massagem ajuda a reduzir o estresse, melhorar a circulação sanguínea e proporcionar um relaxamento profundo antes do casamento.",
  },
  {
    question: "Preciso agendar com antecedência?",
    answer:
      "Sim, recomendamos o agendamento com pelo menos uma semana de antecedência para garantir disponibilidade, ou pode ser feita no mesmo dia garantindo que esteja tranquila e relaxada para o grande momento",
  },
  {
    question: "O serviço pode ser feito no local do evento?",
    answer:
      "Sim! Oferecemos atendimento tanto no studio quanto no local desejado para maior conforto da noiva.",
  },
  {
    question: "Quais técnicas são utilizadas na massagem?",
    answer:
      "Usamos técnicas de relaxamento profundo, incluindo aromaterapia, pedras quentes e massagem sueca, adaptando ao perfil da cliente.",
  },
];

const MassagemRelaxantePage = () => {
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
      { name: "Massagem Relaxante", url: "https://www.studioamendollanoivas.com.br/paginaSeo/massagem-relaxante" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Massagem Relaxante para Noivas",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Massagem Relaxante para Noivas`,
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
                alt={`Massagem Relaxante para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Massagem Relaxante</h2>
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

export default MassagemRelaxantePage;
