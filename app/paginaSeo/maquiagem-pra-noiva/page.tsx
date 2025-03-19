import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem pra Noiva | Studio Amendolla',
  description: 'Realce sua beleza no grande dia com maquiagem pra noiva profissional. Técnicas avançadas, produtos premium e atendimento exclusivo em São Paulo.',
  keywords: 'maquiagem pra noiva, maquiagem profissional para noivas, maquiagem de casamento, maquiagem de noiva sp'
};

const pageData = {
  article: {
    headline: "Maquiagem pra Noiva | Studio Amendolla",
    description: "Realce sua beleza no grande dia com maquiagem pra noiva profissional. Técnicas avançadas, produtos premium e atendimento exclusivo em São Paulo.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais são os diferenciais da maquiagem pra noiva?",
      answer: "Usamos técnicas exclusivas, produtos de alta performance e um atendimento personalizado para garantir durabilidade e sofisticação."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "A maquiagem pra noiva leva, em média, 3 horas, garantindo um acabamento impecável e um visual perfeito para fotos e cerimônia."
    },
    {
      question: "Vocês oferecem pacotes para madrinhas e mães da noiva?",
      answer: "Sim, disponibilizamos pacotes especiais para madrinhas e familiares, garantindo um visual harmonioso no casamento."
    },
    {
      question: "Como posso garantir minha data?",
      answer: "O agendamento é feito mediante contrato e pagamento de um sinal, garantindo exclusividade para seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem Profissional pra Noiva",
      description: "Make sofisticada e duradoura, com técnicas inovadoras e produtos importados para um resultado impecável.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Penteado Exclusivo para Noivas",
      description: "Penteados elegantes e personalizados para realçar sua beleza no dia do casamento.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem pra Noiva",
      url: "https://studioamendollanoivas.com.br/maquiagem-pra-noiva"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem pra Noiva - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem pra Noiva SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemPraNoivaPage() {
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
            alt="Maquiagem pra Noiva"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Experiência Exclusiva em Maquiagem pra Noiva</h2>
          <p>
            No Studio Amendolla, valorizamos cada detalhe para que sua maquiagem pra noiva seja impecável. 
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi, 
            proporciona um atendimento diferenciado, garantindo um look elegante e duradouro.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20pra%20noiva."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Exclusivos para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Maquiagem sofisticada e resistente, com técnicas que garantem um acabamento perfeito em todas as fotos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Personalizado</h3>
            <p>Penteados modernos e sofisticados para realçar sua beleza e combinar com o vestido e acessórios.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste Completo</h3>
            <p>Sessão prévia para definir o look ideal, incluindo teste de produtos e ajustes personalizados.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais são os diferenciais da maquiagem pra noiva?</summary>
            <p>Usamos técnicas exclusivas, produtos de alta performance e um atendimento personalizado para garantir durabilidade e sofisticação.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>A maquiagem pra noiva leva, em média, 3 horas, garantindo um acabamento impecável e um visual perfeito para fotos e cerimônia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem pacotes para madrinhas e mães da noiva?</summary>
            <p>Sim, disponibilizamos pacotes especiais para madrinhas e familiares, garantindo um visual harmonioso no casamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como posso garantir minha data?</summary>
            <p>O agendamento é feito mediante contrato e pagamento de um sinal, garantindo exclusividade para seu atendimento.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
