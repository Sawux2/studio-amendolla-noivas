"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiagem para Debutantes - Studio Amendolla",
  description: 
    "Maquiagem especial para debutantes na Zona Norte de SP. Realce sua beleza natural com um look jovem e sofisticado, perfeito para fotos e vídeos dos seus 15 anos.",
  detailedDescription: `
    O Studio Amendolla é especialista em maquiagem para debutantes:

    SERVIÇOS EXCLUSIVOS:
    - Maquiagem jovem e sofisticada
    - Produtos hipoalergênicos
    - Técnicas para pele jovem
    - Cílios naturais inclusos
    - Preparação especial da pele
    - Look duradouro para festa
    
    BENEFÍCIOS:
    - Teste de maquiagem incluso
    - Ambiente teen friendly
    - Dicas de skincare
    - Kit retoque para a festa
    - Suporte durante o evento
    - Maquiagem à prova d'água

    Pacotes especiais incluindo maquiagem para mãe da debutante e amigas.`,
  image: "/images/maquiagem-debutante-1.webp",
  images: [
    "/images/maquiagem-debutante-1.webp",
    "/images/maquiagem-debutante-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual o melhor momento para fazer o teste?",
    answer: "Recomendamos fazer o teste 15 dias antes da festa, assim podemos ajustar todos os detalhes do look.",
  },
  {
    question: "A maquiagem aguenta a festa toda?",
    answer: "Sim! Utilizamos produtos específicos de alta durabilidade que garantem um look perfeito do início ao fim da festa.",
  },
  {
    question: "Posso trazer referências de looks?",
    answer: "Claro! Adoramos trabalhar com referências para criar um look que combine com seu estilo e personalidade.",
  },
  {
    question: "Fazem maquiagem para as amigas da debutante?",
    answer: "Sim! Temos pacotes especiais para a debutante e suas amigas, com condições especiais para grupos.",
  },
];

const MaquiagemDebutantesPage = () => {
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
      { name: "Maquiagem Debutantes", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-debutantes" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Debutantes - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem Debutante`,
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
                alt={`Maquiagem Debutante - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Debutantes</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para sua Festa de 15 Anos</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default MaquiagemDebutantesPage;
