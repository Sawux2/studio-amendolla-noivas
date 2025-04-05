"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Profissional | Studio Amendolla",
    description:
      "Serviços de maquiagem profissional para todas as ocasiões. Técnicas avançadas e produtos premium para realçar sua beleza natural com o toque especializado do Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemProfissionalPage = () => {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      {/* Conteúdo Principal */}
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image} // URL da imagem consistente
            alt="Maquiagem Profissional"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Arte e Técnica em Cada Traço</h2>
          <p className={styles.description}>
            No Studio Amendolla, transformamos maquiagem em arte. Nossa equipe de maquiadores profissionais combina técnicas avançadas com produtos de alta qualidade para criar looks que realçam sua beleza natural. Com anos de experiência no mercado, dominamos desde maquiagens naturais para o dia a dia até produções elaboradas para eventos especiais. Nosso compromisso é entender a personalidade e as necessidades de cada cliente, adaptando as técnicas e cores para valorizar seus traços únicos. Contamos com as melhores marcas do mercado e estamos sempre atualizados com as tendências para oferecer um serviço impecável e personalizado.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20profissional."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem Profissional pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços de Maquiagem</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Social</h3>
            <p>Maquiagem elegante para festas, formaturas e eventos sociais, com durabilidade garantida e acabamento impecável para suas fotos e momentos especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas</h3>
            <p>Criamos um visual único para o seu grande dia, com técnicas específicas para fotografia e vídeo, teste prévio e acompanhamento durante o evento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem dia a dia</h3>
            <p>Para editoriais, campanhas ou produções especiais, oferecemos maquiagem conceitual e criativa que traduz conceitos em arte visual através da maquiagem.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem Profissional</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura uma sessão de maquiagem profissional?</summary>
            <p>Dependendo da complexidade do trabalho, uma sessão de maquiagem profissional pode durar entre 45 minutos a 1 hora e 30 minutos. Para noivas e produções especiais, recomendamos reservar mais tempo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quais marcas de produtos são utilizadas?</summary>
            <p>Trabalhamos com produtos premium de marcas renomadas nacionais e internacionais, todas hipoalergênicas e testadas dermatologicamente para garantir segurança e qualidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem serviço de maquiagem a domicílio?</summary>
            <p>Sim, oferecemos serviço de maquiagem profissional a domicílio. Nossa equipe se desloca até você com todos os equipamentos e produtos necessários para uma experiência completa.</p>
          </details>
        </div>
      </section>

      {/* Outros Componentes */}
      <FeaturesCards />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemProfissionalPage;