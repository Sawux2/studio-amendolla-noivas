"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import ArticleSchema from "app/schemas/ArticleSchema";
import BreadcrumbSchema from "app/schemas/BreadcrumbSchema";
import FAQSchema from "app/schemas/FAQSchema";
import ImageObjectSchema from "app/schemas/ImageObjectSchema";
import ServiceSchema from "app/schemas/ServiceSchema";
import OrganizationSchema from "@/schemas/organizationSchema";
import WebsiteSchema from "app/schemas/WebsiteSchema";
import FeaturesCards from "app/components/FeaturesCards";
import ServiceSimulator from "app/components/calculadora";

const serviceData = {
  title: "Atendimento a Domicílio para Maquiagem - Studio Amendolla",
  description:
    "Oferecemos atendimento a domicílio para maquiagem, garantindo que você fique linda e tranquila no conforto da sua casa no dia do seu casamento.",
  detailedDescription: `
    O serviço de maquiagem a domicílio do Studio Amendolla é perfeito para quem quer conforto e praticidade no dia do casamento. A nossa equipe de maquiadores vai até o seu endereço para garantir um visual perfeito e sem estresse. 
   
    1. **Conforto e Praticidade**: 
       Evite deslocamentos e aproveite o dia do seu casamento no conforto da sua casa. Nossa equipe leva todos os produtos e equipamentos necessários para realizar a maquiagem, sem que você precise se preocupar com nada.

    2. **Profissionais Especializados**: 
       Contamos com maquiadores experientes e altamente qualificados para criar o look perfeito para você. Seja para um visual clássico, moderno ou personalizado, nossa equipe estará à disposição para atender a todas as suas expectativas.

    3. **Personalização**: 
       Cada noiva é única, e entendemos que a maquiagem precisa refletir a personalidade de cada uma. Oferecemos consultoria para escolher a maquiagem ideal, considerando o estilo do casamento, o vestido e o seu gosto pessoal.

    4. **Agendamento da Prova**: 
       Para garantir que tudo saia como você imaginou, oferecemos a possibilidade de agendar uma prova de maquiagem. Durante a prova, ajustamos todos os detalhes e definimos o look ideal para o grande dia.

    5. **Ambiente Relaxante**: 
       A maquiagem no conforto da sua casa garante que você se sinta tranquila e relaxada durante todo o processo. Nossa equipe cria um ambiente acolhedor, com atenção aos detalhes e total conforto para a noiva.
  `,
  image: "/images/maquiagem-domicilio.webp",
  images: [
    "/images/maquiagem-domicilio-1.webp",
    "/images/maquiagem-domicilio-2.webp",
  ],
};

const faqData = [
  {
    question: "Como funciona o atendimento de maquiagem a domicílio?",
    answer:
      "O atendimento de maquiagem a domicílio oferece a conveniência de se preparar em casa, sem a necessidade de deslocamento. A equipe do Studio Amendolla leva todos os produtos e equipamentos necessários para garantir uma maquiagem impecável.",
  },
  {
    question: "Posso fazer uma prova de maquiagem antes do casamento?",
    answer:
      "Sim, agendamos uma prova de maquiagem para que você experimente o look e nos informe quaisquer ajustes. Assim, no dia do casamento, o visual estará perfeito e de acordo com sua preferência.",
  },
  {
    question: "Quais são os requisitos para o atendimento a domicílio?",
    answer:
      "Para o atendimento a domicílio, basta garantir um espaço adequado com boa iluminação e uma cadeira confortável. Nós levamos todo o restante do material necessário para a maquiagem.",
  },
  {
    question: "A maquiagem vai durar o dia inteiro?",
    answer:
      "Sim, usamos produtos de alta qualidade e técnicas profissionais para garantir que a maquiagem dure o dia inteiro, desde o início da cerimônia até a última dança da festa.",
  },
];

const AtendimentoMaquiagemDomicilioPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Handlers para o carrossel
  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  // Dados para Article Schema
  const articleData = {
    headline: serviceData.title,
    description: serviceData.description,
    author: "Studio Amendolla",
    datePublished: "2025-01-18",
    image: serviceData.images.map(img => 
      `https://www.studioamendollanoivas.com.br${img}`
    ),
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/atendimento-domicilio-maquiagem"
  };

  // Dados para Breadcrumb Schema
  const breadcrumbData = {
    items: [
      {
        name: "Início",
        item: "/",
        position: 1
      },
      {
        name: "Serviços",
        item: "/servicos",
        position: 2
      },
      {
        name: "Atendimento a Domicílio para Maquiagem",
        item: "/paginaSeo/atendimento-domicilio-maquiagem",
        position: 3
      }
    ]
  };

  // Dados para FAQ Schema
  const faqSchemaData = {
    items: faqData
  };

  // Dados para Service Schema
  const serviceSchemaData = {
    name: serviceData.title,
    description: serviceData.description,
    provider: "Studio Amendolla",
    areaServed: "São Paulo",
    image: serviceData.images.map(img => 
      `https://www.studioamendollanoivas.com.br${img}`
    ),
    url: "/paginaSeo/atendimento-domicilio-maquiagem",
    serviceType: "Maquiagem Profissional",
    offers: [
      {
        price: 500,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        validFrom: "2024-05-17"
      }
    ]
  };

  // Dados para Organization Schema
  const organizationData = {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: "Especialistas em maquiagem e penteados para noivas em São Paulo",
    logoUrl: "/images/logo.webp",
    telephone: "+55 11 97767-0498",
    contactType: "customer service",
    areaServed: "São Paulo",
    sameAs: [
      "https://www.instagram.com/studioamendolla",
      "https://www.facebook.com/studioamendolla"
    ],
    address: {
      streetAddress: "Avenida Julio Buono 2386",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "02201-002",
      addressCountry: "BR"
    }
  };

  // Dados para Website Schema
  const websiteData = {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: "Especialistas em maquiagem e penteados para noivas em São Paulo",
    inLanguage: "pt-BR",
    keywords: ["maquiagem noiva a domicilio", "atendimento maquiagem a domicílio", "São Paulo"]
  };

  // Dados para Image Schema
  const imageData = serviceData.images.map((image, index) => ({
    url: image,
    contentUrl: `https://www.studioamendollanoivas.com.br${image}`,
    description: "Atendimento a Domicílio para Maquiagem - Studio Amendolla",
    width: 600,
    height: 400,
    name: `Imagem ${index + 1} - Atendimento a Domicílio para Maquiagem`,
    caption: "Serviço de maquiagem profissional a domicílio",
    representativeOfPage: index === 0,
    creator: {
      name: "Studio Amendolla",
      url: "https://www.studioamendollanoivas.com.br"
    },
    datePublished: "2024-05-17"
  }));

  return (
    <div className={styles.servicePage}>
      <h1>{serviceData.title}</h1>
      
      {/* SEO Schemas */}
      <CanonicalURL />
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema data={breadcrumbData} />
      <FAQSchema data={faqSchemaData} />
      <ServiceSchema data={serviceSchemaData} />
      <OrganizationSchema data={organizationData} />
      <WebsiteSchema data={websiteData} />
      {imageData.map((imgData, index) => (
        <ImageObjectSchema key={index} data={imgData} />
      ))}

      {/* Resto do conteúdo existente */}
      <div className={styles.gridContainer}>
        {/* Primeira Coluna: Carrossel de Imagens e Descrição Detalhada */}
        <div className={styles.photosColumn}>
        <div className={styles.carousel}>
  <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
  <div className={styles.highlightImage}>
    <Image
      src={`https://www.studioamendollanoivas.com.br${serviceData.images[currentImage]}`}
      alt={`Atendimento a Domicílio para Maquiagem - Imagem ${currentImage + 1} - Studio Amendolla`}
      title={`Atendimento a Domicílio para Maquiagem - Studio Amendolla`}
      width={400}
      height={300}
      className={styles.serviceImage}
      quality={85} // Aumentei um pouco a qualidade para SEO de imagens
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
            <h2>Perguntas Frequentes sobre Atendimento de Maquiagem a Domicílio</h2>
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
          <h2>Solicite um Orçamento para Atendimento de Maquiagem a Domicílio</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
      <ServiceSimulator/>
    </div>
  );
};

export default AtendimentoMaquiagemDomicilioPage;
