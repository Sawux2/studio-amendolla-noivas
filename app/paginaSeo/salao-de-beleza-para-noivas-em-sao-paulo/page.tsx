"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Salão de Beleza para Noivas - Studio Amendolla",
  description:
    "No Studio Amendolla, oferecemos um serviço completo de salão de beleza para noivas, garantindo um visual impecável no seu grande dia, com serviços de maquiagem, penteado e cuidados de beleza personalizados.",
  detailedDescription: `
    O Studio Amendolla é o salão de beleza ideal para noivas que buscam um atendimento completo e personalizado no seu grande dia. Nossa equipe de especialistas oferece maquiagem e penteado personalizados, feitos sob medida para cada noiva, levando em consideração o estilo do casamento, vestido e personalidade. 

    Além dos serviços de beleza, oferecemos pacotes especiais para noivas, que incluem tratamentos de cuidados com a pele, unhas e cabelo, tudo para garantir que você se sinta radiante. Trabalhamos com os melhores produtos e as últimas tendências, para garantir um look perfeito que dure o evento inteiro.

    Nossa equipe também cuida de todas as madrinhas e convidadas, garantindo que todas as mulheres da festa estejam deslumbrantes e em sintonia com o tema do casamento.`,
  image: "/images/salao-beleza-noiva-1.webp",
  images: [
    "/images/salao-beleza-noiva-1.webp",
    "/images/salao-beleza-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "O que está incluído nos pacotes de salão de beleza para noivas?",
    answer:
      "Os pacotes incluem serviços de maquiagem, penteado, cuidados com a pele e cabelo. Podemos personalizar os pacotes para incluir outros serviços, como manicure, pedicure e tratamentos especiais.",
  },
  {
    question: "Como posso agendar uma prova de maquiagem e penteado?",
    answer:
      "Basta entrar em contato conosco para agendar a sua prova de maquiagem e penteado. Nossos especialistas ajudarão você a escolher o visual perfeito para o seu grande dia.",
  },
  {
    question: "Posso trazer minhas madrinhas para o salão?",
    answer:
      "Sim! Oferecemos pacotes especiais para madrinhas, mães da noiva e outras convidadas, garantindo que todas as mulheres da festa se sintam especiais e deslumbrantes.",
  },
  {
    question: "O Studio Amendolla oferece tratamentos de beleza antes do casamento?",
    answer:
      "Sim! Oferecemos tratamentos faciais, corporais, de cabelo e unhas, para garantir que você chegue ao seu casamento se sentindo incrível de cabeça aos pés.",
  },
];

const SalaoBelezaNoivaPage = () => {
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
      { name: "Salão de Beleza para Noivas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/salao-de-beleza-para-noivas" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Salão de Beleza para Noivas - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Salão de Beleza para Noivas`,
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
                alt={`Salão de Beleza para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Salão de Beleza para Noivas</h2>
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
          <h2>Solicite um Orçamento para o Salão de Beleza para Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default SalaoBelezaNoivaPage;
