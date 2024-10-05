import React from 'react';
import Image from 'next/image'; // Importando o componente Image do Next.js
import styles from './Services.module.css';

const servicesData = [
  {
    title: 'Maquiagem Social',
    description: 'Realce sua beleza natural com nossa maquiagem social.',
    image: '/images/maquiagem-social.webp', // Nome descritivo + WebP
    alt: 'Serviço de Maquiagem Social',
  },
  {
    title: 'Penteado para Noivas',
    description: 'Criamos penteados personalizados para o seu grande dia.',
    image: '/images/penteado-para-noivas.webp', // Nome descritivo + WebP
    alt: 'Serviço de Penteado para Noivas',
  },
  {
    title: 'Maquiagem para Madrinhas',
    description: 'Maquiagem especial para madrinhas, garantindo que todas brilhem.',
    image: '/images/maquiagem-para-madrinhas.webp', // Nome descritivo + WebP
    alt: 'Serviço de Maquiagem para Madrinhas',
  },
  {
    title: 'Maquiagem para Debutantes',
    description: 'Estilo e elegância para sua festa de 15 anos.',
    image: '/images/maquiagem-debutantes.webp', // Nome descritivo + WebP
    alt: 'Serviço de Maquiagem para Debutantes',
  },
  {
    title: 'Dia da Noiva',
    description: 'Pacote completo para noivas, incluindo maquiagem, penteado e muito mais para o grande dia.',
    image: '/images/dia-da-noiva.webp',
    alt: 'Pacote de Dia da Noiva',
  },
  {
    title: 'Massagem Relaxante',
    description: 'Relaxe e prepare-se para o grande dia com nossa massagem relaxante.',
    image: '/images/massagem-relaxante.webp',
    alt: 'Serviço de Massagem Relaxante',
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      <h2>Nossos Serviços</h2>
      <p>Descubra como podemos ajudar a tornar seu dia especial ainda mais perfeito.</p>
      <div className={styles.servicesList}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            {/* Usando o componente Image */}
            <Image
              src={service.image}
              alt={service.alt} // Descrição alternativa para acessibilidade e SEO
              width={400} // Largura da imagem
              height={300} // Altura da imagem
              className={styles.serviceImage} // Adiciona uma classe de estilo, se necessário
              quality={80} // Define a qualidade da imagem para otimização
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
