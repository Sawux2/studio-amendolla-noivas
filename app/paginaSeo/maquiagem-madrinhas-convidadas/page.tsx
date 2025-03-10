"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Madrinhas e Convidadas | Studio Amendolla",
    description: 
      "Maquiagem profissional para madrinhas e convidadas em São Paulo. Looks elegantes e duradouros para complementar o grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemMadrinhasPage = () => {
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
            alt="Maquiagem para Madrinhas e Convidadas"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Elegância para o Cortejo</h2>
          <p>
            Looks sofisticados que harmonizam com o tema do casamento. 
            Maquiagem que valoriza cada madrinha e convidada especial.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20madrinhas."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reserve seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Especiais</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Madrinhas</h3>
            <p>Make exclusiva para o cortejo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Mãe dos Noivos</h3>
            <p>Look sofisticado e elegante.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Convidadas VIP</h3>
            <p>Maquiagem para convidadas especiais.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Atendem grupos grandes?</summary>
            <p>Sim, equipe completa para eventos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Tem pacotes especiais?</summary>
            <p>Sim, descontos para grupos de madrinhas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Horários flexíveis?</summary>
            <p>Sim, adaptamos ao cronograma do evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem teste prévio?</summary>
            <p>Disponível mediante agendamento.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemMadrinhasPage;
