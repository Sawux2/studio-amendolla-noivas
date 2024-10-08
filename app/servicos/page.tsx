"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import OrcamentoForm from '../components/OrcamentoForm';
import styles from '../styles/Servicos.module.css';
import CanonicalURL from '../components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from '../schemas/UnifiedSchemas'; // Componente unificado de schemas

const servicesData = [
  {
    title: 'Maquiagem Social',
    description: 'Realce sua beleza natural com nossa maquiagem social.',
    image: '/images/maquiagem-social.webp',
  },
  {
    title: 'Penteado para Noivas',
    description: 'Penteados sofisticados e personalizados para noivas.',
    image: '/images/penteado-para-noivas.webp',
  },
  {
    title: 'Massagem Relaxante',
    description: 'Relaxe com nossa massagem antes do grande dia.',
    image: '/images/massagem-relaxante.webp',
  },
  {
    title: 'Dia da Noiva Completo',
    description: 'Pacote exclusivo para o dia mais especial da sua vida.',
    image: '/images/dia-da-noiva.webp',
  },
  {
    title: 'Maquiagem para Madrinhas',
    description: 'Maquiagem especial para madrinhas, garantindo que todas brilhem.',
    image: '/images/maquiagem-madrinhas.webp',
  },
  {
    title: 'Penteado para Debutantes',
    description: 'Penteados e maquiagens deslumbrantes para debutantes.',
    image: '/images/penteado-debutantes.webp',
  },
];

const faqData = [
  { question: 'Qual o preço da maquiagem?', answer: 'A partir de R$150.' },
  { question: 'Onde estamos localizados?', answer: 'Nosso salão fica na Avenida Julio Buono, 2386, São Paulo, Brasil.' },
  { question: 'Quais serviços oferecemos?', answer: 'Oferecemos pacotes de maquiagem, penteados e dia da noiva.' },
  { question: 'Por que escolher o Studio Amendolla?', answer: 'Somos referência na Zona Norte de São Paulo em penteados e maquiagem para noivas.' },
];

const ServicosPage = () => {
  // Dados para os schemas
  const pageData = {
    services: servicesData,
    faq: faqData,
    breadcrumb: [
      { name: 'Home', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
    ],
  };

  return (
    <div className={styles.servicosContainer}>
      {/* Adicionando o H1 na página */}
      <h1>Serviços Oferecidos no Studio Amendolla Noivas</h1>

      <CanonicalURL /> {/* Ajuste da URL canônica */}
      <UnifiedSchemas pageData={pageData} /> {/* Schema unificado para SEO */}

      {/* Grid de serviços: 3 colunas de serviços */}
      <div className={styles.gridContainer}>
        <div className={styles.servicosGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.servicoCard}>
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={600}
                className={styles.servicoImage}
                quality={80}
                loading={index === 0 ? 'eager' : 'lazy'} // Carrega a primeira imagem rapidamente
                priority={index === 0} // Prioriza o carregamento da primeira imagem
              />
              <h3 className={styles.servicoTitle}>{service.title}</h3>
              <p className={styles.servicoDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Coluna do formulário */}
        <div className={styles.colunaForm}>
          <h2>Solicite um Orçamento</h2>
          <OrcamentoForm />
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicosPage;
