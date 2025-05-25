"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "@/components/FeaturesCards";
import GaleriaDeFotos from "@/components/GaleriaDeFotos";
import ArticleSchema from "@/schemas/ArticleSchema";
import BreadcrumbSchema from "@/schemas/BreadcrumbSchema";
import FAQSchema from "@/schemas/FAQSchema";
import ImageObjectSchema from "@/schemas/ImageObjectSchema";
import ServiceSchema from "@/schemas/ServiceSchema";
import OrganizationSchema from '@/schemas/organizationSchema';
import WebsiteSchema from "@/schemas/WebsiteSchema";


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
  // Schema data
  const articleData = {
    headline: pageData.article.headline,
    description: pageData.article.description,
    author: pageData.article.author,
    datePublished: pageData.article.datePublished,
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/atendimento-domicilio-sao-paulo"
  };

  const breadcrumbData = {
    items: pageData.breadcrumb.map((item, index) => ({
      name: item.name,
      item: item.url,
      position: index + 1
    }))
  };

  const serviceSchemaData = {
    name: pageData.article.headline,
    description: pageData.article.description,
    provider: "Studio Amendolla",
    areaServed: "São Paulo",
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "/paginaSeo/atendimento-domicilio-sao-paulo",
    serviceType: "Maquiagem e Penteado",
    offers: pageData.services.map(() => ({
      price: 500,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      validFrom: "2024-05-17"
    }))
  };

  const organizationData = {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: "Especialistas em maquiagem e penteados para noivas em São Paulo",
    logoUrl: "/images/logo.webp",
    telephone: "+55 11 97767-0498",
    contactType: "customer service",
    areaServed: "São Paulo",
    sameAs: [
      "https://www.instagram.com/studioamendolla",
      "https://www.facebook.com/studioamendolla"
    ],
    address: {
      streetAddress: "Avenida Julio Buono 2386",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "02201-002",
      addressCountry: "BR"
    }
  };

  const websiteData = {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: pageData.article.description,
    inLanguage: "pt-BR",
    keywords: [
      'maquiagem a domicílio SP',
      'make e cabelo em casa',
      'maquiadora profissional domicílio',
      'beleza noiva em casa',
      'penteado a domicílio',
      'atendimento domiciliar zona norte'
    ]
  };

  return (
    <div className={styles.container}>
      {/* SEO Schemas */}
      
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema data={breadcrumbData} />
      <FAQSchema data={{ items: pageData.faq }} />
      <ServiceSchema data={serviceSchemaData} />
      <OrganizationSchema data={organizationData} />
      <WebsiteSchema data={websiteData} />
      {pageData.images.map((imgData, index) => (
        <ImageObjectSchema 
          key={index} 
          data={{
            ...imgData,
            url: `https://www.studioamendollanoivas.com.br${imgData.url}`,
            contentUrl: `https://www.studioamendollanoivas.com.br${imgData.url}`,
            caption: imgData.description // Add caption property
          }} 
        />
      ))}

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
    </div>
  );
}
