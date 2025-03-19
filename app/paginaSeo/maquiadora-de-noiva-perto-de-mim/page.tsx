import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiadora de Noiva Perto de Mim | Studio Amendolla',
  description: 'Encontre uma maquiadora de noiva perto de você. Atendimento especializado para um look impecável e duradouro no dia do seu casamento.',
  keywords: 'maquiadora de noiva perto de mim, maquiagem para noivas, maquiadora especializada em casamento, maquiagem profissional para noivas'
};

const pageData = {
  article: {
    headline: "Maquiadora de Noiva Perto de Mim | Studio Amendolla",
    description: "Encontre uma maquiadora de noiva perto de você. Atendimento especializado para um look impecável e duradouro no dia do seu casamento.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais serviços de maquiagem para noivas vocês oferecem?",
      answer: "Realizamos maquiagem para noivas, madrinhas e damas de honra, garantindo um look sofisticado, duradouro e personalizado para o grande dia."
    },
    {
      question: "Quanto tempo dura a maquiagem de noiva?",
      answer: "A sessão de maquiagem pode durar entre 1 a 2 horas, dependendo do estilo desejado. A durabilidade da maquiagem pode variar entre 15 a 24 horas, garantindo um visual impecável durante toda a cerimônia e festa."
    },
    {
      question: "Vocês oferecem atendimento a domicílio?",
      answer: "Sim, atendemos noivas em domicílio ou no local do evento, proporcionando mais conforto e exclusividade para um dia sem preocupações."
    },
    {
      question: "Como faço para agendar um horário?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo um atendimento exclusivo e prioritário."
    }
  ],
  services: [
    {
      title: "Maquiagem para Noivas",
      description: "Técnicas avançadas para um look impecável, com pele iluminada e durabilidade garantida.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Teste de Maquiagem",
      description: "Sessão prévia para definir o visual perfeito para o dia do casamento, garantindo tranquilidade e segurança.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiadora de Noiva Perto de Mim",
      url: "https://studioamendollanoivas.com.br/maquiadora-de-noiva-perto-de-mim"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiadora de Noiva Perto de Mim - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiadora de Noiva Perto de Mim",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiadoraNoivaProximoPage() {
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
            alt="Maquiadora de Noiva Perto de Mim"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Encontre uma Maquiadora de Noiva Perto de Você</h2>
          <p>
            No Studio Amendolla, garantimos que cada noiva receba um atendimento exclusivo, realçando sua beleza com maquiagem profissional e duradoura.  
            Nosso estúdio está localizado na Vila Nivi, Zona Norte de São Paulo, e também realizamos atendimentos a domicílio em todas as regiões.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20noiva%20com%20uma%20maquiadora%20perto%20de%20mim."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas</h3>
            <p>Look sofisticado e duradouro, com pele iluminada e olhos marcantes para um dia inesquecível.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Sessão prévia para definir o visual ideal, garantindo um acabamento perfeito e personalizado.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Atendimento a Domicílio</h3>
            <p>Serviço exclusivo para noivas no conforto de casa ou no local da cerimônia.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais serviços de maquiagem para noivas vocês oferecem?</summary>
            <p>Realizamos maquiagem para noivas, madrinhas e damas de honra, garantindo um look sofisticado, duradouro e personalizado para o grande dia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura a maquiagem de noiva?</summary>
            <p>A sessão de maquiagem pode durar entre 1 a 2 horas, dependendo do estilo desejado. A durabilidade da maquiagem pode variar entre 15 a 24 horas, garantindo um visual impecável durante toda a cerimônia e festa.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem atendimento a domicílio?</summary>
            <p>Sim, atendemos noivas em domicílio ou no local do evento, proporcionando mais conforto e exclusividade para um dia sem preocupações.</p>
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
