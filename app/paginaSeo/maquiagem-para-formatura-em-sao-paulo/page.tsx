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
    headline: "Transforme seu Visual para a Formatura em São Paulo | Studio Amendolla",
    description:
      "Descubra como a maquiagem de formatura em São Paulo pode realçar sua beleza e confiança. No Studio Amendolla, cuidamos de cada detalhe do seu penteado e maquiagem para que você se sinta única na sua celebração.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/beleza-para-formatura-sao-paulo.webp",
  },
};

const BelezaParaFormaturaSPPage = () => {
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
            alt="Maquiagem de Formatura em São Paulo"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Realce sua Beleza para a Formatura com o Studio Amendolla
          </h2>
          <p className={styles.description}>
            O Studio Amendolla é especialista em maquiagem de formatura em São Paulo, oferecendo serviços personalizados para cada formanda. Criamos looks únicos para que você se sinta radiante e confiante no seu grande dia. Nossa equipe de profissionais é altamente qualificada e preparada para atender suas expectativas, seja com um estilo clássico ou algo mais moderno e ousado. Além disso, proporcionamos sessões de teste para garantir que sua maquiagem e penteado fiquem perfeitos no dia da formatura.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20minha%20formatura%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem de Formatura pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Exclusivos para sua Formatura</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Elegante</h3>
            <p>Deixe sua beleza ainda mais radiante com uma maquiagem que destaca seus traços e harmoniza com seu estilo para a formatura.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Personalizado</h3>
            <p>Seja um coque sofisticado ou cachos soltos, nosso objetivo é criar o penteado que combine perfeitamente com o seu look e personalidade.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo de Beleza</h3>
            <p>Conte com nossos pacotes completos para maquiagem e penteado, garantindo que todos os detalhes de beleza estejam impecáveis para sua festa.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas Frequentes sobre Maquiagem e Penteado para Formatura</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais são os tipos de maquiagem e penteado disponíveis?</summary>
            <p>Oferecemos diversas opções de maquiagem e penteado, desde looks sofisticados até opções mais despojadas, sempre personalizados para seu gosto.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como funciona o agendamento de testes?</summary>
            <p>É recomendável fazer um teste de maquiagem e penteado para garantir que o visual escolhido esteja perfeito para a sua formatura. O agendamento pode ser feito via WhatsApp ou diretamente no nosso site.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar minha maquiagem e penteado para o dia da formatura?</summary>
            <p>Sim! Para agendar, basta entrar em contato pelo WhatsApp ou preencher o formulário em nosso site para definir todos os detalhes.</p>
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

export default BelezaParaFormaturaSPPage;
