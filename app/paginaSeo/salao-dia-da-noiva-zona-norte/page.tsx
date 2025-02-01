"use client";

import React, { useState } from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import GaleriaDeFotos from "app/components/GaleriaDeFotos";
import FeaturesCards from "app/components/FeaturesCards";
import ServiceSimulator from "app/components/calculadora";

// Dados otimizados com foco em SEO
const serviceData = {
  title: "Dia da Noiva Zona Norte SP - Studio Amendolla | Maquiagem, Penteados e Cuidados",
  description:
    "Descubra os melhores serviços de beleza para noivas na Zona Norte de São Paulo. Oferecemos maquiagem profissional, penteados exclusivos e tratamentos personalizados no Studio Amendolla.",
  detailedDescription: `Prepare-se para o seu grande dia com os melhores serviços de beleza para noivas em São Paulo. No Studio Amendolla, cuidamos de todos os detalhes: desde a maquiagem perfeita até penteados elegantes, além de tratamentos especiais para garantir que você se sinta deslumbrante no seu casamento.`,
  image: "/images/salao-dia-da-noiva-zona-norte-sp.webp",
  images: [
    "/images/maquiagem-noiva-zona-norte-1.webp",
    "/images/penteado-noiva-zona-norte-1.webp",
    "/images/tratamentos-noivas-zona-norte-1.webp",
  ],
};

const faqData = [
  {
    question: "Quais serviços de beleza para noivas estão disponíveis na Zona Norte de SP?",
    answer:
      "No Studio Amendolla, você encontra maquiagem personalizada, penteados sofisticados, tratamentos de pele exclusivos, massagens relaxantes e muito mais, tudo pensando na sua beleza no grande dia.",
  },
  {
    question: "Como posso agendar os serviços para o meu casamento?",
    answer:
      "Agendar é simples! Basta entrar em contato via WhatsApp ou preencher nosso formulário online para garantir o seu horário e a disponibilidade da nossa equipe para o dia do seu casamento.",
  },
  {
    question: "O Studio Amendolla oferece maquiagem para noivas em domicílio?",
    answer:
      "Sim, realizamos maquiagem e penteados para noivas no conforto da sua casa. Consulte-nos para mais detalhes sobre o serviço de maquiagem e penteado para noiva a domicílio.",
  },
  {
    question: "Quais os preços para os serviços de beleza para noivas?",
    answer:
      "Os preços variam de acordo com os pacotes e serviços adicionais escolhidos. Entre em contato para um orçamento personalizado que atenda às suas necessidades e expectativas para o seu dia especial.",
  },
  {
    question: "Posso fazer um teste de maquiagem antes do casamento?",
    answer:
      "Sim, recomendamos que as noivas agendem um teste de maquiagem para garantir que o estilo desejado combine com o tema do casamento e o seu estilo pessoal.",
  },
];

const SalaoDiaDaNoivaZonaNorteSPPage = () => {
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
      author: "Priscila Helena",
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
      { name: "Salão Dia da Noiva Zona Norte SP", url: "https://www.studioamendollanoivas.com.br/salao-dia-da-noiva-zona-norte-sp" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Salão Dia da Noiva Zona Norte SP - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Salão Dia da Noiva Zona Norte SP`,
      datePublished: "2025-01-18",
      author: "Priscila Helena",
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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{serviceData.title}</h1>
        <p className={styles.description}>{serviceData.description}</p>
      </header>

      <div className={styles.carouselFormContainer}>
        <div className={styles.carouselColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Salão Dia da Noiva Zona Norte SP - ${currentImage + 1}`}
                width={400}
                height={300}
                className={styles.serviceImage}
                quality={80}
                priority={currentImage === 0}
              />
            </div>
            <button onClick={handleNextImage} className={styles.carouselButton}>❯</button>
          </div>
        </div>

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Beleza para Noivas na Zona Norte SP</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Maquiagem Profissional</h3>
              <p>
                Maquiagem impecável para noivas, com produtos de alta qualidade e durabilidade.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Penteados Elegantes</h3>
              <p>
                Penteados modernos e clássicos, perfeitos para o seu dia especial.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Tratamentos de Pele</h3>
              <p>
                Tratamentos relaxantes e revitalizantes para uma pele radiante.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Atendimento Personalizado</h3>
              <p>
                Atendimento exclusivo para noivas, garantindo um serviço sob medida para cada estilo.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5511977670498?text=Olá%2C%20estou%20visitando%20o%20site%20studioamendollanoivas.com.br%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
            className={styles.whatsappButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco no WhatsApp
          </a>
        </section>
      </div>

      <GaleriaDeFotos />
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <FeaturesCards />
      <ServiceSimulator />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default SalaoDiaDaNoivaZonaNorteSPPage;
