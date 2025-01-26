"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Penteados para Casamento - Studio Amendolla",
  description:
    "No Studio Amendolla, criamos penteados incríveis para casamento, que atendem aos mais variados estilos de noivas e madrinhas, garantindo elegância e sofisticação no seu grande dia.",
  detailedDescription: `
    Os penteados para casamento do Studio Amendolla são feitos para destacar a beleza de cada noiva, de forma única e especial. Desde os clássicos penteados com coque ou tranças até os estilos mais modernos e ousados, como os penteados soltos com ondas suaves ou semi-presos, trabalhamos com as técnicas mais atuais para garantir que o seu visual seja perfeito.

    Nossa equipe é especializada em adaptar o penteado ao estilo do seu casamento, seja ele tradicional, contemporâneo, ou ao ar livre. Usamos acessórios delicados como tiaras, flores naturais ou detalhes brilhantes, dependendo do look que você deseja criar. O Studio Amendolla também oferece serviços para madrinhas, garantindo que todas as convidadas estejam deslumbrantes e em harmonia com a noiva.`,
  image: "/images/penteado-casamento-1.webp",
  images: [
    "/images/penteado-casamento-1.webp",
    "/images/penteado-casamento-2.webp",
  ],
};

const faqData = [
  {
    question: "Como escolher o penteado ideal para o meu casamento?",
    answer:
      "A escolha do penteado ideal depende do estilo do seu casamento, tipo de vestido e preferência pessoal. O Studio Amendolla oferece uma consultoria personalizada para ajudar você a encontrar o penteado perfeito que combine com sua personalidade e o tema do casamento.",
  },
  {
    question: "O penteado para casamento é resistente ao longo do evento?",
    answer:
      "Sim! Utilizamos técnicas e produtos de alta qualidade para garantir que o seu penteado dure o dia todo, mesmo durante a dança e fotos. O uso de fixadores e acessórios apropriados contribui para a durabilidade do penteado.",
  },
  {
    question: "Posso fazer uma prova de penteado antes do casamento?",
    answer:
      "Sim! No Studio Amendolla, agendamos uma prova de penteado para que você experimente diferentes estilos e escolha o que mais lhe agrada, garantindo que tudo esteja perfeito no grande dia.",
  },
  {
    question: "Posso incluir acessórios no meu penteado de casamento?",
    answer:
      "Claro! Podemos incluir tiaras, flores, presilhas e outros acessórios, de acordo com o seu gosto e o estilo do casamento. Durante a consulta, discutimos as opções que mais combinam com o seu look e o tema do evento.",
  },
];

const PenteadosCasamentoPage = () => {
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
      { name: "Penteados para Casamento", url: "https://www.studioamendollanoivas.com.br/paginaSeo/penteados-para-casamento" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Penteados para Casamento - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Penteados para Casamento`,
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
                alt={`Penteados para Casamento - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Penteados para Casamento</h2>
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
          <h2>Solicite um Orçamento para Penteados para Casamento</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default PenteadosCasamentoPage;
