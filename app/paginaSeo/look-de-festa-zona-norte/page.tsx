"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Look de Festa na Zona Norte | Studio Amendolla",
    description:
      "Transforme seu visual para a festa dos seus sonhos na Zona Norte. No Studio Amendolla, oferecemos maquiagem e penteado personalizados para eventos especiais.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/look-de-festa-zona-norte.webp",
  },
  services: [
    {
      title: "Look de Festa na Zona Norte",
      description:
        "No Studio Amendolla, criamos looks incríveis para festas na Zona Norte, com maquiagem e penteado que garantem o brilho e a confiança que você precisa para qualquer evento.",
      image: "/images/look-de-festa-zona-norte.webp",
    },
  ],
};

const LookDeFestaZonaNortePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Look de Festa na Zona Norte</h1>
        <p className={styles.description}>
          No Studio Amendolla, criamos o look perfeito para você brilhar na festa. Seja para um aniversário, festival ou evento, nossa equipe vai criar um visual exclusivo e impecável para você.
        </p>
      </header>
      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20maquiagem%20para%20festa%20na%20Zona%20Norte."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Look de Festa no WhatsApp
      </a>

      {/* Seção de Looks para Festa */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Looks Personalizados para Festas na Zona Norte</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Glamourosa</h3>
            <p>
              Realce sua beleza com uma maquiagem glamourosa. Ideal para festas sofisticadas, você vai brilhar com um look deslumbrante e moderno.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Natural</h3>
            <p>
              Para quem prefere um look mais discreto, a maquiagem natural é leve e perfeita para eventos mais íntimos, realçando sua beleza de forma sutil.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Contemporânea</h3>
            <p>
              Uma maquiagem moderna e arrojada, ideal para quem deseja destacar-se com um visual atual e cheio de personalidade para festas.
            </p>
          </div>
        </div>
        
      </section>

      {/* Galeria de Looks */}
      
      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Looks para Festas</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais estilos de look para festa estão disponíveis?</h3>
            <p>
              Oferecemos looks com maquiagem glamourosa, natural e contemporânea, todos adaptados ao seu gosto e ao estilo do evento.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o teste de maquiagem para festas?</h3>
            <p>
              Agende uma sessão de teste para garantir que o visual escolhido combine perfeitamente com o tema da sua festa.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar a maquiagem para festa na Zona Norte?</h3>
            <p>
              Sim, basta agendar sua maquiagem diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
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

export default LookDeFestaZonaNortePage;
