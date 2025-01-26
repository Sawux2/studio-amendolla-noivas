"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Dia da Noiva - Studio Amendolla",
  description:
    "No Studio Amendolla, proporcionamos uma experiência completa para o Dia da Noiva, com serviços exclusivos de maquiagem, penteado e cuidados especiais para que você esteja radiante no seu grande dia.",
  detailedDescription: `
    O Dia da Noiva no Studio Amendolla é uma experiência única e personalizada. Nossa equipe se dedica a transformar o seu grande dia em um momento ainda mais especial, oferecendo serviços de maquiagem e penteado sob medida, que combinam perfeitamente com o seu estilo e o tema do casamento.

    Além disso, oferecemos cuidados exclusivos para garantir que você se sinta relaxada e radiante. Desde tratamentos de pele até cuidados com o cabelo e as unhas, nosso objetivo é proporcionar uma experiência de beleza completa e sem preocupações, para que você possa se concentrar em aproveitar cada momento.

    Todos os nossos serviços são realizados em um ambiente confortável e acolhedor, para garantir que o Dia da Noiva seja não só sobre beleza, mas também sobre relaxamento e prazer.`,
  image: "/images/dia-da-noiva-1.webp",
  images: [
    "/images/dia-da-noiva-1.webp",
    "/images/dia-da-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "O que está incluído no pacote para o Dia da Noiva?",
    answer:
      "O pacote inclui maquiagem, penteado, cuidados com a pele, cabelo e unhas. Também podemos incluir serviços adicionais como massagem relaxante e outros tratamentos personalizados.",
  },
  {
    question: "Como posso agendar o Dia da Noiva no Studio Amendolla?",
    answer:
      "Basta entrar em contato conosco com antecedência para agendar o Dia da Noiva. Nossa equipe ajudará a personalizar todos os detalhes e garantir que o dia seja perfeito.",
  },
  {
    question: "O Studio Amendolla oferece serviços para madrinhas e convidadas?",
    answer:
      "Sim! Temos pacotes especiais para madrinhas, mães da noiva e outras convidadas, para garantir que todas estejam deslumbrantes e em sintonia com o tema do casamento.",
  },
  {
    question: "É possível fazer uma prova de maquiagem e penteado antes do casamento?",
    answer:
      "Sim! Recomendamos a prova de maquiagem e penteado antes do grande dia, para garantir que você esteja 100% satisfeita com o visual escolhido.",
  },
];

const DiaDaNoivaPage = () => {
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
      { name: "Dia da Noiva", url: "https://www.studioamendollanoivas.com.br/paginaSeo/dia-da-noiva" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Dia da Noiva - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Dia da Noiva`,
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
                alt={`Dia da Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre o Dia da Noiva</h2>
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
          <h2>Solicite um Orçamento para o Dia da Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default DiaDaNoivaPage;
