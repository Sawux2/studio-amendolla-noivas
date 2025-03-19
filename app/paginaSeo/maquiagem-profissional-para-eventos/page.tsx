import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Profissional para Eventos | Studio Amendolla',
  description: 'Serviço de maquiagem profissional para eventos especiais, garantindo sofisticação e longa duração. Atendimento personalizado para festas, formaturas e casamentos.',
  keywords: 'maquiagem profissional para eventos, maquiagem para festas, maquiagem para formatura, maquiagem sofisticada para eventos'
};

const pageData = {
  article: {
    headline: "Maquiagem Profissional para Eventos | Studio Amendolla",
    description: "Serviço de maquiagem profissional para eventos especiais, garantindo sofisticação e longa duração. Atendimento personalizado para festas, formaturas e casamentos.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quais tipos de eventos vocês atendem?",
      answer: "Realizamos maquiagem profissional para formaturas, casamentos, festas de gala, eventos corporativos, aniversários e ensaios fotográficos."
    },
    {
      question: "Quanto tempo dura a maquiagem profissional?",
      answer: "O atendimento pode durar entre 1 a 2 horas, dependendo do estilo escolhido. A durabilidade da maquiagem varia entre 15 a 24 horas, garantindo um look impecável até o fim do evento."
    },
    {
      question: "Vocês oferecem atendimento a domicílio?",
      answer: "Sim, realizamos atendimentos em domicílio ou no local do evento, proporcionando mais conforto e exclusividade para nossas clientes."
    },
    {
      question: "Como faço para agendar um horário?",
      answer: "A reserva é feita mediante contrato e pagamento de um sinal, garantindo um atendimento exclusivo e personalizado."
    }
  ],
  services: [
    {
      title: "Maquiagem Profissional para Festas",
      description: "Make sofisticada e de alta durabilidade para aniversários, casamentos, baladas e eventos sociais.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    },
    {
      title: "Maquiagem para Formaturas e Eventos Corporativos",
      description: "Técnicas avançadas para destacar sua beleza com um look elegante e marcante.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Profissional para Eventos",
      url: "https://studioamendollanoivas.com.br/maquiagem-profissional-para-eventos"
    }
  ],
  images: [
    {
      url: "/images/pacote-noiva-sp.webp",
      description: "Maquiagem Profissional para Eventos - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Profissional para Eventos",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemProfissionalEventosPage() {
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
            alt="Maquiagem Profissional para Eventos"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>O Melhor Serviço de Maquiagem Profissional para Eventos</h2>
          <p>
            No Studio Amendolla, oferecemos maquiagem profissional para eventos especiais, garantindo um visual sofisticado e de longa duração.  
            Nossa equipe atende no estúdio ou a domicílio, proporcionando conforto e exclusividade para você brilhar em qualquer ocasião.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20sessão%20de%20maquiagem%20profissional%20para%20eventos."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem para Eventos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Festas</h3>
            <p>Make sofisticada e de alta durabilidade para aniversários, casamentos, baladas e eventos sociais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Formaturas e Eventos Corporativos</h3>
            <p>Técnicas avançadas para destacar sua beleza com um look elegante e marcante.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Realize um teste antes do evento para garantir um visual perfeito e personalizado.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais tipos de eventos vocês atendem?</summary>
            <p>Realizamos maquiagem profissional para formaturas, casamentos, festas de gala, eventos corporativos, aniversários e ensaios fotográficos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura a maquiagem profissional?</summary>
            <p>O atendimento pode durar entre 1 a 2 horas, dependendo do estilo escolhido. A durabilidade da maquiagem varia entre 15 a 24 horas, garantindo um look impecável até o fim do evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem atendimento a domicílio?</summary>
            <p>Sim, realizamos atendimentos em domicílio ou no local do evento, proporcionando mais conforto e exclusividade para nossas clientes.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como faço para agendar um horário?</summary>
            <p>A reserva é feita mediante contrato e pagamento de um sinal, garantindo um atendimento exclusivo e personalizado.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
