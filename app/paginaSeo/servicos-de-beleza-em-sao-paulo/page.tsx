"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Serviços de Beleza em São Paulo | Studio Amendolla",
    description:
      "No Studio Amendolla, oferecemos uma gama de serviços de beleza em São Paulo, incluindo maquiagem e penteado para noivas, madrinhas, debutantes e outros eventos. Realce sua beleza com a nossa expertise.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/servicos-de-beleza-sao-paulo.webp",
  },
  services: [
    {
      title: "Serviços de Beleza em São Paulo",
      description:
        "Com foco em maquiagem e penteado, o Studio Amendolla oferece uma experiência de beleza única em São Paulo, cuidando de cada detalhe para que você se sinta maravilhosa em qualquer ocasião.",
      image: "/images/servicos-de-beleza-sao-paulo.webp",
    },
  ],
};

const ServicosDeBelezaSPPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Serviços de Beleza em São Paulo</h1>
        <p className={styles.description}>
          No Studio Amendolla, oferecemos serviços de beleza completos em São Paulo. Nossa equipe é especializada em maquiagem e penteado para todos os tipos de eventos, com um atendimento personalizado para cada cliente.
        </p>
      </header>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20serviço%20de%20beleza%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Serviço de Beleza no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços de Beleza Personalizados</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>
              Desde a maquiagem para noivas até o look perfeito para festas e eventos, garantimos uma maquiagem duradoura e personalizada para você brilhar.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado de Noiva</h3>
            <p>
              Nosso time de especialistas em penteados cria estilos que vão desde os clássicos até os modernos, para deixar você deslumbrante no seu grande dia.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Manicure e Pedicure</h3>
            <p>
              Oferecemos serviços de manicure e pedicure para completar o seu visual, com designs personalizados e cuidados para suas mãos e pés ficarem impecáveis.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tratamentos Capilares</h3>
            <p>
              Cuidamos da saúde do seu cabelo com tratamentos personalizados para hidratação, fortalecimento e revitalização, garantindo fios brilhantes e saudáveis.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Depilação</h3>
            <p>
              A depilação com técnicas de alta qualidade e cuidados especiais para garantir a suavidade da pele e um resultado duradouro.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Serviços de Beleza</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais serviços de beleza vocês oferecem em São Paulo?</h3>
            <p>
              Oferecemos uma gama de serviços, incluindo maquiagem, penteados, manicure, pedicure, tratamentos capilares e depilação, sempre com atendimento personalizado.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como posso agendar um serviço de beleza?</h3>
            <p>
              Você pode agendar seus serviços de beleza diretamente pelo nosso WhatsApp ou preenchendo o formulário de contato em nosso site.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Vocês atendem em toda São Paulo?</h3>
            <p>
              Sim, atendemos clientes de diversas regiões de São Paulo, incluindo a Zona Norte, Zona Sul, Zona Leste e Zona Oeste. Nossa equipe está pronta para atendê-la onde for mais conveniente para você.
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

export default ServicosDeBelezaSPPage;
