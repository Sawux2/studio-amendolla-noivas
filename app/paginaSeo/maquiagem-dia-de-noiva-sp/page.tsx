import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem de Dia de Noiva em São Paulo | Studio Amendolla',
  description: 'Descubra o serviço exclusivo de maquiagem para Dia de Noiva em São Paulo. Atendimento personalizado para tornar seu grande dia inesquecível.',
  keywords: 'maquiagem dia de noiva são paulo, maquiagem profissional noivas sp, maquiagem casamento vila nivi, maquiagem dia de noiva zona norte'
};

const pageData = {
  article: {
    headline: "Maquiagem de Dia de Noiva em São Paulo | Studio Amendolla",
    description: "Descubra o serviço exclusivo de maquiagem para Dia de Noiva em São Paulo. Atendimento personalizado para tornar seu grande dia inesquecível.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Quais produtos são utilizados na maquiagem de Dia de Noiva?",
      answer: "Utilizamos produtos de alta qualidade e longa duração, garantindo um visual impecável durante todo o evento."
    },
    {
      question: "É possível realizar um teste de maquiagem antes do casamento?",
      answer: "Sim, oferecemos testes de maquiagem para definir o visual ideal e garantir que você se sinta confiante no grande dia."
    },
    {
      question: "Vocês atendem no local do evento?",
      answer: "Sim, nossa equipe pode atender no salão ou no local do evento, conforme sua preferência."
    },
    {
      question: "Quanto tempo dura a maquiagem de Dia de Noiva?",
      answer: "A maquiagem é feita com produtos de longa duração, garantindo até 24 horas de fixação."
    }
  ],
  services: [
    {
      title: "Maquiagem para Dia de Noiva",
      description: "Visual exclusivo e duradouro para o dia mais especial da sua vida.",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Teste de Maquiagem",
      description: "Sessão prévia para definir o visual ideal e garantir um acabamento impecável.",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem de Dia de Noiva",
      url: "https://studioamendollanoivas.com.br/maquiagem-dia-de-noiva-sp"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Maquiagem de Dia de Noiva em São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem de Dia de Noiva SP",
      datePublished: "2024-02-01"
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
            alt="Maquiagem de Dia de Noiva em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza e Elegância no Seu Grande Dia</h2>
          <p>
            No Studio Amendolla, oferecemos um serviço exclusivo de maquiagem para Dia de Noiva em São Paulo. 
            Nossa equipe especializada utiliza técnicas modernas e produtos de alta qualidade para garantir um visual impecável e duradouro. 
            Seja no salão ou no local do evento, cuidamos de cada detalhe para que você se sinta confiante e deslumbrante.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20maquiagem%20para%20Dia%20de%20Noiva%20em%20São%20Paulo."
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
            <h3>Maquiagem para Dia de Noiva</h3>
            <p>Visual exclusivo e duradouro para o dia mais especial da sua vida.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Sessão prévia para definir o visual ideal e garantir um acabamento impecável.</p>
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