"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Dia da Noiva VIP para Noivas Negras - Studio Amendolla",
  description: 
    "Experiência exclusiva e luxuosa para noivas negras no Studio Amendolla. Ambiente privativo, champagne, finger foods e equipe especializada dedicada a criar um momento inesquecível no seu grande dia.",
  detailedDescription: `
    O Dia da Noiva VIP do Studio Amendolla foi criado pensando em cada detalhe para tornar sua preparação um momento memorável. Em nosso espaço exclusivo, você terá:

    - Ambiente privativo e climatizado
    - Welcome drink com champagne
    - Café da manhã especial e finger foods
    - Equipe especializada em beleza negra
    - Playlist personalizada
    - Sessão de fotos durante a produção
    - Kit emergência personalizado
    - Assistência durante todo o processo

    Nossa equipe expert em beleza negra cuida de cada detalhe da sua produção, desde tratamentos preparatórios até os toques finais, garantindo que você se sinta verdadeiramente especial e deslumbrante.`,
  image: "/images/dia-noiva-negra-vip-1.webp",
  images: [
    "/images/dia-noiva-negra-vip-1.webp",
    "/images/dia-noiva-negra-vip-2.webp",
  ],
};

const faqData = [
  {
    question: "Quanto tempo dura a experiência do Dia da Noiva VIP?",
    answer: "A experiência completa tem duração média de 6 a 8 horas, permitindo que você aproveite cada momento com tranquilidade e conforto.",
  },
  {
    question: "Posso levar acompanhantes?",
    answer: "Sim! O pacote VIP permite até 3 acompanhantes que poderão compartilhar esse momento especial com você, desfrutando do ambiente e serviços exclusivos.",
  },
  {
    question: "O que está incluso no kit emergência?",
    answer: "O kit inclui produtos específicos para retoques, como base, batom, óleo controlador de brilho, grampos, lixa, band-aids e outros itens essenciais personalizados para suas necessidades.",
  },
  {
    question: "Como funciona a sessão de fotos durante a produção?",
    answer: "Contamos com fotógrafo profissional que registra todos os momentos da sua produção, desde o início até o look final, entregando um álbum digital com as melhores fotos.",
  },
];

const DiaNoivaNegraVIPPage = () => {
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
      { name: "Dia da Noiva VIP", url: "https://www.studioamendollanoivas.com.br/paginaSeo/dia-noiva-negra-vip" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Dia da Noiva VIP para Noivas Negras - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Dia da Noiva VIP`,
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
                alt={`Dia da Noiva VIP - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre o Dia da Noiva VIP</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para seu Dia da Noiva VIP</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default DiaNoivaNegraVIPPage;
