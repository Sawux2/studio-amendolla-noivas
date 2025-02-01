"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Preparação de Noiva Zona Norte | Studio Amendolla",
    description:
      "A preparação da noiva é essencial para garantir um visual perfeito no grande dia. No Studio Amendolla, oferecemos serviços personalizados de maquiagem, penteado e cuidados especiais para noivas na Zona Norte de São Paulo.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/preparacao-noiva-zona-norte.webp",
  },
  services: [
    {
      title: "Preparação de Noiva Zona Norte",
      description:
        "No Studio Amendolla, cuidamos de todos os detalhes para a sua preparação de noiva, com maquiagem e penteado personalizados, além de cuidados que vão garantir que você brilhe no seu grande dia.",
      image: "/images/preparacao-noiva-zona-norte.webp",
    },
  ],
};

const PreparacaoDeNoivaZonaNorteSPPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Preparação de Noiva Zona Norte</h1>
        <p className={styles.description}>
          No Studio Amendolla, oferecemos uma preparação de noiva completa na Zona Norte de São Paulo. Desde a maquiagem personalizada até o penteado que combina com o seu estilo, nossa equipe vai cuidar de todos os detalhes para que você esteja deslumbrante no seu grande dia.
        </p>
      </header>
      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20sessão%20de%20preparação%20de%20noiva%20na%20Zona%20Norte."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Preparação de Noiva no WhatsApp
      </a>

      {/* Seção de Preparação da Noiva */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Preparação Completa para Noivas na Zona Norte de São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Personalizada</h3>
            <p>
              Criamos a maquiagem dos seus sonhos, com produtos de alta qualidade que vão garantir um visual radiante e duradouro durante todo o evento.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Elegante</h3>
            <p>
              Desde o clássico coque até penteados modernos e sofisticados, o penteado ideal para a noiva será escolhido para complementar o seu estilo.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Cuidados Especiais</h3>
            <p>
              Cuide de sua pele e cabelo com tratamentos exclusivos que deixam você ainda mais radiante no dia do seu casamento.
            </p>
          </div>
        </div>
        
      </section>

      {/* Galeria de Preparação de Noiva */}
      
      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Preparação de Noiva</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais os serviços inclusos na preparação de noiva?</h3>
            <p>
              Oferecemos serviços completos, incluindo maquiagem, penteado, tratamentos de pele e cabelo, além de ajustes personalizados para garantir que você se sinta incrível.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o agendamento da preparação de noiva?</h3>
            <p>
              Você pode agendar a preparação de noiva diretamente pelo WhatsApp ou entrando em contato através do nosso formulário de agendamento no site.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Preciso fazer um teste antes da preparação?</h3>
            <p>
              Recomendamos fazer um teste de maquiagem e penteado antes do grande dia para garantir que tudo esteja perfeito.
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

export default PreparacaoDeNoivaZonaNorteSPPage;
