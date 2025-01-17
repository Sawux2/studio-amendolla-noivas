"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
    title: 'Maquiagem para Casamento - Studio Amendolla',
    description: 'Transforme o seu look com a maquiagem perfeita para o seu casamento, com foco em produtos de alta qualidade e técnicas que garantem um visual radiante e duradouro.',
    detailedDescription: `No Studio Amendolla, sabemos o quanto a maquiagem para casamento é especial. Criamos looks personalizados para noivas e convidadas, com foco em realçar a beleza única de cada mulher. Usamos técnicas modernas e produtos de alta qualidade para garantir que a maquiagem dure o dia todo, mesmo nas emoções mais intensas. Seja para um casamento clássico ou mais moderno, nosso time de especialistas está pronto para criar o look perfeito para você.`,
    image: '/images/maquiagem-casamento.webp',
    images: [
      '/images/maquiagem-casamento-1.webp',
      '/images/maquiagem-casamento-2.webp',
      '/images/maquiagem-casamento-3.webp',
    ],
};

const faqData = [
    {
      question: 'Como escolher o estilo de maquiagem para o casamento?',
      answer: 'A escolha do estilo de maquiagem depende do seu gosto pessoal, do estilo do casamento e da sua personalidade. Nossa equipe ajuda a definir o melhor estilo para você, seja ele clássico, moderno, romântico ou mais ousado.',
    },
    {
      question: 'Quais produtos são utilizados na maquiagem para casamento?',
      answer: 'Utilizamos produtos de alta qualidade e longa duração, incluindo bases, corretivos e iluminadores que garantem um visual perfeito, resistente à luz, calor e emoção do evento.',
    },
    {
      question: 'A maquiagem vai durar o dia todo?',
      answer: 'Sim! Usamos técnicas de fixação avançadas e produtos de alta resistência para garantir que a maquiagem se mantenha impecável durante todo o dia, desde a cerimônia até a festa.',
    },
    {
      question: 'Quando devo fazer o teste de maquiagem para o casamento?',
      answer: 'Recomendamos que o teste de maquiagem seja feito de 2 a 3 semanas antes do casamento para garantir que você esteja completamente satisfeita com o resultado e possa fazer ajustes, se necessário.',
    },
];

const MaquiagemParaCasamentoPage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
    };

    const handlePrevImage = () => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
    };

    const pageData = {
      article: {
        headline: 'Maquiagem para Casamento - Studio Amendolla',
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
        { name: 'Maquiagem para Casamento', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-casamento' },
      ],
      images: serviceData.images.map((image, index) => ({
        url: `https://www.studioamendollanoivas.com.br${image}`,
        description: 'Maquiagem para Casamento - Studio Amendolla',
        width: 600,
        height: 400,
        name: `Imagem ${index + 1} - Maquiagem para Casamento`,
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
        <h1>Maquiagem para Casamento - Studio Amendolla</h1>
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
                  alt={`Maquiagem para Casamento - ${currentImage + 1}`}
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
              <h2>Perguntas Frequentes sobre Maquiagem para Casamento</h2>
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
            <h2>Solicite um Orçamento para Maquiagem para Casamento</h2>
            <OrcamentoForm />
          </div>
        </div>
      </div>
    );
};

export default MaquiagemParaCasamentoPage;
