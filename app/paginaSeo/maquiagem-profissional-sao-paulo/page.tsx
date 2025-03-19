import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Profissional São Paulo | Studio Amendolla',
  description: 'Serviço de maquiagem profissional em São Paulo para noivas, madrinhas e eventos. Atendimento especializado para um visual impecável.',
  keywords: 'maquiagem profissional São Paulo, maquiagem para eventos SP, maquiadora profissional SP, maquiagem de alta qualidade em São Paulo'
};

const pageData = {
  article: {
    headline: "Maquiagem Profissional São Paulo | Studio Amendolla",
    description: "Serviço de maquiagem profissional em São Paulo para noivas, madrinhas e eventos. Atendimento especializado para um visual impecável.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais serviços de maquiagem profissional vocês oferecem em São Paulo?",
      answer: "Realizamos maquiagem para noivas, madrinhas, debutantes e eventos sociais, utilizando técnicas especializadas e produtos de longa duração."
    },
    {
      question: "Quanto tempo dura uma sessão de maquiagem profissional?",
      answer: "O atendimento pode durar entre 1 a 2 horas, dependendo do tipo de maquiagem escolhida. A duração pode variar entre 15 a 24 horas, garantindo um visual impecável durante todo o evento."
    },
    {
      question: "Onde posso fazer maquiagem profissional em São Paulo?",
      answer: "Atendemos em nosso estúdio na Vila Nivi, Zona Norte de São Paulo, além de oferecer serviços a domicílio em todas as regiões da cidade."
    },
    {
      question: "Como faço para agendar um horário?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo um atendimento exclusivo e personalizado."
    }
  ],
  services: [
    {
      title: "Maquiagem Profissional para Noivas",
      description: "Técnicas avançadas para um look sofisticado e duradouro no seu grande dia, garantindo um acabamento impecável.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Maquiagem Profissional para Eventos",
      description: "Produção completa para madrinhas, formaturas e eventos sociais, proporcionando um visual elegante e sofisticado.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Profissional São Paulo",
      url: "https://studioamendollanoivas.com.br/maquiagem-profissional-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem Profissional São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Profissional São Paulo",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemProfissionalSPPage() {
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
            alt="Maquiagem Profissional São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Onde Fazer Maquiagem Profissional em São Paulo?</h2>
          <p>
            No Studio Amendolla, oferecemos serviços especializados de maquiagem profissional em São Paulo, atendendo noivas, madrinhas e eventos especiais.  
            Nosso estúdio está localizado na Vila Nivi, Zona Norte de São Paulo, e também realizamos atendimentos a domicílio em todas as regiões da cidade.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20serviço%20de%20maquiagem%20profissional%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem Profissional em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas</h3>
            <p>Atendimento especializado para um visual sofisticado e duradouro no seu grande dia.</p>
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
            <summary>Quais serviços de maquiagem profissional vocês oferecem em São Paulo?</summary>
            <p>Realizamos maquiagem para noivas, madrinhas, debutantes e eventos sociais, utilizando técnicas especializadas e produtos de longa duração.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura uma sessão de maquiagem profissional?</summary>
            <p>O atendimento pode durar entre 1 a 2 horas, dependendo do tipo de maquiagem escolhida. A duração pode variar entre 15 a 24 horas, garantindo um visual impecável durante todo o evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Onde posso fazer maquiagem profissional em São Paulo?</summary>
            <p>Atendemos em nosso estúdio na Vila Nivi, Zona Norte de São Paulo, além de oferecer serviços a domicílio em todas as regiões da cidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como faço para agendar um horário?</summary>
            <p>A reserva é feita mediante contrato e pagamento de um sinal, garantindo um atendimento exclusivo e personalizado.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
