"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Beleza para Formatura em São Paulo | Studio Amendolla",
    description:
      "Garanta um visual incrível para sua formatura em São Paulo com os serviços de beleza do Studio Amendolla. Oferecemos maquiagem e penteado personalizados para formandas, para que você brilhe na sua noite especial.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/beleza-para-formatura-sao-paulo.webp",
  },
  services: [
    {
      title: "Beleza para Formatura em São Paulo",
      description:
        "No Studio Amendolla, oferecemos serviços exclusivos de maquiagem e penteado para formaturas, com o objetivo de criar o visual perfeito para sua festa de formatura em São Paulo.",
      image: "/images/beleza-para-formatura-sao-paulo.webp",
    },
  ],
};

const BelezaParaFormaturaSPPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Beleza para Formatura em São Paulo</h1>
        <p className={styles.description}>
          No Studio Amendolla, criamos o look perfeito para sua formatura. Seja para uma maquiagem sofisticada ou um penteado deslumbrante, nossa equipe vai garantir que você se sinta única e deslumbrante na sua grande noite.
        </p>
      </header>
      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20minha%20formatura%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza para Formatura no WhatsApp
      </a>

      {/* Seção de Beleza para Formatura */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Personalizados para Formatura em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Sofisticada</h3>
            <p>
              Realce sua beleza com uma maquiagem sofisticada, ideal para formandas que desejam um look marcante e elegante para a cerimônia.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Glamouroso</h3>
            <p>
              Crie um penteado deslumbrante que combine com o seu estilo, seja um coque elegante, ondas soltas ou um look mais moderno e ousado.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo de Beleza</h3>
            <p>
              Oferecemos pacotes completos de beleza, combinando maquiagem e penteado para garantir que você tenha o visual perfeito para sua formatura.
            </p>
          </div>
        </div>
        
      </section>

      {/* Galeria de Beleza para Formatura */}
      
      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Formatura</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais estilos de maquiagem e penteado estão disponíveis para formatura?</h3>
            <p>
              Trabalhamos com diversos estilos, incluindo maquiagens sofisticadas e penteados glamourosos. Tudo é personalizado conforme seu gosto e tema da festa.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o teste de maquiagem e penteado?</h3>
            <p>
              Recomendamos agendar uma sessão de teste para garantir que o look escolhido seja exatamente o que você deseja para sua formatura.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar os serviços de beleza para formatura diretamente?</h3>
            <p>
              Sim, você pode agendar a maquiagem e o penteado diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
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

export default BelezaParaFormaturaSPPage;
