import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Dia de Noiva Completo em São Paulo | Studio Amendolla',
  description: 'Viva a experiência completa de Dia de Noiva em São Paulo com serviços exclusivos de maquiagem, penteado e cuidados personalizados.',
  keywords: 'dia de noiva completo são paulo, maquiagem e penteado noivas sp, pacote dia de noiva sp, salão de noivas são paulo'
};

const pageData = {
  article: {
    headline: "Dia de Noiva Completo em São Paulo | Studio Amendolla",
    description: "Viva a experiência completa de Dia de Noiva em São Paulo com serviços exclusivos de maquiagem, penteado e cuidados personalizados.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "O que está incluído no Dia de Noiva Completo?",
      answer: "Nosso pacote inclui maquiagem, penteado, cuidados com a pele, teste prévio e acompanhamento no dia do evento."
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
      question: "É possível personalizar o pacote de Dia de Noiva?",
      answer: "Sim, nossos serviços são totalmente personalizáveis para atender às suas necessidades e preferências."
    }
  ],
  services: [
    {
      title: "Pacote Completo de Dia de Noiva",
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
      name: "Dia de Noiva Completo",
      url: "https://studioamendollanoivas.com.br/dia-de-noiva-completo-sp"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Dia de Noiva Completo em São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Dia de Noiva Completo SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function DiaDeNoivaCompletoSPPage() {
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
            alt="Dia de Noiva Completo em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Uma Experiência Completa para o Seu Grande Dia</h2>
          <p>
            No Studio Amendolla, oferecemos um pacote completo de Dia de Noiva em São Paulo. 
            Nossa equipe especializada cuida de cada detalhe para que você se sinta confiante e deslumbrante no seu grande dia. 
            Com serviços personalizados de maquiagem, penteado e cuidados com a pele, garantimos uma experiência única e inesquecível.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20pacote%20de%20Dia%20de%20Noiva%20Completo%20em%20São%20Paulo."
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
            <h3>Pacote Completo de Dia de Noiva</h3>
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