"use client";

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Tendências de Maquiagem para Noivas 2024 em São Paulo',
  description: 'Em 2024, as noivas podem esperar maquiagens sofisticadas com foco em peles iluminadas, olhos marcantes e lábios naturais. O Studio Amendolla oferece as últimas tendências para que cada noiva brilhe no seu grande dia.',
  detailedDescription: `No Studio Amendolla, nossa missão é garantir que cada noiva esteja em sintonia com as últimas tendências de maquiagem. Para 2024, destacam-se maquiagens com pele leve e natural, sombras metálicas para olhos esfumados e lábios em tons nude ou suaves. Nossa equipe especializada está preparada para criar um visual único que se ajuste ao seu estilo e ao tema do seu evento. Além disso, realizamos atendimento a domicílio em toda a zona norte de São Paulo para garantir maior comodidade no dia do casamento.`,
  image: '/images/tendencia-maquiagem-noivas-2024.webp',
  images: [
    '/images/tendencia-maquiagem-noivas-2024.webp',
    '/images/pele-iluminada-noivas-2024.webp',
    '/images/sombras-metálicas-noivas-2024.webp',
  ],
};

const faqData = [
  { question: 'Quais são as principais tendências de maquiagem para noivas em 2024?', answer: 'Para 2024, o foco está em peles naturais e iluminadas, olhos esfumados com sombras metálicas e lábios em tons nude.' },
  { question: 'Vocês oferecem serviços personalizados de maquiagem para noivas?', answer: 'Sim, no Studio Amendolla oferecemos serviços personalizados de maquiagem que seguem as últimas tendências e se adaptam ao estilo da noiva.' },
  { question: 'Posso realizar uma prévia da maquiagem e penteado?', answer: 'Sim, a prévia é opcional e permite que a noiva tenha uma ideia clara do visual final, garantindo que tudo esteja de acordo com suas expectativas.' },
  { question: 'Vocês acompanham as tendências internacionais de maquiagem?', answer: 'Sim, nossa equipe está sempre atualizada com as principais tendências internacionais para trazer as melhores opções às nossas noivas.' },
];

const SalaoMaquiagemPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Tendências de Maquiagem para Noivas 2024 em São Paulo - Studio Amendolla',
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-17',
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
      { name: 'Home', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
      { name: 'Tendências de Maquiagem para Noivas 2024', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/tendencias-maquiagem-noivas-2024' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Tendências de Maquiagem para Noivas 2024 - ${image.split('-')[2].replace('.webp', '')}`,
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} de Tendências de Maquiagem para Noivas 2024 no Studio Amendolla`, // Nome único para cada imagem
      datePublished: '2024-10-17', // Data de publicação
      author: 'Studio Amendolla', // Autor da imagem
      publisher: {
        '@type': 'Organization',
        name: 'Studio Amendolla',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.studioamendollanoivas.com.br/images/logo.webp', // URL do logo do Studio Amendolla
        },
      },
      inLanguage: 'pt-BR', // Idioma da imagem
      license: 'https://creativecommons.org/licenses/by/4.0/', // Licença de uso
    })),
  };
  
  return (
    <div className={styles.servicePage}>
      <h1>Tendências de Maquiagem para Noivas 2024 - Studio Amendolla</h1>
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
                alt={`Tendências de Maquiagem para Noivas 2024 - ${currentImage + 1}`}
                width={400}
                height={300}
                className={styles.serviceImage}
                quality={80}
                priority={currentImage === 0} // Dá prioridade à primeira imagem para melhorar o LCP
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
            <h2>Perguntas Frequentes sobre Tendências de Maquiagem 2024</h2>
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
          <h2>Solicite um Orçamento para Maquiagem de Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>

      {/* Nova Seção de Tendências 2024 */}
      <div className={styles.fullWidthGrid}>
        <h2>Tendências de Maquiagem para Noivas em 2024</h2>
        <div className={styles.trendSection}>
          <div className={styles.trendItem}>
            <h3>Pele Iluminada e Natural</h3>
            <p>A pele com acabamento natural, bem hidratada e com pontos estratégicos de iluminação será um destaque em 2024. As noivas estão optando por um visual radiante que destaca a beleza natural.</p>
            <Image
              src="/images/pele-iluminada-noivas-2024.webp"
              alt="Pele Iluminada para Noivas 2024"
              width={400}
              height={300}
              quality={80}
            />
          </div>
          <div className={styles.trendItem}>
            <h3>Olhos Esfumados com Sombras Metálicas</h3>
            <p>Sombras metálicas em tons de dourado, bronze e prata serão uma escolha popular para 2024. Essas cores ajudam a criar um olhar marcante e sofisticado, perfeito para noivas modernas.</p>
            <Image
              src="/images/sombras-metálicas-noivas-2024.webp"
              alt="Sombras Metálicas para Noivas 2024"
              width={400}
              height={300}
              quality={80}
            />
          </div>
          <div className={styles.trendItem}>
            <h3>Lábios em Tons Nude</h3>
            <p>Lábios suaves em tons nude complementam a maquiagem natural e iluminada, criando um equilíbrio perfeito. As noivas em 2024 estão optando por lábios discretos que realçam a beleza do conjunto.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaoMaquiagemPage;
