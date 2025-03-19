import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Noiva 2025 | Studio Amendolla',
  description: 'Descubra as tendências de maquiagem noiva 2025 e realce sua beleza com técnicas inovadoras, produtos premium e atendimento profissional exclusivo.',
  keywords: 'maquiagem noiva 2025, maquiagem de casamento 2025, maquiagem para noivas modernas, maquiagem sofisticada para noivas'
};

const pageData = {
  article: {
    headline: "Maquiagem Noiva 2025 | Studio Amendolla",
    description: "Descubra as tendências de maquiagem noiva 2025 e realce sua beleza com técnicas inovadoras, produtos premium e atendimento profissional exclusivo.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais são as tendências de maquiagem noiva 2025?",
      answer: "Tons naturais, pele iluminada, delineado sofisticado e técnicas de longa duração são destaque para noivas em 2025."
    },
    {
      question: "Quanto tempo dura a maquiagem para noivas?",
      answer: "O atendimento leva em média 3 horas, garantindo um acabamento impecável e resistência para todo o evento."
    },
    {
      question: "Vocês oferecem pacotes para madrinhas?",
      answer: "Sim, oferecemos pacotes especiais para madrinhas e familiares, criando um visual harmônico para o casamento."
    },
    {
      question: "Como garantir minha reserva?",
      answer: "A reserva é feita mediante contrato e sinal, garantindo exclusividade no seu dia especial."
    }
  ],
  services: [
    {
      title: "Maquiagem Noiva 2025 Profissional",
      description: "Técnicas exclusivas e produtos importados para um visual impecável e duradouro no grande dia.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Penteado para Noivas 2025",
      description: "Penteados elegantes e modernos que harmonizam perfeitamente com o look da noiva.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Noiva 2025",
      url: "https://studioamendollanoivas.com.br/maquiagem-noiva-2025"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem Noiva 2025 - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Noiva 2025",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemNoiva2025Page() {
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
            alt="Maquiagem Noiva 2025"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Noiva 2025: Sofisticação e Tendências</h2>
          <p>
            No Studio Amendolla, cada detalhe é pensado para que sua maquiagem noiva 2025 seja perfeita. 
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi, 
            utiliza técnicas de última geração e produtos premium para um look sofisticado e duradouro.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20noiva%202025."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem para Noivas 2025</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Exclusiva</h3>
            <p>Make sofisticada e resistente, com técnicas que garantem um acabamento perfeito e natural.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Personalizado</h3>
            <p>Criações modernas e sofisticadas, harmonizando com o vestido e acessórios da noiva.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Sessão prévia para definir o look ideal, incluindo ajustes personalizados conforme suas preferências.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais são as tendências de maquiagem noiva 2025?</summary>
            <p>Tons naturais, pele iluminada, delineado sofisticado e técnicas de longa duração são destaque para noivas em 2025.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura para fazer a maquiagem para noivas?</summary>
            <p>O atendimento leva em média 1 hora, garantindo um acabamento impecável e resistência para todo o evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem pacotes para madrinhas?</summary>
            <p>Sim, oferecemos pacotes especiais para madrinhas e familiares, criando um visual harmônico para o casamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como garantir minha reserva?</summary>
            <p>A reserva é feita mediante contrato e sinal, garantindo exclusividade no seu dia especial.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
