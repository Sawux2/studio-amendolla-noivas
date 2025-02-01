"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Eventos em São Paulo | Studio Amendolla",
    description:
      "Transforme seu visual para eventos especiais com a maquiagem e penteado ideais. No Studio Amendolla, oferecemos serviços exclusivos para madrinhas, debutantes, festas e mais.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-penteado-eventos-sao-paulo.webp",
  },
  services: [
    {
      title: "Maquiagem e Penteado para Eventos",
      description:
        "No Studio Amendolla, oferecemos serviços personalizados de maquiagem e penteado para qualquer evento, garantindo um visual deslumbrante para madrinhas, debutantes, aniversários e mais.",
      image: "/images/maquiagem-penteado-eventos-sao-paulo.webp",
    },
  ],
};

const MaquiagemEPenteadoParaEventosPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Maquiagem e Penteado para Eventos em São Paulo</h1>
        <p className={styles.description}>
          O Studio Amendolla é especialista em criar looks incríveis para todos os tipos de evento. Se você vai ser madrinha, debutante ou está se preparando para uma festa, temos a maquiagem e o penteado perfeito para você.
        </p>
      </header>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20e%20penteado%20para%20um%20evento%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Look para Evento no WhatsApp
      </a>

      {/* Seção de Maquiagem e Penteado para Eventos */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Personalizados para Eventos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Madrinhas</h3>
            <p>
              Criamos looks sofisticados e duradouros para madrinhas, garantindo que você esteja impecável durante todo o evento.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado para Debutantes</h3>
            <p>
              Para as debutantes, oferecemos penteados modernos ou clássicos, combinando com a maquiagem e o estilo de cada uma.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem e Penteado para Festas e Aniversários</h3>
            <p>
              Se você vai a uma festa ou aniversário, temos opções de maquiagem e penteado que vão te destacar em qualquer ocasião.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem e Penteado para Eventos</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Qual é o estilo de maquiagem ideal para eventos?</h3>
            <p>
              O estilo de maquiagem pode variar dependendo do evento. Para madrinhas e debutantes, geralmente optamos por looks mais sofisticados, enquanto para festas e aniversários, trabalhamos com estilos mais descontraídos e modernos.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como posso agendar minha maquiagem e penteado?</h3>
            <p>
              Você pode agendar seu serviço diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>O que está incluído no serviço de maquiagem e penteado?</h3>
            <p>
              O serviço inclui uma maquiagem personalizada e o penteado ideal, além de dicas de como manter o visual impecável durante o evento.
            </p>
          </div>
        </div>
      </section>

      {/* Outros Componentes */}
      <ServiceSimulator />
      <FeaturesCards />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemEPenteadoParaEventosPage;
