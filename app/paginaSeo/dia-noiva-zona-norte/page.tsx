"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Dia da Noiva na Zona Norte SP - Studio Amendolla",
  description: 
    "O melhor studio para noivas da Zona Norte de São Paulo. Localização privilegiada, fácil acesso e estrutura completa para tornar seu dia ainda mais especial. Experiência única em um dos melhores pontos da região.",
  detailedDescription: `
    O Studio Amendolla é referência em produção de noivas na Zona Norte de São Paulo. Nossa localização estratégica oferece:

    - Fácil acesso às principais vias da Zona Norte
    - Proximidade com Santana, Tucuruvi e região
    - Estacionamento próprio e seguro
    - Ambiente amplo e climatizado
    - Estrutura completa para sua produção
    
    Nosso espaço foi planejado para proporcionar conforto e praticidade, permitindo que você realize toda sua produção sem precisar se deslocar para longe. Contamos com equipe especializada e anos de experiência atendendo noivas da região.

    Oferecemos pacotes completos incluindo:
    - Maquiagem profissional
    - Penteado
    - Tratamentos de beleza
    - Serviços para madrinhas e mães
    - Ambiente exclusivo para fotos
    - Assistência personalizada`,
  image: "/images/dia-noiva-zona-norte-1.webp",
  images: [
    "/images/dia-noiva-zona-norte-1.webp",
    "/images/dia-noiva-zona-norte-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual a localização exata do Studio na Zona Norte?",
    answer: "Estamos localizados em área nobre da Zona Norte, com fácil acesso às principais vias da região. Próximo ao metrô e principais avenidas.",
  },
  {
    question: "O studio possui estacionamento?",
    answer: "Sim! Contamos com estacionamento próprio e seguro para sua comodidade e de seus acompanhantes.",
  },
  {
    question: "Atendem noivas de outras regiões de São Paulo?",
    answer: "Sim! Apesar de sermos referência na Zona Norte, atendemos noivas de todas as regiões de São Paulo, oferecendo a mesma qualidade e excelência.",
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Funcionamos com horário especial para noivas, adaptando nossos horários de acordo com o início da cerimônia. Inclusive aos finais de semana.",
  },
];

const DiaNoivaZonaNortePage = () => {
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
      { name: "Dia da Noiva Zona Norte", url: "https://www.studioamendollanoivas.com.br/paginaSeo/dia-noiva-zona-norte" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Dia da Noiva Zona Norte SP - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Dia da Noiva Zona Norte`,
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
                alt={`Dia da Noiva Zona Norte - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Dia da Noiva na Zona Norte</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para seu Dia da Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default DiaNoivaZonaNortePage;
