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
    headline: "Maquiagem de Formatura em São Paulo | Penteado e Beleza Studio Amendolla",
    description:
      "Transforme sua aparência com a maquiagem de formatura em São Paulo oferecida pelo Studio Amendolla. Nossos serviços de beleza incluem maquiagem e penteado personalizados para garantir que você brilhe na sua noite especial.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/beleza-para-formatura-sao-paulo.webp",
  },
  faq: [
    {
      question: "Quais estilos de maquiagem e penteado estão disponíveis para formatura?",
      answer: "Trabalhamos com diversos estilos, incluindo maquiagens sofisticadas e penteados glamourosos. Tudo é personalizado conforme seu gosto e tema da festa."
    },
    {
      question: "Como funciona o teste de maquiagem e penteado?",
      answer: "Recomendamos agendar uma sessão de teste para garantir que o look escolhido seja exatamente o que você deseja para sua formatura."
    },
    {
      question: "Posso agendar os serviços de beleza para formatura diretamente?",
      answer: "Sim, você pode agendar a maquiagem e o penteado diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site."
    }
  ],
  services: [
    {
      title: "Maquiagem Sofisticada",
      description: "Realce sua beleza com uma maquiagem sofisticada, ideal para formandas que desejam um look marcante e elegante para a cerimônia.",
      image: "/images/maquiagem-sofisticada.webp"
    },
    {
      title: "Penteado Glamouroso",
      description: "Crie um penteado deslumbrante que combine com o seu estilo, seja um coque elegante, ondas soltas ou um look mais moderno e ousado.",
      image: "/images/penteado-glamouroso.webp"
    },
    {
      title: "Look Completo de Beleza",
      description: "Oferecemos pacotes completos de beleza, combinando maquiagem e penteado para garantir que você tenha o visual perfeito para sua formatura.",
      image: "/images/look-completo.webp"
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Beleza para Formatura", url: "/beleza-para-formatura-sao-paulo" }
  ],
  images: [
    {
      url: "/images/beleza-para-formatura-sao-paulo.webp",
      description: "Maquiagem de Formatura em São Paulo",
      width: 500,
      height: 333,
      name: "Maquiagem de Formatura",
      datePublished: "2025-02-01"
    }
  ]
};

const BelezaParaFormaturaSPPage = () => {
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
            alt="Maquiagem de Formatura em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Exclusiva para Sua Formatura</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos maquiagem de formatura em São Paulo, com serviços personalizados para cada formanda. Nossa equipe especializada em maquiagem e penteado trabalha para criar o visual perfeito para você. Seja para um look sofisticado, glamouroso ou moderno, temos as melhores opções para destacar sua beleza. Garantimos que sua maquiagem e penteado de formatura sejam impecáveis, para que você se sinta deslumbrante no seu grande dia. Além disso, realizamos testes de maquiagem e penteado para que tudo esteja perfeito.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20minha%20formatura%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza para Formatura no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Personalizados para Formatura em São Paulo</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Formatura</h2>
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
      <ServiceSimulator />
      <FeaturesCards />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default BelezaParaFormaturaSPPage;
