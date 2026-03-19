"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
    title: 'Maquiagem de Noiva para Pele Madura - Studio Amendolla, Zona Norte SP',
    description: 'Especialistas em maquiagem de noiva para pele madura na Zona Norte de São Paulo. Técnicas exclusivas que valorizam a maturidade e realçam a beleza natural, garantindo um visual sofisticado e elegante para o seu grande dia.',
    detailedDescription: `No Studio Amendolla, somos especialistas em maquiagem de noiva para pele madura, oferecendo técnicas exclusivas que valorizam cada linha de expressão e realçam a beleza natural que vem com a experiência de vida. Nossa abordagem personalizada considera as características únicas da pele madura, utilizando produtos específicos e técnicas avançadas para garantir um resultado impecável.
    
    Nossa equipe especializada entende que a pele madura requer cuidados especiais: hidratação intensa, primers específicos para minimizar poros e linhas finas, bases com cobertura buildable que não ressecam, e técnicas de iluminação que conferem viço natural. Trabalhamos com produtos de alta qualidade, livres de parabenos e com ingredientes anti-idade, garantindo que sua pele se mantenha hidratada e radiante durante todo o evento.
    
    No Studio Amendolla, localizado na Zona Norte de São Paulo, criamos um ambiente acolhedor onde cada noiva madura se sente valorizada e especial. Nosso objetivo é destacar sua beleza única, criando um visual sofisticado e elegante que reflita sua personalidade e experiência de vida. Porque beleza não tem idade, e o seu dia especial merece um cuidado igualmente especial.`,
    image: '/images/maquiagem-noiva-pele-madura-zona-norte.webp',
    images: [
      '/images/maquiagem-noiva-pele-madura-zona-norte.webp',
      '/images/noiva-madura-antes-depois.webp',
      '/images/maquiagem-sofisticada-noiva-madura.webp',
      '/images/penteado-noiva-pele-madura.webp',
    ],
  };

const faqData = [
  {
    question: 'Quais são os principais cuidados na maquiagem para noiva de pele madura no Studio Amendolla?',
    answer: 'Na maquiagem para pele madura, priorizamos a hidratação intensa antes da aplicação, usamos primers específicos para minimizar poros e linhas finas, escolhemos bases com cobertura buildable que não ressecam, e aplicamos técnicas de iluminação estratégica para conferir viço natural. Também utilizamos produtos anti-idade e livres de ingredientes que podem ressecar a pele.',
  },
  {
    question: 'Como é feita a preparação da pele madura para a maquiagem de noiva?',
    answer: 'A preparação inclui limpeza suave, hidratação profunda com produtos específicos para pele madura, aplicação de primer anti-idade, e uso de técnicas de preenchimento natural para linhas de expressão. Todo o processo é personalizado de acordo com as características individuais da pele, garantindo um resultado natural e duradouro.',
  },
  {
    question: 'Quais produtos são recomendados para maquiagem de noiva em pele madura?',
    answer: 'Utilizamos bases líquidas com ácido hialurônico, corretivos cremosos que não ressecam, pós translúcidos para fixação suave, sombras mate e shimmer discreto, e batons hidratantes de longa duração. Todos os produtos são selecionados por serem livres de parabenos e conterem ingredientes anti-idade que cuidam da pele durante o uso.',
  },
  {
    question: 'Qual é a diferença entre maquiagem tradicional e maquiagem para pele madura?',
    answer: 'A maquiagem para pele madura requer técnicas específicas: mais hidratação, uso de primers anti-idade, bases com fórmulas cremosas, aplicação estratégica de iluminador para conferir viço, e cores mais suaves e sofisticadas. O foco está em realçar a beleza natural e criar um visual elegante que valoriza a maturidade.',
  },
  {
    question: 'Quanto tempo dura o serviço de maquiagem para noiva de pele madura?',
    answer: 'O serviço completo leva aproximadamente 2 horas, incluindo preparação da pele, aplicação da maquiagem e finalização. Este tempo permite que façamos todos os cuidados especiais necessários para pele madura, garantindo um resultado impecável e duradouro para todo o evento.',
  },
  {
    question: 'O Studio Amendolla oferece teste de maquiagem para noivas de pele madura?',
    answer: 'Sim, oferecemos teste de maquiagem personalizado onde testamos produtos específicos para pele madura, definimos as cores ideais e ajustamos as técnicas de acordo com suas preferências. O teste é fundamental para garantir que você se sinta completamente confiante no grande dia.',
  },
];

const MaquiagemNoivaPeleMaduraPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem de Noiva para Pele Madura - Studio Amendolla, Zona Norte SP',
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-12-15',
      image: `https://studio-amendolla-noivas.vercel.app${serviceData.image}`,
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
      { name: 'Início', url: 'https://studio-amendolla-noivas.vercel.app' },
      { name: 'Serviços', url: 'https://studio-amendolla-noivas.vercel.app/servicos' },
      { name: 'Maquiagem de Noiva para Pele Madura', url: 'https://studio-amendolla-noivas.vercel.app/maquiagem-noiva-pele-madura' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://studio-amendolla-noivas.vercel.app${image}`,
      description: 'Maquiagem de Noiva para Pele Madura no Studio Amendolla - Especialistas na Zona Norte de São Paulo',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem de Noiva para Pele Madura`,
      datePublished: '2024-12-15',
      author: 'Studio Amendolla',
      publisher: {
        '@type': 'Organization',
        name: 'Studio Amendolla',
        logo: {
          '@type': 'ImageObject',
          url: 'https://studio-amendolla-noivas.vercel.app/images/logo.webp',
        },
      },
      inLanguage: 'pt-BR',
      license: 'https://creativecommons.org/licenses/by/4.0/',
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>Maquiagem de Noiva para Pele Madura - Studio Amendolla, Zona Norte SP</h1>
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
                alt={`Maquiagem de Noiva para Pele Madura - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem de Noiva para Pele Madura</h2>
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
          <h2>Solicite um Orçamento para Maquiagem de Noiva Pele Madura</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaPeleMaduraPage;