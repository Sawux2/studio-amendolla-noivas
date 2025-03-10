"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Profissional Vila Medeiros | Studio Amendolla",
    description: 
      "Serviços de maquiagem profissional para Vila Medeiros no Studio Amendolla. Localizado na Vila Nivi, com fácil acesso da Vila Medeiros.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemVilaMedeirosPage = () => {
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
            alt="Maquiagem Profissional Vila Medeiros"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Atendimento Premium para Vila Medeiros</h2>
          <p>
            Em nosso studio na Avenida Julio Buono, 2386, Vila Nivi, oferecemos serviços 
            especializados de maquiagem com fácil acesso para clientes da Vila Medeiros.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20(Vila%20Medeiros)."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Disponíveis</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make Eventos</h3>
            <p>Looks para ocasiões especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Noivas</h3>
            <p>Especialidade em casamentos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Social</h3>
            <p>Para festas e comemorações.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações Úteis</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Onde fica o studio?</summary>
            <p>Avenida Julio Buono, 2386 - Vila Nivi, próximo à Vila Medeiros.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como chegar da Vila Medeiros?</summary>
            <p>Acesso rápido e fácil, poucos minutos da Vila Medeiros.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendimento em domicílio?</summary>
            <p>Sim, disponível para Vila Medeiros e região.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Dias de atendimento?</summary>
            <p>Todos os dias mediante agendamento.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemVilaMedeirosPage;
