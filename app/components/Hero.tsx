// app/components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/studio-amendolla-noivas.jpeg"
        alt="Salão de Noivas"
        fill
        style={{ objectFit: 'cover', borderRadius: '15px' }}
        quality={100}
        priority
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Bem-vinda ao Studio Amendolla Noivas</h1>
        <p className={styles.subtitle}>
          Transforme seu sonho em realidade com nossos serviços exclusivos.
        </p>
        <button className={styles.button}>Saiba Mais</button>
      </div>
    </div>
  );
};

export default Hero;
