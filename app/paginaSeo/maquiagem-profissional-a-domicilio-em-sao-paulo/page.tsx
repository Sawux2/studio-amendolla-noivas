"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Profissional a Domicílio em São Paulo | Studio Amendolla",
    description:
      "Beleza onde você estiver! Atendimento com maquiagem profissional a domicílio em São Paulo, com conforto, pontualidade e excelência do Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemDomicilioSPPage = () => {
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
            alt="Maquiagem profissional a domicílio em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Atendimento com Maquiagem Profissional no Conforto da Sua Casa</h2>
          <p className={styles.description}>
            No Studio Amendolla, levamos toda a nossa experiência em maquiagem até você! Com nosso serviço a domicílio em São Paulo, você recebe um atendimento exclusivo e personalizado, sem precisar sair de casa. Ideal para eventos, casamentos, ensaios fotográficos ou qualquer ocasião especial. Utilizamos produtos de alta qualidade e técnicas profissionais para garantir uma produção impecável, pontual e com acabamento duradouro — tudo com a praticidade que o seu dia merece.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20profissional%20a%20domicílio%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem a Domicílio em São Paulo pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços de Maquiagem a Domicílio</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Eventos</h3>
            <p>Ideal para aniversários, formaturas, casamentos e confraternizações, com produção completa no conforto da sua casa.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Ensaios</h3>
            <p>Preparação especial para fotos e vídeos, com foco em acabamento perfeito para câmeras e iluminação.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacotes Personalizados</h3>
            <p>Atendemos também grupos de amigas, familiares e madrinhas com pacotes sob medida e horários organizados.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem a Domicílio em São Paulo</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual a área de atendimento em São Paulo?</summary>
            <p>Atendemos toda a cidade de São Paulo e regiões próximas, mediante disponibilidade de agenda e taxa de deslocamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>É necessário reservar com antecedência?</summary>
            <p>Sim, para garantir seu horário e evitar conflitos, o ideal é reservar com pelo menos 7 dias de antecedência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês levam todos os materiais?</summary>
            <p>Sim! Levamos todos os produtos e equipamentos necessários para garantir um atendimento completo e profissional.</p>
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

export default MaquiagemDomicilioSPPage;
