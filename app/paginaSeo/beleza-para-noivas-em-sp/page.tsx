"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/BelezaNoivasSP.module.css";
import GaleriaDeFotos from "@/components/GaleriaDeFotos";
import FeaturesCards from "@/components/FeaturesCards";
import ServiceSimulator from "@/components/calculadora";
import ArticleSchema from "@/schemas/ArticleSchema";
import BreadcrumbSchema from "@/schemas/BreadcrumbSchema";
import FAQSchema from "@/schemas/FAQSchema";
import ImageObjectSchema from "@/schemas/ImageObjectSchema";
import ServiceSchema from "@/schemas/ServiceSchema";
import OrganizationSchema from "@/schemas/organizationSchema";
import WebsiteSchema from "@/schemas/WebsiteSchema";

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

  const articleData = {
    headline: serviceData.title,
    description: serviceData.description,
    author: "Priscila Helena",
    datePublished: "2025-01-18",
    image: [`https://www.studioamendollanoivas.com.br${serviceData.image}`],
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/beleza-para-noivas-em-sp"
  };

  const breadcrumbData = {
    items: [
      { name: "Início", item: "/", position: 1 },
      { name: "Serviços", item: "/servicos", position: 2 },
      { name: "Beleza para Noivas em SP", item: "/paginaSeo/beleza-para-noivas-em-sp", position: 3 }
    ]
  };

  const serviceSchemaData = {
    name: serviceData.title,
    description: serviceData.description,
    provider: "Studio Amendolla",
    areaServed: "São Paulo",
    image: [`https://www.studioamendollanoivas.com.br${serviceData.image}`],
    url: "/paginaSeo/beleza-para-noivas-em-sp",
    serviceType: "Maquiagem e Penteado",
    offers: [{
      price: 600,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      validFrom: "2024-05-17"
    }]
  };

  const organizationData = {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: "Especialistas em maquiagem e penteados para noivas em São Paulo",
    logoUrl: "/images/logo.webp",
    telephone: "+55 11 97767-0498",
    contactType: "customer service",
    areaServed: "São Paulo",
    sameAs: [
      "https://www.instagram.com/studioamendolla",
      "https://www.facebook.com/studioamendolla"
    ],
    address: {
      streetAddress: "Avenida Julio Buono 2386",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "02201-002",
      addressCountry: "BR"
    }
  };

  const websiteData = {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: serviceData.description,
    inLanguage: "pt-BR",
    keywords: [
      "beleza noiva SP",
      "maquiagem noiva São Paulo",
      "penteado noiva SP",
      "studio amendolla noivas",
      "make noiva zona norte",
      "dia da noiva SP"
    ]
  };

  return (
    <div className={styles.container}>
      {/* SEO Schemas */}
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema data={breadcrumbData} />
      <FAQSchema data={{ items: faqData }} />
      <ServiceSchema data={serviceSchemaData} />
      <OrganizationSchema data={organizationData} />
      <WebsiteSchema data={websiteData} />
      {serviceData.images.map((imgData, index) => (
        <ImageObjectSchema 
          key={index} 
          data={{
            url: `https://www.studioamendollanoivas.com.br${imgData}`,
            description: serviceData.description,
            width: 600,
            height: 400,
            name: `Beleza para Noivas em SP - Imagem ${index + 1}`,
            caption: "Serviços de beleza para noivas"
          }} 
        />
      ))}

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
    </div>
  );
};

export default BelezaNoivasSPPage;