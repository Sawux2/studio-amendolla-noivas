"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Convidadas de Casamento em São Paulo | Studio Amendolla",
    description:
      "Produção completa para convidadas de casamento em São Paulo. Maquiagem e penteado profissional para você arrasar como convidada com muito estilo e sofisticação.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemPenteadoConvidadasSPPage = () => {
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
            alt="Maquiagem e penteado para convidadas de casamento em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Estilo, Elegância e Praticidade no Seu Look de Convidada</h2>
          <p className={styles.description}>
            Ser convidada de um casamento é uma honra — e merece uma produção à altura! No Studio Amendolla, oferecemos maquiagem e penteado profissional em São Paulo para que você esteja linda, com um visual que valorize sua beleza e combine com o estilo da festa. Atendemos em domicílio ou em nosso estúdio, sempre com pontualidade e foco no seu bem-estar. Se você procura um look mais clássico, moderno ou natural, nossa equipe está pronta para criar a combinação perfeita de maquiagem e penteado para o evento.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20maquiagem%20e%20penteado%20para%20convidada%20de%20casamento%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção como Convidada em São Paulo pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços para Convidadas de Casamento</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Clássica ou Glam</h3>
            <p>Produção com acabamento impecável, pele perfeita e olhos marcantes para eventos formais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Solto ou Preso</h3>
            <p>Trabalhamos com penteados duradouros e sofisticados, adaptados ao estilo da festa e ao seu vestido.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo</h3>
            <p>Opção ideal para quem quer praticidade com um visual harmonizado de maquiagem + cabelo.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas Frequentes sobre Produção para Convidadas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Com quanto tempo de antecedência devo agendar?</summary>
            <p>Recomendamos que o agendamento seja feito com pelo menos 1 a 2 semanas de antecedência, principalmente em sábados e feriados.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês fazem atendimento a domicílio?</summary>
            <p>Sim, atendemos em domicílio em São Paulo e região. Verifique a disponibilidade e taxas de deslocamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O serviço é indicado para todas as idades?</summary>
            <p>Com certeza! Atendemos convidadas de todas as idades, desde adolescentes até senhoras, com um atendimento cuidadoso e personalizado.</p>
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

export default MaquiagemPenteadoConvidadasSPPage;
