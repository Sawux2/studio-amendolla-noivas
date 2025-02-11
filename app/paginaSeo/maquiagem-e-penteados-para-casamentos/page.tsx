"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas"; // Importando o componente de schemas
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteados para Casamentos | Studio Amendolla",
    description:
      "Descubra a beleza perfeita para o seu grande dia com nossos serviços de maquiagem e penteados personalizados para casamentos. No Studio Amendolla, garantimos que você brilhe em cada momento.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/maquiagem-para-casamento.webp",
  },
  faq: [
    {
      question: "Quais estilos de maquiagem estão disponíveis para casamentos?",
      answer: "Oferecemos uma variedade de estilos, desde o clássico até o moderno, todos personalizados para atender ao seu gosto e tema do casamento."
    },
    {
      question: "Como funciona o teste de maquiagem e penteado?",
      answer: "Recomendamos agendar uma sessão de teste para garantir que o look escolhido seja exatamente o que você deseja para o seu casamento."
    },
    {
      question: "Posso agendar os serviços de beleza para o meu casamento diretamente?",
      answer: "Sim, você pode agendar a maquiagem e o penteado diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site."
    }
  ],
  services: [
    {
      title: "Maquiagem de Noiva",
      description: "Maquiagem personalizada para noivas, garantindo um visual impecável que combine com seu estilo e personalidade no grande dia.",
      image: "/images/maquiagem-noiva.webp",
    },
    {
      title: "Penteado de Noiva",
      description: "Penteados exclusivos para noivas, desde coques sofisticados até penteados soltos e modernos, sempre alinhados ao seu estilo.",
      image: "/images/penteado-noiva.webp",
    },
    {
      title: "Pacote Completo para Noivas",
      description: "Oferecemos pacotes completos de beleza para noivas, que incluem maquiagem e penteado para garantir que tudo esteja perfeito no dia do casamento.",
      image: "/images/pacote-completo.webp",
    },
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Maquiagem e Penteados para Casamentos", url: "/maquiagem-e-penteados-para-casamentos" }
  ],
  images: [
    {
      url: "/images/maquiagem-para-casamento.webp",
      description: "Maquiagem para Casamento",
      width: 500,
      height: 333,
      name: "Maquiagem para Casamento",
      datePublished: "2025-03-01"
    }
  ]
};

const BelezaParaCasamentosPage = () => {
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
            alt="Maquiagem para Casamento"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Exclusiva para o Seu Casamento</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos maquiagem e penteados personalizados para casamentos. Nossa equipe especializada trabalha para criar o visual perfeito para você. Seja para um look clássico, romântico ou moderno, temos as melhores opções para destacar sua beleza. Garantimos que sua maquiagem e penteado sejam impecáveis, para que você se sinta deslumbrante no seu grande dia.
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
        <h2 className={styles.sectionTitle}>Maquiagem e Penteados Personalizados para Casamentos</h2>
        <div className={styles.servicesGrid}>
          {pageData.services.map(service => (
            <div key={service.title} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Casamentos</h2>
        <div className={styles.faqGrid}>
          {pageData.faq.map(item => (
            <details key={item.question} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Outros Componentes */}
      <FeaturesCards />
      <ServiceSimulator />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default BelezaParaCasamentosPage;
