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
    headline: "Beleza para Madrinhas em São Paulo | Maquiagem e Penteado Studio Amendolla",
    description:
      "Transforme seu visual com os serviços exclusivos de beleza para madrinhas em São Paulo oferecidos pelo Studio Amendolla. Maquiagem e penteado personalizados para garantir que você arrase no casamento.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/beleza-para-madrinhas-sao-paulo.webp",
  },
};

const BelezaParaMadrinhasSPPage = () => {
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
            alt="Beleza para Madrinhas em São Paulo"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Personalizada para Madrinhas</h2>
          <p className={styles.description}>
            No Studio Amendolla, proporcionamos beleza exclusiva para madrinhas em São Paulo, com maquiagem e penteados personalizados para você brilhar no casamento. Nossa equipe especializada cuida de cada detalhe para que o visual da madrinha seja impecável. Oferecemos looks sofisticados, elegantes e que combinem com a proposta do casamento, garantindo que você se sinta maravilhosa na sua função especial. Não deixe de agendar seu teste de maquiagem e penteado para garantir que tudo esteja perfeito.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20minha%20função%20de%20madrinha%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza para Madrinha no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado para Madrinhas em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Elegante</h3>
            <p>Transforme sua aparência com uma maquiagem elegante, perfeita para madrinhas que desejam um visual sofisticado e discreto, mas marcante.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Sofisticado</h3>
            <p>Escolha entre penteados sofisticados, como coques ou tranças, que vão realçar a sua beleza e combinar com o estilo do casamento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo de Madrinha</h3>
            <p>Oferecemos pacotes de beleza completos para madrinhas, que incluem maquiagem e penteado personalizados, para um visual perfeito no grande dia.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Madrinhas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Posso escolher meu estilo de maquiagem e penteado?</summary>
            <p>Sim, oferecemos diversos estilos de maquiagem e penteado. Tudo é personalizado para atender às suas preferências e ao estilo do casamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como posso garantir que o look esteja perfeito para o dia do casamento?</summary>
            <p>Recomendamos um teste de maquiagem e penteado para garantir que o resultado final seja exatamente o que você deseja.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar os serviços de beleza diretamente pelo WhatsApp?</summary>
            <p>Sim, você pode agendar sua maquiagem e penteado para madrinha diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.</p>
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

export default BelezaParaMadrinhasSPPage;
