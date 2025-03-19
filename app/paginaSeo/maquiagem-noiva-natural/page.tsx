import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Noiva Natural | Studio Amendolla',
  description: 'A maquiagem noiva natural realça a beleza com leveza e sofisticação. Descubra técnicas para um look impecável, radiante e duradouro.',
  keywords: 'maquiagem noiva natural, maquiagem leve para casamento, maquiagem clean para noivas, maquiagem minimalista noiva'
};

const pageData = {
  article: {
    headline: "Maquiagem Noiva Natural | Studio Amendolla",
    description: "A maquiagem noiva natural realça a beleza com leveza e sofisticação. Descubra técnicas para um look impecável, radiante e duradouro.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "O que caracteriza a maquiagem noiva natural?",
      answer: "Pele iluminada, acabamento leve, realce sutil dos olhos e lábios com tons neutros, garantindo um look elegante e sofisticado."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "A maquiagem completa leva em média 3 horas, garantindo um acabamento impecável e longa duração."
    },
    {
      question: "Vocês oferecem teste de maquiagem?",
      answer: "Sim, realizamos um teste prévio para definir o look ideal para o dia do casamento."
    },
    {
      question: "Como faço para garantir minha reserva?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade no seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem Noiva Natural Profissional",
      description: "Técnicas avançadas para um acabamento impecável, realçando a beleza de forma natural.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Penteado Leve e Sofisticado",
      description: "Penteados sutis e românticos que harmonizam perfeitamente com a maquiagem natural.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Noiva Natural",
      url: "https://studioamendollanoivas.com.br/maquiagem-noiva-natural"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem Noiva Natural - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Noiva Natural",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemNoivaNaturalPage() {
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
            alt="Maquiagem Noiva Natural"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Elegância e Beleza com Maquiagem Noiva Natural</h2>
          <p>
            No Studio Amendolla, valorizamos a leveza e a sofisticação da maquiagem noiva natural.  
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi,  
            utiliza técnicas modernas para garantir um visual radiante, realçando a beleza da noiva com suavidade e perfeição.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20noiva%20natural."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços para Noivas que Preferem Maquiagem Natural</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Leve e Iluminada</h3>
            <p>Pele impecável, brilho natural e realce suave dos olhos e lábios.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Sofisticado</h3>
            <p>Penteados sutis e elegantes, ideais para harmonizar com a maquiagem natural.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Sessão prévia para definir o look ideal, garantindo um acabamento perfeito no grande dia.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O que caracteriza a maquiagem noiva natural?</summary>
            <p>Pele iluminada, acabamento leve, realce sutil dos olhos e lábios com tons neutros, garantindo um look elegante e sofisticado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>A maquiagem completa leva em média 1 horas, garantindo um acabamento impecável e longa duração.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem teste de maquiagem?</summary>
            <p>Sim, realizamos um teste prévio para definir o look ideal para o dia do casamento.</p>
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
