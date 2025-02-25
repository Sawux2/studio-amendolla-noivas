"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Penteados para Noivas - Studio Amendolla",
  description:
    "Descubra penteados elegantes e sofisticados para noivas. Criamos looks exclusivos para realçar sua beleza no grande dia.",
  detailedDescription: `
    Nossa equipe especializada oferece serviços personalizados para noivas que desejam um penteado impecável e duradouro.
    Trabalhamos com diversos estilos, desde clássicos até modernos, garantindo um visual deslumbrante para seu casamento.
    Agende uma consulta e descubra o penteado ideal para você!
  `,
  image: "/images/penteado-noiva-1.webp",
  images: [
    "/images/penteado-noiva-2.webp",
    "/images/penteado-noiva-1.webp",
    
  ],
};

const faqData = [
  {
    question: "Quais estilos de penteados vocês oferecem?",
    answer:
      "Trabalhamos com coques, tranças, cabelos soltos e semi-presos, sempre adaptando ao estilo da noiva e do evento.",
  },
  {
    question: "O penteado é testado antes do casamento?",
    answer:
      "Sim! Recomendamos um teste prévio para que você possa escolher o melhor visual para o grande dia.",
  },
  {
    question: "Vocês atendem no local do evento?",
    answer:
      "Sim, oferecemos atendimento no studio ou no local do evento para maior comodidade da noiva.",
  },
  {
    question: "Quanto tempo antes devo agendar?",
    answer:
      "Recomendamos que o agendamento seja feito com pelo menos 3 meses de antecedência para garantir disponibilidade.",
  },
];

const PenteadosNoivaPage = () => {
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
      { name: "Penteados para Noivas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/penteados-para-noivas" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Penteados para Noivas",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Penteado para Noivas`,
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
                alt={`Penteado para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Penteados para Noivas</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para Penteados</h2>
          <OrcamentoForm />
        </div>
      </div>

      <FeaturesCards />
    </div>
  );
};

export default PenteadosNoivaPage;
