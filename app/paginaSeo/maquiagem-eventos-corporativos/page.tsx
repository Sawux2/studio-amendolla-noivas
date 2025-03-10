"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Eventos Corporativos | Studio Amendolla",
    description: 
      "Maquiagem profissional para eventos empresariais em São Paulo. Looks executivos e elegantes para congressos, palestras e apresentações corporativas.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemCorporativaPage = () => {
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
            alt="Maquiagem para Eventos Corporativos"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Profissionalismo em Cada Detalhe</h2>
          <p>
            Maquiagem elegante e discreta para o ambiente corporativo. 
            Looks que transmitem confiança e competência profissional.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20eventos%20corporativos."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicite um Orçamento
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Corporativos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Palestras e Congressos</h3>
            <p>Make resistente para longas apresentações.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Fotos Corporativas</h3>
            <p>Look profissional para mídia empresarial.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Eventos Executivos</h3>
            <p>Maquiagem para eventos formais.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Atendem empresas?</summary>
            <p>Sim, temos pacotes especiais corporativos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem contrato empresarial?</summary>
            <p>Sim, oferecemos contratos para eventos contínuos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Emitem nota fiscal?</summary>
            <p>Sim, fornecemos toda documentação necessária.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem in company?</summary>
            <p>Sim, nos deslocamos até sua empresa.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemCorporativaPage;
