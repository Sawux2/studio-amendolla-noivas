"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem Social para Noivas - Studio Amendolla",
  description:
    "Descubra a maquiagem social ideal para noivas, com um visual elegante, suave e atemporal, realçando sua beleza natural no grande dia.",
  detailedDescription: `
    A maquiagem social para noivas tem como objetivo realçar a beleza natural, criando um visual elegante e atemporal. Ao contrário de uma maquiagem de festa mais ousada, a maquiagem social busca um equilíbrio perfeito, com tons suaves e acabamentos impecáveis. No Studio Amendolla, a maquiagem social é personalizada de acordo com o estilo de cada noiva, respeitando sua personalidade e a proposta do casamento.
    
    1. **Pele impecável**: A base de toda maquiagem social é uma pele bem preparada. A utilização de produtos leves, que promovem um acabamento natural, garante um visual fresco e luminoso. Aposte em primers, bases de alta cobertura e iluminadores estratégicos.
    
    2. **Olhos suaves e sofisticados**: Para os olhos, escolhemos sombras em tons neutros e delicados, como beige, marrom claro ou dourado. Um delineado suave e máscara de cílios completam o look, garantindo elegância sem exageros.
    
    3. **Lábios discretos**: Nos lábios, preferimos cores nude, rosadas ou pêssego, que harmonizam com o tom da pele e dão um toque de sofisticação, sem roubar a atenção do restante da maquiagem.
    
    4. **Durabilidade e conforto**: A maquiagem social para noivas precisa resistir ao longo do dia e a todas as emoções do casamento. Utilizamos produtos de longa duração e técnicas para garantir que sua maquiagem fique impecável até o final da festa.
    
    5. **Atenção aos detalhes**: A maquiagem social valoriza os traços naturais da noiva, sem exageros. Cada detalhe, como o contorno facial, a escolha das cores e a aplicação de produtos, é cuidadosamente planejado para que a noiva se sinta confortável e linda durante todo o evento.`,
  image: "/images/maquiagem-social-noiva.webp",
  images: [
    "/images/maquiagem-social-noiva-1.webp",
    "/images/maquiagem-social-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "O que é maquiagem social para noivas?",
    answer:
      "A maquiagem social para noivas tem o foco em um visual natural e sofisticado, com tons suaves e acabamentos impecáveis. A ideia é realçar a beleza da noiva sem exageros.",
  },
  {
    question: "Como garantir que a maquiagem dure o dia inteiro?",
    answer:
      "Utilizamos produtos de alta durabilidade e técnicas específicas, como primers e sprays fixadores, para garantir que a maquiagem se mantenha impecável durante todo o casamento.",
  },
  {
    question: "Quais cores de maquiagem são mais indicadas para noivas?",
    answer:
      "Tons neutros e suaves, como beige, rosado e pêssego, são perfeitos para criar uma maquiagem discreta e sofisticada para o grande dia.",
  },
  {
    question: "Como escolher o estilo de maquiagem para minha personalidade?",
    answer:
      "No Studio Amendolla, personalizamos cada maquiagem para que ela se encaixe perfeitamente no estilo e na personalidade da noiva, levando em conta o tipo de cerimônia e o vestido.",
  },
];

const MaquiagemSocialNoivaPage = () => {
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
      { name: "Maquiagem Social para Noivas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-social-para-noivas" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem Social para Noivas - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem Social para Noivas`,
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
                alt={`Maquiagem Social para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem Social para Noivas</h2>
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
          <h2>Solicite um Orçamento para Maquiagem Social para Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemSocialNoivaPage;
