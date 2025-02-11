"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas"; //manter assim schemas
import styles from "app/styles/BelezaNoivasSP.module.css";//manter assim 
import ServiceSimulator from "app/components/calculadora";//manter assim
import FeaturesCards from "app/components/FeaturesCards";//manter assim
import GaleriaDeFotos from "app/components/GaleriaDeFotos";//manter assim

const pageData = {
  article: {
    headline: "Beleza para Eventos: Maquiagem e Penteados Personalizados",
    description:
      "Transforme seu visual para festas e eventos com nossos serviços de maquiagem e penteados personalizados. No Studio Amendolla, garantimos que você se destaque em qualquer ocasião.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/beleza-eventos.webp",
  },
  faq: [
    {
      question: "Quais serviços de beleza vocês oferecem para eventos?",
      answer: "Oferecemos maquiagem, penteados e pacotes completos para festas, formaturas e outros eventos especiais."
    },
    {
      question: "Como posso agendar um teste de beleza?",
      answer: "Você pode agendar um teste de beleza pelo WhatsApp ou preenchendo o formulário de contato em nosso site."
    },
    {
      question: "Vocês atendem em domicílio?",
      answer: "Sim, oferecemos atendimento a domicílio para maior conforto e comodidade."
    }
  ],
  services: [
    {
      title: "Maquiagem para Festas",
      description: "Realce sua beleza com uma maquiagem que combina com seu estilo e a temática do evento.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Penteado Elegante para Eventos",
      description: "Crie um penteado que complemente seu look, seja um coque sofisticado ou ondas soltas.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Pacote Completo de Beleza para Eventos",
      description: "Oferecemos pacotes que incluem maquiagem e penteado, garantindo que você esteja perfeita para a ocasião.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Beleza para Eventos", url: "/busca" }
  ],
  images: [
    {
      url: "/images/beleza-eventos.webp",
      description: "Beleza para Eventos",
      width: 500,
      height: 333,
      name: "Beleza para Eventos",
      datePublished: "2025-03-01"
    }
  ]
};

const BelezaParaEventosPage = () => {
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
            alt="Beleza para Eventos"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Personalizada para o Seu Evento</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos serviços de beleza personalizados para eventos. Nossa equipe especializada trabalha para criar o visual perfeito para você. Seja para uma festa, formatura ou qualquer outra ocasião, temos as melhores opções para destacar sua beleza.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20meu%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza para Eventos no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteados Personalizados para Eventos</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Eventos</h2>
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

export default BelezaParaEventosPage;
