"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Salão Dia da Noiva São Paulo | Studio Amendolla",
    description: 
      "Pacotes completos para dia da noiva em São Paulo. Maquiagem e penteado profissional no Studio Amendolla, seu espaço exclusivo para noivas.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const SalaoDiaNoivaSPPage = () => {
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
            alt="Salão Dia da Noiva São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Seu Dia Especial Merece o Melhor</h2>
          <p>
            No Studio Amendolla, localizado na Avenida Julio Buono, 2386 - Vila Nivi, 
            oferecemos uma experiência completa para noivas com ambiente exclusivo e serviços premium.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20pacote%20dia%20da%20noiva."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicite um Orçamento
      </a>

      <section className={styles.servicesSection}>
        <h2>Pacote Dia da Noiva</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Make duradoura e à prova de lágrimas.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Exclusivo</h3>
            <p>Penteados personalizados para seu estilo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Ambiente Premium</h3>
            <p>Espaço exclusivo para você e suas madrinhas.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo antes devo agendar?</summary>
            <p>Recomendamos agendamento com 6 meses de antecedência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem teste antes do casamento?</summary>
            <p>Sim, o teste é parte essencial do nosso processo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem madrinhas também?</summary>
            <p>Sim, temos pacotes especiais para madrinhas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Trabalham com produtos Premium?</summary>
            <p>Sim, utilizamos produtos premium.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default SalaoDiaNoivaSPPage;
