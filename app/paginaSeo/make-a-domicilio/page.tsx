"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiagem e Cabelo de Noiva a Domicílio - Studio Amendolla",
  description:
    "Oferecemos serviços de maquiagem e cabelo para noivas a domicilio, para que você possa se preparar para o grande dia no conforto da sua casa.",
  detailedDescription: `
    O dia do casamento é único, e por isso, muitos noivos preferem a comodidade de se preparar em casa. O Studio Amendolla oferece serviços de maquiagem e cabelo para noivas a domicílio, garantindo que você se sinta linda e confortável no seu próprio ambiente. 
   
    1. **Comodidade e Conforto**: 
       Nosso serviço de maquiagem e cabelo a domicílio permite que você evite deslocamentos e aproveite o momento de preparação no conforto da sua casa, enquanto nossa equipe especializada cuida de tudo para garantir um visual impecável.

    2. **Profissionais Especializados**: 
       Contamos com profissionais altamente qualificados que são especializados em maquiagem e cabelo para noivas. Eles são experientes em criar looks personalizados, seja para um estilo clássico, moderno ou boho, de acordo com a preferência da noiva.

    3. **Personalização do Look**: 
       Cada noiva é única, e por isso criamos looks personalizados, levando em conta a personalidade e estilo de cada uma. Desde a escolha da maquiagem até o penteado, tudo é feito sob medida para que você se sinta radiante no seu grande dia.

    4. **Serviço Exclusivo**: 
       Oferecemos a possibilidade de agendar a prova de maquiagem e cabelo, assim você poderá testar e ajustar o look que deseja para o dia do casamento, garantindo que tudo esteja perfeito.

    5. **Ambiente Relaxante**: 
       Preparamos o ambiente para que você se sinta relaxada e tranquila enquanto é cuidada. Nossa equipe leva todos os produtos e equipamentos necessários para um atendimento completo e de qualidade.
  `,
  image: "/images/maquiagem-cabelo-noiva-domicilio.webp",
  images: [
    "/images/maquiagem-cabelo-noiva-domicilio-1.webp",
    "/images/maquiagem-cabelo-noiva-domicilio-2.webp",
  ],
};

const faqData = [
  {
    question: "Como funciona o serviço de maquiagem e cabelo a domicílio?",
    answer:
      "O serviço de maquiagem e cabelo a domicílio oferece a comodidade de se preparar no conforto da sua casa. Nossa equipe leva todos os produtos e equipamentos necessários para garantir um look impecável para o grande dia.",
  },
  {
    question: "Posso fazer uma prova antes do casamento?",
    answer:
      "Sim, oferecemos a possibilidade de agendar a prova de maquiagem e cabelo a domicílio. Isso permite que você experimente o look e faça ajustes antes do grande dia.",
  },
  {
    question: "O que devo preparar para o atendimento a domicílio?",
    answer:
      "Para o atendimento a domicílio, basta garantir um espaço adequado para a equipe trabalhar, com boa iluminação e uma cadeira confortável. Nós levamos todo o restante do material necessário.",
  },
  {
    question: "A equipe vai cuidar de mais de uma noiva no mesmo dia?",
    answer:
      "Sim, a nossa equipe pode atender a mais de uma noiva ou madrinha no mesmo dia, dependendo da disponibilidade. Garantimos que cada cliente receba atenção personalizada e que todos os serviços sejam realizados com a maior qualidade.",
  },
];

const MaquiagemECabeloNoivaDomicilioPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: serviceData.title,
      description: serviceData.description,
      author: "Studio Amendolla",
      datePublished: "2025-01-18",
      image: `https://www.studioamendollanoivas.com.br${serviceData.image}`,
    },
    services: [
      {
        title: serviceData.title,
        description: serviceData.description,
        image: serviceData.image,
      },
    ],
    faq: faqData,
    breadcrumb: [
      { name: "Início", url: "https://www.studioamendollanoivas.com.br" },
      { name: "Serviços", url: "https://www.studioamendollanoivas.com.br/servicos" },
      { name: "Maquiagem e Cabelo de Noiva a Domicílio", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-cabelo-noiva-domicilio" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem e Cabelo de Noiva a Domicílio - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem e Cabelo de Noiva a Domicílio`,
      datePublished: "2025-01-18",
      author: "Studio Amendolla",
      publisher: {
        "@type": "Organization",
        name: "Studio Amendolla",
        logo: {
          "@type": "ImageObject",
          url: "https://www.studioamendollanoivas.com.br/images/logo.webp",
        },
      },
      inLanguage: "pt-BR",
      license: "https://creativecommons.org/licenses/by/4.0/",
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>{serviceData.title}</h1>
      <CanonicalURL />
      <UnifiedSchemas pageData={pageData} />

      <div className={styles.gridContainer}>
        {/* Primeira Coluna: Carrossel de Imagens e Descrição Detalhada */}
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Maquiagem e Cabelo de Noiva a Domicílio - ${currentImage + 1}`}
                width={400}
                height={300}
                className={styles.serviceImage}
                quality={80}
                priority={currentImage === 0}
              />
            </div>
            <button onClick={handleNextImage} className={styles.carouselButton}>❯</button>
          </div>
          <div className={styles.detailedDescription}>
            <p>{serviceData.detailedDescription}</p>
          </div>
        </div>

        {/* Segunda Coluna: Conteúdo e FAQ */}
        <div className={styles.contentColumn}>
          <div className={styles.descriptionSection}>
            <p>{serviceData.description}</p>
          </div>
          <div className={styles.faqSection}>
            <h2>Perguntas Frequentes sobre Maquiagem e Cabelo de Noiva a Domicílio</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terceira Coluna: Formulário de Orçamento */}
        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para Maquiagem e Cabelo de Noiva a Domicílio</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
      <ServiceSimulator/>
    </div>
  );
};

export default MaquiagemECabeloNoivaDomicilioPage;
