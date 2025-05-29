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
    headline: "Maquiagem para Madrinhas em São Paulo | Studio Amendolla",
    description:
      "Serviço especializado de maquiagem profissional para madrinhas de casamento em São Paulo. Realce sua beleza e esteja deslumbrante nas fotos com o Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: ["/images/maquiagem-madrinhas-sp.webp"],
  },
};

const articleData = {
  headline: pageData.article.headline,
  description: pageData.article.description,
  author: pageData.article.author,
  datePublished: pageData.article.datePublished,
  image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
  url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-madrinhas-sao-paulo",
};

const breadcrumbData = {
  items: [
    { name: "Início", item: "/", position: 1 },
    { name: "Serviços", item: "/servicos", position: 2 },
    { name: "Maquiagem para Madrinhas", item: "/paginaSeo/maquiagem-para-madrinhas-sao-paulo", position: 3 },
  ],
};

const faqData = {
  items: [
    {
      question: "Como funciona a maquiagem para grupo de madrinhas?",
      answer: "Organizamos o cronograma para que todas as madrinhas fiquem prontas no horário ideal, mantendo a harmonia visual do grupo.",
    },
    {
      question: "Existe desconto para grupos?",
      answer: "Sim! Oferecemos pacotes especiais com descontos progressivos de acordo com o número de madrinhas.",
    },
    {
      question: "A maquiagem dura todo o evento?",
      answer: "Com certeza! Usamos produtos de alta durabilidade que garantem que você esteja impecável do início ao fim da celebração.",
    },
    {
      question: "Fazem atendimento no local do evento?",
      answer: "Sim, nos deslocamos até o local da sua preferência para maior conforto e praticidade.",
    }
  ],
};

const serviceSchemaData = {
  name: pageData.article.headline,
  description: pageData.article.description,
  provider: "Studio Amendolla",
  areaServed: "São Paulo",
  image: pageData.article.image,
  url: "/paginaSeo/maquiagem-para-madrinhas-sao-paulo",
  serviceType: "Maquiagem para Madrinhas",
  offers: [
    {
      price: 350,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  ],
};

const organizationData = {
  name: "Studio Amendolla Noivas",
  url: "https://www.studioamendollanoivas.com.br",
  description: "Especialistas em maquiagem e penteados em São Paulo",
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
  keywords: ["maquiagem madrinha", "makeup bridesmaid", "maquiadora SP"],
};

const MaquiagemMadrinhasSPPage = () => {
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
          caption: "Maquiagem para Madrinhas São Paulo",
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
            alt="Maquiagem para Madrinhas São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Especial para Madrinhas</h2>
          <p className={styles.description}>
            Ser madrinha é uma honra especial e você merece um visual à altura dessa ocasião. 
            No Studio Amendolla, criamos looks elegantes e harmoniosos que valorizam sua beleza 
            natural e combinam perfeitamente com o tema do casamento. Nossa equipe especializada 
            garante uma maquiagem duradoura e fotogênica, para que você esteja deslumbrante em 
            todos os momentos da celebração.
          </p>
        </div>
      </div>

      <ContactForm />
      <GaleriaDeFotos />

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços para Madrinhas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Individual</h3>
            <p>Atendimento personalizado com foco na sua beleza única.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote para Grupos</h3>
            <p>Descontos especiais para grupos de madrinhas com harmonização visual.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Dia da Noiva + Madrinhas</h3>
            <p>Pacote completo incluindo noiva e madrinhas com preço especial.</p>
          </div>
        </div>
      </section>

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20madrinhas."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicite um Orçamento para Madrinhas
      </a>

      <FeaturesCards />
    </div>
  );
};

export default MaquiagemMadrinhasSPPage;