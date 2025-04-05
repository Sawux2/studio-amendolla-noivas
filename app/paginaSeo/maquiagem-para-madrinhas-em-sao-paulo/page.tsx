"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Madrinhas em São Paulo | Studio Amendolla",
    description:
      "A maquiagem perfeita para madrinhas em casamentos em São Paulo. Sofisticação, durabilidade e beleza com o toque profissional do Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemParaMadrinhasEmSPPage = () => {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      {/* Conteúdo Principal */}
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Maquiagem para Madrinhas em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Maquiagem Profissional para Madrinhas que Querem Brilhar</h2>
          <p className={styles.description}>
            Ser madrinha é uma honra — e você merece estar linda nesse momento especial! No Studio Amendolla, criamos maquiagens elegantes e personalizadas para madrinhas de casamento em São Paulo. Levamos em consideração o horário da cerimônia, o estilo do vestido e o seu tipo de pele para garantir uma produção impecável, com longa duração e acabamento fotogênico. Com técnicas atuais e produtos de alta performance, nossa missão é fazer com que você se sinta confiante, sofisticada e pronta para celebrar com estilo.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20madrinha%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Madrinha em São Paulo pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços Exclusivos para Madrinhas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Leve para o Dia</h3>
            <p>Ideal para casamentos diurnos, com acabamento suave, pele fresca e destaque sutil nos olhos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Glam para a Noite</h3>
            <p>Produção marcante com olhos esfumados, contorno definido e brilho na medida certa, perfeita para cerimônias noturnas.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Fixação e Foto HD</h3>
            <p>Produtos de alta qualidade que garantem durabilidade e uma pele impecável sob qualquer iluminação e em câmeras HD.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Madrinhas em São Paulo</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Com quanto tempo de antecedência devo agendar a maquiagem?</summary>
            <p>O ideal é agendar com pelo menos 30 dias de antecedência, especialmente em datas com alta demanda como sábados e feriados.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>É possível fazer a maquiagem no local do evento?</summary>
            <p>Sim, oferecemos o serviço de maquiagem a domicílio em São Paulo e região para sua maior comodidade no dia da cerimônia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês fazem maquiagem combinando com o look da noiva?</summary>
            <p>Sim! Se a noiva desejar uma harmonia entre as madrinhas, adaptamos o estilo de maquiagem respeitando seu gosto e o dress code da cerimônia.</p>
          </details>
        </div>
      </section>

      {/* Outros Componentes */}
      <FeaturesCards />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemParaMadrinhasEmSPPage;
