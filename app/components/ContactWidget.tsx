"use client";

import React, { useState } from "react";
import styles from "../styles/ContactWidget.module.css";
import { FaWhatsapp, FaFacebookMessenger, FaInstagram, FaTimes, FaBars } from "react-icons/fa";
import Link from "next/link";

// Links das redes sociais
const socialLinks = [
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/5511977670498",
    label: "WhatsApp",
    backgroundColor: "#25D366",
  },
  {
    icon: <FaFacebookMessenger />,
    link: "https://m.me/studioamendolla",
    label: "Messenger",
    backgroundColor: "#0078FF",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/studioamendola_/",
    label: "Instagram",
    backgroundColor: "#E1306C",
  },
];

// Links rápidos para os serviços
const serviceLinks = [
  { name: "Maquiagem Social", link: "/maquiagem-social" },
  { name: "Pacotes para Noivas", link: "/pacotes-noivas" },
  { name: "Combo para Madrinhas", link: "/combo-madrinhas" },
  { name: "Dia da Noiva", link: "/dia-da-noiva" },
  { name: "SPA", link: "/spa" },
  { name: "Nosso Espaço", link: "/nosso-espaco" },
  { name: "Galeria de fotos", link: "/galeria-de-fotos-maquiagem-e-penteados" },
  { name: "Home", link: "https://studioamendollanoivas.com.br/" },
];

const ContactWidget = () => {
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  const toggleServiceMenu = () => {
    setIsServiceMenuOpen((prev) => !prev);
  };

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsServiceMenuOpen(false);
  };

  return (
    <div className={styles.widgetContainer}>
      {/* Botões das redes sociais */}
      <div className={styles.socialButtons}>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
            style={{ backgroundColor: social.backgroundColor }}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Botão para o menu de serviços */}
      <div className={styles.serviceMenu}>
        <button
          className={styles.serviceMenuButton}
          onClick={toggleServiceMenu}
          aria-label="Abrir menu de serviços"
        >
          {isServiceMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isServiceMenuOpen && (
          <div className={styles.serviceLinks}>
            {serviceLinks.map((service, index) => (
              <Link key={index} href={service.link} className={styles.serviceLink} onClick={handleLinkClick}>
                {service.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactWidget;
