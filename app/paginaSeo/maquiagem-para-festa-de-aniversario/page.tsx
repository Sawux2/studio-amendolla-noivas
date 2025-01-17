"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Festa de Aniversário - Studio Amendolla',
  description: 'A maquiagem para festa de aniversário é alegre e cheia de personalidade, ideal para quem quer se destacar em sua celebração. Ela pode variar de um visual mais discreto e natural até um mais ousado e cheio de brilho, de acordo com o estilo do evento.',
  detailedDescription: `
    A maquiagem para festa de aniversário é perfeita para quem deseja destacar sua beleza de forma única, combinando com o estilo da festa e a sua personalidade. Se você está planejando uma festa intimista, a maquiagem pode ser mais leve e natural, realçando seus traços com sutileza. Porém, para festas mais animadas, podemos ousar nas cores, brilho e detalhes, criando um look vibrante e divertido. As opções são variadas e sempre com a preocupação de garantir durabilidade para que você aproveite a festa do início ao fim.`,
  image: '/images/maquiagem-festa-aniversario.webp',
  images: [
    '/images/maquiagem-festa-aniversario-1.webp',
    '/images/maquiagem-festa-aniversario-2.webp',
  ],
};

const faqData = [
  {
    question: 'Qual a principal característica da maquiagem para festa de aniversário?',
    answer: 'A maquiagem para festa de aniversário deve ser alegre, descontraída e que combine com o estilo da festa. A escolha das cores e acabamentos pode variar de acordo com o tema, mas o importante é garantir que você se sinta confortável e confiante.',
  },
  {
    question: 'Posso usar brilho e glitter na maquiagem?',
    answer: 'Sim, o brilho e o glitter são ótimos aliados para dar um toque especial e festivo à maquiagem de aniversário. Se você deseja um look mais ousado, podemos aplicar brilho nos olhos, lábios ou até mesmo no rosto, criando um visual único e divertido.',
  },
  {
    question: 'A maquiagem para festa de aniversário é duradoura?',
    answer: 'Sim, a maquiagem é feita para durar ao longo da festa, mesmo em eventos que exigem movimento e interação. Utilizamos produtos de longa duração e fixadores para garantir que o visual permaneça impecável durante toda a celebração.',
  },
  {
    question: 'Posso adaptar a maquiagem para diferentes estilos de festas?',
    answer: 'Sim! A maquiagem pode ser adaptada para qualquer estilo de festa. Para eventos mais íntimos, podemos optar por uma maquiagem mais suave e natural. Já para festas mais animadas, podemos ousar em cores vibrantes e acabamentos brilhantes.',
  },
];

const MaquiagemParaFestaDeAniversarioPage = () => {
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
      author: 'Priscila Amendolla',
      datePublished: '2024-10-10',
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
      { name: 'Início', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
      { name: 'Maquiagem para Festa de Aniversário', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-festa-de-aniversario' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Festa de Aniversário - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Festa de Aniversário`,
      datePublished: '2024-10-10',
      author: 'Studio Amendolla',
      publisher: {
        '@type': 'Organization',
        name: 'Studio Amendolla',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.studioamendollanoivas.com.br/images/logo.webp',
        },
      },
      inLanguage: 'pt-BR',
      license: 'https://creativecommons.org/licenses/by/4.0/',
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
                alt={`Maquiagem para Festa de Aniversário - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Festa de Aniversário</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Festa de Aniversário</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaFestaDeAniversarioPage;
