import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Noiva Sofisticada | Studio Amendolla',
  description: 'A maquiagem noiva sofisticada combina elegância e técnica para um visual impecável. Realce sua beleza com sofisticação no seu grande dia.',
  keywords: 'maquiagem noiva sofisticada, maquiagem elegante para noivas, maquiagem glamourosa para casamento, maquiagem luxuosa para noivas'
};

const pageData = {
  article: {
    headline: "Maquiagem Noiva Sofisticada | Studio Amendolla",
    description: "A maquiagem noiva sofisticada combina elegância e técnica para um visual impecável. Realce sua beleza com sofisticação no seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "O que caracteriza a maquiagem noiva sofisticada?",
      answer: "Pele impecável, olhos marcantes, acabamento glow e técnicas avançadas para um visual luxuoso."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "A produção completa leva em média 3 horas, garantindo um acabamento impecável e longa duração."
    },
    {
      question: "Vocês oferecem teste de maquiagem?",
      answer: "Sim, realizamos um teste prévio para definir o look perfeito para o dia do casamento."
    },
    {
      question: "Como faço para garantir minha reserva?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade no seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem Noiva Sofisticada Profissional",
      description: "Make glamourosa e sofisticada, com técnicas avançadas e produtos de alta qualidade.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Penteado Elegante para Noivas",
      description: "Penteados luxuosos que harmonizam com a maquiagem sofisticada para um look impecável.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Noiva Sofisticada",
      url: "https://studioamendollanoivas.com.br/maquiagem-noiva-sofisticada"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem Noiva Sofisticada - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Noiva Sofisticada",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemNoivaSofisticadaPage() {
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
            alt="Maquiagem Noiva Sofisticada"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Elegância e Sofisticação para Noivas</h2>
          <p>
            No Studio Amendolla, criamos maquiagens sofisticadas que realçam a beleza da noiva com glamour e requinte.  
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi,  
            trabalha com técnicas de alta precisão e produtos premium para um resultado impecável.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20noiva%20sofisticada."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços para Noivas que Desejam Sofisticação</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Glamourosa</h3>
            <p>Pele iluminada, olhos marcantes e acabamento perfeito para um look sofisticado e impecável.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado de Luxo</h3>
            <p>Penteados modernos e elegantes que harmonizam perfeitamente com a maquiagem sofisticada.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste Completo</h3>
            <p>Sessão prévia para definir os detalhes do look ideal, garantindo um resultado perfeito no grande dia.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O que caracteriza a maquiagem noiva sofisticada?</summary>
            <p>Pele impecável, olhos marcantes, acabamento glow e técnicas avançadas para um visual luxuoso.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>A produção completa leva em média 1 horas, garantindo um acabamento impecável e longa duração.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem teste de maquiagem?</summary>
            <p>Sim, realizamos um teste prévio para definir o look perfeito para o dia do casamento.</p>
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
