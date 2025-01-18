"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Pele Oleosa e Brilho - Studio Amendolla",
  description:
    "Controle o excesso de brilho e realce sua beleza com técnicas e produtos específicos para pele oleosa. Obtenha uma maquiagem duradoura e impecável para qualquer ocasião.",
  detailedDescription: `
    Maquiagem para pele oleosa exige atenção especial ao preparo da pele e à escolha de produtos adequados. No Studio Amendolla, utilizamos primers e bases com efeito matte, além de técnicas que ajudam a controlar o brilho ao longo do dia. Nosso objetivo é proporcionar um acabamento natural e sofisticado, garantindo que sua maquiagem permaneça impecável mesmo em eventos longos. Ideal para quem busca confiança e beleza em qualquer ocasião.
  `,
  image: "/images/maquiagem-pele-oleosa.webp",
  images: [
    "/images/maquiagem-pele-oleosa-1.webp",
    "/images/maquiagem-pele-oleosa-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais produtos são indicados para pele oleosa?",
    answer:
      "Produtos com acabamento matte e livres de óleo são ideais. Priorizamos o uso de primers que controlam a oleosidade, bases com longa duração e pós compactos para selar a maquiagem.",
  },
  {
    question: "Como evitar o brilho excessivo na maquiagem?",
    answer:
      "Preparar a pele é fundamental: limpeza, hidratação com produtos específicos e uso de primers matte ajudam a reduzir o brilho. Além disso, o uso de papel absorvente ao longo do dia ajuda a manter o visual fresco.",
  },
  {
    question: "A maquiagem para pele oleosa dura mais?",
    answer:
      "Com a técnica e os produtos corretos, a maquiagem para pele oleosa pode durar muito mais. No Studio Amendolla, garantimos alta fixação e controle do brilho.",
  },
  {
    question: "A maquiagem para pele oleosa é indicada para todos os tipos de eventos?",
    answer:
      "Sim, a maquiagem para pele oleosa é adaptável para qualquer ocasião, desde eventos diurnos até festas à noite, garantindo sempre um visual impecável.",
  },
];

const MaquiagemPeleOleosaBrilhoPage = () => {
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
      author: "Priscila Amendolla",
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
      { name: "Maquiagem para Pele Oleosa e Brilho", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-pele-oleosa-e-brilho" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Pele Oleosa e Brilho - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Pele Oleosa e Brilho`,
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
        {/* Primeira Coluna: Carrossel de Imagens e Descrição Detalhada */}
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Maquiagem para Pele Oleosa e Brilho - ${currentImage + 1}`}
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

        {/* Segunda Coluna: Conteúdo e FAQ */}
        <div className={styles.contentColumn}>
          <div className={styles.descriptionSection}>
            <p>{serviceData.description}</p>
          </div>
          <div className={styles.faqSection}>
            <h2>Perguntas Frequentes sobre Maquiagem para Pele Oleosa e Brilho</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terceira Coluna: Formulário de Orçamento */}
        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para Maquiagem para Pele Oleosa e Brilho</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemPeleOleosaBrilhoPage;
