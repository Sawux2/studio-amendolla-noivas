"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import ServiceSimulator from "app/components/calculadora";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado de Noiva em São Paulo | Studio Amendolla",
    description:
      "Encontre o penteado de noiva perfeito em São Paulo com o Studio Amendolla. Oferecemos opções modernas e clássicas, personalizadas para o seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/penteado-noiva-sao-paulo.webp",
  },
  services: [
    {
      title: "Penteado de Noiva em São Paulo",
      description:
        "No Studio Amendolla, criamos penteados de noiva que realçam sua beleza, combinando estilo e elegância para o seu casamento em São Paulo.",
      image: "/images/penteado-noiva-sao-paulo.webp",
    },
  ],
};

const PenteadoDeNoivaSPPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Penteado de Noiva em São Paulo</h1>
        <p className={styles.description}>
          Transforme seu grande dia com um penteado de noiva perfeito, criado especialmente para você. No Studio Amendolla, oferecemos uma vasta gama de estilos, desde os mais modernos até os mais clássicos.
        </p>
      </header>

      {/* Seção de Penteados */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Penteados Personalizados para Noivas em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteado Clássico</h3>
            <p>
              Escolha um penteado clássico para um look atemporal e elegante no seu casamento. Realce sua beleza com um estilo sofisticado.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Moderno</h3>
            <p>
              Para noivas que preferem um estilo mais contemporâneo, nossos penteados modernos são perfeitos para destacar sua personalidade.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tranças e Acessórios</h3>
            <p>
              Adicione um toque único ao seu penteado com tranças delicadas e acessórios personalizados, criando um look único para o seu casamento.
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/5511977670498?text=Olá%2C%20estou%20interessada%20em%20agendar%20um%20penteado%20de%20noiva%20em%20São%20Paulo."
          className={styles.whatsappButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agende seu Penteado de Noiva no WhatsApp
        </a>
      </section>

      {/* Galeria de Penteados */}
      <GaleriaDeFotos />

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado de Noiva</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais os estilos de penteados de noiva oferecidos?</h3>
            <p>
              Oferecemos uma ampla variedade de estilos, incluindo penteados clássicos, modernos, com tranças e acessórios personalizados para atender a todos os gostos.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso fazer uma prova do penteado antes do casamento?</h3>
            <p>
              Sim, recomendamos agendar uma sessão de teste para garantir que o penteado escolhido combine com seu estilo e o tema do casamento.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como agendar o penteado de noiva em São Paulo?</h3>
            <p>
              Você pode agendar o seu penteado diretamente pelo nosso WhatsApp ou preenchendo o formulário de contato no nosso site.
            </p>
          </div>
        </div>
      </section>

      {/* Outros Componentes */}
      <FeaturesCards />
      <ServiceSimulator />
      
      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default PenteadoDeNoivaSPPage;
