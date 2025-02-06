"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

// Ícones
import { FaHome, FaServicestack, FaInfoCircle, FaPhone, FaImages } from 'react-icons/fa';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para fechar o menu ao clicar em um link
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="Logo do Studio Amendolla" width={100} height={50} />
        </Link>
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
        <li>
          <Link href="/" onClick={handleCloseMenu}>
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/servicos" onClick={handleCloseMenu}>
            <FaServicestack />
            <span>Serviços</span>
          </Link>
        </li>
        <li>
          <Link href="/sobre" onClick={handleCloseMenu}>
            <FaInfoCircle />
            <span>Sobre</span>
          </Link>
        </li>
        <li>
          <Link href="/galeria-de-fotos-maquiagem-e-penteados" onClick={handleCloseMenu}>
            <FaImages />
            <span>Galeria de fotos</span>
          </Link>
        </li>
        <li>
          <Link href="/contato" onClick={handleCloseMenu}>
            <FaPhone />
            <span>Contato</span>
          </Link>
        </li>
      </ul>
      <div className={styles.line}></div> {/* Linha dourada */}
    </nav>
  );
};

export default Menu;