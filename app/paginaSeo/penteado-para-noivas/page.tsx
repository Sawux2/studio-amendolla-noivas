"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Penteado de Noiva - Studio Amendolla, Zona Norte SP',
  description: 'No Studio Amendolla, oferecemos penteados personalizados para noivas, com foco na elegância, conforto e durabilidade durante todo o evento.',
  detailedDescription: `No **Studio Amendolla**, trabalhamos para criar o penteado perfeito para o seu grande dia. Sabemos que o penteado da noiva deve refletir seu estilo e personalidade, além de garantir conforto e durabilidade. 
  Combinamos técnicas modernas e clássicas para criar looks que vão desde os mais sofisticados até os mais românticos, sempre priorizando a naturalidade e o estilo da noiva. Além disso, utilizamos produtos de alta qualidade para garantir que o penteado permaneça perfeito durante todo o evento.
  O nosso espaço na **Zona Norte de São Paulo** é o local ideal para que você viva essa experiência única, com um atendimento personalizado e especializado para garantir o melhor penteado para o seu casamento.`,
  image: '/images/penteado-noiva-clasico.webp',
  images: [
    '/images/penteado-noiva-clasico.webp',
    '/images/penteado-noiva-romantico.webp',
    '/images/penteado-noiva-elegante.webp',
  ],
};

const faqData = [
  {
    question: 'Como escolher o penteado ideal para o meu casamento?',
    answer: 'O penteado ideal depende do estilo do casamento e das preferências da noiva. No Studio Amendolla, fazemos uma consulta para entender seu estilo e sugerimos opções que combinem com o seu vestido, maquiagem e tema do casamento.',
  },
  {
    question: 'Quanto tempo antes do casamento devo agendar o teste de penteado?',
    answer: 'Recomendamos que o teste de penteado seja feito com pelo menos 2 meses de antecedência. Isso garante tempo suficiente para ajustes e para que você se sinta confortável e segura com o look escolhido.',
  },
  {
    question: 'Os penteados são feitos para diferentes tipos de cabelo?',
    answer: 'Sim! Oferecemos penteados para todos os tipos de cabelo. Nossos profissionais são especializados em adaptar o estilo do penteado ao seu tipo de cabelo, seja ele liso, cacheado ou volumoso.',
  },
  {
    question: 'Qual é a durabilidade dos penteados?',
    answer: 'A durabilidade dos penteados é garantida, pois usamos técnicas e produtos de alta qualidade, que mantêm o look perfeito durante todo o evento, independentemente da duração ou condições ambientais.',
  },
];

const PenteadoNoivaPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Penteado de Noiva - Studio Amendolla, Zona Norte SP',
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
      { name: 'Penteado de Noiva', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/penteado-noiva' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Penteado de Noiva no Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Penteado de Noiva`,
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
      <h1>Penteado de Noiva - Studio Amendolla, Zona Norte SP</h1>
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
                alt={`Penteado de Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Penteado de Noiva</h2>
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
          <h2>Solicite um Orçamento para o Penteado de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default PenteadoNoivaPage;
