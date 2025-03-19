import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem de Noiva Clássica | Studio Amendolla',
  description: 'A maquiagem de noiva clássica realça sua beleza natural com sofisticação. Técnicas atemporais e produtos premium para um look impecável no grande dia.',
  keywords: 'maquiagem de noiva clássica, maquiagem clássica para noivas, maquiagem elegante para casamento, maquiagem sofisticada para noivas'
};

const pageData = {
  article: {
    headline: "Maquiagem de Noiva Clássica | Studio Amendolla",
    description: "A maquiagem de noiva clássica realça sua beleza natural com sofisticação. Técnicas atemporais e produtos premium para um look impecável no grande dia.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "O que caracteriza a maquiagem de noiva clássica?",
      answer: "Tons neutros, pele impecável, olhos suaves e batom sofisticado, garantindo um visual elegante e atemporal."
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer: "A produção completa leva cerca de 3 horas, incluindo maquiagem e penteado, garantindo um acabamento impecável."
    },
    {
      question: "Oferecem teste de maquiagem para noivas?",
      answer: "Sim, realizamos um teste completo para definir a maquiagem perfeita para o seu grande dia."
    },
    {
      question: "Como garantir minha data?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade para o seu atendimento."
    }
  ],
  services: [
    {
      title: "Maquiagem de Noiva Clássica Profissional",
      description: "Make sofisticada e atemporal, com técnicas precisas e produtos de alta qualidade.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Penteado Clássico para Noivas",
      description: "Penteados elegantes e estruturados para harmonizar com a maquiagem e o vestido.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem de Noiva Clássica",
      url: "https://studioamendollanoivas.com.br/maquiagem-de-noiva-classica"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem de Noiva Clássica - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem de Noiva Clássica",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemNoivaClassicaPage() {
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
            alt="Maquiagem de Noiva Clássica"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Elegância e Sofisticação na Maquiagem de Noiva Clássica</h2>
          <p>
            No Studio Amendolla, oferecemos um atendimento exclusivo para noivas que desejam um visual refinado e atemporal. 
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi, 
            utiliza técnicas que garantem uma maquiagem impecável, destacando a beleza natural da noiva.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20de%20maquiagem%20de%20noiva%20clássica."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem para Noivas Clássicas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Sofisticada</h3>
            <p>Técnicas atemporais que garantem um look impecável e elegante, perfeito para fotos e vídeos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Tradicional</h3>
            <p>Penteados clássicos e estruturados para um visual refinado e harmonioso.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Sessão prévia para definir os detalhes do look ideal para o grande dia.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O que caracteriza a maquiagem de noiva clássica?</summary>
            <p>Tons neutros, pele impecável, olhos suaves e batom sofisticado, garantindo um visual elegante e atemporal.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>A produção completa leva cerca de 3 horas, incluindo maquiagem e penteado, garantindo um acabamento impecável.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Oferecem teste de maquiagem para noivas?</summary>
            <p>Sim, realizamos um teste completo para definir a maquiagem perfeita para o seu grande dia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como garantir minha data?</summary>
            <p>A reserva é feita mediante contrato e pagamento de um sinal, garantindo exclusividade para o seu atendimento.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
