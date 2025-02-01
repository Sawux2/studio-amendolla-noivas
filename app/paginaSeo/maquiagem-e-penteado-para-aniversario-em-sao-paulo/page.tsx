"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Aniversários em São Paulo | Studio Amendolla",
    description:
      "Celebre seu aniversário com o look perfeito! No Studio Amendolla, oferecemos maquiagem e penteado personalizados para garantir que você arrase na sua festa.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-penteado-aniversario.webp",
  },
  services: [
    {
      title: "Maquiagem e Penteado para Aniversários",
      description:
        "Oferecemos serviços de maquiagem e penteado personalizados para aniversários, com looks que vão desde o sofisticado até o mais descomplicado e divertido, para todos os estilos de festa.",
      image: "/images/maquiagem-penteado-aniversario.webp",
    },
  ],
};

const MaquiagemEPenteadoParaAniversariosPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Maquiagem e Penteado para Aniversários em São Paulo</h1>
        <p className={styles.description}>
          No Studio Amendolla, criamos looks incríveis para o seu aniversário. Seja para uma festa mais intimista ou uma grande celebração, nossa equipe vai realçar sua beleza com maquiagem e penteado perfeitos.
        </p>
      </header>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20e%20penteado%20para%20o%20aniversário%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Look para Aniversário no WhatsApp
      </a>

      {/* Seção de Maquiagem e Penteado para Aniversários */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Personalizados para Aniversários</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Glamourosa</h3>
            <p>
              Para uma festa de aniversário inesquecível, criamos uma maquiagem glamourosa, com detalhes sofisticados que vão deixar você ainda mais deslumbrante.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Elegante ou Descomplicado</h3>
            <p>
              Desde penteados sofisticados para uma festa mais formal até looks mais soltos e modernos para uma celebração mais descontraída, temos opções para todos os gostos.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo para o Seu Estilo</h3>
            <p>
              Personalizamos seu look de acordo com o tema do seu aniversário, garantindo que você se sinta linda e confortável durante toda a festa.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem e Penteado para Aniversários</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Qual é o estilo de maquiagem ideal para aniversários?</h3>
            <p>
              A maquiagem para aniversários pode variar de acordo com o tipo de festa. Oferecemos desde maquiagens leves e naturais até looks mais glamourosos para festas de gala.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como posso escolher meu penteado para o aniversário?</h3>
            <p>
              Você pode escolher entre penteados elegantes, descontraídos ou modernos, dependendo do estilo da sua festa. Nossa equipe vai ajudar a decidir o melhor look para você.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar maquiagem e penteado para o meu aniversário?</h3>
            <p>
              Sim! Agende seus serviços de maquiagem e penteado para aniversário diretamente pelo WhatsApp ou através do nosso formulário de contato.
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

export default MaquiagemEPenteadoParaAniversariosPage;
