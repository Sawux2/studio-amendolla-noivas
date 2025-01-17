"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
    title: 'Dia de Noiva - Studio Amendolla, Zona Norte SP',
    description: 'Somos referência em serviços completos de dia de noiva na Zona Norte de São Paulo, oferecendo um cuidado especial com maquiagem, penteado e outros serviços exclusivos para o grande dia.',
    detailedDescription: `No Studio Amendolla, oferecemos um atendimento completo para noivas, com pacotes personalizados para o dia do casamento. Nossa especialidade é proporcionar uma experiência única, com serviços de maquiagem, penteados e cuidados especiais para que cada noiva se sinta incrível no seu grande dia. 
    Nosso salão na Zona Norte de São Paulo é o local ideal para um dia de noiva tranquilo e impecável, com profissionais dedicados que cuidam de cada detalhe para garantir que o visual da noiva seja perfeito. Priorizamos a naturalidade e elegância, com produtos de alta qualidade e técnicas modernas. O Studio Amendolla é o lugar onde você encontrará excelência e cuidado em cada etapa do seu dia especial.`,
    image: '/images/dia-de-noiva-zona-norte-sp.webp',
    images: [
      '/images/dia-de-noiva-zona-norte-sp.webp',
      '/images/dia-de-noiva-penteado.webp',
      '/images/dia-de-noiva-maquiagem.webp',
    ],
  };
  

  const faqData = [
    {
      question: 'Por que é importante contar com um especialista para o Dia da Noiva no Studio Amendolla?',
      answer: 'No Studio Amendolla, contamos com profissionais especializados para garantir que cada detalhe do seu visual esteja impecável. O especialista entende as necessidades específicas da sua pele e estilo, criando um look que valoriza sua beleza única e te proporciona confiança no grande dia.',
    },
    {
      question: 'Como é feita a preparação da pele para o Dia da Noiva no Studio Amendolla?',
      answer: 'A preparação da pele para o Dia da Noiva inclui uma hidratação profunda, uso de primer para garantir a durabilidade da maquiagem e escolha de bases de alta cobertura, tudo personalizado para garantir um acabamento perfeito, independente do tipo de pele.',
    },
    {
      question: 'Quais produtos são utilizados no Dia da Noiva no Studio Amendolla?',
      answer: 'Utilizamos produtos de alta qualidade, adaptados para diferentes tipos de pele, com ênfase em alta pigmentação e longa durabilidade. Bases, corretivos, iluminadores e outros produtos são escolhidos especialmente para garantir um visual radiante e duradouro.',
    },
    {
      question: 'Qual é o valor dos serviços para o Dia da Noiva no Studio Amendolla?',
      answer: 'Os valores dos serviços para o Dia da Noiva variam conforme o pacote escolhido. Oferecemos pacotes personalizados que incluem maquiagem, penteado e outros serviços essenciais para o grande dia. Entre em contato conosco para mais detalhes e para personalizar o pacote de acordo com suas necessidades.',
    },
  ];
  
  const MaquiagemNoivaPeleNegraPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const handleNextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
    };
  
    const handlePrevImage = () => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
    };
  
    const pageData = {
      article: {
        headline: 'Dia de Noiva - Studio Amendolla, Zona Norte SP',
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
        { name: 'Dia de Noiva - Studio Amendolla', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/dia-de-noiva' },
      ],
      images: serviceData.images.map((image, index) => ({
        url: `https://www.studioamendollanoivas.com.br${image}`,
        description: 'Dia de Noiva no Studio Amendolla - Especialistas em Pele Negra na Zona Norte de São Paulo',
        width: 600,
        height: 400,
        name: `Imagem ${index + 1} - Dia de Noiva no Studio Amendolla`,
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
        <h1>Dia de Noiva - Studio Amendolla, Zona Norte SP</h1>
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
                  alt={`Dia de Noiva - ${currentImage + 1}`}
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
              <h2>Perguntas Frequentes sobre o Dia de Noiva</h2>
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
  
  export default MaquiagemNoivaPeleNegraPage;
  