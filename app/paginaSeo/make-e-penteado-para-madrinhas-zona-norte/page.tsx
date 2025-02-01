"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Madrinhas Zona Norte | Studio Amendolla",
    description:
      "Realce sua beleza com a maquiagem e penteado ideais para madrinhas em São Paulo. No Studio Amendolla, oferecemos serviços personalizados para madrinhas, garantindo que você esteja radiante e elegante no grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-penteado-madrinhas-sao-paulo.webp",
  },
  services: [
    {
      title: "Maquiagem e Penteado para Madrinhas em São Paulo",
      description:
        "No Studio Amendolla, oferecemos serviços de maquiagem e penteado personalizados para madrinhas. Nosso objetivo é garantir que você se sinta maravilhosa e preparada para o evento, com um look que complemente o tema do casamento.",
      image: "/images/maquiagem-penteado-madrinhas-sao-paulo.webp",
    },
  ],
};

const MaquiagemEPenteadoParaMadrinhasZNSPPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Maquiagem e Penteado para Madrinhas na Zona Norte</h1>
        <p className={styles.description}>
          No Studio Amendolla, criamos looks de maquiagem e penteado personalizados para madrinhas, com produtos de alta qualidade e técnicas que garantem um visual impecável e duradouro para o grande evento.
        </p>
      </header>
      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20maquiagem%20e%20penteado%20para%20madrinhas%20na%20Zona%20Norte."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Teste de Maquiagem e Penteado para Madrinhas no WhatsApp
      </a>

      {/* Seção de Maquiagem e Penteado para Madrinhas */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Personalizado para Madrinhas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Sofisticada</h3>
            <p>
              Maquiagem sofisticada para madrinhas, criando um visual elegante e duradouro, perfeito para quem deseja um look clássico e atemporal.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Natural</h3>
            <p>
              Para madrinhas que preferem um look mais leve e natural, criamos uma maquiagem que realça a beleza de forma suave e delicada.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Elegante</h3>
            <p>
              Penteados sofisticados que se mantêm impecáveis durante toda a cerimônia. De coques clássicos a cachos soltos, temos a opção ideal para você.
            </p>
          </div>
        </div>
        
      </section>

      {/* Galeria de Maquiagens e Penteados para Madrinhas */}

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem e Penteado para Madrinhas</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais opções de maquiagem para madrinhas estão disponíveis?</h3>
            <p>
              Oferecemos diferentes estilos, desde maquiagens mais sofisticadas até looks naturais, sempre focando em realçar a beleza da madrinha de forma elegante.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o processo de agendamento?</h3>
            <p>
              O agendamento pode ser feito facilmente pelo WhatsApp, onde podemos discutir suas preferências e agendar um teste de maquiagem e penteado.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar um teste de maquiagem e penteado?</h3>
            <p>
              Sim, recomendamos fazer um teste para garantir que o look da madrinha esteja perfeito para o evento, conforme suas preferências e estilo.
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

export default MaquiagemEPenteadoParaMadrinhasZNSPPage;
