"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Tendências de Penteados para Noivas - Studio Amendolla",
  description:
    "Descubra as tendências mais atuais de penteados para noivas e escolha o estilo perfeito para complementar seu visual no grande dia, com sofisticação e personalidade.",
  detailedDescription: `
    O penteado é um dos detalhes mais importantes no visual de uma noiva. No Studio Amendolla, acompanhamos de perto as últimas tendências para garantir que você se sinta ainda mais deslumbrante no seu grande dia. Aqui estão algumas das tendências mais quentes para penteados de noiva:

    1. **Coque alto e moderno**: Este estilo é perfeito para noivas que desejam um visual sofisticado e clássico. O coque alto, com fios levemente desalinhados, traz um toque moderno e, ao mesmo tempo, muito elegante. Ele pode ser adornado com acessórios delicados, como tiaras ou flores naturais.

    2. **Tranças laterais**: As tranças continuam sendo uma tendência forte, trazendo um ar romântico e delicado. A trança lateral pode ser combinada com um coque ou até mesmo com cabelo solto, criando um look leve e natural. Ideal para casamentos ao ar livre ou durante o dia.

    3. **Cabelos soltos com ondas naturais**: Para as noivas que preferem algo mais descontraído, o cabelo solto com ondas naturais é uma escolha atemporal. Esse estilo é perfeito para casamentos na praia ou no campo, e pode ser combinado com um véu delicado para um toque de sofisticação.

    4. **Semi preso com volume**: O estilo semi preso, com as laterais do cabelo presas e o restante solto, cria um visual romântico e equilibrado. Adicionar volume na parte superior do cabelo vai garantir que o look seja elegante, sem perder a leveza.

    5. **Acessórios de cabelo**: As tiaras, coronas e pentes com pedrarias são perfeitos para adicionar um toque de glamour. Esses acessórios ficam incríveis em penteados como coques ou cabelos soltos, elevando o visual sem exageros.

    Independentemente do estilo escolhido, o mais importante é que o penteado combine com sua personalidade e com o estilo do seu casamento, garantindo que você se sinta maravilhosa do início ao fim.`,
  image: "/images/tendencias-penteados-noivas-1.webp",
  images: [
    "/images/tendencias-penteados-noivas-1.webp",
    "/images/tendencias-penteados-noivas-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual é o penteado mais indicado para noivas com cabelo curto?",
    answer:
      "Noivas com cabelo curto podem apostar em penteados românticos como o semi preso ou até mesmo em coques baixos, que valorizam o formato do rosto. A adição de acessórios delicados, como tiaras, também é uma ótima opção.",
  },
  {
    question: "Penteado solto é uma boa opção para casamentos durante o dia?",
    answer:
      "Sim, penteados com cabelo solto, como ondas naturais ou cachos, são perfeitos para casamentos diurnos, especialmente ao ar livre. Esse estilo traz leveza e frescor ao visual da noiva.",
  },
  {
    question: "Posso usar acessórios de cabelo no meu casamento?",
    answer:
      "Com certeza! Acessórios como tiaras, pentes e flores naturais são perfeitos para complementar o penteado. Eles trazem um toque especial e personalizado, dando um ar ainda mais sofisticado ao look da noiva.",
  },
  {
    question: "Qual é o penteado mais indicado para casamentos de noite?",
    answer:
      "Para casamentos à noite, penteados mais estruturados como coques altos ou tranças elaboradas são ótimas escolhas. Esses estilos combinam bem com vestidos mais formais e trajes elegantes.",
  },
];

const TendenciasPenteadosNoivasPage = () => {
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
      { name: "Tendências de Penteados para Noivas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/tendencias-penteados-noivas" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Tendências de Penteados para Noivas - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Tendências de Penteados para Noivas`,
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
                alt={`Tendências de Penteados para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Penteados para Noivas</h2>
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
          <h2>Solicite um Orçamento para Penteados para Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default TendenciasPenteadosNoivasPage;
