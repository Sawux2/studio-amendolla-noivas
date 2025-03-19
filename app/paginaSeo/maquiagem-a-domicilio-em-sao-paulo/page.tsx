import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem a Domicílio em São Paulo | Studio Amendolla',
  description: 'Contrate um serviço de maquiagem a domicílio em São Paulo com profissional qualificada. Atendimento personalizado para noivas, madrinhas e eventos.',
  keywords: 'maquiagem a domicílio em São Paulo, maquiadora a domicílio SP, maquiagem profissional em casa, maquiagem para eventos a domicílio'
};

const pageData = {
  article: {
    headline: "Maquiagem a Domicílio em São Paulo | Studio Amendolla",
    description: "Contrate um serviço de maquiagem a domicílio em São Paulo com profissional qualificada. Atendimento personalizado para noivas, madrinhas e eventos.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais serviços de maquiagem a domicílio vocês oferecem?",
      answer: "Atendemos noivas, madrinhas, debutantes e eventos sociais com técnicas profissionais e personalizadas."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "A maquiagem profissional leva em média 2 a 3 horas, garantindo um acabamento impecável e longa duração."
    },
    {
      question: "O atendimento é feito em toda a cidade de São Paulo?",
      answer: "Sim, atendemos toda a capital e algumas regiões próximas mediante agendamento prévio."
    },
    {
      question: "Como faço para agendar o serviço?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo a exclusividade do seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem a Domicílio para Noivas",
      description: "Atendimento exclusivo no conforto da sua casa ou local do evento, garantindo um look impecável no grande dia.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Maquiagem para Eventos em São Paulo",
      description: "Produção profissional para madrinhas, debutantes, festas e eventos corporativos sem precisar sair de casa.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem a Domicílio em São Paulo",
      url: "https://studioamendollanoivas.com.br/maquiagem-a-domicilio-em-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem a Domicílio em São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem a Domicílio em São Paulo",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemDomicilioSPPage() {
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
            alt="Maquiagem a Domicílio em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Serviço de Maquiagem a Domicílio em São Paulo</h2>
          <p>
            No Studio Amendolla, levamos a experiência da maquiagem profissional até você, com atendimento personalizado para noivas, madrinhas e eventos especiais.  
            Nossa equipe atende em toda a cidade de São Paulo e região, utilizando produtos de alta qualidade e técnicas especializadas para um resultado impecável.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20a%20domicílio%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem Profissional em Casa</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas</h3>
            <p>Atendimento exclusivo em casa ou no local do casamento, garantindo sofisticação e conforto.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Eventos</h3>
            <p>Produção impecável para madrinhas, festas, ensaios fotográficos e eventos sociais, no conforto do seu lar.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Sessão prévia para definir o visual ideal, garantindo um look perfeito no dia do evento.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais serviços de maquiagem a domicílio vocês oferecem?</summary>
            <p>Atendemos noivas, madrinhas, debutantes e eventos sociais com técnicas profissionais e personalizadas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>A maquiagem profissional leva em média 2 a 3 horas, garantindo um acabamento impecável e longa duração.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O atendimento é feito em toda a cidade de São Paulo?</summary>
            <p>Sim, atendemos toda a capital e algumas regiões próximas mediante agendamento prévio.</p>
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
