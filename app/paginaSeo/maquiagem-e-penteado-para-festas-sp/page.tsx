"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado e Maquiagem para Festa de Aniversário São Paulo | Studio Amendolla",
    description:
      "Destaque-se em sua festa de aniversário com um penteado e maquiagem incríveis. No Studio Amendolla, oferecemos serviços de beleza personalizados para festas em São Paulo.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/penteado-maquiagem-festa-aniversario.webp",
  },
  services: [
    {
      title: "Penteado e Maquiagem para Festa de Aniversário",
      description:
        "O Studio Amendolla oferece penteados e maquiagens exclusivos para festas de aniversário, garantindo um look perfeito para a sua comemoração.",
      image: "/images/penteado-maquiagem-festa-aniversario.webp",
    },
  ],
};

const PenteadoMaquiagemFestaPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Penteado e Maquiagem para Festa de Aniversário</h1>
        <p className={styles.description}>
          Celebre seu aniversário com estilo! No Studio Amendolla, criamos penteados e maquiagens personalizados para festas, garantindo um visual marcante para o seu grande dia.
        </p>
      </header>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20e%20maquiagem%20para%20minha%20festa%20de%20aniversário%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem e Penteado para Festa no WhatsApp
      </a>

      {/* Seção de Penteado e Maquiagem para Festa */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Penteado e Maquiagem Personalizada para Festa</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteado Elegante para Aniversário</h3>
            <p>
              Escolha entre penteados modernos e clássicos, perfeitos para deixar seu look de aniversário ainda mais deslumbrante.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Sofisticada</h3>
            <p>
              Maquiagem de alta qualidade, com acabamentos duradouros, para garantir que você se sinta confiante e radiante na sua festa.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Natural</h3>
            <p>
              Para quem busca um look leve e natural, nossa maquiagem vai realçar sua beleza de forma sutil e encantadora.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado e Maquiagem para Festa de Aniversário</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Posso agendar penteado e maquiagem para aniversário?</h3>
            <p>
              Sim, você pode agendar seu penteado e maquiagem diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Qual é o estilo de maquiagem ideal para uma festa de aniversário?</h3>
            <p>
              A maquiagem pode ser sofisticada, natural ou moderna, tudo de acordo com o seu estilo e preferência para o evento.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Quais tipos de penteados vocês oferecem?</h3>
            <p>
              Oferecemos desde penteados clássicos, como coques e tranças, até opções mais modernas, como ondas e penteados despojados.
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

export default PenteadoMaquiagemFestaPage;
