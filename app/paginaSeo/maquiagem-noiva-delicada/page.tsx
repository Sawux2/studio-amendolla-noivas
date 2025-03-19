import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Noiva Delicada | Studio Amendolla',
  description: 'A maquiagem noiva delicada valoriza a beleza natural com suavidade e sofisticação. Técnicas avançadas e produtos premium para um visual impecável.',
  keywords: 'maquiagem noiva delicada, maquiagem delicada para noivas, maquiagem natural para casamento, maquiagem leve para noivas'
};

const pageData = {
  article: {
    headline: "Maquiagem Noiva Delicada | Studio Amendolla",
    description: "A maquiagem noiva delicada valoriza a beleza natural com suavidade e sofisticação. Técnicas avançadas e produtos premium para um visual impecável.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "O que caracteriza a maquiagem noiva delicada?",
      answer: "Uma pele iluminada, olhos sutis e batom suave, garantindo um visual natural e sofisticado."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "A produção completa leva em média 3 horas, garantindo um acabamento impecável e de longa duração."
    },
    {
      question: "Vocês oferecem teste de maquiagem?",
      answer: "Sim, realizamos um teste prévio para definir a maquiagem perfeita para o grande dia."
    },
    {
      question: "Como faço para garantir minha reserva?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade no seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem Noiva Delicada Profissional",
      description: "Make suave e natural, com técnicas que realçam a beleza sem exageros.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Penteado Romântico para Noivas",
      description: "Penteados leves e sofisticados que complementam a maquiagem delicada.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Noiva Delicada",
      url: "https://studioamendollanoivas.com.br/maquiagem-noiva-delicada"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem Noiva Delicada - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Noiva Delicada",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemNoivaDelicadaPage() {
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
            alt="Maquiagem Noiva Delicada"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza Natural com Maquiagem Noiva Delicada</h2>
          <p>
            No Studio Amendolla, valorizamos a sutileza e o romantismo da maquiagem noiva delicada.  
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi,  
            trabalha com técnicas avançadas para garantir um visual leve, radiante e sofisticado no seu grande dia.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20noiva%20delicada."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços para Noivas que Preferem Maquiagem Delicada</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Leve e Natural</h3>
            <p>Pele impecável e iluminada, realçando a beleza da noiva sem exageros.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Romântico</h3>
            <p>Penteados elegantes e sutis que harmonizam com um visual delicado e clássico.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Sessão prévia para definir os detalhes da maquiagem, garantindo um look perfeito no dia do casamento.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O que caracteriza a maquiagem noiva delicada?</summary>
            <p>Uma pele iluminada, olhos sutis e batom suave, garantindo um visual natural e sofisticado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>A produção completa leva em média 1 horas, garantindo um acabamento impecável e de longa duração.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem teste de maquiagem?</summary>
            <p>Sim, realizamos um teste prévio para definir a maquiagem perfeita para o grande dia.</p>
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
