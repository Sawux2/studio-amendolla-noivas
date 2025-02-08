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
    headline: "Maquiagem para Evento Formal | Studio Amendolla",
    description:
      "Realce sua beleza com uma maquiagem impecável para eventos formais oferecida pelo Studio Amendolla. Encontre o look perfeito para casamentos, jantares e outras ocasiões especiais.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-evento-formal.webp",
  },
};

const MaquiagemEventoFormalPage = () => {
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
            alt="Maquiagem para Evento Formal"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Maquiagem Sofisticada para Eventos Formais</h2>
          <p className={styles.description}>
            No Studio Amendolla, criamos maquiagens sofisticadas e duradouras para eventos formais, como casamentos, jantares, galas e coquetéis. Nossa equipe de maquiadores especializados vai transformar seu visual, oferecendo uma maquiagem que destaque sua beleza natural de forma elegante e refinada. Queremos que você se sinta confiante e deslumbrante, independentemente da ocasião. Além disso, oferecemos testes de maquiagem para garantir que o look esteja perfeito para o grande dia.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20meu%20evento%20formal."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Evento Formal no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem Profissional para Eventos Formais</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Elegante para Casamentos</h3>
            <p>Oferecemos uma maquiagem refinada e elegante, ideal para casamentos, destacando sua beleza de maneira sofisticada e duradoura.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Jantares e Galas</h3>
            <p>Criamos looks impecáveis para jantares e galas, com foco em um visual clássico e sofisticado, perfeito para eventos à noite.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Coquetéis</h3>
            <p>Para coquetéis, oferecemos maquiagens mais descontraídas, mas igualmente elegantes, para garantir um visual incrível e fresco.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Eventos Formais</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual é o estilo de maquiagem ideal para um evento formal?</summary>
            <p>A maquiagem para eventos formais deve ser sofisticada e atemporal, geralmente com uma base impecável, olhos bem definidos e lábios equilibrados, destacando sua beleza de forma elegante.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como posso garantir que a maquiagem dure durante todo o evento?</summary>
            <p>Utilizamos produtos de alta qualidade e técnicas de fixação para garantir que a maquiagem permaneça impecável ao longo de todo o evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar meu atendimento para maquiagem diretamente pelo WhatsApp?</summary>
            <p>Sim, você pode agendar sua maquiagem para evento formal diretamente pelo WhatsApp ou através do formulário de contato em nosso site.</p>
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

export default MaquiagemEventoFormalPage;
