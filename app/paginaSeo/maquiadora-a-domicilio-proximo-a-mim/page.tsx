import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiadora a Domicílio Próximo a Mim | Studio Amendolla',
  description: 'Encontre uma maquiadora a domicílio próximo a você. Atendimento exclusivo para noivas, madrinhas e eventos em São Paulo. Agende seu horário!',
  keywords: 'maquiadora a domicílio próximo a mim, maquiagem a domicílio perto de mim, maquiadora profissional a domicílio, maquiagem para eventos perto de mim'
};

const pageData = {
  article: {
    headline: "Maquiadora a Domicílio Próximo a Mim | Studio Amendolla",
    description: "Encontre uma maquiadora a domicílio próximo a você. Atendimento exclusivo para noivas, madrinhas e eventos em São Paulo. Agende seu horário!",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais serviços de maquiagem a domicílio vocês oferecem?",
      answer: "Atendemos noivas, madrinhas, debutantes e eventos sociais, garantindo um visual impecável e sofisticado."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "O atendimento pode durar entre 1 a 2 horas, dependendo do tipo de maquiagem. A duração da maquiagem pode variar entre 15 a 24 horas, pois utilizamos produtos de alta fixação e qualidade."
    },
    {
      question: "Vocês atendem em qualquer bairro de São Paulo?",
      answer: "Sim, realizamos atendimentos em todas as regiões de São Paulo, incluindo Zona Norte, Sul, Leste e Oeste."
    },
    {
      question: "Como faço para agendar o serviço?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo a exclusividade do seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem a Domicílio para Noivas",
      description: "Atendimento profissional em São Paulo para garantir um look impecável no seu grande dia.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Maquiagem para Eventos Perto de Você",
      description: "Produção para madrinhas, debutantes e eventos sociais no conforto da sua casa.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiadora a Domicílio Próximo a Mim",
      url: "https://studioamendollanoivas.com.br/maquiadora-a-domicilio-proximo-a-mim"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiadora a Domicílio Próximo a Mim - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiadora a Domicílio Próximo a Mim",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiadoraDomicilioProximoPage() {
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
            alt="Maquiadora a Domicílio Próximo a Mim"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Serviço de Maquiagem a Domicílio Perto de Você</h2>
          <p>
            No Studio Amendolla, oferecemos um serviço exclusivo de maquiagem a domicílio, atendendo todas as regiões de São Paulo.  
            Nossa equipe especializada atende noivas, madrinhas e eventos, proporcionando um visual sofisticado com técnicas modernas e produtos de alta fixação.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20a%20domicílio%20próximo%20a%20mim."
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
            <summary>Quais serviços de maquiagem a domicílio vocês oferecem?</summary>
            <p>Atendemos noivas, madrinhas, debutantes e eventos sociais, garantindo um visual impecável e sofisticado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>O atendimento pode durar entre 1 a 2 horas, dependendo do tipo de maquiagem. A duração da maquiagem pode variar entre 15 a 24 horas, pois utilizamos produtos de alta fixação e qualidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês atendem em qualquer bairro de São Paulo?</summary>
            <p>Sim, realizamos atendimentos em todas as regiões de São Paulo, incluindo Zona Norte, Sul, Leste e Oeste.</p>
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
