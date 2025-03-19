import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Noiva de Pele Negra | Studio Amendolla',
  description: 'Especialistas em maquiagem noiva de pele negra. Técnicas avançadas para realçar sua beleza, com produtos de alta performance e acabamento impecável.',
  keywords: 'maquiagem noiva de pele negra, maquiagem para noivas negras, maquiagem profissional pele negra, maquiagem sofisticada pele negra'
};

const pageData = {
  article: {
    headline: "Maquiagem Noiva de Pele Negra | Studio Amendolla",
    description: "Especialistas em maquiagem noiva de pele negra. Técnicas avançadas para realçar sua beleza, com produtos de alta performance e acabamento impecável.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais técnicas são utilizadas na maquiagem noiva de pele negra?",
      answer: "Trabalhamos com correção de subtons, realce da luminosidade natural e produtos específicos para longa duração."
    },
    {
      question: "Quanto tempo dura a maquiagem para noivas negras?",
      answer: "O atendimento completo leva cerca de 3 horas, garantindo um acabamento impecável e durabilidade."
    },
    {
      question: "Vocês oferecem teste de maquiagem?",
      answer: "Sim, realizamos um teste para definir o look ideal e garantir que tudo esteja perfeito no grande dia."
    },
    {
      question: "Como faço para garantir minha reserva?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade no seu dia especial."
    }
  ],
  services: [
    {
      title: "Maquiagem Noiva de Pele Negra Profissional",
      description: "Técnicas especializadas para realçar sua beleza natural, com produtos de alta fixação e acabamento impecável.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Penteado para Noivas Negras",
      description: "Penteados sofisticados que valorizam a textura e estilo dos cabelos naturais ou alisados.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Noiva de Pele Negra",
      url: "https://studioamendollanoivas.com.br/maquiagem-noiva-de-pele-negra"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem Noiva de Pele Negra - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Noiva de Pele Negra",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemNoivaPeleNegraPage() {
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
            alt="Maquiagem Noiva de Pele Negra"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza e Sofisticação na Maquiagem para Noivas Negras</h2>
          <p>
            No Studio Amendolla, destacamos a beleza única de cada noiva negra com técnicas exclusivas e produtos de alta qualidade. 
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi, 
            garante um atendimento personalizado e um look impecável para o grande dia.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20noiva%20de%20pele%20negra."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem para Noivas Negras</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Correção de subtons, realce da pele e produtos específicos para um acabamento duradouro e impecável.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Personalizado</h3>
            <p>Penteados sofisticados e modernos, valorizando a textura natural dos cabelos e o estilo da noiva.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste Completo</h3>
            <p>Sessão prévia para definir a maquiagem e penteado ideal, garantindo segurança e tranquilidade no dia do casamento.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais técnicas são utilizadas na maquiagem noiva de pele negra?</summary>
            <p>Trabalhamos com correção de subtons, realce da luminosidade natural e produtos específicos para longa duração.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura para fazer maquiagem para noivas negras?</summary>
            <p>O atendimento completo leva cerca de 1 hora, garantindo um acabamento impecável e durabilidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem teste de maquiagem?</summary>
            <p>Sim, realizamos um teste para definir o look ideal e garantir que tudo esteja perfeito no grande dia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como faço para garantir minha reserva?</summary>
            <p>A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade no seu dia especial.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
