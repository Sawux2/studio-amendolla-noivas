"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Pacote VIP para Noivas na Zona Norte SP - Studio Amendolla",
  description: 
    "Experiência exclusiva e luxuosa para noivas na Zona Norte de São Paulo. Ambiente privativo, serviços premium e atendimento personalizado para tornar seu dia ainda mais especial.",
  detailedDescription: `
    O Pacote VIP do Studio Amendolla oferece uma experiência única e sofisticada:

    EXPERIÊNCIA PREMIUM:
    - Ambiente exclusivo e privativo
    - Welcome drink com champagne
    - Café da manhã gourmet   - 
    - Sessão de fotos profissional
    
    SERVIÇOS EXCLUSIVOS:
    - Maquiagem com produtos importados de luxo
    - Penteado com técnicas exclusivas
    - Tratamentos de beleza preparatórios
    - Assistente pessoal dedicada
    - Transfer para local do evento (opcional)

    BENEFÍCIOS ADICIONAIS:
    - Horário exclusivo no studio
    - Suporte pós-evento
    - Álbum digital da produção`,
  image: "/images/pacote-vip-zona-norte-1.webp",
  images: [
    "/images/pacote-vip-zona-norte-1.webp",
    "/images/pacote-vip-zona-norte-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais as vantagens do Pacote VIP?",
    answer: "O Pacote VIP oferece exclusividade total, produtos premium, ambiente privativo, assistente pessoal, serviços extras de beleza e uma experiência luxuosa completa.",
  },
  {
    question: "Quantos acompanhantes posso levar?",
    answer: "O Pacote VIP permite até 4 acompanhantes, que poderão desfrutar do ambiente exclusivo e serviços de buffet junto com a noiva.",
  },
  {
    question: "Como funciona o serviço de transfer?",
    answer: "Oferecemos transfer opcional em carro executivo para a noiva e acompanhantes, do studio até o local do evento, com todo conforto e segurança.",
  },
  {
    question: "Quais tratamentos preparatórios estão inclusos?",
    answer: "Incluímos tratamentos faciais, cuidados com o cabelo e outros serviços de beleza nas semanas que antecedem o casamento, personalizados para cada noiva.",
  },
];

const PacoteVIPNoivaZonaNortePage = () => {
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
      { name: "Pacote VIP Zona Norte", url: "https://www.studioamendollanoivas.com.br/paginaSeo/pacote-vip-noiva-zona-norte" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Pacote VIP para Noivas Zona Norte SP - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Pacote VIP Noiva Zona Norte`,
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
                alt={`Pacote VIP Noiva Zona Norte - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre o Pacote VIP</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para seu Pacote VIP</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default PacoteVIPNoivaZonaNortePage;
