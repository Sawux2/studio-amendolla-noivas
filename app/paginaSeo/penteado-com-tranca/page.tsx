"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado com Trança – Elegância, Romantismo e Estilo | Studio Amendolla",
    description:
      "Tranças modernas, clássicas e personalizadas para você arrasar em qualquer ocasião especial. Descubra os penteados com trança do Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PenteadoComTrancaPage = () => {
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
            alt="Penteado com trança elegante"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Um Clássico que Nunca Sai de Moda</h2>
          <p className={styles.description}>
            Os penteados com trança são atemporais, versáteis e cheios de charme. No Studio Amendolla, criamos tranças personalizadas que combinam com sua ocasião, seu estilo e o seu tipo de cabelo. Seja para uma festa, formatura, casamento ou sessão de fotos, temos a opção ideal para valorizar sua beleza com romantismo e sofisticação.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20com%20trança."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Seu Penteado com Trança
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Tipos de Trança que Você Vai Amar</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Trança Embutida</h3>
            <p>Clássica e elegante, perfeita para eventos sofisticados e penteados presos ou semi-presos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Trança Lateral</h3>
            <p>Charmosa e delicada, ideal para um look romântico com toque moderno.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Trança Boxeadora</h3>
            <p>Estilo ousado e esportivo que garante atitude e praticidade no visual.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado com Trança</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual a duração de um penteado com trança?</summary>
            <p>O penteado pode durar o dia ou a noite inteira, dependendo do estilo escolhido e do tipo de cabelo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Tranças funcionam em cabelo curto?</summary>
            <p>Sim! Adaptamos as técnicas para criar tranças lindas mesmo em cabelos mais curtos ou médios.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso combinar trança com outros estilos?</summary>
            <p>Com certeza! Fazemos combinações com coques, rabos de cavalo ou cabelos soltos para um look exclusivo.</p>
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

export default PenteadoComTrancaPage;
