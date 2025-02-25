"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiagem para Madrinhas - Studio Amendolla",
  description:
    "Maquiagem profissional exclusiva para madrinhas. Looks sofisticados e duradouros que harmonizam com o evento e realçam sua beleza natural.",
  detailedDescription: `
    Oferecemos serviços especializados de maquiagem para madrinhas, com atendimento personalizado 
    e looks que complementam perfeitamente o estilo do casamento. Nossa equipe expert utiliza 
    produtos premium e técnicas avançadas para criar uma maquiagem elegante e duradoura, 
    garantindo que você esteja deslumbrante nas fotos e durante toda a celebração.
    Disponibilizamos pacotes especiais para grupos de madrinhas, com condições exclusivas.
  `,
  image: "/images/maquiagem-madrinhas.webp",
  images: [
    "/images/maquiagem-madrinhas-1.webp",
    "/images/maquiagem-madrinhas-2.webp",
    "/images/maquiagem-madrinhas-3.webp",
  ],
};

const faqData = [
  {
    question: "Existe pacote especial para grupo de madrinhas?",
    answer:
      "Sim! Oferecemos pacotes especiais para grupos de madrinhas com valores diferenciados e benefícios exclusivos.",
  },
  {
    question: "Como funciona o agendamento para várias madrinhas?",
    answer:
      "Organizamos um cronograma especial para atender todas as madrinhas no tempo adequado, garantindo que todas estejam prontas no horário do evento.",
  },
  {
    question: "A maquiagem das madrinhas pode ser feita no local do evento?",
    answer:
      "Sim, oferecemos serviço de maquiagem no local do evento ou em nosso studio, conforme sua preferência e necessidade.",
  },
  {
    question: "Quanto tempo antes do evento devo agendar a maquiagem?",
    answer:
      "Recomendamos o agendamento com 3 meses de antecedência, especialmente para grupos grandes de madrinhas.",
  },
];

const MaquiagemMadrinhasPage = () => {
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
      datePublished: "2025-01-30",
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
      { name: "Maquiagem para Madrinhas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-madrinhas" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem Profissional para Madrinhas",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Madrinhas`,
      datePublished: "2025-01-30",
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
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Maquiagem para Madrinhas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Madrinhas</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para Madrinhas</h2>
          <OrcamentoForm />
        </div>
      </div>

      <FeaturesCards />
    </div>
  );
};

export default MaquiagemMadrinhasPage;
