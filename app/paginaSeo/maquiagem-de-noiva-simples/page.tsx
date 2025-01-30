"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import ServiceSimulator from "app/components/calculadora";

const serviceData = {
  title: "Maquiagem de Noiva Simples - Studio Amendolla",
  subtitle: "Um visual natural e elegante para o seu grande dia.",
  description: "A maquiagem de noiva simples é perfeita para quem deseja realçar a beleza natural com um toque de sofisticação, sem exageros.",
  detailedDescription: `
    No **Studio Amendolla**, entendemos que a maquiagem de noiva simples é a escolha ideal para aquelas que buscam um visual discreto, mas igualmente inesquecível. Nossa proposta é valorizar sua beleza natural com uma maquiagem leve e harmoniosa, que combine com o estilo do seu casamento e destaque os traços únicos de cada noiva.
  `,
  image: "/images/maquiagem-noiva-simples.webp",
  images: [
    "/images/maquiagem-noiva-simples-1.webp",
    "/images/maquiagem-noiva-simples-2.webp",
  ],
};

const faqData = [
  {
    question: "O que é a maquiagem de noiva simples e por que é importante?",
    answer:
      "A maquiagem de noiva simples foca em valorizar a beleza natural da noiva, mantendo um visual leve e sofisticado. É ideal para quem prefere um look mais discreto, sem perder a elegância.",
  },
  {
    question: "Quanto tempo antes devo fazer a prova de maquiagem de noiva?",
    answer:
      "A prova de maquiagem deve ser feita com pelo menos 1 mês de antecedência, para ajustar detalhes e garantir que tudo esteja de acordo com suas preferências.",
  },
  {
    question: "A maquiagem de noiva simples dura o dia todo?",
    answer:
      "Sim, utilizamos técnicas avançadas e produtos de alta qualidade para garantir uma maquiagem que dure o dia inteiro, sem perder a leveza e naturalidade.",
  },
  {
    question: "O que está incluído no serviço de maquiagem de noiva simples?",
    answer:
      "O serviço inclui prova de maquiagem, preparação da pele no dia, aplicação de maquiagem leve e natural, e ajustes finais para garantir um visual impecável.",
  },
];

const MaquiagemDeNoivaSimplesPage = () => {
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
      { name: "Maquiagem de Noiva Simples", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-de-noiva-simples" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem de Noiva Simples - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem de Noiva Simples`,
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
                alt={`Maquiagem de Noiva Simples - ${currentImage + 1}`}
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
          Por que escolher a maquiagem de noiva simples do Studio Amendolla?
        </h2>
        <p style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "1.5rem",
          textAlign: "justify"
        }}>
          A maquiagem de noiva simples é a escolha ideal para quem deseja um visual natural e elegante, sem exageros. No Studio Amendolla, garantimos que sua beleza natural seja o destaque, mantendo um look leve e sofisticado.
        </p>
        <ul style={{
          marginTop: "1rem",
          paddingLeft: "1.5rem",
          color: "#555",
          lineHeight: "1.8"
        }}>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Leveza e Naturalidade:</strong> Realçamos seus traços com uma maquiagem suave, para um visual fresco e natural.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Sofisticação Discreta:</strong> Um visual sofisticado sem exageros, que transmite elegância e sutileza.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Experiência Personalizada:</strong> Criamos um look único e perfeito para o seu estilo e preferências pessoais.
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
          Cuidar da pele é a base para uma maquiagem perfeita. Recomendamos um cronograma de cuidados pré-casamento para garantir que sua pele esteja saudável, hidratada e radiante no grande dia.
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
          Além da maquiagem simples, oferecemos pacotes completos que incluem cuidados com a pele e cabelo, para um visual ainda mais impecável no seu grande dia.
        </p>
      </div>
      <ServiceSimulator />
    </div>
  );
};

export default MaquiagemDeNoivaSimplesPage;
