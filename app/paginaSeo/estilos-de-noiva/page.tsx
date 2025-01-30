"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";
import ServiceSimulator from "app/components/calculadora";

const serviceData = {
  title: "Estilos de Noiva - Studio Amendolla",
  description:
    "Descubra os diferentes estilos de noiva e como escolher o visual perfeito para o seu grande dia, com vestidos, penteados e maquiagem que combinam com sua personalidade.",
  detailedDescription: `
    O estilo de noiva é uma das escolhas mais importantes para o grande dia, pois reflete a personalidade e os gostos da noiva. Cada noiva é única, e o estilo dela deve ser fiel ao que ela deseja para o seu casamento. Confira os principais estilos de noiva que podem inspirar o seu visual:

    1. **Noiva Clássica**: 
       Para a noiva clássica, o estilo é atemporal e elegante. Ela aposta em vestidos com cortes tradicionais, como o estilo princesa ou sereia, com rendas, tecidos delicados e silhuetas que valorizam sua figura de forma discreta e sofisticada. A maquiagem é suave e a escolha do penteado geralmente é algo sofisticado, como um coque ou cabelo semi-preso.

    2. **Noiva Boho**: 
       O estilo boho é perfeito para noivas que desejam algo mais leve e descontraído. Vestidos fluidos, com detalhes em renda, bordados e tecidos leves, são as apostas desse estilo. O cabelo é muitas vezes solto, com ondas naturais ou tranças, e a maquiagem é mais natural, com tons terrosos e iluminados.

    3. **Noiva Moderninha**: 
       Se você deseja um look mais atual, mas sem perder a elegância, o estilo moderninho é ideal. Vestidos de noiva minimalistas, com linhas retas, tecidos inovadores e cortes modernos, são perfeitos para esse estilo. O cabelo pode ser liso e solto, ou preso de forma descomplicada, e a maquiagem é mais ousada, com olhos marcantes e batons fortes.

    4. **Noiva Romântica**: 
       A noiva romântica é doce e delicada. Ela escolhe vestidos com saias volumosas, decotes em V ou tomara que caia, e tecidos como tule e seda. Os detalhes em pérolas e rendas completam o visual. A maquiagem é suave, com um toque de rosa ou pêssego nas bochechas, e o cabelo é muitas vezes solto ou em cachos suaves, com flores delicadas.

    5. **Noiva Vintage**: 
       Se você adora o charme de outras épocas, o estilo vintage é perfeito para você. O vestido pode remeter aos anos 20, 50 ou até 70, com detalhes como pérolas, rendas, saia evasê e cintura alta. O cabelo pode ser ondulado ou com acessórios vintage, como tiaras e flores. A maquiagem pode ser inspirada nas décadas passadas, com olhos delineados e lábios vermelhos.

    6. **Noiva Alternativa**: 
       Para as noivas que não têm medo de ousar, o estilo alternativo oferece muitas opções de looks inusitados. Vestidos com cores diferentes, como preto, cinza ou tons metálicos, ou até com detalhes que fogem do tradicional, são apostas de quem busca um visual único. A maquiagem pode ser ousada, com delineado pesado e batons escuros, e o cabelo pode ser pintado de cores diferentes, criando um look bem pessoal e moderno.

    7. **Noiva Luxuosa**: 
       Para a noiva que sonha com um visual deslumbrante, o estilo luxuoso é caracterizado por vestidos com brilhos, tecidos nobres como seda e cetim, e acessórios exuberantes. O cabelo é geralmente volumoso e bem trabalhado, com acessórios glamourosos, como tiaras e broches. A maquiagem é impecável, com destaque para o olhar e contornos bem feitos.

    8. **Noiva Minimalista**: 
       A noiva minimalista prefere um estilo clean, com cortes simples e elegantes. Vestidos sem muitos detalhes, mas com tecidos de alta qualidade, são a base desse estilo. O cabelo e maquiagem são discretos, focando em um visual natural, mas com um toque de sofisticação.
  `,
  image: "/images/estilos-de-noiva.webp",
  images: [
    "/images/estilos-de-noiva-1.webp",
    "/images/estilos-de-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual o estilo de vestido mais adequado para o meu corpo?",
    answer:
      "O estilo de vestido ideal depende do formato do seu corpo. Para noivas com corpo em formato de ampulheta, vestidos justos ao corpo e com saia volumosa funcionam bem. Para quem tem quadris mais largos, vestidos com saia evasê ou A-line são uma ótima escolha. A melhor forma de escolher é experimentar diferentes modelos e ver o que mais combina com você.",
  },
  {
    question: "Como posso escolher o penteado ideal para o meu estilo?",
    answer:
      "O penteado ideal depende do estilo do vestido e do seu gosto pessoal. Para noivas clássicas, um coque elegante ou cabelo semi-preso são ótimas escolhas. Já para noivas boho, cabelos soltos com ondas naturais ou tranças combinam perfeitamente. Não deixe de fazer uma prova de cabelo para garantir que o penteado se encaixa com seu visual e personalidade.",
  },
  {
    question: "Posso combinar diferentes estilos de noiva?",
    answer:
      "Sim, é possível combinar diferentes estilos de noiva! Muitas noivas optam por misturar elementos de estilos que mais as agradam, como um vestido romântico com penteado boho ou uma maquiagem minimalista com um vestido mais luxuoso. O mais importante é que você se sinta confortável e fiel ao seu estilo.",
  },
  {
    question: "Qual maquiagem devo usar de acordo com meu estilo de noiva?",
    answer:
      "A maquiagem deve complementar o estilo da noiva. Para noivas clássicas, uma maquiagem suave e elegante é ideal, com foco nos olhos ou lábios. Para noivas modernas, pode-se usar uma maquiagem mais ousada, com delineado e batom forte. Noivas boho preferem uma maquiagem mais natural e iluminada. A escolha da maquiagem deve refletir seu estilo e gosto pessoal.",
  },
];

const EstilosDeNoivaPage = () => {
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
      { name: "Estilos de Noiva", url: "https://www.studioamendollanoivas.com.br/paginaSeo/estilos-de-noiva" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Estilos de Noiva - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Estilos de Noiva`,
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
                alt={`Estilos de Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Estilos de Noiva</h2>
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
          <h2>Solicite um Orçamento para o Seu Estilo de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
      <ServiceSimulator/>
    </div>
  );
};

export default EstilosDeNoivaPage;
