"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Formatura em São Paulo | Studio Amendolla",
    description:
      "Arrase na sua formatura com uma maquiagem impecável em São Paulo. Atendemos com estilo, sofisticação e pontualidade. Studio Amendolla, realce sua beleza com confiança.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemParaFormaturaSPPage = () => {
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
            alt="Maquiagem para formatura em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Seu Momento de Brilhar com Maquiagem Profissional</h2>
          <p className={styles.description}>
            No Studio Amendolla, cada maquiagem para formatura é pensada para valorizar sua beleza, refletir sua personalidade e garantir que você esteja deslumbrante durante toda a noite. Atendemos em toda São Paulo com técnicas atuais, produtos de alta performance e total atenção aos detalhes. Seja para um look clássico, glamouroso ou moderno, nossa equipe está preparada para te deixar pronta para celebrar sua conquista com confiança e muito estilo!
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20formatura%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem de Formatura em São Paulo pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços para Formandas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Glam</h3>
            <p>Look poderoso com brilho, pele perfeita e olhos marcantes. Ideal para brilhar na festa de formatura.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Clean Glow</h3>
            <p>Maquiagem com pele leve, iluminada e natural. Para quem busca elegância sem exageros.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacotes com Penteado</h3>
            <p>Combine maquiagem e penteado para formatura em um só atendimento e aproveite preços especiais.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem de Formatura em São Paulo</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Com quanto tempo de antecedência devo agendar?</summary>
            <p>Recomendamos agendar com pelo menos 2 a 3 semanas de antecedência para garantir sua data, especialmente em épocas de alta demanda.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês fazem atendimento no local do evento?</summary>
            <p>Sim, atendemos em domicílio ou no local da preparação, em toda a cidade de São Paulo e região metropolitana.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês atendem grupos de formandas?</summary>
            <p>Sim! Temos pacotes especiais para grupos, com organização de horários e profissionais suficientes para atender todas com qualidade e pontualidade.</p>
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

export default MaquiagemParaFormaturaSPPage;
