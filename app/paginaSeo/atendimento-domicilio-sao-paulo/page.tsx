import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
    title: 'Atendimento a Domicílio para Maquiagem em São Paulo | Studio Amendolla',
    description: 'Serviço premium de maquiagem e penteado a domicílio em São Paulo. Nossa equipe leva todo o glamour e estrutura profissional até você, garantindo uma experiência exclusiva com resultados deslumbrantes para seu evento especial.',
    keywords: [
      'maquiagem a domicílio SP',
      'make e cabelo em casa',
      'maquiadora profissional domicílio',
      'beleza noiva em casa',
      'penteado a domicílio',
      'atendimento domiciliar zona norte'
    ].join(', ')
};

const pageData = {
  article: {
    headline: "Atendimento a Domicílio para Maquiagem em São Paulo | Studio Amendolla",
    description: "Experimente o luxo de receber um serviço de beleza premium em casa. Nossa equipe especializada leva toda estrutura profissional até você, garantindo uma produção impecável com produtos de alta performance e técnicas exclusivas para seu momento especial.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Como funciona o atendimento a domicílio?",
      answer: "Nossa equipe leva toda estrutura necessária até você, incluindo equipamentos de iluminação profissional, cadeira adequada e produtos premium. Basta ter um espaço confortável em sua casa."
    },
    {
      question: "Qual a região de atendimento em São Paulo?",
      answer: "Atendemos em toda São Paulo, com foco especial na Zona Norte. Para outras regiões, consulte taxa de deslocamento."
    },
    {
      question: "Quanto tempo antes devo agendar?",
      answer: "Recomendamos agendamento com 30 dias de antecedência para garantir disponibilidade na data desejada."
    },
    {
      question: "Quais serviços são oferecidos a domicílio?",
      answer: "Oferecemos maquiagem profissional, penteado, produção para noivas, madrinhas e eventos especiais, com a mesma qualidade do atendimento em studio."
    }
  ],
  services: [
    {
      title: "Maquiagem a Domicílio",
      description: "Make profissional com produtos importados no conforto do seu lar",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Pacote Completo em Casa",
      description: "Maquiagem e penteado com toda estrutura profissional",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Atendimento a Domicílio",
      url: "https://studioamendollanoivas.com.br/atendimento-domicilio-para-maquiagem"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Maquiagem Profissional a Domicílio - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Domicílio SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function AtendimentoDomicilioPage() {
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
            alt="Maquiagem a Domicílio São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Profissional no Conforto da Sua Casa</h2>
          <p>
            O Studio Amendolla leva até você toda a excelência e qualidade já reconhecidas em nosso espaço na 
            Avenida Julio Buono, 2386 - Vila Nivi. Com produtos premium e técnicas exclusivas, garantimos 
            uma produção impecável para seu momento especial, sem que você precise sair de casa.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20a%20domicílio."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Disponíveis em Domicílio</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Make impecável com produtos importados e técnicas exclusivas para durar todo o evento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Personalizado</h3>
            <p>Criações únicas que valorizam seus traços e complementam seu look.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo</h3>
            <p>Produção total com make e hair para noivas, madrinhas e eventos especiais.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes</h2>
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
