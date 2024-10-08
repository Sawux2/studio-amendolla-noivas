import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/studio-amendolla-noivas.webp"
        alt="Salão de Noivas"
        fill
        style={{ objectFit: "cover", borderRadius: "15px" }}
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
        priority
        placeholder="blur"
        blurDataURL="data:image/webp;base64,...suaImagemEmBase64..."
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Bem-vinda ao Studio Amendolla Noivas</h1>
        <p className={styles.subtitle}>
          Transforme seu sonho em realidade com nossos serviços exclusivos.
        </p>
        <button className={styles.button}>
          <Link href="/sobre" className={styles.buttonLink}>
            Saiba Mais
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
