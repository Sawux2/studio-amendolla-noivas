import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Profissional para Eventos São Paulo | Studio Amendolla',
  description: 'Maquiagem profissional para eventos em São Paulo. Atendemos casamentos, formaturas e outros eventos especiais com técnicas sofisticadas e produtos premium.',
  keywords: 'maquiagem profissional para eventos sp, maquiagem casamento sp, maquiagem para formatura sp, maquiagem para festas especiais sp'
};

const pageData = {
  article: {
    headline: "Maquiagem Profissional para Eventos São Paulo | Studio Amendolla",
    description: "Transforme seu visual com maquiagem profissional para eventos especiais em São Paulo. Atendimento para casamentos, formaturas e outras celebrações.",
    author: "Priscila Helena",
    datePublished: "2024-03-25",
    image: "/images/maquiagem-eventos-sp.jpg", 
  },
  faq: [
    {
      question: "Que tipo de eventos vocês atendem?",
      answer: "Atendemos casamentos, formaturas, festas de aniversário e outros eventos especiais. Oferecemos maquiagem personalizada para cada ocasião."
    },
    {
      question: "Qual é o diferencial da maquiagem oferecida?",
      answer: "Utilizamos técnicas avançadas e produtos de alta qualidade, garantindo uma maquiagem duradoura e resistente, para que você fique deslumbrante durante todo o evento."
    },
    {
      question: "É possível agendar a maquiagem para grupos?",
      answer: "Sim, temos pacotes especiais para grupos, como para madrinhas, mães da noiva, formandas e convidadas. Entre em contato para mais informações."
    },
    {
      question: "Como posso agendar minha maquiagem para evento?",
      answer: "Agende sua maquiagem entrando em contato pelo WhatsApp para verificar a disponibilidade e confirmar seu horário."
    }
  ],
  services: [
    {
      title: "Maquiagem para Casamento",
      description: "Maquiagem sofisticada e duradoura para noivas, com acabamento impecável para o seu grande dia.",
      image: "/images/maquiagem-casamento-evento.webp", 
    },
    {
      title: "Maquiagem para Formatura",
      description: "Realce sua beleza com uma maquiagem profissional para sua formatura, com um look que durará a noite toda.",
      image: "/images/maquiagem-formatura-evento.webp", 
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem para Eventos",
      url: "https://studioamendollanoivas.com.br/maquiagem-profissional-para-eventos-sp"
    }
  ],
  images: [
    {
      url: "/images/maquiagem-profissional-eventos-sp.webp",
      description: "Maquiagem Profissional para Eventos São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Profissional para Eventos SP",
      datePublished: "2024-03-25"
    }
  ]
};

export default function MaquiagemProfissionalParaEventosSPPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Maquiagem Profissional para Eventos São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Perfeita para o Seu Evento</h2>
          <p>
            O Studio Amendolla oferece maquiagem profissional para casamentos, formaturas e eventos especiais em São Paulo. Nossa equipe é especializada em criar looks sofisticados e duradouros, para que você brilhe durante toda a celebração.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20para%20o%20meu%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem Agora
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Casamento</h3>
            <p>Maquiagem sofisticada e duradoura para noivas, com técnicas avançadas e acabamento perfeito.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Formatura</h3>
            <p>Realce sua beleza com uma maquiagem profissional para sua formatura, com um look que durará a noite toda.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          {pageData.faq.map((item, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
