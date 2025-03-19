import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem para Casamento Diurno | Studio Amendolla',
  description: 'A maquiagem para casamento diurno realça a beleza natural com leveza e sofisticação. Descubra as melhores técnicas para um look impecável.',
  keywords: 'maquiagem para casamento diurno, maquiagem noiva dia, maquiagem leve para noivas, maquiagem natural casamento manhã'
};

const pageData = {
  article: {
    headline: "Maquiagem para Casamento Diurno | Studio Amendolla",
    description: "A maquiagem para casamento diurno realça a beleza natural com leveza e sofisticação. Descubra as melhores técnicas para um look impecável.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais são as principais características da maquiagem para casamento diurno?",
      answer: "A maquiagem diurna é leve, iluminada e natural, realçando a beleza sem pesar no visual."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "A produção completa leva cerca de 3 horas, garantindo um acabamento impecável e duradouro."
    },
    {
      question: "Vocês oferecem teste de maquiagem?",
      answer: "Sim, realizamos um teste prévio para garantir que a maquiagem esteja perfeita no dia do casamento."
    },
    {
      question: "Como faço para garantir minha reserva?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade no seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem para Casamento Diurno Profissional",
      description: "Make natural e sofisticada, com técnicas que garantem frescor e durabilidade.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Penteado Leve e Elegante para Noivas",
      description: "Penteados românticos e sofisticados que combinam com cerimônias durante o dia.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem para Casamento Diurno",
      url: "https://studioamendollanoivas.com.br/maquiagem-para-casamento-diurno"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem para Casamento Diurno - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem para Casamento Diurno",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemCasamentoDiurnoPage() {
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
            alt="Maquiagem para Casamento Diurno"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Perfeita para Casamentos Durante o Dia</h2>
          <p>
            No Studio Amendolla, criamos maquiagens leves e sofisticadas, perfeitas para cerimônias diurnas.  
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi,  
            trabalha com técnicas modernas para garantir um visual natural e radiante no seu grande dia.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20para%20casamento%20diurno."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços para Noivas que Casam Durante o Dia</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Natural e Iluminada</h3>
            <p>Pele impecável, olhos sutis e acabamento glow para realçar a beleza da noiva.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Suave e Romântico</h3>
            <p>Penteados leves que harmonizam perfeitamente com cerimônias ao ar livre e durante o dia.</p>
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
            <summary>Quais são as principais características da maquiagem para casamento diurno?</summary>
            <p>A maquiagem diurna é leve, iluminada e natural, realçando a beleza sem pesar no visual.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>A produção completa leva cerca de 1 horas, garantindo um acabamento impecável e duradouro.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem teste de maquiagem?</summary>
            <p>Sim, realizamos um teste prévio para garantir que a maquiagem esteja perfeita no dia do casamento.</p>
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
