import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Pacote Noiva São Paulo | Studio Amendolla',
  description: 'Transforme seu dia especial em um momento inesquecível com nosso pacote noiva exclusivo. Maquiagem e penteado profissional com técnicas avançadas.',
  keywords: 'pacote noiva são paulo, maquiagem noiva sp, penteado noiva sp, dia da noiva zona norte'
};

const pageData = {
  article: {
    headline: "Pacote Noiva São Paulo | Studio Amendolla",
    description: "Transforme seu dia especial em um momento inesquecível com nosso pacote noiva exclusivo. Maquiagem e penteado profissional com técnicas avançadas.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
  faq: [
    {
      question: "O que inclui o pacote noiva?",
      answer: "Teste completo, make e penteado no dia, produtos premium e atendimento exclusivo."
    },
    {
      question: "Qual a duração do atendimento?",
      answer: "Dedicamos o tempo necessário para alcançar a perfeição, geralmente 3 horas."
    },
    {
      question: "Oferecem pacotes para madrinhas?",
      answer: "Sim, com condições especiais quando agendado junto com a noiva."
    },
    {
      question: "Como garantir a data?",
      answer: "Reserva mediante contrato e sinal, garantindo exclusividade no seu dia."
    }
  ],
  services: [
    {
      title: "Maquiagem Profissional para Noivas",
      description: "Make duradoura com técnicas exclusivas e produtos importados",
      image: "/images/make-noiva-1.webp"
    },
    {
      title: "Penteado para Noivas",
      description: "Penteados exclusivos que valorizam seu estilo",
      image: "/images/penteado-noiva-1.webp"
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Pacote Noiva",
      url: "https://studioamendollanoivas.com.br/pacote-noiva-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Pacote Noiva São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Pacote Noiva SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function PacoteNoivaSPPage() {
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
            alt="Pacote Noiva São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Experiência Exclusiva para Noivas</h2>
          <p>
            No Studio Amendolla, cada noiva recebe um atendimento personalizado e exclusivo. 
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi, 
            garante uma produção impecável com técnicas inovadoras e produtos de alta performance.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20noiva%20completo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende uma Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Pacote Completo para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Make duradoura com técnicas exclusivas e produtos importados para garantir perfeição em todas as fotos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Personalizado</h3>
            <p>Criações únicas que valorizam seus traços e combinam perfeitamente com seu vestido e estilo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste Completo</h3>
            <p>Sessão prévia para definir o look perfeito, incluindo teste de produtos e registro fotográfico.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O que inclui o pacote noiva?</summary>
            <p>Teste completo, make e penteado no dia, produtos premium e atendimento exclusivo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Qual a duração do atendimento?</summary>
            <p>Dedicamos o tempo necessário para alcançar a perfeição, geralmente 3 horas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Oferecem pacotes para madrinhas?</summary>
            <p>Sim, com condições especiais quando agendado junto com a noiva.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como garantir a data?</summary>
            <p>Reserva mediante contrato e sinal, garantindo exclusividade no seu dia.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}