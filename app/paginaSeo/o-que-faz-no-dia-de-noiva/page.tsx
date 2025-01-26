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
    "Descubra os cuidados e preparações essenciais para o Dia da Noiva, para garantir que você esteja radiante e tranquila antes de subir ao altar.",
  detailedDescription: `
    O Dia da Noiva é um momento especial, onde a noiva recebe todos os cuidados para garantir um visual impecável e cheio de charme no grande dia. Durante este dia, a noiva é cuidada de maneira única e personalizada, com atenção aos mínimos detalhes. Confira o que inclui o Dia da Noiva no Studio Amendolla:

    1. **Recepção Exclusiva**: 
       Começamos o Dia da Noiva com uma recepção calorosa em nosso espaço exclusivo. O ambiente é preparado para que você se sinta relaxada, tranquila e pronta para viver esse dia tão especial.

    2. **Cuidado com a Pele**: 
       A pele bem cuidada é a base de uma maquiagem impecável. Realizamos uma limpeza profunda, hidratação e uma máscara especial para garantir que sua pele fique suave, iluminada e pronta para a maquiagem.

    3. **Tratamento Capilar**: 
       Durante o Dia da Noiva, o cabelo também recebe cuidados especiais, com hidratação profunda e finalização perfeita para o penteado escolhido. Você ficará com um cabelo sedoso, brilhante e pronto para ser arrumado de acordo com seu estilo.

    4. **Maquiagem Personalizada**: 
       A maquiagem é feita de acordo com o estilo e a personalidade da noiva. Usamos produtos de alta qualidade e técnicas que garantem uma maquiagem duradoura e que resista ao longo do dia, para que você fique impecável durante toda a celebração.

    5. **Penteado e Finalização**: 
       A noiva recebe a atenção necessária para garantir que seu penteado seja feito com perfeição. O toque final inclui acessórios e ajustes para que o visual esteja alinhado com o vestido e o estilo escolhido para o casamento.

    6. **Aconchego e Relaxamento**: 
       Além dos cuidados de beleza, o Dia da Noiva inclui momentos de relaxamento. Oferecemos um ambiente acolhedor, com música suave, massagens e o cuidado para que você se sinta tranquila e preparada para o grande momento.

    7. **Finalização e Ajustes Finais**: 
       Antes de sair para o casamento, realizamos os últimos retoques para garantir que tudo esteja perfeito, desde o cabelo até a maquiagem, garantindo que você esteja pronta para viver esse dia inesquecível.    
  `,
  image: "/images/dia-da-noiva.webp",
  images: [
    "/images/dia-da-noiva-1.webp",
    "/images/dia-da-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "O que acontece no Dia da Noiva?",
    answer:
      "O Dia da Noiva é uma experiência única e personalizada, onde a noiva recebe cuidados de beleza, como maquiagem, cabelo e tratamentos de pele, para garantir que ela se sinta impecável no grande dia.",
  },
  {
    question: "Quanto tempo dura o Dia da Noiva?",
    answer:
      "O Dia da Noiva pode durar de 4 a 6 horas, dependendo dos serviços escolhidos, como maquiagem, cabelo, tratamentos de pele e outros cuidados especiais.",
  },
  {
    question: "Posso fazer provas de cabelo e maquiagem no Dia da Noiva?",
    answer:
      "Sim, realizamos provas de maquiagem e cabelo antecipadamente, para garantir que o estilo escolhido seja exatamente como você imagina para o grande dia.",
  },
  {
    question: "O que inclui o Dia da Noiva no Studio Amendolla?",
    answer:
      "Inclui recepção, cuidados com a pele, tratamentos capilares, maquiagem personalizada, penteado e ajustes finais, tudo em um ambiente acolhedor e exclusivo para a noiva.",
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
