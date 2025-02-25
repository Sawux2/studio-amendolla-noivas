"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiagem para Formatura - Studio Amendolla",
  description:
    "Maquiagem profissional para formatura que realça sua beleza natural. Looks personalizados e duradouros para seu momento especial.",
  detailedDescription: `
    Celebre sua conquista com uma maquiagem deslumbrante feita por profissionais especializados. 
    No Studio Amendolla, criamos looks personalizados que combinam com seu estilo e personalidade, 
    garantindo uma maquiagem duradoura e à prova de fotos. Nossa equipe utiliza produtos premium 
    e técnicas avançadas para realçar sua beleza natural, deixando você ainda mais confiante 
    neste momento tão importante.
  `,
  image: "/images/maquiagem-formatura.webp",
  images: [
    "/images/maquiagem-formatura-1.webp",
    "/images/maquiagem-formatura-2.webp",
    "/images/maquiagem-formatura-3.webp",
  ],
};

const faqData = [
  {
    question: "Quanto tempo antes devo agendar a maquiagem para formatura?",
    answer:
      "Recomendamos agendar com pelo menos 2 meses de antecedência para garantir disponibilidade na data desejada e realizar o teste de maquiagem.",
  },
  {
    question: "É possível fazer um teste antes da formatura?",
    answer:
      "Sim! Oferecemos teste de maquiagem para você aprovar o look antes do grande dia, garantindo que tudo fique exatamente como deseja.",
  },
  {
    question: "Quais produtos são utilizados na maquiagem?",
    answer:
      "Trabalhamos apenas com produtos de alta qualidade e marcas renomadas, garantindo durabilidade e acabamento impecável para suas fotos e celebração.",
  },
  {
    question: "Vocês atendem no local do evento?",
    answer:
      "Sim, oferecemos serviço de maquiagem a domicílio ou no local do evento para sua maior comodidade. Consulte disponibilidade e valores.",
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
      author: "Studio Amendolla",
      datePublished: "2025-01-28",
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
      description: "Maquiagem Profissional para Formatura",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Formatura`,
      datePublished: "2025-01-28",
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

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para sua Formatura</h2>
          <OrcamentoForm />
        </div>
      </div>

      <FeaturesCards />
    </div>
  );
};

export default MaquiagemFormaturaPage;
