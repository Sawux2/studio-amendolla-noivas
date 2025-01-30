"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import ServiceSimulator from "app/components/calculadora";

const serviceData = {
  title: "Maquiagem de Noiva Perfeita - Studio Amendolla",
  subtitle: "Transforme o seu grande dia com uma maquiagem impecável e personalizada.",
  description: "A maquiagem de noiva é essencial para destacar sua beleza natural e criar um visual inesquecível no dia do casamento.",
  detailedDescription: `
    No **Studio Amendolla**, entendemos que a maquiagem de noiva vai muito além de um simples detalhe. Ela deve refletir a personalidade, o estilo do casamento e valorizar os traços únicos de cada noiva. Nosso objetivo é criar um visual harmonioso, que combine perfeitamente com o vestido, penteado e tema do seu evento.
  `,
  image: "/images/maquiagem-noiva.webp",
  images: [
    "/images/maquiagem-noiva-1.webp",
    "/images/maquiagem-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "O que é a maquiagem de noiva e por que é importante?",
    answer:
      "A maquiagem de noiva é planejada para valorizar a beleza natural da noiva e harmonizar com o estilo do casamento. É essencial para garantir um visual perfeito e marcante no grande dia.",
  },
  {
    question: "Quanto tempo antes devo fazer a prova de maquiagem de noiva?",
    answer:
      "A prova de maquiagem deve ser feita com pelo menos 1 mês de antecedência, para ajustar detalhes e garantir que tudo esteja de acordo com suas preferências.",
  },
  {
    question: "A maquiagem de noiva dura o dia todo?",
    answer:
      "Sim, utilizamos técnicas avançadas e produtos de alta qualidade para garantir uma maquiagem de longa duração, perfeita do início ao fim do evento.",
  },
  {
    question: "O que está incluído no serviço de maquiagem de noiva?",
    answer:
      "O serviço inclui prova de maquiagem, preparação da pele no dia, aplicação de maquiagem completa e ajustes finais para garantir um visual impecável.",
  },
];

const MaquiagemDeNoivaPage = () => {
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
      { name: "Maquiagem de Noiva", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-de-noiva" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem de Noiva - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem de Noiva`,
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
                alt={`Maquiagem de Noiva - ${currentImage + 1}`}
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

      {/* Nova sessão para SEO aprimorado */}
{/* Nova sessão em um card estilizado */}
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
    Por que escolher a maquiagem de noiva do Studio Amendolla?
  </h2>
  <p style={{
    fontSize: "1rem",
    lineHeight: "1.8",
    color: "#555",
    marginBottom: "1.5rem",
    textAlign: "justify"
  }}>
    A maquiagem de noiva vai além de apenas destacar a beleza: ela transforma o dia especial em algo inesquecível, harmonizando cada detalhe com o estilo do evento.
  </p>
  <ul style={{
    marginTop: "1rem",
    paddingLeft: "1.5rem",
    color: "#555",
    lineHeight: "1.8"
  }}>
    <li style={{ marginBottom: "0.75rem" }}>
      <strong style={{ color: "#222" }}>Alta durabilidade:</strong> Técnicas avançadas e produtos premium garantem uma maquiagem resistente ao calor, lágrimas e abraços emocionados.
    </li>
    <li style={{ marginBottom: "0.75rem" }}>
      <strong style={{ color: "#222" }}>Harmonia visual:</strong> Personalizamos o visual para combinar perfeitamente com o vestido, penteado e tema do casamento.
    </li>
    <li style={{ marginBottom: "0.75rem" }}>
      <strong style={{ color: "#222" }}>Atendimento personalizado:</strong> Entendemos cada detalhe da sua história para criar uma experiência única.
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
    Além da maquiagem, oferecemos pacotes completos que incluem cuidados com a pele e cabelo, garantindo um dia ainda mais especial.
  </p>
</div>
<ServiceSimulator />

    </div>
  );
};

export default MaquiagemDeNoivaPage;
