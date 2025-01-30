"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import ServiceSimulator from "app/components/calculadora";

const serviceData = {
  title: "Onde Fazer Maquiagem e Penteado - Studio Amendolla",
  subtitle: "Transforme seu visual no grande dia com maquiagem e penteado impecáveis.",
  description: "No Studio Amendolla, oferecemos serviços de maquiagem e penteado para noivas, com toda a experiência e dedicação para garantir que você esteja deslumbrante.",
  detailedDescription: `
    No **Studio Amendolla**, sabemos que o dia do casamento exige cuidados especiais. Por isso, oferecemos maquiagem e penteado com alto padrão de qualidade, garantindo um visual harmonioso e duradouro. Seja para o casamento ou qualquer evento especial, nossos serviços são feitos sob medida para você.
  `,
  image: "/images/maquiagem-penteado.webp",
  images: [
    "/images/maquiagem-penteado-1.webp",
    "/images/maquiagem-penteado-2.webp",
  ],
};

const faqData = [
  {
    question: "Onde posso fazer maquiagem e penteado para o meu casamento?",
    answer:
      "Você pode fazer maquiagem e penteado conosco no **Studio Amendolla**, especializado em atender noivas e oferecer serviços personalizados, para que você se sinta maravilhosa no seu grande dia. Estamos localizados na Zona Norte de São Paulo, com fácil acesso e um ambiente acolhedor.",
  },
  {
    question: "Quanto tempo antes devo agendar meu serviço de maquiagem e penteado?",
    answer:
      "Recomendamos agendar com pelo menos 2 meses de antecedência para garantir disponibilidade e para que possamos entender seus desejos e personalizar o look ideal para o seu grande dia.",
  },
  {
    question: "Posso fazer uma prova de maquiagem e penteado antes do casamento?",
    answer:
      "Sim, oferecemos a opção de prova para garantir que você fique satisfeita com o visual. Durante a prova, ajustamos a maquiagem e o penteado de acordo com suas preferências.",
  },
  {
    question: "Os serviços incluem maquiagem, penteado e cuidados adicionais?",
    answer:
      "Sim, nossos pacotes incluem tanto maquiagem quanto penteado, além de serviços adicionais como cuidados com a pele, garantindo que você esteja radiante e pronta para o seu casamento.",
  },
];

const OndeFazerMaquiagemEPenteadoPage = () => {
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
      { name: "Onde Fazer Maquiagem e Penteado", url: "https://www.studioamendollanoivas.com.br/paginaSeo/onde-fazer-maquiagem-e-penteado" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem e Penteado - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem e Penteado`,
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
                alt={`Maquiagem e Penteado - ${currentImage + 1}`}
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
          Onde Fazer Maquiagem e Penteado para Noivas?
        </h2>
        <p style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "1.5rem",
          textAlign: "justify"
        }}>
          O **Studio Amendolla** é o local ideal para você realizar a maquiagem e o penteado para o seu casamento. Estamos localizados em São Paulo e oferecemos um atendimento personalizado para garantir que você se sinta linda e confiante no seu grande dia. Nossos profissionais são experientes e especializados, prontos para transformar o seu visual com todo o cuidado e dedicação.
        </p>
        <ul style={{
          marginTop: "1rem",
          paddingLeft: "1.5rem",
          color: "#555",
          lineHeight: "1.8"
        }}>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Experiência:</strong> Profissionais com vasta experiência em maquiagem e penteado de noivas.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Ambiente Aconchegante:</strong> Um espaço preparado para você se sentir confortável e tranquila.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong style={{ color: "#222" }}>Atendimento Personalizado:</strong> Cada noiva é única, por isso oferecemos um atendimento feito sob medida para você.
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
          Cuidados com a Pele e Preparação para o Grande Dia
        </h3>
        <p style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          color: "#555",
          textAlign: "justify"
        }}>
          Antes de se preocupar com o penteado e maquiagem, é fundamental cuidar da pele para garantir um visual radiante. Oferecemos pacotes de cuidados com a pele que complementam o seu look no dia do casamento.
        </p>
      </div>
      <ServiceSimulator />
    </div>
  );
};

export default OndeFazerMaquiagemEPenteadoPage;
