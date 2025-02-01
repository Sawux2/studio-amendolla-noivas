"use client";

import GaleriaDeFotos from 'app/components/GaleriaDeFotos'; // Importe o componente
import styles from 'app/styles/AlbumDeFotos.module.css'; // Importe o CSS

const AlbumDeFotosPage = () => {
  return (
    <div className={styles.container}>
      {/* Cabeçalho da Página */}
      <header className={styles.header}>
        <h1 className={styles.title}>Álbum de Fotos do Studio Amendolla</h1>
        <p className={styles.description}>
          Explore nosso álbum de fotos e descubra momentos mágicos capturados em nossos serviços de
          maquiagem, penteados, massagens e muito mais. Cada imagem conta uma história única de beleza,
          elegância e transformação.
        </p>
      </header>

      {/* Galeria de Fotos */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nossos Momentos</h2>
        <p className={styles.sectionText}>
          Navegue pelas categorias abaixo e mergulhe em um mundo de inspiração e sofisticação. Clique
          em qualquer imagem para ampliá-la e apreciar os detalhes.
        </p>
        <GaleriaDeFotos />
      </section>

      {/* Sobre o Studio */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>Sobre o Studio Amendolla</h2>
          <p className={styles.sectionText}>
            No Studio Amendolla, nos dedicamos a criar experiências únicas e memoráveis para cada cliente.
            Nossa equipe de profissionais altamente qualificados está pronta para transformar seus
            momentos especiais em verdadeiras obras de arte.
          </p>
          <p className={styles.sectionText}>
            Oferecemos serviços personalizados, desde maquiagem e penteados para noivas até tratamentos
            relaxantes de massagem. Cada detalhe é cuidadosamente planejado para garantir sua satisfação
            e conforto.
          </p>
        </div>
      </section>

      <div>
      <h2 className={styles.sectionTitle}>Comentarios do Google!!</h2>
      </div>

      {/* Depoimentos */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsGrid}>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>                        
                Uma excelente profissional, indico de olhos fechados ❤️❤️❤️❤️
                Serviços
                Maquiagem para ocasiões especiais
            </p>
            <footer className={styles.testimonialAuthor}>- Stephany Mesquita</footer>
          </blockquote>
          
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>            
              Equipe excepcional... talentosos, atenciosos e no dia mega especial me fizeram me sentir linda e muito amada . Obrigada por tudo sempre. Muito sucesso . Super indico.
            </p>
            <footer className={styles.testimonialAuthor}>- Marinna Queiroz Chaktekchnis</footer>
          </blockquote>

          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>
            Atendimento incrível ❤️. Recepção sensacional, massagem maravilhosa, make e cabelo perfeitos … melhor dia de noiva ❤️
            </p>
            <footer className={styles.testimonialAuthor}>- Vanessa </footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>
            O melhor Studio da zona norte , ótimo atendimento , com os melhores produtos e ótimas profissionais, super indico
            </p>
            <footer className={styles.testimonialAuthor}>- Vanessa Neves</footer>
          </blockquote>
        </div>
      </section>

      {/* Chamada para Ação (CTA) */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Agende seu Momento Especial</h2>
          <p className={styles.ctaText}>
            Pronto para viver uma experiência única? Entre em contato conosco e reserve seu horário no
            Studio Amendolla. Estamos ansiosos para fazer parte do seu dia especial!
          </p>
          <a
            href="https://wa.me/5511977670498?text=Olá%2C%20estou%20visitando%20o%20site%20studioamendollanoivas.com.br%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Agendar Agora
          </a>
        </div>
      </section>
    </div>
  );
};

export default AlbumDeFotosPage;