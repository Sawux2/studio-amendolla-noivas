"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteados Profissionais Jardim São Paulo | Studio Amendolla",
    description: 
      "Penteados profissionais para Jardim São Paulo no Studio Amendolla. Localizado na Vila Nivi, com fácil acesso do Jardim São Paulo.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const PenteadoJardimSaoPauloPage = () => {
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
            alt="Penteados Profissionais Jardim São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Penteados para Jardim São Paulo</h2>
          <p>
            Em nosso studio na Avenida Julio Buono, 2386 - Vila Nivi, oferecemos serviços premium 
            de penteados com fácil acesso para clientes do Jardim São Paulo.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20(Jardim%20São%20Paulo)."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteados para Noivas</h3>
            <p>Especialidade em casamentos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados para Festas</h3>
            <p>Looks para eventos especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Sociais</h3>
            <p>Para todas as ocasiões.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações do Studio</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Localização do studio?</summary>
            <p>Avenida Julio Buono, 2386 - Vila Nivi, próximo ao Jardim São Paulo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como chegar do Jardim São Paulo?</summary>
            <p>Acesso rápido, apenas alguns minutos do Jardim São Paulo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem teste de penteado?</summary>
            <p>Sim, disponível mediante agendamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem em domicílio?</summary>
            <p>Sim, disponível para Jardim São Paulo e região.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default PenteadoJardimSaoPauloPage;
