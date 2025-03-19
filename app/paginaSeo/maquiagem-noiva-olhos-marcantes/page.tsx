import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Noiva Olhos Marcantes | Studio Amendolla',
  description: 'Destaque seu olhar no grande dia com a maquiagem noiva olhos marcantes. Técnicas sofisticadas para realçar sua beleza com elegância e intensidade.',
  keywords: 'maquiagem noiva olhos marcantes, maquiagem marcante para noivas, maquiagem de casamento com olhos destacados, maquiagem sofisticada para noivas'
};

const pageData = {
  article: {
    headline: "Maquiagem Noiva Olhos Marcantes | Studio Amendolla",
    description: "Destaque seu olhar no grande dia com a maquiagem noiva olhos marcantes. Técnicas sofisticadas para realçar sua beleza com elegância e intensidade.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "O que caracteriza a maquiagem noiva olhos marcantes?",
      answer: "Olhos esfumados, delineado sofisticado, cílios volumosos e técnicas que realçam o olhar de forma intensa e elegante."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "A maquiagem completa leva em média 3 horas, garantindo um acabamento impecável e durabilidade prolongada."
    },
    {
      question: "Vocês oferecem teste de maquiagem?",
      answer: "Sim, realizamos um teste prévio para definir os detalhes e garantir que sua maquiagem esteja perfeita no dia do casamento."
    },
    {
      question: "Como faço para garantir minha reserva?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade no seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem Noiva Olhos Marcantes Profissional",
      description: "Técnicas de realce do olhar, como esfumado sofisticado e cílios volumosos para um visual impactante.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Penteado para Noivas",
      description: "Penteados elegantes que harmonizam perfeitamente com uma maquiagem marcante.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Noiva Olhos Marcantes",
      url: "https://studioamendollanoivas.com.br/maquiagem-noiva-olhos-marcantes"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem Noiva Olhos Marcantes - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Noiva Olhos Marcantes",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemNoivaOlhosMarcantesPage() {
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
            alt="Maquiagem Noiva Olhos Marcantes"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Realce Seu Olhar com a Maquiagem para Noivas</h2>
          <p>
            No Studio Amendolla, destacamos seu olhar com técnicas sofisticadas e personalizadas. 
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi, 
            trabalha com produtos premium para criar um visual marcante e inesquecível.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20noiva%20olhos%20marcantes."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços para Noivas que Desejam Olhos Marcantes</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Intensa</h3>
            <p>Olhos esfumados, delineado profissional e cílios volumosos para um look sofisticado e impactante.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Elegante</h3>
            <p>Penteados modernos que complementam e harmonizam com sua maquiagem marcante.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste Personalizado</h3>
            <p>Sessão prévia para definir a maquiagem perfeita, garantindo um look impecável no dia do casamento.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O que caracteriza a maquiagem noiva olhos marcantes?</summary>
            <p>Olhos esfumados, delineado sofisticado, cílios volumosos e técnicas que realçam o olhar de forma intensa e elegante.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>A maquiagem completa leva em média 1 hora, garantindo um acabamento impecável e durabilidade prolongada.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem teste de maquiagem?</summary>
            <p>Sim, realizamos um teste prévio para definir os detalhes e garantir que sua maquiagem esteja perfeita no dia do casamento.</p>
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
