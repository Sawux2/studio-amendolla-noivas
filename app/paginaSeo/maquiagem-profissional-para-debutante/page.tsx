import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Profissional para Debutante São Paulo | Studio Amendolla',
  description: 'Maquiagem profissional para debutantes em São Paulo. Realce a beleza da sua festa de 15 anos com um look impecável e duradouro.',
  keywords: 'maquiagem debutante sp, maquiagem profissional debutante, maquiagem para 15 anos sp, maquiagem festa debutante sp'
};

const pageData = {
  article: {
    headline: "Maquiagem Profissional para Debutante São Paulo | Studio Amendolla",
    description: "Festa de 15 anos? Garanta um visual deslumbrante com maquiagem profissional para debutante em São Paulo, com técnicas sofisticadas e acabamento perfeito.",
    author: "Priscila Helena",
    datePublished: "2024-03-25",
    image: "/images/maquiagem-debutante-sp.jpg", 
  },
  faq: [
    {
      question: "A maquiagem para debutante inclui o que?",
      answer: "Make completa, com teste prévio e utilização de produtos de alta qualidade, garantindo durabilidade e um acabamento impecável."
    },
    {
      question: "Quanto tempo dura a maquiagem para debutante?",
      answer: "Utilizamos técnicas de alta fixação, para que a maquiagem permaneça impecável durante toda a festa, resistindo ao calor, suor e até lágrimas."
    },
    {
      question: "Vocês atendem debutantes em grupo?",
      answer: "Sim, oferecemos pacotes especiais para grupos de debutantes, amigas e familiares, para que todas fiquem deslumbrantes no grande dia."
    },
    {
      question: "Como posso agendar minha maquiagem para debutante?",
      answer: "Entre em contato pelo WhatsApp para verificar a disponibilidade e agendar sua maquiagem para o grande evento."
    }
  ],
  services: [
    {
      title: "Maquiagem para Debutante",
      description: "Maquiagem profissional e sofisticada para debutantes, com produtos premium e acabamento perfeito para a sua festa de 15 anos.",
      image: "/images/maquiagem-debutante-festa.jpg", 
    },
    {
      title: "Teste de Maquiagem para Debutante",
      description: "Sessão exclusiva para testar o look ideal para o grande dia, com definição de estilo e escolha de produtos.",
      image: "/images/maquiagem-debutante-teste.jpg", 
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem para Debutante",
      url: "https://studioamendollanoivas.com.br/maquiagem-profissional-para-debutante-sp"
    }
  ],
  images: [
    {
      url: "/images/maquiagem-profissional-debutante-sp.webp",
      description: "Maquiagem Profissional para Debutante São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Profissional para Debutante SP",
      datePublished: "2024-03-25"
    }
  ]
};

export default function MaquiagemProfissionalParaDebutanteSPPage() {
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
            alt="Maquiagem Profissional para Debutante São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Perfeita para o Seu Grande Dia</h2>
          <p>
            No Studio Amendolla, oferecemos maquiagem profissional especializada para debutantes, criando um look único e deslumbrante para sua festa de 15 anos. Nossos produtos premium e técnicas sofisticadas garantem que você esteja radiante durante toda a celebração.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20para%20o%20meu%20baile%20de%2015%20anos."
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
            <h3>Maquiagem para Debutante</h3>
            <p>Maquiagem profissional e sofisticada para debutantes, com produtos premium e acabamento perfeito para a sua festa de 15 anos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem para Debutante</h3>
            <p>Teste exclusivo para escolher o look perfeito e garantir que sua maquiagem dure o evento inteiro.</p>
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
