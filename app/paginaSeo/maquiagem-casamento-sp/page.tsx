import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem para Casamento em São Paulo | Studio Amendolla',
  description: 'Descubra o serviço exclusivo de maquiagem para casamento em São Paulo. Atendimento personalizado para noivas, madrinhas e eventos especiais.',
  keywords: 'maquiagem casamento são paulo, maquiagem profissional noivas sp, maquiagem madrinhas sp, maquiagem casamento zona norte'
};

const pageData = {
  article: {
    headline: "Maquiagem para Casamento em São Paulo | Studio Amendolla",
    description: "Descubra o serviço exclusivo de maquiagem para casamento em São Paulo. Atendimento personalizado para noivas, madrinhas e eventos especiais.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Quais produtos são utilizados na maquiagem para casamento?",
      answer: "Utilizamos produtos de alta qualidade e longa duração, garantindo um visual impecável durante todo o evento."
    },
    {
      question: "Vocês atendem no local do evento?",
      answer: "Sim, nossa equipe pode atender no salão ou no local do evento, conforme sua preferência."
    },
    {
      question: "É possível realizar um teste de maquiagem antes do casamento?",
      answer: "Sim, oferecemos testes de maquiagem para definir o visual ideal e garantir que você se sinta confiante no grande dia."
    },
    {
      question: "Vocês atendem apenas noivas ou também madrinhas e convidadas?",
      answer: "Atendemos noivas, madrinhas, debutantes e convidadas, sempre com a mesma qualidade e atenção aos detalhes."
    }
  ],
  services: [
    {
      title: "Maquiagem para Noivas",
      description: "Visual exclusivo e duradouro para o dia mais especial da sua vida.",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Maquiagem para Madrinhas",
      description: "Look impecável para madrinhas e convidadas, garantindo harmonia com o evento.",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem para Casamento",
      url: "https://studioamendollanoivas.com.br/maquiagem-casamento-sp"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Maquiagem para Casamento em São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem para Casamento SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemCasamentoSPPage() {
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
            alt="Maquiagem para Casamento em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza e Elegância para o Seu Grande Dia</h2>
          <p>
            No Studio Amendolla, oferecemos um serviço exclusivo de maquiagem para casamento em São Paulo. 
            Nossa equipe especializada utiliza técnicas modernas e produtos de alta qualidade para garantir um visual impecável e duradouro. 
            Seja no salão ou no local do evento, cuidamos de cada detalhe para que você se sinta confiante e deslumbrante.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20maquiagem%20para%20casamento%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Seu Atendimento
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Exclusivos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas</h3>
            <p>Visual exclusivo e duradouro para o dia mais especial da sua vida.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Madrinhas</h3>
            <p>Look impecável para madrinhas e convidadas, garantindo harmonia com o evento.</p>
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