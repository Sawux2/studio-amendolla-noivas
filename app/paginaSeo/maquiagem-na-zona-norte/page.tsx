import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Profissional a Domicílio Zona Norte | Studio Amendolla',
  description: 'Descubra o serviço de maquiagem profissional a domicílio na Zona Norte de São Paulo. Atendimento personalizado para noivas, madrinhas e eventos especiais.',
  keywords: 'maquiagem profissional Zona Norte, maquiagem a domicílio SP, maquiagem para noivas Zona Norte, maquiagem para eventos São Paulo'
};

const pageData = {
  article: {
    headline: "Maquiagem Profissional a Domicílio Zona Norte | Studio Amendolla",
    description: "Descubra o serviço de maquiagem profissional a domicílio na Zona Norte de São Paulo. Atendimento personalizado para noivas, madrinhas e eventos especiais.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais tipos de maquiagem vocês oferecem?",
      answer: "Oferecemos maquiagem para noivas, madrinhas, debutantes, eventos sociais e corporativos, sempre com técnicas modernas e produtos de alta qualidade."
    },
    {
      question: "Como funciona o atendimento a domicílio?",
      answer: "Nossa equipe vai até você, levando todo o material necessário para garantir um atendimento confortável e profissional no local de sua escolha."
    },
    {
      question: "Vocês atendem apenas na Zona Norte?",
      answer: "Embora nosso foco seja a Zona Norte de São Paulo, também atendemos regiões próximas mediante consulta e agendamento."
    },
    {
      question: "É possível realizar um teste de maquiagem antes do evento?",
      answer: "Sim, oferecemos testes de maquiagem para garantir que o visual desejado seja alcançado com perfeição."
    }
  ],
  services: [
    {
      title: "Maquiagem para Noivas",
      description: "Transforme seu grande dia em um momento inesquecível com um visual impecável e duradouro.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Maquiagem para Eventos",
      description: "Seja o centro das atenções em festas, formaturas e eventos corporativos com uma maquiagem profissional.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Profissional a Domicílio Zona Norte",
      url: "https://studioamendollanoivas.com.br/maquiagem-a-domicilio-zona-norte"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem Profissional a Domicílio Zona Norte - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Profissional a Domicílio Zona Norte",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemDomicilioZonaNortePage() {
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
            alt="Maquiagem Profissional a Domicílio Zona Norte"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza e Conforto no Seu Lar</h2>
          <p>
            No Studio Amendolla, oferecemos um serviço exclusivo de maquiagem profissional a domicílio na Zona Norte de São Paulo.  
            Nossa missão é proporcionar um atendimento personalizado, garantindo que você se sinta confiante e deslumbrante em qualquer ocasião.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20maquiagem%20a%20domicílio%20na%20Zona%20Norte."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Seu Atendimento
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas</h3>
            <p>Visual exclusivo e duradouro para o dia mais especial da sua vida.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Eventos</h3>
            <p>Look perfeito para festas, formaturas e eventos corporativos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Defina o visual ideal com uma sessão prévia personalizada.</p>
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