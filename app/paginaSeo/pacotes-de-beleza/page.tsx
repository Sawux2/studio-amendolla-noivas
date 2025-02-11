"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas"; // manter assim schemas
import styles from "app/styles/BelezaNoivasSP.module.css"; // manter assim sempre o mesmo css
import ServiceSimulator from "app/components/calculadora"; // manter assim
import FeaturesCards from "app/components/FeaturesCards"; // manter assim
import GaleriaDeFotos from "app/components/GaleriaDeFotos"; // manter assim

const pageData = {
  article: {
    headline: "Pacotes de Beleza para Eventos: Tudo que Você Precisa",
    description:
      "Descubra nossos pacotes de beleza personalizados que combinam maquiagem e penteado para garantir que você esteja perfeita em qualquer evento.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/pacotes-de-beleza.webp", //coloque o mesmo no da pagina
  },
  faq: [
    {
      question: "Quais pacotes de beleza vocês oferecem?",
      answer: "Oferecemos pacotes que incluem maquiagem, penteado e até serviços adicionais como manicure e pedicure."
    },
    {
      question: "Como posso agendar um pacote de beleza?",
      answer: "Você pode agendar seu pacote de beleza pelo WhatsApp ou preenchendo o formulário de contato em nosso site."
    },
    {
      question: "Os pacotes incluem testes de beleza?",
      answer: "Sim, todos os pacotes incluem uma sessão de teste para garantir que você esteja satisfeita com o resultado."
    }
  ],
  services: [
    {
      title: "Pacote Básico",
      description: "Inclui maquiagem e penteado simples para eventos.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Pacote Premium",
      description: "Inclui maquiagem, penteado e manicure para um visual completo.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Pacote Completo",
      description: "Inclui todos os serviços de beleza, garantindo que você esteja perfeita do início ao fim.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Pacotes de Beleza", url: "/pacotes-de-beleza" }
  ],
  images: [
    {
      url: "/images/pacotes-beleza.webp",
      description: "Pacotes de Beleza para Eventos",
      width: 500,
      height: 333,
      name: "Pacotes de Beleza",
      datePublished: "2025-03-01"
    }
  ]
};

const PacotesDeBelezaPage = () => {
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
            alt="Pacotes de Beleza"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Personalizada para Seu Evento</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos pacotes de beleza personalizados que atendem a todas as suas necessidades. Nossa equipe especializada está pronta para garantir que você se sinta e pareça incrível em qualquer ocasião.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20pacote%20de%20beleza%20para%20meu%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Pacote de Beleza no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Pacotes de Beleza</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Pacotes de Beleza</h2>
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

export default PacotesDeBelezaPage;
