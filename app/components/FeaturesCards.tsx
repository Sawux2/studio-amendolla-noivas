import React from 'react';
import styles from 'app/styles/FeaturesCards.module.css';

type Feature = {
  title: string;
  description: string;
  image: string;
};

const FeaturesCards: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Atendimento Personalizado",
      description: "Cada detalhe é pensado para garantir uma experiência única e inesquecível para o seu grande dia. Nossa equipe oferece um atendimento dedicado e exclusivo, focado em realçar a beleza e confiança de cada noiva.",
      image: "/images/combos-para-madrinhas-essencial.webp",
    },
    {
      title: "Expertise e Qualidade",
      description: "Com anos de experiência e utilizando apenas produtos de alta qualidade, garantimos um resultado impecável e duradouro para eventos especiais. Nossas técnicas profissionais garantem um acabamento perfeito e duradouro.",
      image: "/images/combos-para-madrinhas-luxo.webp",
    },
    {
      title: "Conforto e Comodidade",
      description: "Para maior conforto e praticidade, oferecemos atendimento a domicílio, permitindo que você se prepare no conforto de sua casa ou local de escolha, sem preocupações.",
      image: "/images/makeup-article.webp",
    },
  ];

  return (
    <div className={`${styles["features-section"]} ${styles["margin-top"]}`}>
      <div className={styles["features-container"]}>
        <h2 className={styles["features-title"]}>
          Por que escolher o <span>Studio Amendolla Noivas?</span>
        </h2>
        <p className={styles["features-subtitle"]}>
          Referência em São Paulo, especialmente na Zona Norte e Vila Gustavo, somos reconhecidos por transformar sonhos em realidade com maquiagem e penteados que destacam a beleza única de cada noiva. Nossa missão é proporcionar uma experiência completa, do primeiro contato ao grande dia.
        </p>

        <div className={styles["features-grid"]}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles["feature-card"]}
              style={{ backgroundImage: `url(${feature.image})` }}
            >
              <div className={styles["overlay"]}>
                <h3 className={styles["feature-title"]}>{feature.title}</h3>
                <p className={styles["feature-description"]}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de chamada para ação */}
        <div className={styles["cta-buttons-mobile"]}>
          <a
            href="https://wa.me/5511977670498?text=Olá%2C%20estou%20visitando%20o%20site%20studioamendollanoivas.com.br%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["cta-button"]}
          >
            WhatsApp
          </a>
          <a href="/sobre" className={styles["cta-button"]}>
            Saiba mais sobre nós
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCards;