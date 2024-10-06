import React from "react";
import Image from "next/image";
import Link from "next/link"; // Importando o Link do Next.js
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/studio-amendolla-noivas.webp"
        alt="Salão de Noivas"
        fill
        style={{ objectFit: "cover", borderRadius: "15px" }}
        quality={100}
        priority
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Bem-vinda ao Studio Amendolla Noivas</h1>
        <p className={styles.subtitle}>
          Transforme seu sonho em realidade com nossos serviços exclusivos.
        </p>
        {/* Substituindo o <a> por <Link /> para a navegação correta */}
        <button className={styles.button}>
          <Link href="/sobre" style={{ textDecoration: 0, color: "black" }}>
            Saiba Mais
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
