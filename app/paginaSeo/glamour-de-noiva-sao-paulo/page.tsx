"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Glamour de Noiva em São Paulo | Studio Amendolla",
    description:
      "Realce sua beleza com o glamour de noiva ideal em São Paulo. No Studio Amendolla, oferecemos serviços exclusivos de maquiagem e penteado para noivas que buscam um visual deslumbrante no grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/glamour-noiva-sao-paulo.webp",
  },
  services: [
    {
      title: "Glamour de Noiva em São Paulo",
      description:
        "No Studio Amendolla, proporcionamos um look de noiva glamouroso, com maquiagem e penteados personalizados para garantir que você seja a estrela do seu casamento. Nossa equipe cria o visual perfeito para o seu grande dia.",
      image: "/images/glamour-noiva-sao-paulo.webp",
    },
  ],
};

const GlamourDeNoivaSPPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Glamour de Noiva em São Paulo</h1>
        <p className={styles.description}>
          No Studio Amendolla, transformamos noivas em verdadeiras estrelas no grande dia. Oferecemos maquiagem e penteado personalizados para um look de noiva glamouroso e inesquecível.
        </p>
      </header>
      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20maquiagem%20e%20penteado%20para%20noiva%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Teste de Glamour de Noiva no WhatsApp
      </a>

      {/* Seção de Glamour para Noivas */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Glamour de Noiva Personalizado em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Glamourosa</h3>
            <p>
              Maquiagem impecável que garante um look radiante e sofisticado para o seu casamento. Ideal para noivas que buscam um visual sofisticado e com brilho.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado de Noiva Glamouroso</h3>
            <p>
              Penteados exuberantes que realçam a beleza e criam um visual deslumbrante, perfeito para noivas que desejam um look inesquecível e de tirar o fôlego.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo de Noiva</h3>
            <p>
              Um visual completo e glamouroso, que combina maquiagem e penteado de maneira perfeita, para que você se sinta confiante e maravilhosa no seu grande dia.
            </p>
          </div>
        </div>
        
      </section>

      {/* Galeria de Glamour de Noiva */}

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Glamour de Noiva</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>O que inclui o glamour de noiva?</h3>
            <p>
              O glamour de noiva inclui uma maquiagem sofisticada e um penteado deslumbrante, ambos criados para garantir que você tenha um visual perfeito e glamouroso.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar o glamour de noiva para o meu casamento?</h3>
            <p>
              Sim, basta entrar em contato conosco via WhatsApp ou preencher o formulário de agendamento em nosso site para agendar sua maquiagem e penteado de noiva.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o teste de maquiagem e penteado?</h3>
            <p>
              Recomendamos realizar um teste de maquiagem e penteado para garantir que o look de noiva seja exatamente como você imagina, adaptado ao seu estilo e preferências.
            </p>
          </div>
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

export default GlamourDeNoivaSPPage;
