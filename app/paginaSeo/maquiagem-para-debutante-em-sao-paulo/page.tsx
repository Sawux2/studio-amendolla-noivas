"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Debutante em São Paulo | Studio Amendolla",
    description:
      "A maquiagem ideal para o seu aniversário de 15 anos em São Paulo. Técnicas avançadas e produtos de alta qualidade para realçar sua beleza natural, com o toque especializado do Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", // Nova imagem
  },
};

const MaquiagemParaDebutanteEmSPPage = () => {
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
            src={pageData.article.image} // URL da nova imagem
            alt="Maquiagem para Debutante em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Realce Sua Beleza no Seu Grande Dia em São Paulo</h2>
          <p className={styles.description}>
            No Studio Amendolla, somos especializados em criar maquiagens personalizadas para debutantes em São Paulo. Nosso objetivo é realçar sua beleza natural com técnicas avançadas e produtos premium, garantindo que você se sinta deslumbrante no seu aniversário de 15 anos. Oferecemos um atendimento único, buscando sempre entender suas preferências e o estilo do evento para criar o visual perfeito. Seja para um look mais clássico ou moderno, nossa equipe de maquiadores profissionais está pronta para transformar seu sonho em realidade e garantir que você arrase nas fotos e vídeos do evento.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20debutante%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Debutante em São Paulo pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços de Maquiagem para Debutante</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Social</h3>
            <p>Maquiagem sofisticada e duradoura para festas de debutante em São Paulo, com acabamento impecável e um visual radiante para as fotos e vídeos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Debutante</h3>
            <p>Criamos um look exclusivo para o seu aniversário de 15 anos, com foco em técnicas modernas e personalizadas para destacar sua beleza única.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Fotos e Vídeos</h3>
            <p>Maquiagem pensada especialmente para sessões fotográficas e gravações, garantindo que você esteja deslumbrante em cada clique e filmagem.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Debutante em São Paulo</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura uma sessão de maquiagem para debutante?</summary>
            <p>A duração de uma sessão de maquiagem para debutante é de aproximadamente 1 hora a 1 hora e 30 minutos, dependendo do estilo de maquiagem desejado e da complexidade do look.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quais marcas de produtos são utilizadas?</summary>
            <p>Trabalhamos com produtos de marcas premium renomadas, nacionais e internacionais, todas dermatologicamente testadas e hipoalergênicas, garantindo a segurança e a qualidade do seu look.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem serviço de maquiagem a domicílio em São Paulo?</summary>
            <p>Sim, oferecemos o serviço de maquiagem profissional a domicílio em São Paulo, trazendo toda a qualidade do nosso estúdio até a sua casa, com toda a praticidade e conforto.</p>
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

export default MaquiagemParaDebutanteEmSPPage;
