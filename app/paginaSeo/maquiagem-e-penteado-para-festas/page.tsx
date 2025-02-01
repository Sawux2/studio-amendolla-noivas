"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Festas em São Paulo | Studio Amendolla",
    description:
      "Transforme seu look para festas com maquiagem e penteado exclusivos no Studio Amendolla. Oferecemos serviços personalizados para deixar você incrível, seja para uma festa íntima ou uma grande celebração.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-penteado-festas.webp",
  },
  services: [
    {
      title: "Maquiagem e Penteado para Festas",
      description:
        "No Studio Amendolla, oferecemos serviços completos de maquiagem e penteado para festas, ajustando o estilo ao tema do evento e sua personalidade.",
      image: "/images/maquiagem-penteado-festas.webp",
    },
  ],
};

const MaquiagemEPenteadoParaFestasPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Maquiagem e Penteado para Festas em São Paulo</h1>
        <p className={styles.description}>
          Prepare-se para brilhar em qualquer evento com maquiagem e penteado personalizados para festas! No Studio Amendolla, criamos looks únicos que se adaptam ao estilo e tema da sua celebração.
        </p>
      </header>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20e%20penteado%20para%20a%20minha%20festa%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Look para Festa no WhatsApp
      </a>

      {/* Seção de Maquiagem e Penteado para Festas */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Personalizados para Festas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Sofisticada</h3>
            <p>
              Para festas de gala ou eventos formais, oferecemos maquiagem sofisticada com acabamentos impecáveis, criando um look elegante e atemporal.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Criativo</h3>
            <p>
              Realce seu estilo com penteados modernos ou ousados, perfeitos para festas temáticas ou eventos descontraídos, com muito volume, cachos ou tranças.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Deslumbrante para Todos os Tipos de Festa</h3>
            <p>
              Seja para uma festa de aniversário, formatura ou evento corporativo, criamos looks que refletem sua personalidade e o tema do evento.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem e Penteado para Festas</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Como escolher a maquiagem ideal para minha festa?</h3>
            <p>
              Oferecemos uma consultoria personalizada para escolher a maquiagem perfeita para o seu evento, de acordo com o estilo e tema da festa.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso escolher qualquer estilo de penteado?</h3>
            <p>
              Sim! Temos opções para todos os tipos de festa: desde penteados clássicos até os mais ousados e modernos. Nossa equipe ajudará a criar o look dos seus sonhos.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como posso agendar a maquiagem e o penteado?</h3>
            <p>
              Agende seu horário através do WhatsApp ou preencha nosso formulário online para garantir o seu horário com nossa equipe especializada.
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

export default MaquiagemEPenteadoParaFestasPage;
