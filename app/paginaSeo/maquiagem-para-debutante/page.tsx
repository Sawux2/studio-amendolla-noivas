"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Debutante | Studio Amendolla",
    description:
      "Transforme seu grande dia com uma maquiagem exclusiva para debutantes. Técnica impecável e produtos premium para realçar sua beleza natural, com o toque único do Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 

  },
};

const MaquiagemParaDebutantePage = () => {
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
            alt="Maquiagem para Debutante"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>A Beleza do Seu Sonho no Seu Grande Dia</h2>
          <p className={styles.description}>
            No Studio Amendolla, criamos a maquiagem perfeita para o seu aniversário de 15 anos, transformando seu sonho em realidade. Nossa equipe de maquiadores profissionais utiliza técnicas de última geração e produtos de alta qualidade para realçar sua beleza natural e garantir que você se sinta incrível durante toda a celebração. Desde o clássico ao moderno, criamos looks personalizados para cada debutante, para que o seu estilo seja refletido no visual. Além disso, a maquiagem é pensada para durar durante todo o evento, com destaque especial para as fotos e vídeos do grande dia.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20debutante."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Debutante pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços de Maquiagem para Debutante</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Social</h3>
            <p>Maquiagem elegante e atemporal para festas de debutante, com durabilidade garantida e acabamento impecável para fotos e momentos especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Debutante</h3>
            <p>Criamos um look único para o seu aniversário de 15 anos, com foco em técnicas específicas para realçar sua beleza natural e garantir uma maquiagem impecável para o evento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Fotos e Vídeos</h3>
            <p>Oferecemos maquiagem especial para sessões fotográficas e gravações, garantindo um visual perfeito que dure por horas, destacando sua beleza em cada clique e filmagem.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Debutante</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura uma sessão de maquiagem para debutante?</summary>
            <p>A duração de uma sessão de maquiagem para debutante varia entre 1 hora e 1 hora e 30 minutos, dependendo da complexidade do look desejado e do tipo de maquiagem escolhida.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quais marcas de produtos são utilizadas?</summary>
            <p>Trabalhamos com produtos premium de marcas renomadas nacionais e internacionais, todos hipoalergênicos e dermatologicamente testados para garantir máxima segurança e qualidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem serviço de maquiagem a domicílio?</summary>
            <p>Sim, oferecemos o serviço de maquiagem a domicílio para debutantes, garantindo que sua experiência seja ainda mais prática e confortável. Levamos todos os produtos e equipamentos necessários para você.</p>
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

export default MaquiagemParaDebutantePage;
