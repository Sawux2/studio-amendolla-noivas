"use client";
import React from "react";
import Image from "next/image";
import styles from "app/styles/BelezaNoivasSP.module.css";
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";
import ArticleSchema from "app/schemas/ArticleSchema";
import BreadcrumbSchema from "app/schemas/BreadcrumbSchema";
import FAQSchema from "app/schemas/FAQSchema";
import ImageObjectSchema from "app/schemas/ImageObjectSchema";
import ServiceSchema from "app/schemas/ServiceSchema";
import OrganizationSchema from "app/schemas/organizationSchema";
import WebsiteSchema from "app/schemas/WebsiteSchema";

const pageData = {
  article: {
    headline: "Beleza para Eventos: Maquiagem e Penteados Personalizados",
    description:
      "Transforme seu visual para festas e eventos com nossos serviços de maquiagem e penteados personalizados. No Studio Amendolla, garantimos que você se destaque em qualquer ocasião.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/beleza-eventos.webp",
  },
  faq: [
    {
      question: "Quais serviços de beleza vocês oferecem para eventos?",
      answer: "Oferecemos maquiagem, penteados e pacotes completos para festas, formaturas e outros eventos especiais."
    },
    {
      question: "Como posso agendar um teste de beleza?",
      answer: "Você pode agendar um teste de beleza pelo WhatsApp ou preenchendo o formulário de contato em nosso site."
    },
    {
      question: "Vocês atendem em domicílio?",
      answer: "Sim, oferecemos atendimento a domicílio para maior conforto e comodidade."
    }
  ],
  services: [
    {
      title: "Maquiagem para Festas",
      description: "Realce sua beleza com uma maquiagem que combina com seu estilo e a temática do evento.",
      image: "/images/beleza-eventos.webp",
    },
    {
      title: "Penteado Elegante para Eventos",
      description: "Crie um penteado que complemente seu look, seja um coque sofisticado ou ondas soltas.",
      image: "/images/beleza-eventos.webp",
    },
    {
      title: "Pacote Completo de Beleza para Eventos",
      description: "Oferecemos pacotes que incluem maquiagem e penteado, garantindo que você esteja perfeita para a ocasião.",
      image: "/images/beleza-eventos.webp",
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Beleza para Eventos", url: "/busca" }
  ],
  images: [
    {
      url: "/images/beleza-eventos.webp",
      description: "Beleza para Eventos - Studio Amendolla",
      width: 500,
      height: 333,
      name: "Beleza para Eventos",
      datePublished: "2025-03-01"
    }
  ]
};

const BelezaParaEventosPage = () => {
  const articleData = {
    headline: pageData.article.headline,
    description: pageData.article.description,
    author: pageData.article.author,
    datePublished: pageData.article.datePublished,
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/busca"
  };

  const breadcrumbData = {
    items: pageData.breadcrumb.map((item, index) => ({
      name: item.name,
      item: item.url,
      position: index + 1
    }))
  };

  const serviceSchemaData = {
    name: pageData.article.headline,
    description: pageData.article.description,
    provider: "Studio Amendolla",
    areaServed: "São Paulo",
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "/paginaSeo/busca",
    serviceType: "Maquiagem e Penteado",
    offers: [{
      price: 300,
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
    description: pageData.article.description,
    inLanguage: "pt-BR",
    keywords: [
      "maquiagem eventos SP",
      "penteado festas",
      "beleza eventos São Paulo",
      "make festa",
      "studio amendolla eventos",
      "produção festa SP"
    ]
  };

  return (
    <div className={styles.container}>
      {/* SEO Schemas */}
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema data={breadcrumbData} />
      <FAQSchema data={{ items: pageData.faq }} />
      <ServiceSchema data={serviceSchemaData} />
      <OrganizationSchema data={organizationData} />
      <WebsiteSchema data={websiteData} />
      {pageData.images.map((imgData, index) => (
        <ImageObjectSchema 
          key={index} 
          data={{
            ...imgData,
            url: `https://www.studioamendollanoivas.com.br${imgData.url}`,
            contentUrl: `https://www.studioamendollanoivas.com.br${imgData.url}`,
            caption: imgData.description
          }} 
        />
      ))}

      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      {/* Conteúdo Principal */}
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Beleza para Eventos"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Personalizada para o Seu Evento</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos serviços de beleza personalizados para eventos. Nossa equipe especializada trabalha para criar o visual perfeito para você. Seja para uma festa, formatura ou qualquer outra ocasião, temos as melhores opções para destacar sua beleza.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20meu%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza para Eventos no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteados Personalizados para Eventos</h2>
        <div className={styles.servicesGrid}>
          {pageData.services.map(service => (
            <div key={service.title} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Eventos</h2>
        <div className={styles.faqGrid}>
          {pageData.faq.map(item => (
            <details key={item.question} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Outros Componentes */}
      <FeaturesCards />
      <ServiceSimulator />
    </div>
  );
};

export default BelezaParaEventosPage;
