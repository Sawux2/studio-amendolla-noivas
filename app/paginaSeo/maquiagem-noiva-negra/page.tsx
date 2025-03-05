"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiagem para Noivas Negras - Studio Amendolla",
  description: 
    "Especialistas em realçar a beleza natural das noivas negras, com técnicas exclusivas de maquiagem e produtos específicos que valorizam cada tom de pele. Realce sua beleza única no dia do seu casamento.",
  detailedDescription: `
    No Studio Amendolla, entendemos e celebramos a beleza única de cada noiva negra. Nossa equipe especializada domina técnicas específicas e utiliza produtos de alta qualidade desenvolvidos especialmente para peles negras, garantindo um resultado deslumbrante e duradouro.

    Trabalhamos com as melhores marcas do mercado que oferecem uma ampla variedade de tons e subtons, permitindo uma combinação perfeita com sua pele. Nosso objetivo é realçar sua beleza natural, criando uma maquiagem que harmonize com seus traços e estilo pessoal.

    Além da técnica impecável, oferecemos um ambiente acolhedor onde você se sentirá completamente à vontade para expressar seus desejos e expectativas para o grande dia.`,
  image: "/images/maquiagem-noiva-negra-1.webp",
  images: [
    "/images/maquiagem-noiva-negra-1.webp",
    "/images/maquiagem-noiva-negra-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais produtos são utilizados na maquiagem?",
    answer: "Utilizamos produtos de marcas premium especializadas em peles negras, com alta pigmentação e durabilidade, garantindo um resultado natural e duradouro.",
  },
  {
    question: "É possível fazer um teste de maquiagem antes do casamento?",
    answer: "Sim! Recomendamos fortemente a prova de maquiagem para ajustarmos todos os detalhes, tons e técnicas que melhor valorizam seus traços.",
  },
  {
    question: "A maquiagem dura o dia todo?",
    answer: "Sim! Utilizamos técnicas e produtos específicos para garantir a durabilidade da maquiagem durante toda a cerimônia e festa.",
  },
  {
    question: "Vocês também atendem madrinhas e mãe da noiva?",
    answer: "Sim! Oferecemos serviços para todo o cortejo, mantendo o mesmo padrão de excelência e produtos específicos para cada tom de pele.",
  },
];

const MaquiagemNoivaNegraPage = () => {
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
      { name: "Maquiagem Noiva Negra", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-noiva-negra" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Noivas Negras - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem Noiva Negra`,
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
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Maquiagem Noiva Negra - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noivas Negras</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para sua Maquiagem</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default MaquiagemNoivaNegraPage;
