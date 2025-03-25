import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem a Domicílio São Paulo | Studio Amendolla',
  description: 'Comodidade e sofisticação no conforto do seu lar. Maquiagem a Domicílio em São Paulo, com técnicas avançadas e produtos premium.',
  keywords: 'maquiagem a domicilio sp, maquiagem profissional a domicilio, maquiagem casamento sp, maquiagem a domicilio para noivas'
};

const pageData = {
  article: {
    headline: "Maquiagem a Domicílio São Paulo | Studio Amendolla",
    description: "Comodidade e sofisticação no conforto do seu lar. Maquiagem a Domicílio em São Paulo, com técnicas avançadas e produtos premium.",
    author: "Priscila Helena",
    datePublished: "2024-03-25",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
  faq: [
    {
      question: "Como funciona a maquiagem a domicílio?",
      answer: "Oferecemos todo o conforto de realizar a maquiagem no seu lar, com equipe especializada, utilizando os mesmos produtos de alta qualidade do nosso estúdio."
    },
    {
      question: "A maquiagem é a mesma que no estúdio?",
      answer: "Sim, utilizamos os mesmos produtos e técnicas, garantindo um acabamento perfeito e duradouro, seja no estúdio ou a domicílio."
    },
    {
      question: "Vocês atendem em toda São Paulo?",
      answer: "Atendemos em diversas regiões de São Paulo. Consulte a disponibilidade para a sua localidade."
    },
    {
      question: "Como agendar a maquiagem a domicílio?",
      answer: "Entre em contato pelo WhatsApp para verificar a disponibilidade de horários e agendar seu atendimento em casa."
    }
  ],
  services: [
    {
      title: "Maquiagem a Domicílio",
      description: "Comodidade de uma maquiagem profissional no conforto do seu lar, com técnicas exclusivas e produtos premium.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    },
    {
      title: "Maquiagem para Noivas a Domicílio",
      description: "Noivas merecem o melhor! Garanta um visual perfeito no seu grande dia, sem sair de casa.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem a Domicílio",
      url: "https://studioamendollanoivas.com.br/maquiagem-a-domicilio-sp"
    }
  ],
  images: [
    {
      url: "/images/maquiagem-casamento-dia-priscila-1.webp",
      description: "Maquiagem a Domicílio São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem a Domicílio SP",
      datePublished: "2024-03-25"
    }
  ]
};

export default function MaquiagemADomicilioSPPage() {
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
            alt="Maquiagem a Domicílio São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Profissional no Conforto da Sua Casa</h2>
          <p>
            No Studio Amendolla, trazemos a excelência da maquiagem profissional diretamente para o conforto da sua casa. Seja para um evento especial ou para o grande dia, garantimos um visual impecável com a comodidade de atendimento a domicílio em São Paulo.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20a%20domicílio."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Sua Maquiagem a Domicílio
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem a Domicílio</h3>
            <p>Atendimento profissional no conforto de sua casa, com técnicas avançadas e produtos premium para garantir a durabilidade e sofisticação.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas a Domicílio</h3>
            <p>O serviço de maquiagem para noivas em sua casa, com a mesma qualidade de nosso estúdio, para o seu grande dia.</p>
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
