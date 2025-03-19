import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem em São Paulo Profissional | Studio Amendolla',
  description: 'Contrate um serviço de maquiagem em São Paulo profissional. Técnicas avançadas para noivas, madrinhas e eventos especiais com alta qualidade.',
  keywords: 'maquiagem em São Paulo profissional, maquiadora profissional em SP, maquiagem para eventos em São Paulo, maquiagem para noivas em SP'
};

const pageData = {
  article: {
    headline: "Maquiagem em São Paulo Profissional | Studio Amendolla",
    description: "Contrate um serviço de maquiagem em São Paulo profissional. Técnicas avançadas para noivas, madrinhas e eventos especiais com alta qualidade.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais serviços de maquiagem profissional vocês oferecem em São Paulo?",
      answer: "Atendemos noivas, madrinhas, debutantes, eventos corporativos e sociais com técnicas personalizadas."
    },
    {
      question: "Quanto tempo dura a maquiagem profissional?",
      answer: "A produção completa dura em média 2 a 3 horas, garantindo um acabamento impecável e duradouro."
    },
    {
      question: "Vocês fazem maquiagem a domicílio em São Paulo?",
      answer: "Sim, oferecemos atendimento em domicílio para maior comodidade e exclusividade."
    },
    {
      question: "Como faço para garantir minha reserva?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade no seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem Profissional para Noivas",
      description: "Make sofisticada, duradoura e personalizada para o seu grande dia.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Maquiagem para Eventos em São Paulo",
      description: "Perfeito para festas, formaturas, ensaios fotográficos e ocasiões especiais.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem em São Paulo Profissional",
      url: "https://studioamendollanoivas.com.br/maquiagem-em-sao-paulo-profissional"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem em São Paulo Profissional - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem em São Paulo Profissional",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemSaoPauloProfissionalPage() {
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
            alt="Maquiagem em São Paulo Profissional"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Profissional em São Paulo com Alta Qualidade</h2>
          <p>
            No Studio Amendolla, oferecemos serviços de maquiagem profissional em São Paulo para noivas, madrinhas, debutantes e eventos.  
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi,  
            utiliza produtos de alta qualidade e técnicas modernas para garantir um visual impecável e duradouro.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20em%20São%20Paulo%20profissional."
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
            <p>Atendimento especializado para um visual sofisticado e duradouro no grande dia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Eventos</h3>
            <p>Look impecável para formaturas, festas, ensaios fotográficos e eventos corporativos.</p>
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
            <p>Atendemos noivas, madrinhas, debutantes, eventos corporativos e sociais com técnicas personalizadas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura pafa fazer a maquiagem profissional?</summary>
            <p>A produção completa dura em média 1 a 2 horas, garantindo um acabamento impecável e duradouro.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês fazem maquiagem a domicílio em São Paulo?</summary>
            <p>Sim, oferecemos atendimento em domicílio para maior comodidade e exclusividade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como faço para garantir minha reserva?</summary>
            <p>A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade no seu atendimento.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
