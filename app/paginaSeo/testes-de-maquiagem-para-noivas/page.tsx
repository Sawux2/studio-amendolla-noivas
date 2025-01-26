"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Testes de Maquiagem para Noivas - Studio Amendolla",
  description:
    "No Studio Amendolla, oferecemos serviços exclusivos de teste de maquiagem para noivas, garantindo que você esteja perfeita para o grande dia. Agende seu teste e sinta-se segura com o visual escolhido.",
  detailedDescription: `
    O teste de maquiagem para noivas é essencial para garantir que você esteja completamente satisfeita com o look escolhido para o grande dia. No Studio Amendolla, oferecemos um atendimento personalizado, onde nossa maquiadora experiente ajudará a definir o estilo de maquiagem ideal para o seu casamento.

    Durante o teste, você pode experimentar diferentes estilos, desde um visual mais natural até algo mais glamouroso. A maquiagem é adaptada ao seu tipo de pele, formato do rosto e preferências pessoais, garantindo que o resultado final seja exatamente como você imaginou.

    Realizamos o teste com os mesmos produtos e técnicas que serão usados no dia do casamento, para que você se sinta confortável e segura com o visual final. Nosso objetivo é proporcionar confiança e tranquilidade, para que você possa aproveitar o dia do seu casamento com a certeza de que estará linda e radiante.`,
  image: "/images/teste-maquiagem-noiva-1.webp",
  images: [
    "/images/teste-maquiagem-noiva-1.webp",
  ],
};

const faqData = [
  {
    question: "O que está incluído no teste de maquiagem para noivas?",
    answer:
      "O teste inclui a aplicação completa da maquiagem, com escolha de base, sombra, cílios e outros detalhes. É uma oportunidade para ajustar o visual antes do grande dia.",
  },
  {
    question: "Quando devo agendar o teste de maquiagem?",
    answer:
      "Recomendamos agendar o teste de maquiagem entre 1 a 2 meses antes do casamento, para garantir que você tenha tempo de fazer ajustes, se necessário.",
  },
  {
    question: "Posso experimentar diferentes estilos de maquiagem durante o teste?",
    answer:
      "Sim! Durante o teste, você pode experimentar diferentes estilos e ajustes, até encontrar o visual perfeito para o seu casamento.",
  },
  {
    question: "Os produtos usados no teste serão os mesmos do dia do casamento?",
    answer:
      "Sim! Utilizamos os mesmos produtos no teste que serão usados no dia do casamento, para garantir que o visual seja exatamente o que você deseja.",
  },
];

const TestesMaquiagemNoivasPage = () => {
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
      { name: "Testes de Maquiagem para Noivas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/testes-maquiagem-noivas" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Testes de Maquiagem para Noivas - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Testes de Maquiagem para Noivas`,
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
                alt={`Testes de Maquiagem para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Testes de Maquiagem para Noivas</h2>
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
          <h2>Solicite um Orçamento para Teste de Maquiagem para Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default TestesMaquiagemNoivasPage;
