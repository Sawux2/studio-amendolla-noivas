import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* Imagem de fundo */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/studio-amendolla-noivas.webp"
          alt="Salão de Noivas"
          fill
          className={styles.image}
          quality={75}
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,...suaImagemEmBase64..."
        />
      </div>

      {/* Overlay suave */}
      <div className={styles.overlay} />

      {/* Conteúdo principal */}
      <div className={styles.content}>
        <h2 className={styles.title}>
          Bem-vinda ao <span>Studio Amendolla Noivas</span>
        </h2>
        <p className={styles.subtitle}>
          Transforme seu sonho em realidade com nossos serviços exclusivos de
          maquiagem e penteados.
        </p>
        <Link href="/sobre" className={styles.button}>
          Saiba Mais
        </Link>
      </div>
    </div>
  );
};

export default Hero;