import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Penteado para Noivas na Zona Norte | Studio Amendolla',
  description: 'Transforme seu visual com penteados exclusivos para noivas na Zona Norte de São Paulo. Atendimento personalizado e profissional.',
  keywords: 'penteado para noivas zona norte, penteado profissional vila nivi, penteado para casamento santana, penteado para noivas tucuruvi'
};

const pageData = {
  article: {
    headline: "Penteado para Noivas na Zona Norte | Studio Amendolla",
    description: "Transforme seu visual com penteados exclusivos para noivas na Zona Norte de São Paulo. Atendimento personalizado e profissional.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Quais estilos de penteado vocês oferecem?",
      answer: "Trabalhamos com coques clássicos, penteados modernos, tranças e estilos despojados, sempre personalizados para você."
    },
    {
      question: "É possível realizar um teste de penteado?",
      answer: "Sim, realizamos testes de penteado para garantir que o estilo escolhido seja perfeito para você."
    },
    {
      question: "Vocês atendem no local do evento?",
      answer: "Sim, nossa equipe pode atender no salão ou no local do evento, conforme sua preferência."
    },
    {
      question: "Quanto tempo leva para fazer o penteado?",
      answer: "O tempo varia de acordo com o estilo escolhido, mas geralmente leva entre 1 a 2 horas."
    }
  ],
  services: [
    {
      title: "Penteado para Noivas",
      description: "Estilos exclusivos e personalizados para o seu grande dia.",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Teste de Penteado",
      description: "Sessão prévia para definir o penteado ideal e garantir um visual impecável.",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Penteado para Noivas",
      url: "https://studioamendollanoivas.com.br/penteado-noivas-zona-norte"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Penteado para Noivas na Zona Norte - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Penteado para Noivas Zona Norte",
      datePublished: "2024-02-01"
    }
  ]
};

export default function PenteadoNoivasZonaNortePage() {
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
            alt="Penteado para Noivas na Zona Norte"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Transforme Seu Visual</h2>
          <p>
            No Studio Amendolla, criamos penteados exclusivos para noivas, garantindo que você esteja deslumbrante no seu grande dia. 
            Nossa equipe é especializada em estilos que combinam com sua personalidade e vestido, proporcionando um visual único e inesquecível.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20penteado%20para%20noivas%20na%20Zona%20Norte."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Seu Atendimento
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Exclusivos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteado para Noivas</h3>
            <p>Estilos exclusivos e personalizados para o seu grande dia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Penteado</h3>
            <p>Sessão prévia para definir o penteado ideal e garantir um visual impecável.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          {pageData.faq.map((item, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}