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
    headline: "Maquiagem para Debutantes São Paulo | Studio Amendolla",
    description:
      "Maquiagem profissional especializada para debutantes em São Paulo. Realce sua beleza natural e brilhe na sua festa de 15 anos com o Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: ["/images/maquiagem-debutantes-sp.webp"],
  },
};

const articleData = {
  headline: pageData.article.headline,
  description: pageData.article.description,
  author: pageData.article.author,
  datePublished: pageData.article.datePublished,
  image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
  url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-debutantes-sao-paulo",
};

const breadcrumbData = {
  items: [
    { name: "Início", item: "/", position: 1 },
    { name: "Serviços", item: "/servicos", position: 2 },
    { name: "Maquiagem para Debutantes", item: "/paginaSeo/maquiagem-para-debutantes-sao-paulo", position: 3 },
  ],
};

const faqData = {
  items: [
    {
      question: "Como é feito o teste de maquiagem para debutantes?",
      answer: "Realizamos um teste completo onde definimos o look ideal para sua festa, considerando seu estilo, tom de pele e tema da festa.",
    },
    {
      question: "A maquiagem dura toda a festa?",
      answer: "Sim! Utilizamos produtos específicos que garantem durabilidade por mais de 12 horas, resistentes ao calor e à dança.",
    },
    {
      question: "Vocês também atendem as mães e amigas da debutante?",
      answer: "Sim, oferecemos pacotes especiais incluindo a debutante e sua corte, garantindo uma harmonia visual perfeita.",
    },
    {
      question: "Fazem maquiagem para o ensaio fotográfico?",
      answer: "Sim, temos serviços específicos para ensaios fotográficos, com técnicas que garantem um resultado incrível nas fotos.",
    }
  ],
};

const serviceSchemaData = {
  name: pageData.article.headline,
  description: pageData.article.description,
  provider: "Studio Amendolla",
  areaServed: "São Paulo",
  image: pageData.article.image,
  url: "/paginaSeo/maquiagem-para-debutantes-sao-paulo",
  serviceType: "Maquiagem para Debutantes",
  offers: [
    {
      price: 400,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  ],
};

const organizationData = {
  name: "Studio Amendolla Noivas",
  url: "https://www.studioamendollanoivas.com.br",
  description: "Especialistas em maquiagem profissional em São Paulo",
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
  keywords: ["maquiagem debutante", "make 15 anos", "maquiadora debutantes SP"],
};

const MaquiagemDebutantesSPPage = () => {
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
          caption: "Maquiagem para Debutantes São Paulo",
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
            alt="Maquiagem para Debutantes São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Sua Festa de 15 Anos Merece o Melhor</h2>
          <p className={styles.description}>
            No Studio Amendolla, entendemos que sua festa de 15 anos é um momento único e especial. 
            Nossa equipe especializada cria uma maquiagem que realça sua beleza jovial e natural, 
            mantendo você deslumbrante durante toda a celebração. Utilizamos produtos de alta 
            qualidade que garantem durabilidade e um resultado impecável nas fotos e vídeos, 
            para que você possa aproveitar cada momento com confiança e beleza.
          </p>
        </div>
      </div>

      <ContactForm />
      <GaleriaDeFotos />

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços para Debutantes</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo Debutante</h3>
            <p>Inclui teste + dia da festa com técnicas especiais para fotos e vídeos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Debutante e Corte</h3>
            <p>Maquiagem para a debutante e suas amigas com preços especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make para Ensaio</h3>
            <p>Maquiagem especial para ensaio fotográfico dos 15 anos.</p>
          </div>
        </div>
      </section>

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20debutante."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem de Debutante
      </a>

      <FeaturesCards />
    </div>
  );
};

export default MaquiagemDebutantesSPPage;