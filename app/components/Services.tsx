import React from "react";
import Image from "next/image"; // Importando o componente Image do Next.js
import Link from "next/link"; // Importando o componente Link do Next.js
import styles from "../styles/Services.module.css"; // Atualize o caminho da importação

const servicesData = [
  {
    title: "Maquiagem Social",
    description: "Realce sua beleza natural com nossa maquiagem social.",
    image: "/images/maquiagem-social.webp", // Nome descritivo + WebP
    alt: "Serviço de Maquiagem Social",
    link: "/maquiagem-social", // URL da página de serviço correspondente
  },
  {
    title: "Pacotes para Noivas",
    description: "Maquiagem e Penteados para Noivas.",
    image: "/images/penteado-para-noivas.webp", // Nome descritivo + WebP
    alt: "Serviço de Penteado para Noivas",
    link: "/pacotes-noivas", // URL da página de serviço correspondente
  },
  {
    title: "Combo para Madrinhas",
    description:
      "Maquiagem blindada e Penteados para todas as suas acompanhantes.",
    image: "/images/maquiagem-para-madrinhas.webp", // Nome descritivo + WebP
    alt: "Serviço de Maquiagem para Madrinhas",
    link: "/combo-madrinhas", // URL da página de serviço correspondente
  },
  {
    title: "Nosso Espaço.",
    description:
      "Contamos com um espaço exclusivo para atender Noivas e Madrinhas.",
    image: "/images/maquiagem-debutantes.webp", // Nome descritivo + WebP
    alt: "Serviço de Maquiagem para Debutantes",
    link: "/nosso-espaco", // URL da página de serviço correspondente
  },
  {
    title: "Dia da Noiva",
    description:
      "Pacote completo para noivas, incluindo maquiagem, penteado e muito mais para o grande dia.",
    image: "/images/dia-da-noiva.webp",
    alt: "Pacote de Dia da Noiva",
    link: "/dia-da-noiva", // URL da página de serviço correspondente
  },
  {
    title: "SPA",
    description:
      "Relaxe e prepare-se para o grande dia com nossa massagem relaxante.",
    image: "/images/massagem-relaxante.webp",
    alt: "Serviço de Massagem Relaxante",
    link: "/spa", // URL da página de serviço correspondente
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      <h2 className={styles.servicesTitle}>Nossos Serviços</h2>
      <p className={styles.servicesDescription}>
        Descubra como podemos ajudar a tornar seu dia especial ainda mais
        perfeito.
      </p>
      <div className={styles.servicesList}>
        {servicesData.map((service, index) => (
          <Link key={index} href={service.link} passHref legacyBehavior>
            {/* Envolvendo o conteúdo do card dentro do div */}
            <a className={styles.serviceLink}>
              <div className={styles.serviceCard}>
                <Image
                  src={service.image}
                  alt={service.alt} // Descrição alternativa para acessibilidade e SEO
                  width={400} // Largura da imagem
                  height={300} // Altura da imagem
                  className={styles.serviceImage} // Adiciona uma classe de estilo, se necessário
                  quality={80} // Define a qualidade da imagem para otimização
                />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;