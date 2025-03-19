import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiadora Próximo de Mim | Studio Amendolla',
  description: 'Encontre uma maquiadora próximo de você. Atendimento profissional para noivas, madrinhas e eventos em São Paulo e região. Agende seu horário!',
  keywords: 'maquiadora próximo de mim, maquiagem perto de mim, maquiadora profissional, maquiagem para eventos perto de mim'
};

const pageData = {
  article: {
    headline: "Maquiadora Próximo de Mim | Studio Amendolla",
    description: "Encontre uma maquiadora próximo de você. Atendimento profissional para noivas, madrinhas e eventos em São Paulo e região. Agende seu horário!",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais serviços de maquiagem vocês oferecem?",
      answer: "Atendemos noivas, madrinhas, debutantes e eventos sociais com técnicas personalizadas e produtos de alta fixação."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "O atendimento pode durar entre 1 a 2 horas, dependendo do tipo de maquiagem. A maquiagem pode durar entre 15 a 24 horas, garantindo um look impecável durante todo o evento."
    },
    {
      question: "Vocês atendem em toda a cidade de São Paulo?",
      answer: "Sim, realizamos atendimentos em todas as regiões, incluindo Zona Norte, Sul, Leste e Oeste, além de algumas cidades próximas."
    },
    {
      question: "Como faço para agendar o serviço?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo a exclusividade do seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem para Noivas",
      description: "Atendimento profissional para um look sofisticado e duradouro no seu grande dia.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Maquiagem para Eventos",
      description: "Produção completa para madrinhas, debutantes e festas no conforto da sua casa.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiadora Próximo de Mim",
      url: "https://studioamendollanoivas.com.br/maquiadora-proximo-de-mim"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiadora Próximo de Mim - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiadora Próximo de Mim",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiadoraProximoPage() {
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
            alt="Maquiadora Próximo de Mim"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Encontre uma Maquiadora Próximo de Você</h2>
          <p>
            No Studio Amendolla, oferecemos serviços de maquiagem para noivas, madrinhas e eventos com atendimento especializado.  
            Nossa equipe atende em São Paulo e região, garantindo um visual impecável com técnicas modernas e produtos de alta durabilidade.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20com%20uma%20maquiadora%20próximo%20de%20mim."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem Profissional</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas</h3>
            <p>Atendimento especializado para um visual elegante e duradouro no seu grande dia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Festas e Eventos</h3>
            <p>Look impecável para madrinhas, debutantes, formaturas e eventos corporativos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Sessão prévia para definir o visual ideal, garantindo um acabamento perfeito e personalizado.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais serviços de maquiagem vocês oferecem?</summary>
            <p>Atendemos noivas, madrinhas, debutantes e eventos sociais com técnicas personalizadas e produtos de alta fixação.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>O atendimento pode durar entre 1 a 2 horas, dependendo do tipo de maquiagem. A maquiagem pode durar entre 15 a 24 horas, garantindo um look impecável durante todo o evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês atendem em toda a cidade de São Paulo?</summary>
            <p>Sim, realizamos atendimentos em todas as regiões, incluindo Zona Norte, Sul, Leste e Oeste, além de algumas cidades próximas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como faço para agendar o serviço?</summary>
            <p>A reserva é feita mediante contrato e pagamento de um sinal, garantindo a exclusividade do seu atendimento.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
