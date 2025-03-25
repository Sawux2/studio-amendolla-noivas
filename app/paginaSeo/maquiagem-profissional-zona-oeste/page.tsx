import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Profissional Zona Oeste São Paulo | Studio Amendolla',
  description: 'Encontre maquiagem profissional na Zona Oeste de São Paulo. Atendimento especializado com a opção de maquiagem domiciliar para toda a cidade.',
  keywords: 'maquiagem profissional zona oeste sp, maquiagem casamento zona oeste, maquiagem para noivas zona oeste, atendimento domiciliar maquiagem sp'
};

const pageData = {
  article: {
    headline: "Maquiagem Profissional Zona Oeste São Paulo | Studio Amendolla",
    description: "Oferecemos maquiagem profissional na Zona Oeste e toda São Paulo, com opção de serviço domiciliar. Atendemos no seu local ou em nosso estúdio, com qualidade e sofisticação.",
    author: "Priscila Helena",
    datePublished: "2024-03-25",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
  faq: [
    {
      question: "Vocês atendem na Zona Oeste de São Paulo?",
      answer: "Sim, atendemos toda a Zona Oeste de São Paulo e outras regiões da cidade, com opção de atendimento domiciliar em sua casa ou no nosso estúdio."
    },
    {
      question: "Quais serviços de maquiagem vocês oferecem?",
      answer: "Oferecemos maquiagem para noivas, madrinhas, formandas e eventos especiais, com técnicas avançadas e produtos de alta qualidade."
    },
    {
      question: "Onde fica o Studio Amendolla?",
      answer: "Nosso estúdio está localizado na Zona Norte, na Avenida Julio Buono, 2386, mas atendemos toda a cidade de São Paulo com maquiagem a domicílio, inclusive na Zona Oeste."
    },
    {
      question: "Como agendar um atendimento de maquiagem?",
      answer: "Você pode agendar seu atendimento de maquiagem profissional diretamente pelo WhatsApp, verificando disponibilidade para nosso estúdio ou atendimento domiciliar."
    }
  ],
  services: [
    {
      title: "Maquiagem Profissional para Noivas",
      description: "Transforme seu grande dia com uma maquiagem sofisticada, duradoura e impecável, feita especialmente para noivas.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    },
    {
      title: "Maquiagem para Eventos Especiais",
      description: "Deixe sua beleza ainda mais radiante com maquiagem personalizada para casamentos, formaturas e outros eventos especiais.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Profissional Zona Oeste",
      url: "https://studioamendollanoivas.com.br/maquiagem-profissional-zona-oeste"
    }
  ],
  images: [
    {
      url: "/images/maquiagem-profissional-zona-oeste-sp.webp",
      description: "Maquiagem Profissional Zona Oeste São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Profissional Zona Oeste SP",
      datePublished: "2024-03-25"
    }
  ]
};

export default function MaquiagemProfissionalZonaOesteSPPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Maquiagem Profissional Zona Oeste São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Atendimento Personalizado para a Zona Oeste</h2>
          <p>
            O Studio Amendolla oferece serviços de maquiagem profissional em toda a Zona Oeste de São Paulo. Atendemos também com maquiagem domiciliar em toda a cidade, levando até você um atendimento de qualidade com produtos premium e técnicas exclusivas.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20profissional."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem Agora
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional para Noivas</h3>
            <p>Make sofisticada e duradoura para noivas, com técnicas avançadas e acabamento perfeito.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Eventos</h3>
            <p>Maquiagem personalizada para casamentos, formaturas e eventos especiais, destacando sua beleza.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          {pageData.faq.map((item, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
