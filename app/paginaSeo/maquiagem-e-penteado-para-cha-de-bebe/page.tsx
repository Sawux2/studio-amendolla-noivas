"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Chá de Bebê em São Paulo | Studio Amendolla",
    description:
      "Prepare-se para o chá de bebê com a maquiagem e penteado perfeitos. No Studio Amendolla, criamos looks exclusivos para você brilhar nesse evento especial.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-penteado-cha-de-bebe.webp",
  },
  services: [
    {
      title: "Maquiagem e Penteado para Chá de Bebê",
      description:
        "No Studio Amendolla, oferecemos serviços personalizados de maquiagem e penteado para chá de bebê, garantindo que você esteja linda e confiante nesse evento especial.",
      image: "/images/maquiagem-penteado-cha-de-bebe.webp",
    },
  ],
};

const MaquiagemEPenteadoParaChaDeBebePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Maquiagem e Penteado para Chá de Bebê em São Paulo</h1>
        <p className={styles.description}>
          No Studio Amendolla, cuidamos de cada detalhe para garantir que você tenha o look perfeito para o chá de bebê. Oferecemos maquiagem e penteado que combinam com a ocasião e com o seu estilo.
        </p>
      </header>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20e%20penteado%20para%20o%20chá%20de%20bebê%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Look para Chá de Bebê no WhatsApp
      </a>

      {/* Seção de Maquiagem e Penteado para Chá de Bebê */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Personalizados para Chá de Bebê</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Suave e Natural</h3>
            <p>
              Para o chá de bebê, criamos uma maquiagem suave e fresca, ideal para um look delicado e alegre.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Elegante e Confortável</h3>
            <p>
              Oferecemos penteados elegantes e confortáveis, para que você se sinta linda e à vontade durante toda a celebração.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo para a Mamãe</h3>
            <p>
              Criamos um look completo para a mamãe, incluindo maquiagem e penteado que complementam o estilo do evento e sua personalidade.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem e Penteado para Chá de Bebê</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Qual é o estilo de maquiagem ideal para chá de bebê?</h3>
            <p>
              A maquiagem para chá de bebê costuma ser mais suave e delicada, destacando a beleza natural da mamãe com um toque de frescor e leveza.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o agendamento para o chá de bebê?</h3>
            <p>
              Você pode agendar seu serviço de maquiagem e penteado para chá de bebê diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Quais são os estilos de penteado oferecidos para chá de bebê?</h3>
            <p>
              Oferecemos penteados variados, desde os mais soltos e naturais até os mais sofisticados, dependendo do seu gosto e do tema do evento.
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

export default MaquiagemEPenteadoParaChaDeBebePage;
