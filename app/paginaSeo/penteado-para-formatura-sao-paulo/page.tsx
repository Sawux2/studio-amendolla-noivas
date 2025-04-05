"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado para Formatura em São Paulo | Studio Amendolla",
    description:
      "Arrase com um penteado elegante e duradouro na sua formatura. Atendimento profissional em São Paulo com técnicas modernas e muito estilo no Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PenteadoParaFormaturaSPPage = () => {
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
            alt="Penteado para formatura em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Penteados Sofisticados para sua Noite de Formatura</h2>
          <p className={styles.description}>
            O penteado certo transforma o visual e eleva sua autoestima. No Studio Amendolla, criamos penteados exclusivos para formandas em São Paulo, com atenção aos detalhes, durabilidade e muito estilo. Seja um coque elegante, semi preso moderno ou cabelo solto com ondas perfeitas, nosso time garante que seu cabelo estará impecável do início ao fim da festa. Trabalhamos com tendências atualizadas e adaptamos ao seu gosto e tipo de cabelo, para que seu look esteja em harmonia com a maquiagem, o vestido e o momento.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20para%20formatura%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado de Formatura em São Paulo pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Penteados para Formandas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Coque Alto ou Baixo</h3>
            <p>Elegância atemporal para quem busca um visual sofisticado e clássico para formaturas noturnas.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Semi Preso com Tranças</h3>
            <p>Visual romântico e moderno que combina com diversos estilos de vestido e maquiagem.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Cabelo Solto com Ondas</h3>
            <p>Leveza e movimento para quem prefere um penteado mais natural, mas cheio de charme.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado para Formatura em São Paulo</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo antes devo lavar o cabelo?</summary>
            <p>O ideal é lavar os cabelos na noite anterior ou até 12h antes do atendimento, sem usar creme ou leave-in, para melhor fixação do penteado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês atendem no local do evento?</summary>
            <p>Sim! Oferecemos serviço de penteado a domicílio ou no local da formatura, com agendamento prévio e taxa de deslocamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso fazer penteado e maquiagem juntos?</summary>
            <p>Sim! Temos pacotes completos de maquiagem e penteado para formatura, com desconto especial e atendimento otimizado.</p>
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

export default PenteadoParaFormaturaSPPage;
