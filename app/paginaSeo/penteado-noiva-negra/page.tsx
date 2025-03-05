"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Penteados para Noivas Negras - Studio Amendolla",
  description: 
    "Penteados exclusivos que celebram a beleza e versatilidade dos cabelos afro. Nossa equipe especializada cria looks únicos que valorizam sua textura natural e estilo pessoal para o dia do seu casamento.",
  detailedDescription: `
    No Studio Amendolla, somos especialistas em criar penteados deslumbrantes que valorizam a riqueza e versatilidade dos cabelos afro. Nossa equipe domina técnicas específicas para todos os tipos de cabelos crespos e cacheados, desde 4A até 4C.

    Trabalhamos com as mais diversas possibilidades: desde penteados que exaltam a beleza natural do seu cabelo até elaboradas tranças, twists, e updos sofisticados. Utilizamos produtos especializados que garantem hidratação, definição e durabilidade ao seu penteado durante todo o evento.

    Entendemos que cada noiva é única, e por isso oferecemos uma consulta personalizada para criar um penteado que combine perfeitamente com seu estilo pessoal, vestido e tema do casamento, garantindo que você se sinta verdadeiramente radiante no seu grande dia.`,
  image: "/images/penteado-noiva-negra-1.webp",
  images: [
    "/images/penteado-noiva-negra-1.webp",
    "/images/penteado-noiva-negra-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais tipos de penteados vocês oferecem para noivas negras?",
    answer: "Oferecemos uma ampla variedade de estilos, incluindo penteados naturais, tranças elaboradas, twists, updos elegantes, e muito mais. Adaptamos cada penteado ao tipo de cabelo e preferências da noiva.",
  },
  {
    question: "É necessário fazer teste do penteado antes do casamento?",
    answer: "Sim! Recomendamos fortemente o teste do penteado para ajustarmos todos os detalhes, avaliar a durabilidade e garantir que o resultado final atenda completamente suas expectativas.",
  },
  {
    question: "Quanto tempo antes do casamento devo agendar o teste?",
    answer: "Sugerimos agendar o teste com 1 a 2 meses de antecedência. Isso nos dá tempo suficiente para fazer ajustes se necessário e planejar o cronograma do dia do casamento.",
  },
  {
    question: "Vocês trabalham com apliques e extensões?",
    answer: "Sim! Trabalhamos com diversos tipos de apliques e extensões de alta qualidade, que podem ser incorporados ao penteado de forma natural e segura.",
  },
];

const PenteadoNoivaNegraPage = () => {
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
      { name: "Penteado Noiva Negra", url: "https://www.studioamendollanoivas.com.br/paginaSeo/penteado-noiva-negra" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Penteados para Noivas Negras - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Penteado Noiva Negra`,
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
                alt={`Penteado Noiva Negra - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Penteados para Noivas Negras</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para seu Penteado</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default PenteadoNoivaNegraPage;
