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
  title: "Maquiadora na Zona Norte - Studio Amendolla",
  subtitle: "Encontre a profissional ideal para o seu grande dia na Zona Norte de São Paulo.",
  description: "Se você procura uma maquiadora especializada em noivas na Zona Norte, o Studio Amendolla oferece um atendimento personalizado e de alta qualidade.",
  detailedDescription: `
    No **Studio Amendolla**, sabemos que o dia do casamento é um dos mais importantes da sua vida. Como maquiadora especializada na Zona Norte de São Paulo, meu objetivo é proporcionar uma experiência única, garantindo que você se sinta linda, confiante e radiante no seu grande dia.
  `,
  image: "/images/maquiadora-zona-norte.webp",
  images: [
    "/images/maquiadora-zona-norte-1.webp",
    "/images/maquiadora-zona-norte-2.webp",
  ],
};

const faqData = [
  {
    question: "Por que escolher uma maquiadora na Zona Norte de São Paulo?",
    answer:
      "Escolher uma maquiadora especializada na Zona Norte oferece a conveniência de um atendimento personalizado na sua região, sem precisar se deslocar para longe de casa. Além disso, entendemos as preferências e tendências locais, garantindo que seu look fique impecável e adequado ao seu estilo.",
  },
  {
    question: "Qual o processo para agendar a maquiagem para o meu casamento?",
    answer:
      "O processo é simples: basta agendar uma consulta, onde discutiremos suas preferências, tipo de casamento e estilo desejado. Depois, agendamos a prova de maquiagem, e no grande dia, tudo estará pronto para você brilhar!",
  },
  {
    question: "A maquiagem para noiva inclui outros serviços?",
    answer:
      "Sim, oferecemos pacotes completos, que incluem preparação da pele, maquiagem, e até serviços adicionais como penteado e cuidados com a pele. Tudo para que você se sinta perfeita no seu casamento.",
  },
  {
    question: "A maquiagem para noiva é resistente e durável?",
    answer:
      "Sim, utilizamos técnicas e produtos de alta qualidade que garantem a durabilidade da maquiagem durante todo o evento, resistindo ao calor, lágrimas e outros desafios do dia.",
  },
];

const MaquiadoraZonaNortePage = () => {
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
      { name: "Maquiadora Zona Norte", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiadora-zona-norte" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiadora na Zona Norte - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiadora na Zona Norte`,
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
                alt={`Maquiadora na Zona Norte - ${currentImage + 1}`}
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
          Por que escolher uma maquiadora na Zona Norte de São Paulo?
        </h2>
        <p style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "1.5rem",
          textAlign: "justify"
        }}>
          Escolher uma maquiadora especializada na Zona Norte garante praticidade, atendimento personalizado e conhecimento das preferências locais. Além disso, proporcionamos a comodidade de estarmos na sua região, facilitando todos os preparativos para o grande dia.
        </p>
        <ul style={{
          marginTop: "1rem",
          paddingLeft: "1.5rem",
          color: "#555",
          lineHeight: "1.8"
        }}>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Atendimento Personalizado:</strong> Cada noiva é única, e por isso, criamos um serviço sob medida para você.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Comodidade e Praticidade:</strong> Com um estúdio na Zona Norte, você conta com a facilidade de agendar serviços sem precisar se deslocar muito.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Expertise Local:</strong> Conhecemos as tendências e preferências da região, oferecendo a maquiagem perfeita para o seu estilo e evento.
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
          Preparar sua pele antes do casamento é essencial para que a maquiagem dure mais e tenha um acabamento perfeito. Oferecemos orientação e serviços para garantir que sua pele esteja radiante no grande dia.
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
          Além da maquiagem, oferecemos serviços complementares de cuidados com a pele, cabelo e outros serviços para tornar o seu grande dia ainda mais especial.
        </p>
      </div>
      
      <FeaturesCards />
      <ServiceSimulator />
    </div>
  );
};

export default MaquiadoraZonaNortePage;
