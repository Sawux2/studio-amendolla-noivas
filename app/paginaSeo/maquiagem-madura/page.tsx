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
    headline: "Maquiagem para Pele Madura | Studio Amendolla",
    description:
      "Realce sua beleza com uma maquiagem especializada para pele madura no Studio Amendolla. Maquiagem leve e sofisticada para garantir que você se sinta incrível em qualquer ocasião.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-madura-3.webp",
  },
};

const MaquiagemPeleMaduraPage = () => {
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
            alt="Maquiagem para Pele Madura"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Maquiagem Sofisticada para Pele Madura</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos uma maquiagem especialmente pensada para a pele madura, com técnicas e produtos que garantem um acabamento natural e radiante. Nossa abordagem é personalizada, levando em consideração as necessidades da sua pele, como linhas de expressão e manchas. Utilizamos produtos leves e de alta qualidade que garantem uma maquiagem duradoura, sem pesar na pele. Seja para uma festa, casamento ou evento especial, nossa equipe vai realçar sua beleza com sofisticação e cuidado.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20especializada%20para%20minha%20pele%20madura."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Pele Madura no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem Personalizada para Pele Madura</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Natural para Pele Madura</h3>
            <p>Oferecemos maquiagens leves e naturais, que realçam sua beleza sem pesar, deixando sua pele fresca e radiante.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas com Pele Madura</h3>
            <p>Para noivas com pele madura, criamos looks sofisticados e duradouros, garantindo uma maquiagem impecável durante todo o grande dia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Eventos Especiais</h3>
            <p>Com técnicas especiais, criamos maquiagens para festas e eventos, que proporcionam um visual elegante e duradouro.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Pele Madura</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Como a maquiagem para pele madura é diferente?</summary>
            <p>A maquiagem para pele madura utiliza técnicas específicas, como o uso de produtos mais leves, para evitar que a maquiagem marque linhas de expressão e rugas, garantindo um acabamento natural e luminoso.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso ter uma maquiagem duradoura com a pele madura?</summary>
            <p>Sim! Usamos produtos de longa duração e técnicas de fixação para garantir que sua maquiagem se mantenha perfeita durante todo o evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar minha maquiagem para pele madura diretamente pelo WhatsApp?</summary>
            <p>Sim, você pode agendar sua maquiagem para pele madura diretamente pelo WhatsApp ou através do formulário de contato em nosso site.</p>
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

export default MaquiagemPeleMaduraPage;
