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
    headline: "Maquiagem e Penteado para Casamento | Studio Amendolla",
    description:
      "Crie o visual dos seus sonhos no seu casamento com os serviços de maquiagem e penteado oferecidos pelo Studio Amendolla. Beleza personalizada para a noiva.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-penteado-casamento.webp",
  },
};

const MaquiagemEPenteadoParaCasamentoPage = () => {
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
            alt="Maquiagem e Penteado para Casamento"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>O Look Perfeito para o Seu Casamento</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos maquiagem e penteado personalizados para noivas, garantindo que você tenha o visual perfeito no seu grande dia. Nossa equipe de profissionais se dedica a entender seus desejos e criar o look dos seus sonhos, seja para um estilo clássico, moderno ou sofisticado. Realizamos testes de maquiagem e penteado para garantir que tudo esteja impecável. Além disso, contamos com pacotes completos de beleza para noivas, com serviços que incluem maquiagem, penteado e até preparação para as madrinhas.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20meu%20casamento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza para Casamento no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem de Noiva</h3>
            <p>Maquiagem personalizada para noivas, garantindo um visual impecável que combine com seu estilo e personalidade no grande dia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado de Noiva</h3>
            <p>Penteados exclusivos para noivas, desde coques sofisticados até penteados soltos e modernos, sempre alinhados ao seu estilo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo para Noivas</h3>
            <p>Oferecemos pacotes completos de beleza para noivas, que incluem maquiagem e penteado para garantir que tudo esteja perfeito no dia do casamento.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Casamento</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Como agendar meu teste de maquiagem e penteado?</summary>
            <p>Você pode agendar seu teste de maquiagem e penteado entrando em contato pelo WhatsApp ou preenchendo o formulário de contato em nosso site.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Qual é o melhor horário para agendar o teste?</summary>
            <p>Recomendamos que o teste seja feito com pelo menos um mês de antecedência do seu casamento, para garantir tempo suficiente para ajustes, caso necessário.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Os serviços podem ser feitos para as madrinhas também?</summary>
            <p>Sim! Oferecemos serviços de maquiagem e penteado para as madrinhas também, com pacotes especiais para que todas fiquem deslumbrantes.</p>
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

export default MaquiagemEPenteadoParaCasamentoPage;
