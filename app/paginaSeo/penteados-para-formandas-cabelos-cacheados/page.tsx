"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado para Formandas com Cabelos Cacheados | Studio Amendolla",
    description:
      "Valorize seus cachos com penteados incríveis para o grande dia da formatura. Produção profissional com identidade e atitude.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PenteadoFormandasCacheadasPage = () => {
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
            alt="Penteado para formandas com cabelos cacheados"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Exalte sua Beleza Natural na Formatura</h2>
          <p className={styles.description}>
            Seus cachos merecem destaque no dia da formatura! No Studio Amendolla, criamos penteados para formandas com cabelos cacheados que valorizam a textura natural e oferecem durabilidade, estilo e autenticidade. Seja com penteados semi-presos, tranças criativas, coques altos ou volumosos, você terá um visual deslumbrante que combina com seu vestido, maquiagem e personalidade. Nossos penteados garantem resistência à pista de dança e ao flash das câmeras.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20para%20formatura%20com%20cabelos%20cacheados."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado Cacheado de Formatura pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Ideias de Penteado para Cabelos Cacheados</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Coque com Volume</h3>
            <p>Charmoso e elegante, ideal para valorizar o volume dos cachos com acabamento sofisticado.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Trança Lateral Texturizada</h3>
            <p>Uma opção moderna e estilosa, com destaque para o desenho natural dos fios.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Semi-preso com Acessórios</h3>
            <p>Delicado e jovial, perfeito para quem quer manter parte dos cachos soltos e livres.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado Cacheado</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Vocês finalizam os cachos antes do penteado?</summary>
            <p>Sim! Trabalhamos a definição e a hidratação antes de iniciar o penteado para um acabamento perfeito.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O penteado segura até o final da festa?</summary>
            <p>Sim, utilizamos técnicas específicas para cabelos cacheados e produtos de fixação suaves e eficientes.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso levar acessórios para incluir no penteado?</summary>
            <p>Claro! Coroas, flores, grampos decorativos... tudo é bem-vindo para compor seu look com personalidade.</p>
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

export default PenteadoFormandasCacheadasPage;
