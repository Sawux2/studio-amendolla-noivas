"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Pacotes de Beleza para Noivas - Studio Amendolla",
  description:
    "No Studio Amendolla, oferecemos pacotes exclusivos de beleza para noivas, com serviços completos de maquiagem, cabelo e cuidados especiais para o grande dia. Faça seu dia ainda mais inesquecível com nossos pacotes personalizados.",
  detailedDescription: `
    Cada noiva é única, por isso, nossos pacotes de beleza são totalmente personalizados para atender às suas necessidades e preferências. Oferecemos pacotes completos com maquiagem, cabelo, e cuidados pré-casamento, garantindo que você se sinta linda e confiante no seu grande dia.

    Os pacotes de beleza incluem serviços como maquiagem impecável e duradoura, penteados personalizados, hidratação e cuidados capilares, além de tratamentos especiais para a pele. Também podemos incluir serviços como manicure e pedicure, tudo para que você se sinta deslumbrante em todos os detalhes.

    Cada pacote é projetado para oferecer o melhor atendimento, com toda a tranquilidade que você merece, para que o seu Dia da Noiva seja perfeito e sem estresse.`,
  image: "/images/pacote-beleza-noiva-1.webp",
  images: [
    "/images/pacote-beleza-noiva-1.webp",
    "/images/pacote-beleza-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "O que está incluído nos pacotes de beleza para noivas?",
    answer:
      "Nossos pacotes incluem maquiagem, cabelo, hidratação capilar, e outros serviços como manicure e pedicure. Podemos personalizar os pacotes de acordo com as suas necessidades.",
  },
  {
    question: "Como posso escolher o pacote ideal para mim?",
    answer:
      "Na consulta, nossa equipe irá entender o seu estilo e necessidades para sugerir o pacote que mais combina com você, incluindo serviços personalizados.",
  },
  {
    question: "Os pacotes de beleza para noivas incluem prova de maquiagem e cabelo?",
    answer:
      "Sim! Incluímos uma prova de maquiagem e cabelo para garantir que o visual final esteja exatamente como você deseja.",
  },
  {
    question: "Os pacotes incluem o serviço para as madrinhas?",
    answer:
      "Sim, podemos incluir serviços de beleza para as madrinhas em nossos pacotes, com condições especiais. Entre em contato para mais informações.",
  },
];

const PacotesBelezaNoivasPage = () => {
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
      { name: "Pacotes de Beleza para Noivas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/pacotes-beleza-noivas" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Pacotes de Beleza para Noivas - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Pacotes de Beleza para Noivas`,
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
                alt={`Pacotes de Beleza para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Pacotes de Beleza para Noivas</h2>
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
          <h2>Solicite um Orçamento para Pacotes de Beleza para Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default PacotesBelezaNoivasPage;
