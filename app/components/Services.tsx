// app/components/Services.tsx
import React from 'react';
import Head from 'next/head';
import styles from './Services.module.css';

const servicesData = [
  {
    title: 'Maquiagem Social',
    description: 'Realce sua beleza natural com nossa maquiagem social.',
    image: '/images/makeup-social.jpg', // Substitua com a imagem correta
  },
  {
    title: 'Penteado para Noivas',
    description: 'Criamos penteados personalizados para o seu grande dia.',
    image: '/images/wedding-hairstyle.jpg', // Substitua com a imagem correta
  },
  {
    title: 'Maquiagem para Madrinhas',
    description: 'Maquiagem especial para madrinhas, garantindo que todas brilhem.',
    image: '/images/makeup-bridesmaids.jpg', // Substitua com a imagem correta
  },
  {
    title: 'Maquiagem para Debutantes',
    description: 'Estilo e elegância para sua festa de 15 anos.',
    image: '/images/makeup-debutantes.jpg', // Substitua com a imagem correta
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Serviços - Studio Amendolla Noivas</title>
        <meta name="description" content="Descubra nossos serviços de maquiagem e penteados para noivas, madrinhas e debutantes." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Maquiagem e Penteados",
              "provider": {
                "@type": "Organization",
                "name": "Studio Amendolla Noivas",
                "url": "https://www.studioamendollanoivas.com.br",
              },
              "additionalType": "https://schema.org/WeddingService",
            }),
          }}
        />
      </Head>
      <div className={styles.services}>
        <h2>Nossos Serviços</h2>
        <p>Descubra como podemos ajudar a tornar seu dia especial ainda mais perfeito.</p>
        <div className={styles.servicesList}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
