"use client";

import React, { useState } from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // Novo arquivo CSS
import GaleriaDeFotos from "app/components/GaleriaDeFotos";
import FeaturesCards from "app/components/FeaturesCards";
import ServiceSimulator from "app/components/calculadora";

const serviceData = {
  title: "Beleza para Noivas em SP - Studio Amendolla",
  description:
    "Descubra os melhores serviços de beleza para noivas em São Paulo com o Studio Amendolla. Maquiagem, penteados e tratamentos exclusivos para o seu dia especial.",
  detailedDescription: `
    No Studio Amendolla, oferecemos serviços de beleza especializados para noivas em São Paulo. Nossa equipe de profissionais altamente qualificados está pronta para transformar o seu dia especial em um momento inesquecível. Com maquiagem impecável, penteados elegantes e tratamentos relaxantes, garantimos que você estará radiante no seu casamento.`,
  image: "/images/beleza-noivas-sp.webp",
  images: [
    "/images/maquiagem-noiva-sp-1.webp",
    "/images/penteado-noiva-sp-1.webp",
    "/images/tratamentos-noivas-sp-1.webp",
  ],
};

const faqData = [
    {
      question: "Quais serviços de beleza são oferecidos para noivas em SP?",
      answer:
        "Oferecemos maquiagem profissional, penteados elegantes, tratamentos de pele e massagens relaxantes, tudo personalizado para o seu dia especial.",
    },
    {
      question: "Como agendar um horário para maquiagem de noiva?",
      answer:
        "Entre em contato conosco via WhatsApp ou preencha o formulário de orçamento em nosso site para agendar seu horário.",
    },
    {
      question: "Quais produtos são utilizados nos serviços de maquiagem?",
      answer:
        "Utilizamos produtos de alta qualidade, como bases leves, iluminadores e sombras de marcas renomadas, garantindo durabilidade e um acabamento perfeito.",
    },
    {
      question: "O Studio Amendolla atende em domicílio?",
      answer:
        "Sim, oferecemos atendimento a domicílio para maior comodidade das noivas. Consulte-nos para mais detalhes.",
    },
    {
      question: "Qual é o valor médio dos serviços de maquiagem para noivas?",
      answer:
        "O valor varia conforme o pacote escolhido e os serviços adicionais. Entre em contato para receber um orçamento personalizado.",
    },
    {
      question: "É possível fazer um teste de maquiagem antes do casamento?",
      answer:
        "Sim, recomendamos agendar um teste de maquiagem para garantir que o look desejado combine com o seu estilo e o tema do casamento.",
    },
  ];

const BelezaNoivasSPPage = () => {
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
      { name: "Beleza para Noivas em SP", url: "https://www.studioamendollanoivas.com.br/beleza-noivas-sp" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Beleza para Noivas em SP - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Beleza para Noivas em SP`,
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
      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1 className={styles.title}>{serviceData.title}</h1>
        <p className={styles.description}>{serviceData.description}</p>
      </header>

      {/* Carrossel e Formulário */}
      <div className={styles.carouselFormContainer}>

        {/* Carrossel de Imagens */}
        <div className={styles.carouselColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Beleza para Noivas em SP - ${currentImage + 1}`}
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

        
             {/* Seção de Serviços */}
             <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Beleza para Noivas em SP</h2>
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
      {/* Galeria de Fotos */}

      {/* FAQ */}
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
      <FeaturesCards />
      <ServiceSimulator/>
        
      </section>      
      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Maquiagem impecável para noivas, com produtos de alta qualidade e durabilidade.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Elegantes</h3>
            <p>Penteados modernos e clássicos, perfeitos para o seu dia especial.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tratamentos de Pele</h3>
            <p>Tratamentos relaxantes e revitalizantes para uma pele radiante.</p>
          </div>
        </div>
      </section>

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default BelezaNoivasSPPage;