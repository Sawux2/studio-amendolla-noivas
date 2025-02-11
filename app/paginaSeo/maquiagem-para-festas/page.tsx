"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas"; //manter assim schemas
import styles from "app/styles/BelezaNoivasSP.module.css";//manter assim sempre o mesmo css
import ServiceSimulator from "app/components/calculadora";//manter assim 
import FeaturesCards from "app/components/FeaturesCards";//manter assim
import GaleriaDeFotos from "app/components/GaleriaDeFotos";//manter assim

const pageData = {
  article: {
    headline: "Maquiagem para Festas: Destaque-se em Qualquer Ocasião",
    description:
      "Descubra como a maquiagem profissional pode transformar seu visual para festas e eventos. No Studio Amendolla, oferecemos serviços personalizados para garantir que você brilhe em qualquer ocasião.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/maquiagem-para-festas.webp",
  },
  faq: [
    {
      question: "Quais estilos de maquiagem estão disponíveis para festas?",
      answer: "Oferecemos uma variedade de estilos, desde o clássico até o moderno, todos personalizados para atender ao seu gosto e tema da festa."
    },
    {
      question: "Como posso agendar um serviço de maquiagem?",
      answer: "Você pode agendar seu serviço de maquiagem pelo WhatsApp ou preenchendo o formulário de contato em nosso site."
    },
    {
      question: "Vocês oferecem testes de maquiagem?",
      answer: "Sim, recomendamos agendar uma sessão de teste para garantir que o look escolhido seja exatamente o que você deseja."
    }
  ],
  services: [
    {
      title: "Maquiagem para Festas",
      description: "Realce sua beleza com uma maquiagem que combina com seu estilo e a temática da festa.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Penteado Elegante",
      description: "Crie um penteado que complemente seu look, seja um coque sofisticado ou ondas soltas.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Pacote Completo de Beleza",
      description: "Oferecemos pacotes que incluem maquiagem e penteado, garantindo que você esteja perfeita para a ocasião.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Maquiagem para Festas", url: "/maquiagem-para-festas" }
  ],
  images: [
    {
      url: "/images/maquiagem-festas.webp",
      description: "Maquiagem para Festas",
      width: 500,
      height: 333,
      name: "Maquiagem para Festas",
      datePublished: "2025-03-01"
    }
  ]
};

const MaquiagemParaFestasPage = () => {
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
            alt="Maquiagem para Festas"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Personalizada para Festas</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos serviços de maquiagem personalizados para festas. Nossa equipe especializada trabalha para criar o visual perfeito para você. Seja para uma festa de aniversário, formatura ou qualquer outra ocasião, temos as melhores opções para destacar sua beleza.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20serviço%20de%20maquiagem%20para%20minha%20festa."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Festas no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços de Maquiagem para Festas</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Festas</h2>
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

export default MaquiagemParaFestasPage;
