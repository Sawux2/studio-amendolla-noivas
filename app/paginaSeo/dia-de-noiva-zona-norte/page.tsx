import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Dia de Noiva Zona Norte SP | Studio Amendolla',
  description: 'Experiência exclusiva de Dia de Noiva na Zona Norte de São Paulo. Studio especializado em beleza para noivas na Vila Nivi com atendimento personalizado.',
  keywords: 'dia de noiva zona norte, dia da noiva vila nivi, dia de noiva santana, dia da noiva tucuruvi'
};

const pageData = {
  article: {
    headline: "Dia de Noiva Zona Norte SP - Experiência Exclusiva | Studio Amendolla",
    description: "Realize seu sonho com nosso serviço exclusivo de Dia de Noiva na Zona Norte de São Paulo. Localização privilegiada na Vila Nivi com fácil acesso.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Onde fica o studio na Zona Norte?",
      answer: "Estamos localizados na Avenida Julio Buono, 2386 - Vila Nivi, região da Zona Norte de São Paulo, próximo ao Tucuruvi e Santana."
    },
    {
      question: "Quais regiões da Zona Norte atendem?",
      answer: "Atendemos toda a Zona Norte: Vila Nivi, Tucuruvi, Santana, Vila Guilherme, Vila Maria e regiões próximas."
    },
    {
      question: "Qual o diferencial do studio na Zona Norte?",
      answer: "Somos referência na região há anos, com localização privilegiada e estrutura completa para seu dia especial."
    },
    {
      question: "Oferecem estacionamento?",
      answer: "Sim, contamos com estacionamento próprio para maior comodidade das nossas noivas."
    }
  ],
  services: [
    {
      title: "Dia de Noiva Completo na Zona Norte",
      description: "Pacote exclusivo com todos os serviços essenciais",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Atendimento Premium",
      description: "Experiência personalizada na região da Vila Nivi",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Dia de Noiva Zona Norte",
      url: "https://studioamendollanoivas.com.br/dia-de-noiva-zona-norte"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Dia de Noiva Zona Norte SP - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Dia de Noiva Zona Norte",
      datePublished: "2024-02-01"
    }
  ]
};

export default function DiaDeNoivaZonaNortePage() {
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
            alt="Dia de Noiva Zona Norte SP"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Experiência Premium na Zona Norte</h2>
          <p>
            Referência em Dia de Noiva na Zona Norte de São Paulo, o Studio Amendolla 
            oferece uma experiência única em nossa estrutura na Vila Nivi. Localização 
            privilegiada com fácil acesso de Santana, Tucuruvi e regiões próximas.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20dia%20de%20noiva%20na%20Zona%20Norte."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Visita ao Studio
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Exclusivos na Zona Norte</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Estrutura Completa</h3>
            <p>Studio moderno com todo conforto e privacidade para seu dia especial na Vila Nivi.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Localização Privilegiada</h3>
            <p>Fácil acesso de toda Zona Norte, com estacionamento próprio para sua comodidade.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Atendimento Premium</h3>
            <p>Equipe especializada com anos de experiência em beleza para noivas.</p>
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