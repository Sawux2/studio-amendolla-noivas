"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Pacote Completo para Noivas Negras - Studio Amendolla",
  description: 
    "Experiência exclusiva de beleza para noivas negras no Studio Amendolla. Pacote completo com maquiagem, penteado e cuidados especiais, desenvolvido por profissionais especializados em realçar sua beleza única.",
  detailedDescription: `
    O Pacote Completo para Noivas Negras do Studio Amendolla foi cuidadosamente elaborado para proporcionar uma experiência única e personalizada. Reunimos os melhores serviços e produtos específicos para valorizar sua beleza natural.

    Nossa equipe especializada oferece:
    - Maquiagem profissional com produtos de alta performance para pele negra
    - Penteados exclusivos para todos os tipos de cabelos afro
    - Tratamentos preparatórios para pele e cabelo
    - Teste completo de make e hair
    - Assistência durante todo o dia do casamento
    
    Cada detalhe é pensado para garantir que você se sinta confiante e deslumbrante, com um visual que permanece impecável durante toda a celebração.`,
  image: "/images/pacote-noiva-negra-1.webp",
  images: [
    "/images/pacote-noiva-negra-1.webp",
    "/images/pacote-noiva-negra-2.webp",
  ],
};

const faqData = [
  {
    question: "O que está incluso no Pacote Completo para Noivas Negras?",
    answer: "O pacote inclui teste e produção completa no dia do casamento com maquiagem especializada, penteado personalizado, tratamentos preparatórios, produtos premium específicos e acompanhamento durante todo o evento.",
  },
  {
    question: "Com quanto tempo de antecedência devo contratar o pacote?",
    answer: "Recomendamos a contratação com 6 meses de antecedência para garantirmos a data e realizarmos todo o planejamento dos testes e tratamentos preparatórios.",
  },
  {
    question: "O pacote pode ser personalizado?",
    answer: "Sim! Podemos adaptar o pacote de acordo com suas necessidades específicas, incluindo serviços adicionais como extensões, unhas, cílios e tratamentos especiais.",
  },
  {
    question: "Vocês oferecem serviços para o cortejo também?",
    answer: "Sim! Temos pacotes especiais para madrinhas e mães que podem ser combinados com seu pacote de noiva, mantendo a mesma qualidade e atenção aos detalhes.",
  },
];

const PacoteNoivaNegraPage = () => {
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
      { name: "Pacote Noiva Negra", url: "https://www.studioamendollanoivas.com.br/paginaSeo/pacote-noiva-negra" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Pacote Completo para Noivas Negras - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Pacote Noiva Negra`,
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
                alt={`Pacote Noiva Negra - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre o Pacote Completo</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para seu Pacote Completo</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default PacoteNoivaNegraPage;
