"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from 'app/schemas/UnifiedSchemas'; // Componente unificado de schemas

const serviceData = {
  title: 'Dia da Noiva no Studio Amendolla',
  description: 'Descubra a experiência única do Dia da Noiva no Studio Amendolla. Oferecemos um atendimento exclusivo para tornar este dia ainda mais especial, com serviços completos de maquiagem, penteado e relaxamento.',
  detailedDescription: `O Dia da Noiva é um momento especial de preparação e cuidado para que cada noiva esteja deslumbrante em seu grande dia. No Studio Amendolla, proporcionamos um ambiente tranquilo e acolhedor, com profissionais especializados em maquiagem, penteado e cuidados personalizados. 
  Nossos pacotes incluem desde massagens relaxantes até penteados elaborados e maquiagem de longa duração, tudo pensado para que a noiva possa relaxar e aproveitar cada instante antes do casamento.`,
  image: '/images/dia-da-noiva-zona-norte.webp',
  images: [
    '/images/quanto-custa-dia-de-noiva.webp',
    '/images/dia-da-noiva-zona-norte.webp',
    '/images/dia-de-noiva-em-sao-paulo.webp',
  ],
};

const faqData = [
  {
    question: 'Qual é o Dia da Noiva?',
    answer: 'O Dia da Noiva é um pacote de serviços que inclui preparação completa para a noiva no dia do casamento, com maquiagem, penteado, massagens e muito mais.',
  },
  {
    question: 'O que é feito no Dia da Noiva?',
    answer: 'No Dia da Noiva, oferecemos maquiagem profissional, penteado, massagens relaxantes e outros cuidados para que a noiva esteja preparada e tranquila no grande dia.',
  },
  {
    question: 'Quanto tempo dura o Dia da Noiva?',
    answer: 'A duração do Dia da Noiva pode variar de 3 a 6 horas, dependendo dos serviços escolhidos. Garantimos um atendimento personalizado e sem pressa para que a noiva aproveite cada momento.',
  },
  {
    question: 'Qual a média do valor do Dia da Noiva?',
    answer: 'Os valores dos pacotes do Dia da Noiva variam conforme os serviços incluídos, com preços consulte nossos valores e pacotes promocionais. Entre em contato para mais detalhes e personalização do seu pacote.',
  },
];

const DiaDaNoivaPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Dia da Noiva no Studio Amendolla',
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-07',
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
      { name: 'Dia da Noiva', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/dia-da-noiva' },
    ],
    images: serviceData.images.map((image) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Dia da Noiva no Studio Amendolla - Preparação e Relaxamento`,
      width: 600,
      height: 400,
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>Dia da Noiva - Studio Amendolla Noivas</h1>
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
                alt={`Dia da Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre o Dia da Noiva</h2>
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
          <h2>Solicite um Orçamento para o Dia da Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default DiaDaNoivaPage;
