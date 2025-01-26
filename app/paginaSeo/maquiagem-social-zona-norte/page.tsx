"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem Social - Studio Amendolla",
  description:
    "A maquiagem social do Studio Amendolla é a escolha perfeita para realçar sua beleza de forma sofisticada em eventos especiais. Ideal para festas, jantares, aniversários e outras ocasiões importantes.",
  detailedDescription: `
    No Studio Amendolla, oferecemos serviços de maquiagem social para eventos que exigem um visual elegante e moderno. A maquiagem social é uma opção perfeita para quem deseja um look sofisticado, mas sem exageros, mantendo a naturalidade da pele e realçando os traços do rosto de maneira sutil. Seja para um jantar, uma festa de aniversário ou um evento social importante, nossa equipe especializada cria maquiagens personalizadas, usando produtos de alta qualidade para garantir uma pele impecável, com acabamentos de longa duração.

    Nossos maquiadores trabalham com técnicas que valorizam o seu estilo único e a sua personalidade, criando looks que vão desde os mais clássicos e neutros até os mais ousados e modernos. A maquiagem social é pensada para oferecer conforto, resistência ao longo do evento e, ao mesmo tempo, destacar sua beleza de forma natural e sofisticada. No Studio Amendolla, garantimos que você se sinta confiante e deslumbrante em qualquer ocasião.`,
  image: "/images/maquiagem-social-studio-amendolla-1.webp",
  images: [
    "/images/maquiagem-social-studio-amendolla-1.webp",
    "/images/maquiagem-social-studio-amendolla-2.webp",
    "/images/maquiagem-social-studio-amendolla-3.webp",
  ],
};

const faqData = [
  {
    question: "O que é maquiagem social e para quais eventos ela é indicada?",
    answer:
      "A maquiagem social é uma maquiagem mais leve e sofisticada, ideal para eventos como festas, jantares, aniversários e outras ocasiões que exigem um visual elegante, mas sem exageros. Ela realça a beleza natural e proporciona um acabamento impecável.",
  },
  {
    question: "Quais são os benefícios de fazer maquiagem social no Studio Amendolla?",
    answer:
      "No Studio Amendolla, oferecemos maquiagens personalizadas de alta qualidade, com produtos de longa duração que garantem um visual perfeito durante todo o evento. Nossos profissionais são especializados em criar looks sofisticados, confortáveis e duradouros, adaptados ao estilo de cada cliente.",
  },
  {
    question: "A maquiagem social é indicada para todos os tipos de pele?",
    answer:
      "Sim! A maquiagem social é feita de acordo com as necessidades de cada tipo de pele. No Studio Amendolla, utilizamos produtos específicos para pele oleosa, seca ou mista, garantindo um resultado natural e duradouro para todos os tipos de pele.",
  },
  {
    question: "Quanto tempo dura uma maquiagem social?",
    answer:
      "A maquiagem social do Studio Amendolla é projetada para durar o evento inteiro. Usamos produtos de alta qualidade e técnicas de aplicação que garantem a durabilidade, mesmo em eventos longos ou em condições desafiadoras, como calor ou umidade.",
  },
];

const MaquiagemSocialPage = () => {
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
      { name: "Maquiagem Social", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-social" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem Social - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem Social`,
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
                alt={`Maquiagem Social - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem Social</h2>
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
          <h2>Solicite um Orçamento para Maquiagem Social</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemSocialPage;
