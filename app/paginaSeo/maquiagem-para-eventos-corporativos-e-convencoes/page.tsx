"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Eventos Corporativos e Convenções | Studio Amendolla",
    description:
      "Imagem profissional e impecável para representar sua marca. Maquiagem ideal para convenções, palestras, feiras e eventos corporativos.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemCorporativaPage = () => {
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
            alt="Maquiagem para eventos corporativos"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Imagem Profissional que Transmite Confiança</h2>
          <p className={styles.description}>
            Participar de eventos corporativos exige uma aparência alinhada e elegante. Nossa maquiagem para convenções, feiras, apresentações e gravações empresariais é pensada para transmitir seriedade, profissionalismo e sofisticação. Trabalhamos com técnicas de maquiagem HD e produtos de longa duração, ideais para ambientes com iluminação intensa e exposição em câmeras. Atendemos executivas, palestrantes, influenciadoras, CEOs e equipes inteiras com foco na identidade visual da marca e na autoconfiança de quem se apresenta.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20evento%20corporativo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem Corporativa pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços para Ambientes Corporativos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Executiva</h3>
            <p>Look leve, sofisticado e estratégico para eventos empresariais, reuniões ou apresentações.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Gravações</h3>
            <p>Técnicas que garantem naturalidade e beleza sob luzes e câmeras em vídeos institucionais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Equipes</h3>
            <p>Atendimento em grupo para padronizar e valorizar a imagem de toda a equipe da empresa.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas Frequentes sobre Maquiagem para Eventos Corporativos</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Vocês atendem diretamente em empresas ou eventos?</summary>
            <p>Sim, oferecemos atendimento in loco para maior praticidade e agilidade antes do evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>É possível atender grupos e equipes?</summary>
            <p>Sim! Fazemos produção de maquiagem e penteado para grupos, com logística organizada e cronograma eficiente.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo leva cada produção?</summary>
            <p>Em média, de 45 minutos a 1 hora por pessoa, dependendo do tipo de maquiagem e penteado escolhido.</p>
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

export default MaquiagemCorporativaPage;
