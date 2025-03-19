import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem a Domicílio Zona Sul SP | Studio Amendolla',
  description: 'Serviço de maquiagem a domicílio na Zona Sul de São Paulo. Atendimento exclusivo para noivas, madrinhas e eventos especiais. Agende seu horário!',
  keywords: 'maquiagem a domicílio Zona Sul SP, maquiadora Zona Sul São Paulo, maquiagem profissional a domicílio, maquiagem para eventos Zona Sul'
};

const pageData = {
  article: {
    headline: "Maquiagem a Domicílio Zona Sul SP | Studio Amendolla",
    description: "Serviço de maquiagem a domicílio na Zona Sul de São Paulo. Atendimento exclusivo para noivas, madrinhas e eventos especiais. Agende seu horário!",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais serviços de maquiagem a domicílio vocês oferecem na Zona Sul?",
      answer: "Atendemos noivas, madrinhas, debutantes e eventos sociais, proporcionando um visual impecável e sofisticado."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "O atendimento pode durar entre 1 a 2 horas, dependendo do tipo de maquiagem. A duração da maquiagem pode variar entre 15 a 24 horas, pois utilizamos produtos de alta fixação e qualidade."
    },
    {
      question: "Vocês atendem em toda a Zona Sul de São Paulo?",
      answer: "Sim, realizamos atendimentos em toda a Zona Sul e regiões próximas, mediante agendamento prévio."
    },
    {
      question: "Como faço para agendar o serviço?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo a exclusividade do seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem a Domicílio para Noivas",
      description: "Atendimento especializado na Zona Sul para garantir um look impecável e duradouro no seu grande dia.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Maquiagem para Eventos na Zona Sul",
      description: "Produção profissional para madrinhas, debutantes, festas e eventos corporativos no conforto da sua casa.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem a Domicílio Zona Sul SP",
      url: "https://studioamendollanoivas.com.br/maquiagem-a-domicilio-zona-sul-sp"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem a Domicílio Zona Sul SP - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem a Domicílio Zona Sul SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemDomicilioZonaSulPage() {
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
            alt="Maquiagem a Domicílio Zona Sul SP"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Serviço de Maquiagem a Domicílio na Zona Sul</h2>
          <p>
            No Studio Amendolla, oferecemos um serviço exclusivo de maquiagem a domicílio na Zona Sul de São Paulo.  
            Nossa equipe atende noivas, madrinhas e eventos, garantindo um visual sofisticado com técnicas modernas e produtos de alta fixação.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20a%20domicílio%20na%20Zona%20Sul%20SP."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem Profissional a Domicílio</h2>
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
            <summary>Quais serviços de maquiagem a domicílio vocês oferecem na Zona Sul?</summary>
            <p>Atendemos noivas, madrinhas, debutantes e eventos sociais, proporcionando um visual impecável e sofisticado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>O atendimento pode durar entre 1 a 2 horas, dependendo do tipo de maquiagem. A duração da maquiagem pode variar entre 15 a 24 horas, pois utilizamos produtos de alta fixação e qualidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês atendem em toda a Zona Sul de São Paulo?</summary>
            <p>Sim, realizamos atendimentos em toda a Zona Sul e regiões próximas, mediante agendamento prévio.</p>
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
