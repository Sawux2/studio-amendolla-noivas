"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/BelezaNoivasSP.module.css";
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
    headline: "Beleza para Eventos em São Paulo | Maquiagem e Penteado Studio Amendolla",
    description: "Prepare-se para brilhar em qualquer evento com os serviços de beleza do Studio Amendolla. Maquiagem e penteado exclusivos para destacar sua beleza em festas, coquetéis, e outros eventos em São Paulo.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/beleza-para-eventos-sao-paulo.webp",
  },
  faq: [
    {
      question: "Quais tipos de maquiagem e penteado estão disponíveis para eventos?",
      answer: "Trabalhamos com diversos estilos, incluindo maquiagens sofisticadas, ousadas e naturais, além de penteados modernos, clássicos e criativos."
    },
    {
      question: "Como funciona o teste de maquiagem e penteado?",
      answer: "Recomendamos um teste para garantir que seu look esteja perfeito. Durante a sessão, você poderá experimentar diferentes opções de maquiagem e penteado."
    },
    {
      question: "Posso agendar os serviços diretamente para o meu evento?",
      answer: "Sim, você pode agendar sua maquiagem e penteado diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site."
    }
  ]
};

const BelezaParaEventosSPPage = () => {
  // Schema data
  const articleData = {
    headline: pageData.article.headline,
    description: pageData.article.description,
    author: pageData.article.author,
    datePublished: pageData.article.datePublished,
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/beleza-para-eventos-em-sao-paulo"
  };

  const breadcrumbData = {
    items: [
      { name: "Início", item: "/", position: 1 },
      { name: "Serviços", item: "/servicos", position: 2 },
      { name: "Beleza para Eventos", item: "/paginaSeo/beleza-para-eventos-em-sao-paulo", position: 3 }
    ]
  };

  const serviceSchemaData = {
    name: pageData.article.headline,
    description: pageData.article.description,
    provider: "Studio Amendolla",
    areaServed: "São Paulo",
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "/paginaSeo/beleza-para-eventos-em-sao-paulo",
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
      "maquiagem para eventos",
      "penteado para festas",
      "maquiadora São Paulo",
      "make para eventos",
      "beleza eventos SP",
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
        contentUrl: `https://www.studioamendollanoivas.com.br${pageData.article.image}`, // Add this line
        description: pageData.article.description,
        width: 500,
        height: 333,
        name: pageData.article.headline,
        caption: "Beleza para Eventos em São Paulo"
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
            alt="Beleza para Eventos em São Paulo"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Beleza Personalizada para Cada Tipo de Evento
          </h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos serviços exclusivos de beleza para qualquer tipo de evento em São Paulo. Seja para festas, coquetéis, eventos corporativos ou outros, garantimos que sua maquiagem e penteado estarão impecáveis. Nossa equipe especializada vai te ajudar a escolher o visual perfeito, seja para um look sofisticado, ousado ou moderno, sempre respeitando seu estilo e a proposta do evento. Realizamos testes de maquiagem e penteado para que você esteja 100% preparada para brilhar.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20meu%20evento%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza para Eventos no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Personalizados para Eventos em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Elegante</h3>
            <p>Realce sua beleza com uma maquiagem sofisticada, ideal para eventos formais ou casuais, de acordo com a sua preferência.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Moderno</h3>
            <p>Escolha um penteado moderno e estiloso que combine com o evento e com o seu look. Oferecemos desde estilos clássicos até os mais ousados.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo para Eventos</h3>
            <p>Pacotes completos de beleza, combinando maquiagem e penteado, para que você esteja sempre deslumbrante e pronta para qualquer evento.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Eventos</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais tipos de maquiagem e penteado estão disponíveis para eventos?</summary>
            <p>Trabalhamos com diversos estilos, incluindo maquiagens sofisticadas, ousadas e naturais, além de penteados modernos, clássicos e criativos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como funciona o teste de maquiagem e penteado?</summary>
            <p>Recomendamos um teste para garantir que seu look esteja perfeito. Durante a sessão, você poderá experimentar diferentes opções de maquiagem e penteado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar os serviços diretamente para o meu evento?</summary>
            <p>Sim, você pode agendar sua maquiagem e penteado diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.</p>
          </details>
        </div>
      </section>

      {/* Outros Componentes */}
     
      <FeaturesCards />
    </div>
  );
};

export default BelezaParaEventosSPPage;
