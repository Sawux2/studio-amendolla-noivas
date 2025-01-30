"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import ServiceSimulator from "app/components/calculadora";

const serviceData = {
  title: "Maquiagem de Noiva para o Dia - Studio Amendolla",
  subtitle: "Realce sua beleza natural com uma maquiagem fresca e radiante para o grande dia.",
  description: "A maquiagem de noiva para o dia é perfeita para quem deseja um visual leve, fresco e de longa duração, ideal para eventos durante o dia.",
  detailedDescription: `
    No **Studio Amendolla**, entendemos que a maquiagem de noiva para o dia deve ser leve, natural e resistente. Nosso objetivo é criar um look radiante que se mantenha impecável ao longo do dia, mesmo sob a luz do sol, garantindo que você se sinta maravilhosa em todos os momentos do casamento.
  `,
  image: "/images/maquiagem-noiva-dia.webp",
  images: [
    "/images/maquiagem-noiva-dia-1.webp",
    "/images/maquiagem-noiva-dia-2.webp",
  ],
};

const faqData = [
  {
    question: "O que é a maquiagem de noiva para o dia e por que é importante?",
    answer:
      "A maquiagem de noiva para o dia foca em criar um visual natural e radiante, adequado para a luz do dia e que dure o evento todo, mantendo sua beleza impecável e fresca.",
  },
  {
    question: "Quanto tempo antes devo fazer a prova de maquiagem de noiva?",
    answer:
      "A prova de maquiagem deve ser feita com pelo menos 1 mês de antecedência, para ajustar detalhes e garantir que tudo esteja de acordo com suas preferências.",
  },
  {
    question: "A maquiagem de noiva para o dia dura o dia todo?",
    answer:
      "Sim, utilizamos técnicas e produtos específicos para garantir uma maquiagem de longa duração, resistente à luz do dia, calor e emoções.",
  },
  {
    question: "O que está incluído no serviço de maquiagem de noiva para o dia?",
    answer:
      "O serviço inclui prova de maquiagem, preparação da pele no dia, aplicação de maquiagem fresca e natural, e ajustes finais para garantir um visual perfeito durante todo o evento.",
  },
];

const MaquiagemDeNoivaDiaPage = () => {
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
      datePublished: "2025-01-27",
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
      { name: "Maquiagem de Noiva para o Dia", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-de-noiva-dia" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem de Noiva para o Dia - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem de Noiva para o Dia`,
      datePublished: "2025-01-27",
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
      <h2>{serviceData.subtitle}</h2>
      <p>{serviceData.description}</p>
      <CanonicalURL />
      <UnifiedSchemas pageData={pageData} />

      <div className={styles.gridContainer}>
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Maquiagem de Noiva para o Dia - ${currentImage + 1}`}
                width={400}
                height={300}
                className={styles.serviceImage}
                quality={80}
                priority={currentImage === 0}
              />
            </div>
            <button onClick={handleNextImage} className={styles.carouselButton}>❯</button>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <div className={styles.faqSection}>
            <h2>Perguntas Frequentes</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento</h2>
          <OrcamentoForm />
        </div>
      </div>

      <div style={{
        marginTop: "2rem",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
        border: "1px solid #e0e0e0"
      }}>
        <h2 style={{
          fontSize: "1.75rem",
          fontWeight: "bold",
          color: "#222",
          textAlign: "center",
          marginBottom: "1.5rem",
          textTransform: "uppercase"
        }}>
          Por que escolher a maquiagem de noiva para o dia do Studio Amendolla?
        </h2>
        <p style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "1.5rem",
          textAlign: "justify"
        }}>
          A maquiagem de noiva para o dia é ideal para quem busca um visual fresco e natural que dure todo o evento. No Studio Amendolla, oferecemos uma maquiagem que destaca sua beleza, mantendo a leveza e a elegância ao longo do dia.
        </p>
        <ul style={{
          marginTop: "1rem",
          paddingLeft: "1.5rem",
          color: "#555",
          lineHeight: "1.8"
        }}>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Visual Fresco e Natural:</strong> Usamos produtos específicos para garantir que a maquiagem se mantenha fresca e radiante durante o evento.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Durabilidade o Dia Todo:</strong> Técnicas e produtos que garantem que sua maquiagem fique impecável por todo o evento.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Beleza Sob a Luz do Sol:</strong> Desenvolvemos maquiagens que ficam perfeitas sob a luz do dia, com acabamento natural e elegante.
          </li>
        </ul>
        <h3 style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#222",
          marginTop: "2rem",
          marginBottom: "1rem",
          textAlign: "center"
        }}>
          Por que cuidar da pele antes do casamento é essencial?
        </h3>
        <p style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          color: "#555",
          textAlign: "justify"
        }}>
          Cuidar da pele é essencial para uma maquiagem perfeita, especialmente para eventos diurnos. Um cronograma de cuidados pré-casamento é recomendado para garantir que sua pele esteja hidratada e radiante.
        </p>
        <h3 style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#222",
          marginTop: "2rem",
          marginBottom: "1rem",
          textAlign: "center"
        }}>
          Serviços adicionais
        </h3>
        <p style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          color: "#555",
          textAlign: "justify"
        }}>
          Oferecemos pacotes completos que incluem cuidados com a pele e cabelo, criando uma experiência única e inesquecível no seu grande dia.
        </p>
      </div>
      <ServiceSimulator />
    </div>
  );
};

export default MaquiagemDeNoivaDiaPage;
