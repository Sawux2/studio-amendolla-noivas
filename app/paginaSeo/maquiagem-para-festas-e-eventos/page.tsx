"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Festas e Eventos em São Paulo | Studio Amendolla",
    description:
      "Transforme seu visual para qualquer festa ou evento especial com a maquiagem personalizada do Studio Amendolla. Realce sua beleza e arrase em São Paulo.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-para-festas-eventos.webp",
  },
};

const MaquiagemParaFestasEventosSPPage = () => {
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
            src={pageData.article.image} // URL da imagem
            alt="Maquiagem para Festas e Eventos em São Paulo"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Visual Perfeito para Sua Festa ou Evento</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos serviços de maquiagem exclusivos para festas e eventos em São Paulo, criados para realçar sua beleza e garantir que você se sinta incrível. Nossa equipe de maquiadores especializados está pronta para atender suas necessidades, seja para um evento social, festa de gala, ou qualquer outra ocasião especial. Todos os serviços são personalizados para que você se sinta maravilhosa, com um visual sofisticado e moderno.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20minha%20festa%20ou%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Evento no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem Personalizada para Festas e Eventos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem de Gala</h3>
            <p>Para eventos especiais como galas e jantares formais, criamos um visual sofisticado e elegante que combina com a grandiosidade da ocasião.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Festa</h3>
            <p>Seja para uma festa de aniversário, coquetel ou evento social, oferecemos uma maquiagem vibrante que vai fazer você brilhar na pista de dança.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo para Evento</h3>
            <p>Além da maquiagem, também oferecemos pacotes completos que incluem penteado, para garantir que seu look esteja perfeito do começo ao fim.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Festas e Eventos</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Posso agendar uma maquiagem para qualquer tipo de evento?</summary>
            <p>Sim, nós atendemos a todos os tipos de eventos, desde festas de aniversário até grandes galas e eventos corporativos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo antes do evento eu devo agendar minha maquiagem?</summary>
            <p>Recomendamos agendar com pelo menos 1 semana de antecedência para garantir disponibilidade e tempo para um teste, caso necessário.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar para mais de uma pessoa no mesmo evento?</summary>
            <p>Sim, temos pacotes para grupos e podemos atender várias pessoas ao mesmo tempo, garantindo que todos estejam prontos a tempo do evento.</p>
          </details>
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

export default MaquiagemParaFestasEventosSPPage;
