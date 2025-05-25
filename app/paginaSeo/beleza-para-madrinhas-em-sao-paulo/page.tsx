"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/BelezaNoivasSP.module.css";
import ServiceSimulator from "@/components/calculadora";
import FeaturesCards from "@/components/FeaturesCards";
import GaleriaDeFotos from "@/components/GaleriaDeFotos";
import ArticleSchema from "@/schemas/ArticleSchema";
import BreadcrumbSchema from "@/schemas/BreadcrumbSchema";
import FAQSchema from "@/schemas/FAQSchema";
import ImageObjectSchema from "@/schemas/ImageObjectSchema";
import ServiceSchema from "@/schemas/ServiceSchema";
import OrganizationSchema from "@/schemas/organizationSchema";
import WebsiteSchema from "@/schemas/WebsiteSchema";

const pageData = {
  article: {
    headline: "Beleza para Madrinhas em São Paulo | Maquiagem e Penteado Studio Amendolla",
    description: "Transforme seu visual com os serviços exclusivos de beleza para madrinhas em São Paulo oferecidos pelo Studio Amendolla. Maquiagem e penteado personalizados para garantir que você arrase no casamento.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/beleza-para-madrinhas-sao-paulo.webp",
  },
  faq: [
    {
      question: "Posso escolher meu estilo de maquiagem e penteado?",
      answer: "Sim, oferecemos diversos estilos de maquiagem e penteado. Tudo é personalizado para atender às suas preferências e ao estilo do casamento."
    },
    {
      question: "Como posso garantir que o look esteja perfeito para o dia do casamento?",
      answer: "Recomendamos um teste de maquiagem e penteado para garantir que o resultado final seja exatamente o que você deseja."
    },
    {
      question: "Posso agendar os serviços de beleza diretamente pelo WhatsApp?",
      answer: "Sim, você pode agendar sua maquiagem e penteado para madrinha diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site."
    }
  ]
};

const BelezaParaMadrinhasSPPage = () => {
  const articleData = {
    headline: pageData.article.headline,
    description: pageData.article.description,
    author: pageData.article.author,
    datePublished: pageData.article.datePublished,
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/beleza-para-madrinhas-em-sao-paulo"
  };

  const breadcrumbData = {
    items: [
      { name: "Início", item: "/", position: 1 },
      { name: "Serviços", item: "/servicos", position: 2 },
      { name: "Beleza para Madrinhas", item: "/paginaSeo/beleza-para-madrinhas-em-sao-paulo", position: 3 }
    ]
  };

  const serviceSchemaData = {
    name: pageData.article.headline,
    description: pageData.article.description,
    provider: "Studio Amendolla",
    areaServed: "São Paulo",
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "/paginaSeo/beleza-para-madrinhas-em-sao-paulo",
    serviceType: "Maquiagem e Penteado",
    offers: [{
      price: 350,
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
      "maquiagem madrinha SP",
      "penteado madrinha casamento",
      "beleza madrinhas São Paulo",
      "make madrinha casamento",
      "produção madrinha SP",
      "studio amendolla"
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
      <ImageObjectSchema data={{
        url: pageData.article.image,
        description: pageData.article.description,
        width: 500,
        height: 333,
        name: pageData.article.headline,
        caption: "Beleza para Madrinhas em São Paulo"
      }} />

      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      {/* Conteúdo Principal */}
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image} // URL da imagem
            alt="Beleza para Madrinhas em São Paulo"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Personalizada para Madrinhas</h2>
          <p className={styles.description}>
            No Studio Amendolla, proporcionamos beleza exclusiva para madrinhas em São Paulo, com maquiagem e penteados personalizados para você brilhar no casamento. Nossa equipe especializada cuida de cada detalhe para que o visual da madrinha seja impecável. Oferecemos looks sofisticados, elegantes e que combinem com a proposta do casamento, garantindo que você se sinta maravilhosa na sua função especial. Não deixe de agendar seu teste de maquiagem e penteado para garantir que tudo esteja perfeito.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20minha%20função%20de%20madrinha%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza para Madrinha no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado para Madrinhas em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Elegante</h3>
            <p>Transforme sua aparência com uma maquiagem elegante, perfeita para madrinhas que desejam um visual sofisticado e discreto, mas marcante.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Sofisticado</h3>
            <p>Escolha entre penteados sofisticados, como coques ou tranças, que vão realçar a sua beleza e combinar com o estilo do casamento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo de Madrinha</h3>
            <p>Oferecemos pacotes de beleza completos para madrinhas, que incluem maquiagem e penteado personalizados, para um visual perfeito no grande dia.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Madrinhas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Posso escolher meu estilo de maquiagem e penteado?</summary>
            <p>Sim, oferecemos diversos estilos de maquiagem e penteado. Tudo é personalizado para atender às suas preferências e ao estilo do casamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como posso garantir que o look esteja perfeito para o dia do casamento?</summary>
            <p>Recomendamos um teste de maquiagem e penteado para garantir que o resultado final seja exatamente o que você deseja.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar os serviços de beleza diretamente pelo WhatsApp?</summary>
            <p>Sim, você pode agendar sua maquiagem e penteado para madrinha diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.</p>
          </details>
        </div>
      </section>

      {/* Outros Componentes */}
      <ServiceSimulator />
      <FeaturesCards />
    </div>
  );
};

export default BelezaParaMadrinhasSPPage;
