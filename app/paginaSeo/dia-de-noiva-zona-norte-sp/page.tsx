import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Dia da Noiva na Zona Norte | Studio Amendolla',
  description: 'Viva uma experiência única no Dia da Noiva na Zona Norte de São Paulo. Atendimento exclusivo e personalizado para tornar seu dia inesquecível.',
  keywords: 'dia da noiva zona norte, dia da noiva vila nivi, dia da noiva santana, dia da noiva tucuruvi'
};

const pageData = {
  article: {
    headline: "Dia da Noiva na Zona Norte | Studio Amendolla",
    description: "Viva uma experiência única no Dia da Noiva na Zona Norte de São Paulo. Atendimento exclusivo e personalizado para tornar seu dia inesquecível.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "O que está incluído no Dia da Noiva?",
      answer: "Nosso pacote inclui maquiagem, penteado, teste prévio, cuidados com a pele e acompanhamento no dia do evento."
    },
    {
      question: "Onde fica o Studio Amendolla?",
      answer: "Estamos localizados na Avenida Julio Buono, 2386 - Vila Nivi, Zona Norte de São Paulo, com fácil acesso de Santana e Tucuruvi."
    },
    {
      question: "Vocês oferecem estacionamento?",
      answer: "Sim, contamos com estacionamento próprio para maior comodidade das nossas noivas."
    },
    {
      question: "É possível personalizar o pacote de Dia da Noiva?",
      answer: "Sim, nossos serviços são totalmente personalizáveis para atender às suas necessidades e preferências."
    }
  ],
  services: [
    {
      title: "Pacote Completo de Dia da Noiva",
      description: "Inclui maquiagem, penteado, cuidados com a pele e acompanhamento no dia do evento.",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Teste de Maquiagem e Penteado",
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
      name: "Dia da Noiva",
      url: "https://studioamendollanoivas.com.br/dia-da-noiva-zona-norte"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Dia da Noiva na Zona Norte - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Dia da Noiva Zona Norte",
      datePublished: "2024-02-01"
    }
  ]
};

export default function DiaDaNoivaZonaNortePage() {
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
            alt="Dia da Noiva na Zona Norte"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Uma Experiência Inesquecível</h2>
          <p>
            No Studio Amendolla, oferecemos uma experiência única para o Dia da Noiva. 
            Nossa equipe especializada cuida de cada detalhe para que você se sinta confiante e deslumbrante no seu grande dia. 
            Localizados na Vila Nivi, na Zona Norte de São Paulo, proporcionamos um ambiente acolhedor e serviços personalizados.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20pacote%20de%20Dia%20da%20Noiva%20na%20Zona%20Norte."
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
            <h3>Pacote Completo de Dia da Noiva</h3>
            <p>Inclui maquiagem, penteado, cuidados com a pele e acompanhamento no dia do evento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem e Penteado</h3>
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