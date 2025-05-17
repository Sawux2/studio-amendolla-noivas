"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Atendimento Domicílio Maquiagem | Studio Amendolla",
    description:
      "Receba os melhores serviços de maquiagem no conforto da sua casa com o atendimento domiciliar especializado do Studio Amendolla. Praticidade e qualidade ao seu alcance.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/atendimento-domicilio-maquiagem.webp",
  },
};

const AtendimentoDomicilioMaquiagemPage = () => {
  return (
    <div className={styles.container}>
      <UnifiedSchemas pageData={pageData} /> {/* Corrigido: agora no topo */}

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
            alt="Atendimento Domicílio Maquiagem"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Maquiagem Profissional no Conforto da Sua Casa</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos um atendimento domiciliar de maquiagem de alta qualidade, para você se sentir linda sem sair de casa. Nossa equipe de maquiadores especializados vai até o seu endereço, levando praticidade, conforto e o melhor serviço de beleza. Se você busca uma maquiagem para eventos especiais, como casamentos, formaturas ou até mesmo para o dia a dia, garantimos que o resultado será impecável, com o toque de sofisticação que você merece. Agende o seu atendimento domiciliar e tenha a beleza que você sempre sonhou no local mais aconchegante: a sua casa.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20atendimento%20domiciliar%20de%20maquiagem."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Atendimento Domiciliar de Maquiagem no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços de Maquiagem no Atendimento Domiciliar</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Eventos</h3>
            <p>Oferecemos maquiagem para casamentos, formaturas e outros eventos, garantindo um visual perfeito no conforto da sua casa.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Dia a Dia</h3>
            <p>Para o dia a dia, criamos looks leves e naturais, ideais para o trabalho ou outras ocasiões, tudo no seu ambiente.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Fotos</h3>
            <p>Se você tem uma sessão de fotos importante, nossos maquiadores oferecem uma maquiagem de impacto, para garantir que você fique incrível nas imagens.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Atendimento Domiciliar de Maquiagem</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Como funciona o atendimento domiciliar de maquiagem?</summary>
            <p>Nosso maquiador vai até o seu endereço no dia e horário combinados, levando todos os produtos e ferramentas necessários para o serviço.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quais tipos de maquiagem são oferecidos no atendimento domiciliar?</summary>
            <p>Oferecemos maquiagem para eventos, fotos ou até mesmo para o dia a dia. Cada maquiagem é personalizada de acordo com as suas necessidades e preferências.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar meu atendimento domiciliar diretamente pelo WhatsApp?</summary>
            <p>Sim, você pode agendar o seu atendimento domiciliar de maquiagem pelo WhatsApp ou preenchendo o formulário de contato em nosso site.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
    </div>
  );
};

export default AtendimentoDomicilioMaquiagemPage;
