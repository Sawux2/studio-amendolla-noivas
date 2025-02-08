"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Casamento em São Paulo | Studio Amendolla",
    description:
      "No Studio Amendolla, oferecemos serviços exclusivos de maquiagem e penteado para casamento em São Paulo. Realce sua beleza no grande dia com um visual perfeito e personalizado.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-para-casamento-sao-paulo.webp",
  },
};

const MaquiagemEPenteadoParaCasamentoSPPage = () => {
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
            src={pageData.article.image} // URL da imagem
            alt="Maquiagem e Penteado para Casamento em São Paulo"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Personalizada para Casamento</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos maquiagem e penteado para casamento em São Paulo com todo o cuidado e personalização que o seu grande dia merece. Nossa equipe especializada em noivas cuida de todos os detalhes para garantir que você tenha um visual impecável, desde a maquiagem até o penteado. Se você quer um look clássico, romântico ou moderno, estamos prontos para atender às suas necessidades e garantir que você brilhe no altar.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20e%20penteado%20para%20o%20meu%20casamento%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza para Casamento no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado para Casamento em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem de Noiva</h3>
            <p>Realce sua beleza com uma maquiagem de noiva impecável, que combine com o seu estilo e o tema do casamento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado de Noiva</h3>
            <p>Escolha entre diversos penteados exclusivos para noivas, como tranças, coques ou cabelos soltos, para complementar o seu visual.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo para Noiva</h3>
            <p>Oferecemos pacotes completos de maquiagem e penteado, garantindo que o seu visual esteja impecável para o grande dia.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem e Penteado para Casamento</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Posso escolher o estilo de maquiagem e penteado para o casamento?</summary>
            <p>Sim, você pode escolher o estilo que mais combina com o seu gosto e o tema do casamento. Nós ajudamos a personalizar o look perfeito para você.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quando devo agendar o teste de maquiagem e penteado?</summary>
            <p>Recomendamos agendar o teste de maquiagem e penteado pelo menos 1 mês antes do casamento, para garantir que o visual escolhido seja exatamente o que você espera.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar os serviços diretamente pelo WhatsApp?</summary>
            <p>Sim, você pode agendar sua maquiagem e penteado para casamento diretamente pelo WhatsApp ou através do formulário de contato em nosso site.</p>
          </details>
        </div>
      </section>

      {/* Outros Componentes */}
      <ServiceSimulator />
      <FeaturesCards />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemEPenteadoParaCasamentoSPPage;
