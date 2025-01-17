"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Salão de Noiva - Studio Amendolla, Zona Norte SP',
  description: 'O Studio Amendolla é um salão de noiva especializado na Zona Norte de São Paulo. Oferecemos serviços completos para o grande dia, com maquiagem, penteado e cuidados exclusivos para noivas de todos os estilos.',
  detailedDescription: `No **Studio Amendolla**, nosso salão de noiva oferece um atendimento completo e personalizado para o Dia da Noiva. Com pacotes exclusivos, garantimos uma experiência única com serviços de maquiagem, penteados e cuidados especiais, feitos sob medida para que a noiva se sinta maravilhosa no seu grande dia. 
  Localizado na **Zona Norte de São Paulo**, nosso salão é o lugar ideal para um Dia de Noiva tranquilo e impecável, com profissionais dedicados que cuidam de todos os detalhes para que o visual da noiva seja perfeito. Valorizamos a naturalidade e elegância, utilizando produtos de alta qualidade e técnicas modernas para garantir que cada noiva se sinta única e especial no seu casamento. O **Studio Amendolla** é o salão de noiva onde você encontrará excelência em cada etapa do seu grande dia.`,
  image: '/images/dia-de-noiva-zona-norte-sp.webp',
  images: [
    '/images/dia-de-noiva-zona-norte-sp.webp',
    '/images/dia-de-noiva-penteado.webp',
    '/images/dia-de-noiva-maquiagem.webp',
  ],
};

const faqData = [
  {
    question: 'Por que escolher o Studio Amendolla como seu salão de noiva?',
    answer: 'No Studio Amendolla, oferecemos um atendimento personalizado e exclusivo para noivas. Com uma equipe especializada, cuidamos de cada detalhe, garantindo que o visual da noiva seja impecável e que ela se sinta confiante e radiante no grande dia.',
  },
  {
    question: 'Quais serviços estão incluídos no pacote de salão de noiva do Studio Amendolla?',
    answer: 'Oferecemos uma gama completa de serviços para o Dia da Noiva, incluindo maquiagem, penteado, cuidados com a pele e acessórios. Todos os serviços são personalizados de acordo com o estilo da noiva, para garantir um visual único e marcante.',
  },
  {
    question: 'Como é feito o atendimento no salão de noiva do Studio Amendolla?',
    answer: 'No Studio Amendolla, o atendimento é feito de forma exclusiva. Nossas noivas têm à disposição profissionais altamente capacitados que cuidam de cada detalhe, para garantir que o Dia da Noiva seja inesquecível. Realizamos uma consulta prévia para entender as preferências da noiva e, no dia do casamento, cuidamos de todos os detalhes do visual.',
  },
  {
    question: 'Qual é o valor dos pacotes de salão de noiva no Studio Amendolla?',
    answer: 'Os pacotes de salão de noiva variam conforme os serviços escolhidos. Oferecemos opções personalizadas para atender às necessidades de cada noiva. Entre em contato conosco para obter mais informações sobre os pacotes e solicitar um orçamento.',
  },
];

const SalaoDeNoivaPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Salão de Noiva - Studio Amendolla, Zona Norte SP',
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
      { name: 'Salão de Noiva - Studio Amendolla', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/salao-de-noiva' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Salão de Noiva no Studio Amendolla - Zona Norte de São Paulo',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Salão de Noiva no Studio Amendolla`,
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
      <h1>Salão de Noiva - Studio Amendolla, Zona Norte SP</h1>
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
                alt={`Salão de Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre o Salão de Noiva</h2>
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
          <h2>Solicite um Orçamento para o Dia de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default SalaoDeNoivaPage;
