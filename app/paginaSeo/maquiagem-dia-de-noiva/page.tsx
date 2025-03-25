import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem para Dia de Noiva São Paulo | Studio Amendolla',
  description: 'Garanta um visual impecável no seu grande dia com nossa maquiagem para dia de noiva em São Paulo. Técnicas avançadas para um look deslumbrante.',
  keywords: 'maquiagem dia de noiva sp, maquiagem profissional noiva sp, maquiagem casamento sp, maquiagem para noivas são paulo'
};

const pageData = {
  article: {
    headline: "Maquiagem para Dia de Noiva São Paulo | Studio Amendolla",
    description: "Garanta um visual impecável no seu grande dia com nossa maquiagem para dia de noiva em São Paulo. Técnicas avançadas para um look deslumbrante.",
    author: "Priscila Helena",
    datePublished: "2024-03-25",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
  faq: [
    {
      question: "O que inclui a maquiagem para dia de noiva?",
      answer: "Make completa com teste prévio, produtos premium e acabamento impecável para um visual perfeito."
    },
    {
      question: "A maquiagem dura quanto tempo?",
      answer: "Utilizamos técnicas e produtos de alta fixação para que sua maquiagem dure o dia todo, resistente a lágrimas e suor."
    },
    {
      question: "Vocês oferecem pacotes para madrinhas?",
      answer: "Sim, temos pacotes especiais para madrinhas, mães da noiva e convidadas."
    },
    {
      question: "Como agendar um horário?",
      answer: "Entre em contato pelo WhatsApp para verificar disponibilidade e garantir sua reserva."
    }
  ],
  services: [
    {
      title: "Maquiagem para Noivas",
      description: "Maquiagem sofisticada e duradoura para destacar sua beleza no dia mais especial da sua vida.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    },
    {
      title: "Teste de Maquiagem",
      description: "Sessão exclusiva para definir seu look ideal e testar a fixação dos produtos.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Dia de Noiva",
      url: "https://studioamendollanoivas.com.br/maquiagem-dia-de-noiva-sp"
    }
  ],
  images: [
    {
      url: "/images/maquiagem-casamento-dia-priscila-1.webp",
      description: "Maquiagem para Dia de Noiva São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Dia de Noiva SP",
      datePublished: "2024-03-25"
    }
  ]
};

export default function MaquiagemDiaDeNoivaSPPage() {
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
            alt="Maquiagem para Dia de Noiva São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Perfeita para o Seu Grande Dia</h2>
          <p>
            No Studio Amendolla, oferecemos um serviço especializado em maquiagem para noivas, com foco na durabilidade e sofisticação. Nossa equipe utiliza técnicas modernas e produtos premium para garantir um look impecável do início ao fim do seu casamento.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20para%20o%20dia%20do%20meu%20casamento."
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
            <h3>Maquiagem para Noivas</h3>
            <p>Make profissional com técnicas de alta fixação e acabamento sofisticado.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Defina seu look perfeito antes do grande dia com nosso teste exclusivo.</p>
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