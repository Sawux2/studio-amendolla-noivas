"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado de Debutante na Zona Norte SP | Studio Amendolla",
    description:
      "Crie o penteado perfeito para sua festa de debutante na Zona Norte SP. No Studio Amendolla, oferecemos penteados personalizados para garantir um visual deslumbrante no seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/penteado-de-debutante-zona-norte.webp",
  },
  services: [
    {
      title: "Penteado de Debutante na Zona Norte SP",
      description:
        "No Studio Amendolla, oferecemos penteados exclusivos para debutantes, criando visuais incríveis e duradouros, ideais para sua festa de 15 anos na Zona Norte de São Paulo.",
      image: "/images/penteado-de-debutante-zona-norte.webp",
    },
  ],
};

const PenteadoDeDebutanteZonaNortePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Penteado de Debutante na Zona Norte SP</h1>
        <p className={styles.description}>
          No Studio Amendolla, criamos penteados personalizados para debutantes na Zona Norte de São Paulo, garantindo que você se sinta única e deslumbrante no seu baile de 15 anos.
        </p>
      </header>
      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20penteado%20para%20debutante%20na%20Zona%20Norte%20SP."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado de Debutante no WhatsApp
      </a>

      {/* Seção de Penteados para Debutante */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Penteados Personalizados para Debutante na Zona Norte SP</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteado Clássico</h3>
            <p>
              Um penteado clássico e elegante, perfeito para debutantes que desejam um look atemporal e sofisticado, ideal para qualquer tipo de festa.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Moderno</h3>
            <p>
              Para quem deseja um visual mais atual, criamos penteados modernos e ousados, combinando técnicas inovadoras e acabamentos impecáveis.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Romântico</h3>
            <p>
              Se você busca um look mais delicado e feminino, o penteado romântico é perfeito. Com tranças e ondas suaves, ele oferece um visual suave e encantador.
            </p>
          </div>
        </div>
        
      </section>

      {/* Galeria de Penteados */}
      
      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado de Debutante</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais estilos de penteado para debutante estão disponíveis?</h3>
            <p>
              Trabalhamos com diversos estilos, incluindo penteados clássicos, modernos e românticos, todos personalizados para o seu gosto e estilo de festa.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o teste de penteado para debutante?</h3>
            <p>
              Recomendamos agendar uma sessão de teste para garantir que o penteado escolhido combine perfeitamente com seu estilo e o tema da festa.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar o penteado de debutante diretamente?</h3>
            <p>
              Sim, basta agendar o seu penteado diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
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

export default PenteadoDeDebutanteZonaNortePage;
