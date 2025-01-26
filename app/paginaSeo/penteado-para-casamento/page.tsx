"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Tranças para Casamento - Studio Amendolla",
  description:
    "Explore os estilos de tranças perfeitas para o seu casamento, com opções sofisticadas e modernas que vão deixar seu visual deslumbrante.",
  detailedDescription: `
    As tranças são uma escolha incrível para casamentos, oferecendo um look delicado, moderno e sofisticado. Elas podem ser incorporadas em diversos estilos de penteado, desde os mais descomplicados até os mais elaborados. Confira algumas opções de tranças para noivas:

    1. **Trança Embutida**: 
       Perfeita para noivas que desejam um look elegante e duradouro. A trança embutida mantém o cabelo no lugar e pode ser combinada com outros estilos, como coque ou cabelo solto.

    2. **Trança Lateral**: 
       Ideal para noivas que buscam um visual mais romântico. A trança lateral pode ser feita com cabelo solto ou preso, trazendo um toque descontraído e ao mesmo tempo sofisticado.

    3. **Trança Espinha de Peixe**: 
       Para noivas que querem algo diferente e moderno, a trança espinha de peixe é uma ótima opção. Ela cria um visual único e pode ser combinada com acessórios de cabelo para um toque especial.

    4. **Trança Boxeadora**: 
       Se você quer um estilo moderno e ousado, a trança boxeadora é uma excelente escolha. Ideal para noivas com personalidade forte, ela é perfeita para casamentos mais informais ou temáticos.

    5. **Trança Com Coque**: 
       Uma opção clássica e sofisticada. Combinar trança com coque é perfeito para noivas que desejam um visual mais estruturado, mas ao mesmo tempo cheio de charme.
  `,
  image: "/images/trancas-para-casamento.webp",
  images: [
    "/images/trancas-para-casamento-1.webp",
    "/images/trancas-para-casamento-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual trança é ideal para noivas com cabelo curto?",
    answer:
      "Noivas com cabelo curto podem apostar em tranças laterais ou embutidas, que podem ser feitas em seções menores, ou até mesmo combinar tranças com acessórios para adicionar volume ao penteado.",
  },
  {
    question: "Como posso manter minha trança intacta durante a cerimônia?",
    answer:
      "Para garantir que sua trança dure o dia inteiro, o ideal é usar fixadores de cabelo de boa qualidade. Além disso, é importante garantir que o profissional escolha a melhor técnica para o seu tipo de cabelo.",
  },
  {
    question: "Posso adicionar flores na trança do meu casamento?",
    answer:
      "Sim! As flores naturais ou artificiais ficam maravilhosas combinadas com tranças. Elas trazem um toque romântico e delicado ao penteado, perfeito para casamentos ao ar livre ou no estilo boho.",
  },
  {
    question: "A trança pode ser combinada com outros penteados?",
    answer:
      "Sim! Você pode combinar tranças com coques, cabelos soltos ou até mesmo com outros acessórios, criando um look único que combine com o seu estilo e tema do casamento.",
  },
];

const TrancasParaCasamentoPage = () => {
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
      { name: "Tranças para Casamento", url: "https://www.studioamendollanoivas.com.br/paginaSeo/trancas-para-casamento" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Tranças para Casamento - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Tranças para Casamento`,
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
                alt={`Tranças para Casamento - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Tranças para Casamento</h2>
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
          <h2>Solicite um Orçamento para o Seu Penteado de Casamento</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default TrancasParaCasamentoPage;
