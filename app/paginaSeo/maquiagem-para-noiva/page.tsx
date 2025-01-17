"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Noiva - Studio Amendolla, Zona Norte SP',
  description: 'A maquiagem para noiva do Studio Amendolla é feita para realçar a sua beleza única e garantir que você esteja deslumbrante no seu grande dia.',
  detailedDescription: `No **Studio Amendolla**, entendemos que a maquiagem de noiva é fundamental para que você se sinta radiante e segura no seu casamento. Nosso objetivo é realçar a sua beleza natural, criando um look que combine com o estilo do seu casamento e com a sua personalidade.
  Nossos profissionais são especializados em técnicas modernas e utilizam apenas produtos de alta qualidade para garantir que a maquiagem dure o dia inteiro sem perder a sua perfeição. Se você busca um visual clássico, romântico ou mais ousado, podemos personalizar a maquiagem para atender suas necessidades. 
  Localizado na **Zona Norte de São Paulo**, o Studio Amendolla é o local ideal para realizar o teste de maquiagem e garantir que o look para o seu grande dia seja impecável.`,
  image: '/images/maquiagem-noiva-clasica.webp',
  images: [
    '/images/maquiagem-noiva-clasica.webp',
    '/images/maquiagem-noiva-natural.webp',
    '/images/maquiagem-noiva-ousada.webp',
  ],
};

const faqData = [
  {
    question: 'Como escolher o tipo de maquiagem para o casamento?',
    answer: 'A maquiagem ideal para o casamento depende do estilo da noiva, do tipo de vestido e do tema do evento. No Studio Amendolla, oferecemos uma consulta personalizada para definir o estilo de maquiagem que mais combina com você.',
  },
  {
    question: 'Quanto tempo antes do casamento devo fazer o teste de maquiagem?',
    answer: 'Recomendamos que o teste de maquiagem seja feito pelo menos 1 mês antes do casamento. Assim, você terá tempo de experimentar diferentes looks e garantir que a maquiagem escolhida seja a ideal.',
  },
  {
    question: 'A maquiagem da noiva é resistente ao calor e à transpiração?',
    answer: 'Sim, utilizamos produtos de longa duração e alta resistência, ideais para garantir que a maquiagem da noiva permaneça intacta durante todo o evento, mesmo em condições de calor ou umidade.',
  },
  {
    question: 'Posso solicitar um estilo de maquiagem mais ousado?',
    answer: 'Com certeza! Se você prefere uma maquiagem mais ousada, nós podemos criar um look único e moderno, sempre respeitando seu estilo pessoal e a proposta do casamento.',
  },
];

const MaquiagemNoivaPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem para Noiva - Studio Amendolla, Zona Norte SP',
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
      { name: 'Maquiagem para Noiva', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-noiva' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Noiva no Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Noiva`,
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
      <h1>Maquiagem para Noiva - Studio Amendolla, Zona Norte SP</h1>
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
                alt={`Maquiagem para Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noiva</h2>
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
          <h2>Solicite um Orçamento para Maquiagem de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaPage;
