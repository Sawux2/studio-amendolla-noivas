"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Dia da Noiva Completo | Studio Amendolla",
    description:
      "Viva um dia da noiva completo e inesquecível com o Studio Amendolla. Maquiagem, penteado, e muito mais para você brilhar.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const DiaDaNoivaCompletoPage = () => {
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
            alt="Dia da Noiva Completo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Dia da Noiva Inolvidável</h2>
          <p>
            No Studio Amendolla, oferecemos um pacote completo para o seu dia especial, incluindo maquiagem, penteado, e outros serviços para que você se sinta a noiva mais linda do mundo.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20pacote%20Dia%20da%20Noiva."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Dia da Noiva no WhatsApp
      </a>

      <section className={styles.servicesSection}>
        <h2>O que inclui o Dia da Noiva?</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Maquiagem personalizada para realçar sua beleza natural.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Elegante</h3>
            <p>Penteado que combina com seu estilo e vestido.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tratamentos Especiais</h3>
            <p>Opções de tratamentos para pele e cabelo.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes sobre o Dia da Noiva</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Onde o Dia da Noiva pode ser realizado?</summary>
            <p>Oferecemos o serviço no nosso estúdio ou em domicílio.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o Dia da Noiva?</summary>
            <p>Em média, de 4 a 6 horas, dependendo dos serviços escolhidos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso personalizar o meu pacote de Dia da Noiva?</summary>
            <p>Sim, montamos pacotes personalizados de acordo com suas necessidades.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Com quanto tempo de antecedência devo agendar o meu Dia da Noiva?</summary>
            <p>Recomendamos agendar com pelo menos 3 meses de antecedência.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default DiaDaNoivaCompletoPage;
