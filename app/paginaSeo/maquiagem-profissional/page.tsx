import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Profissional | Studio Amendolla',
  description: 'Serviço de maquiagem profissional para noivas, madrinhas e eventos. Atendimento especializado para realçar sua beleza com técnicas avançadas.',
  keywords: 'maquiagem profissional, maquiagem para eventos, maquiagem para noivas, maquiagem de alta qualidade'
};

const pageData = {
  article: {
    headline: "Maquiagem Profissional | Studio Amendolla",
    description: "Serviço de maquiagem profissional para noivas, madrinhas e eventos. Atendimento especializado para realçar sua beleza com técnicas avançadas.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais serviços de maquiagem profissional vocês oferecem?",
      answer: "Realizamos maquiagem para noivas, madrinhas, debutantes e eventos sociais, utilizando técnicas personalizadas e produtos de alta fixação."
    },
    {
      question: "Quanto tempo dura uma sessão de maquiagem profissional?",
      answer: "O atendimento pode durar entre 1 a 2 horas, dependendo do tipo de maquiagem escolhida. A durabilidade pode variar entre 15 a 24 horas, garantindo um visual impecável."
    },
    {
      question: "Onde posso fazer maquiagem profissional em São Paulo?",
      answer: "Atendemos em nosso estúdio na Vila Nivi, Zona Norte de São Paulo, além de oferecer serviços a domicílio em todas as regiões."
    },
    {
      question: "Como faço para agendar um horário?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo um atendimento exclusivo e personalizado."
    }
  ],
  services: [
    {
      title: "Maquiagem Profissional para Noivas",
      description: "Realce sua beleza com técnicas sofisticadas e produtos de alta fixação, garantindo um look impecável no seu grande dia.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Maquiagem Profissional para Eventos",
      description: "Maquiagem para madrinhas, formaturas e eventos especiais, proporcionando um visual elegante e sofisticado.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Profissional",
      url: "https://studioamendollanoivas.com.br/maquiagem-profissional"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem Profissional - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Profissional",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemProfissionalPage() {
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
            alt="Maquiagem Profissional"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>O Que é Maquiagem Profissional?</h2>
          <p>
            A maquiagem profissional vai além da beleza: ela destaca os traços, valoriza o visual e garante um acabamento impecável para qualquer ocasião.  
            No Studio Amendolla, utilizamos técnicas modernas e produtos de alta qualidade para garantir durabilidade e sofisticação.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20serviço%20de%20maquiagem%20profissional."
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
            <p>Look impecável para madrinhas, debutantes, formaturas e eventos sociais.</p>
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
            <summary>Quais serviços de maquiagem profissional vocês oferecem?</summary>
            <p>Realizamos maquiagem para noivas, madrinhas, debutantes e eventos sociais, utilizando técnicas personalizadas e produtos de alta fixação.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura uma sessão de maquiagem profissional?</summary>
            <p>O atendimento pode durar entre 1 a 2 horas, dependendo do tipo de maquiagem escolhida. A durabilidade pode variar entre 15 a 24 horas, garantindo um visual impecável.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Onde posso fazer maquiagem profissional em São Paulo?</summary>
            <p>Atendemos em nosso estúdio na Vila Nivi, Zona Norte de São Paulo, além de oferecer serviços a domicílio em todas as regiões.</p>
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
