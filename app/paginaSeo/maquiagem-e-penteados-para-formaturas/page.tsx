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
    headline: "Maquiagem e Penteados para Formaturas | Studio Amendolla",
    description:
      "Celebre sua formatura com um visual deslumbrante! Oferecemos serviços de maquiagem e penteados personalizados para garantir que você brilhe na sua grande noite.",
    author: "Priscila Helena",
    datePublished: "2025-06-01",
    image: "/images/maquiagem-para-formatura.webp",
  },
  faq: [
    {
      question: "Quais estilos de maquiagem estão disponíveis para formaturas?",
      answer: "Oferecemos uma variedade de estilos, desde o clássico até o moderno, todos personalizados para atender ao seu gosto e tema da formatura."
    },
    {
      question: "Como funciona o teste de maquiagem e penteado?",
      answer: "Recomendamos agendar uma sessão de teste para garantir que o look escolhido seja exatamente o que você deseja para a sua formatura."
    },
    {
      question: "Posso agendar os serviços de beleza para a minha formatura diretamente?",
      answer: "Sim, você pode agendar a maquiagem e o penteado diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site."
    }
  ],
  services: [
    {
      title: "Maquiagem de Formanda",
      description: "Realce sua beleza com uma maquiagem de formanda que combina com seu estilo e personalidade, garantindo um visual deslumbrante na sua noite especial.",
      image: "/images/dia-da-noiva-1.webp", //repetir imagem padrão
    },
    {
      title: "Penteado Elegante",
      description: "Crie um penteado elegante que complemente seu vestido e estilo, seja um coque clássico ou ondas soltas.",
      image: "/images/dia-de-noiva-em-sao-paulo.webp", //repetir imagem padrão
    },
    {
      title: "Pacote Completo de Beleza",
      description: "Oferecemos pacotes completos de beleza, combinando maquiagem e penteado para garantir que você tenha o visual perfeito para a sua formatura.",
      image: "/images/dia-de-noiva-zona-norte.webp", //repetir imagem padrão
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Maquiagem e Penteados para Formaturas", url: "/maquiagem-e-penteados-para-formaturas" }
  ],
  images: [
    {
      url: "/images/maquiagem-para-formatura.webp",
      description: "Maquiagem para Formatura",
      width: 500,
      height: 333,
      name: "Maquiagem para Formatura",
      datePublished: "2025-06-01"
    }
  ]
};

const BelezaParaFormaturasPage = () => {
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
            alt="Maquiagem para Formatura"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Exclusiva para a Sua Formatura</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos maquiagem e penteados personalizados para formaturas. Nossa equipe especializada trabalha para criar o visual perfeito para você. Seja para um look clássico, romântico ou moderno, temos as melhores opções para destacar sua beleza. Garantimos que sua maquiagem e penteado sejam impecáveis, para que você se sinta deslumbrante na sua grande noite.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20minha%20formatura."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza para Formatura no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteados Personalizados para Formaturas</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Formaturas</h2>
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

export default BelezaParaFormaturasPage;
