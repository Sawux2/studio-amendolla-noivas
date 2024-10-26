"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from 'app/schemas/UnifiedSchemas'; // Componente unificado de schemas

const serviceData = {
  title: 'Dia da Noiva',
  description: 'Desfrute de um Dia da Noiva completo no Studio Amendolla, com penteados, maquiagem e cuidados especiais. Transforme seu dia em uma experiência única e inesquecível.',
  detailedDescription: `O Dia da Noiva no Studio Amendolla é uma experiência pensada para que você se sinta deslumbrante em cada momento. Nosso espaço exclusivo oferece maquiagem profissional, penteados personalizados e serviços de relaxamento para noivas. 
  Cada detalhe é planejado para garantir que você esteja perfeita para o grande momento, com um ambiente tranquilo e confortável, ideal para noivas que desejam um atendimento personalizado e de alta qualidade.`
};

const faqData = [
  { question: 'O que inclui o pacote Dia da Noiva?', answer: 'O pacote inclui maquiagem completa, penteado, prévia de penteado e maquiagem, massagem relaxante, cafe da manhã, assessoria completa e vestimenta da noiva (assessoria sob consulta), e espaço exclusivo para a noiva e suas acompanhantes.' },
  { question: 'Quanto tempo dura o preparo para o Dia da Noiva?', answer: 'O preparo pode durar entre 4 a 6 horas, dependendo dos serviços escolhidos e do estilo desejado.' },
  { question: 'O Studio Amendolla oferece atendimento a domicílio?', answer: 'Sim, também oferecemos a opção de atendimento a domicílio para maior conforto e comodidade da noiva.' },
  { question: 'Quais são as formas de pagamento aceitas?', answer: 'Aceitamos cartão de crédito, débito e pagamentos via Pix. Consulte para mais informações.' },
];

const imageKeywords = [
  'dia-da-noiva-no-studio-amendolla',
  'maquiagem-para-noivas',
  'penteados-para-noivas',
  'preparacao-da-noiva',
  'espaco-para-dia-da-noiva',
  'noiva-studio-amendolla'
];

const serviceImages = imageKeywords.map((keyword, index) => ({
  src: `/images/${keyword}.webp`,
  alt: `Imagem ${index + 1} - ${keyword.replace(/-/g, ' ')}`,
}));

const DiaDaNoivaPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceImages.length) % serviceImages.length);
  };

  const pageData = {
    article: {
      headline: 'Dia da Noiva no Studio Amendolla',
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-07',
      image: `https://www.studioamendollanoivas.com.br${serviceImages[0].src}`,
    },
    services: [
      {
        title: serviceData.title,
        description: serviceData.description,
        image: serviceImages[0].src,
      },
    ],
    faq: faqData,
    breadcrumb: [
      { name: 'Home', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
      { name: 'Dia da Noiva', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/dia-da-noiva' },
    ],
    images: serviceImages.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image.src}`,
      description: image.alt,
      width: 600,
      height: 400,
      name: `Imagem do Dia da Noiva ${index + 1}`, // Nome único para cada imagem
      datePublished: '2024-10-07', // Data de publicação
      author: 'Studio Amendolla', // Nome do autor
      publisher: {
        '@type': 'Organization',
        name: 'Studio Amendolla',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.studioamendollanoivas.com.br/images/logo.webp', // URL do logo do Studio Amendolla
        },
      },
      inLanguage: 'pt-BR', // Idioma
      license: 'https://creativecommons.org/licenses/by/4.0/', // Licença de uso
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
                src={serviceImages[currentImage].src}
                alt={serviceImages[currentImage].alt}
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
