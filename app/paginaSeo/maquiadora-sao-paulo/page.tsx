import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiadora São Paulo | Studio Amendolla',
  description: 'Encontre a melhor maquiadora em São Paulo. Atendimento profissional para noivas, madrinhas e eventos. Agende seu horário com especialistas!',
  keywords: 'maquiadora São Paulo, maquiadora profissional SP, maquiagem para noivas SP, maquiagem para eventos em São Paulo'
};

const pageData = {
  article: {
    headline: "Maquiadora São Paulo | Studio Amendolla",
    description: "Encontre a melhor maquiadora em São Paulo. Atendimento profissional para noivas, madrinhas e eventos. Agende seu horário com especialistas!",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais serviços de maquiagem vocês oferecem em São Paulo?",
      answer: "Realizamos maquiagem para noivas, madrinhas, debutantes, eventos sociais e corporativos, garantindo um visual sofisticado e duradouro."
    },
    {
      question: "Quanto tempo dura uma sessão de maquiagem profissional?",
      answer: "O atendimento pode durar entre 1 a 2 horas, dependendo do estilo escolhido. A durabilidade da maquiagem varia entre 15 a 24 horas, mantendo um acabamento impecável até o final do evento."
    },
    {
      question: "Vocês fazem atendimento a domicílio em São Paulo?",
      answer: "Sim, oferecemos atendimento em domicílio para maior comodidade e exclusividade. Atendemos todas as regiões da cidade."
    },
    {
      question: "Como faço para agendar um horário?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo um atendimento exclusivo e prioritário."
    }
  ],
  services: [
    {
      title: "Maquiadora Profissional para Noivas",
      description: "Técnicas avançadas para realçar sua beleza com sofisticação e longa duração.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Maquiagem para Eventos e Festas",
      description: "Maquiagem impecável para madrinhas, formaturas, ensaios fotográficos e eventos sociais.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiadora São Paulo",
      url: "https://studioamendollanoivas.com.br/maquiadora-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiadora São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiadora São Paulo",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiadoraSPPage() {
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
            alt="Maquiadora São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Encontre a Melhor Maquiadora em São Paulo</h2>
          <p>
            No Studio Amendolla, oferecemos serviços de maquiagem profissional para noivas, madrinhas e eventos.  
            Nossa equipe está localizada na Vila Nivi, Zona Norte de São Paulo, e realizamos atendimentos em estúdio ou a domicílio em toda a cidade.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20com%20uma%20maquiadora%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem Profissional em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas</h3>
            <p>Look sofisticado e duradouro para um dia inesquecível.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Festas e Eventos</h3>
            <p>Visual impecável para madrinhas, formandas e eventos sociais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Sessão prévia para definir o look ideal e garantir um acabamento perfeito.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais serviços de maquiagem vocês oferecem em São Paulo?</summary>
            <p>Realizamos maquiagem para noivas, madrinhas, debutantes, eventos sociais e corporativos, garantindo um visual sofisticado e duradouro.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura uma sessão de maquiagem profissional?</summary>
            <p>O atendimento pode durar entre 1 a 2 horas, dependendo do estilo escolhido. A durabilidade da maquiagem varia entre 15 a 24 horas, mantendo um acabamento impecável até o final do evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês fazem atendimento a domicílio em São Paulo?</summary>
            <p>Sim, oferecemos atendimento em domicílio para maior comodidade e exclusividade. Atendemos todas as regiões da cidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como faço para agendar um horário?</summary>
            <p>A reserva é feita mediante contrato e pagamento de um sinal, garantindo um atendimento exclusivo e prioritário.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
