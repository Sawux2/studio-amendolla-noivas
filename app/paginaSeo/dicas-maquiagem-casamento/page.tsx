"use client";

import React from "react";
import Image from "next/image";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";
import ArticleSchema from "@/schemas/ArticleSchema";
import BreadcrumbSchema from "@/schemas/BreadcrumbSchema";
import FAQSchema from "@/schemas/FAQSchema";
import ImageObjectSchema from "@/schemas/ImageObjectSchema";
import ServiceSchema from "@/schemas/ServiceSchema";
import OrganizationSchema from "@/schemas/organizationSchema";
import WebsiteSchema from "@/schemas/WebsiteSchema";
import ContactForm from "@/components/ContactForm";

const pageData = {
  article: {
    headline: "Dicas de Maquiagem para Casamento | Studio Amendolla",
    description:
      "Confira as melhores dicas de maquiagem para noivas, madrinhas e convidadas. Aprenda como ter uma maquiagem duradoura e perfeita para as fotos do seu casamento.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: ["/images/dicas-maquiagem-casamento.webp"],
  },
};

const articleData = {
  headline: pageData.article.headline,
  description: pageData.article.description,
  author: pageData.article.author,
  datePublished: pageData.article.datePublished,
  image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
  url: "https://www.studioamendollanoivas.com.br/paginaSeo/dicas-maquiagem-casamento",
};

const breadcrumbData = {
  items: [
    { name: "Início", item: "/", position: 1 },
    { name: "Blog", item: "/blog", position: 2 },
    { name: "Dicas de Maquiagem", item: "/paginaSeo/dicas-maquiagem-casamento", position: 3 },
  ],
};

const faqData = {
  items: [
    {
      question: "Quando devo fazer o teste de maquiagem?",
      answer: "O ideal é fazer o teste 1-2 meses antes do casamento, quando sua pele já estiver no tratamento planejado.",
    },
    {
      question: "Como fazer a maquiagem durar o dia todo?",
      answer: "Use primer, produtos à prova d'água e fixador. Uma boa preparação de pele é fundamental para a durabilidade.",
    },
    {
      question: "Qual o melhor tipo de maquiagem para fotos?",
      answer: "Maquiagem com boa cobertura, mas natural, evitando produtos com muita luminosidade que podem refletir flash.",
    },
    {
      question: "Como cuidar da pele antes do casamento?",
      answer: "Mantenha uma boa hidratação, use protetor solar e comece os cuidados específicos pelo menos 3 meses antes.",
    }
  ],
};

const serviceSchemaData = {
  name: pageData.article.headline,
  description: pageData.article.description,
  provider: "Studio Amendolla",
  areaServed: "São Paulo",
  image: pageData.article.image,
  url: "/paginaSeo/dicas-maquiagem-casamento",
  serviceType: "Consultoria de Maquiagem",
};

const organizationData = {
  name: "Studio Amendolla Noivas",
  url: "https://www.studioamendollanoivas.com.br",
  description: "Especialistas em maquiagem para noivas em São Paulo",
  logoUrl: "/images/logo.webp",
  telephone: "+55 11 97767-0498",
  contactType: "customer service",
  areaServed: "São Paulo",
};

const websiteData = {
  name: "Studio Amendolla Noivas",
  url: "https://www.studioamendollanoivas.com.br",
  description: pageData.article.description,
  inLanguage: "pt-BR",
  keywords: ["dicas maquiagem noiva", "maquiagem casamento", "tutorial noivas"],
};

const DicasMaquiagemCasamentoPage = () => {
  return (
    <div className={styles.container}>
      {/* Schemas */}
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema data={breadcrumbData} />
      <FAQSchema data={faqData} />
      <ServiceSchema data={serviceSchemaData} />
      <OrganizationSchema data={organizationData} />
      <WebsiteSchema data={websiteData} />
      <ImageObjectSchema
        data={{
          url: pageData.article.image[0],
          contentUrl: pageData.article.image[0],
          description: pageData.article.description,
          width: 500,
          height: 333,
          name: pageData.article.headline,
          caption: "Dicas de Maquiagem para Casamento",
        }}
      />

      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image[0]}
            alt="Dicas de Maquiagem para Casamento"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Dicas Essenciais para uma Maquiagem Perfeita</h2>
          
          <section className={styles.tipSection}>
            <h3>1. Preparação da Pele</h3>
            <p>
              A preparação da pele é fundamental para uma maquiagem duradoura. Comece os cuidados 
              com antecedência, mantenha uma boa hidratação e use protetor solar diariamente. 
              No dia do evento, use primer para garantir maior fixação dos produtos.
            </p>
          </section>

          <section className={styles.tipSection}>
            <h3>2. Escolha dos Produtos</h3>
            <p>
              Opte por produtos de alta durabilidade e à prova d.água. Para fotos perfeitas, 
              evite bases com protetor solar e produtos muito iluminados que podem causar 
              reflexo com o flash.
            </p>
          </section>

          <section className={styles.tipSection}>
            <h3>3. Teste de Maquiagem</h3>
            <p>
              Faça um teste de maquiagem algumas semanas antes do evento. Isso permite ajustar 
              cores, técnicas e produtos para alcançar o resultado desejado.
            </p>
          </section>
        </div>
      </div>

      <ContactForm />
      <GaleriaDeFotos />

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços Relacionados</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Consultoria de Maquiagem</h3>
            <p>Orientação personalizada para escolher o melhor look para seu evento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Noiva</h3>
            <p>Experimente diferentes estilos para encontrar a maquiagem perfeita.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Workshop de Automaquiagem</h3>
            <p>Aprenda técnicas profissionais para seu dia a dia.</p>
          </div>
        </div>
      </section>

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20maquiagem%20para%20casamento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria de Maquiagem
      </a>

      <FeaturesCards />
    </div>
  );
};

export default DicasMaquiagemCasamentoPage;