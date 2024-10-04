// app/components/Menu.tsx
"use client"; // Adicione esta linha para tornar o componente um Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';
import Image from 'next/image';
import logo from '../../public/images/logo.png'; // Corrigido para o caminho correto

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo do Studio Amendolla" width={100} height={50} />
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/servicos">Serviços</Link></li>
        <li><Link href="/sobre">Sobre</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </ul>
      <div className={styles.line}></div> {/* Linha dourada */}
    </nav>
  );
};

export default Menu;
