"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Noivas | Studio Amendolla São Paulo",
    description: 
      "Serviços exclusivos de maquiagem e penteado para noivas em São Paulo. Realce sua beleza natural com profissionais especializados em beleza para casamentos.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/makeup-article.webp",
  },
};

const MaquiagemPenteadoNoivasPage = () => {
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
            alt="Maquiagem e Penteado para Noivas"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza Personalizada para seu Dia Especial</h2>
          <p>
            Criamos looks únicos que realçam sua beleza natural e combinam perfeitamente com seu estilo. Nossa equipe especializada garante uma produção duradoura e impecável para seu casamento.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20maquiagem%20e%20penteado%20de%20noiva."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção de Noiva
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Pacote Dia da Noiva</h3>
            <p>Maquiagem e penteado completos com teste prévio incluído.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Exclusivos</h3>
            <p>Criações personalizadas que combinam com seu vestido e estilo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Técnicas especiais para uma maquiagem à prova de lágrimas e duradoura.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes sobre Produção de Noivas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Com quanto tempo devo agendar?</summary>
            <p>Recomendamos agendamento com 6 meses de antecedência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O teste de penteado e maquiagem é obrigatório?</summary>
            <p>Sim, é fundamental para garantirmos o resultado perfeito no dia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem atendimento em domicílio?</summary>
            <p>Sim, atendemos em domicílio ou no local do evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem madrinhas também?</summary>
            <p>Sim, temos pacotes especiais para noiva e madrinhas.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemPenteadoNoivasPage;
