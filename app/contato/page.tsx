"use client"; // Indica que este é um Client Component

import React from 'react';
import styles from 'app/styles/Contact.module.css';
import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp
import { MdLocationOn } from 'react-icons/md'; // Ícone de localização
import ServiceSimulator from 'app/components/calculadora';

const Contact: React.FC = () => {
  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.382540054453!2d-46.59405032437366!3d-23.600462260369065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5e4452eb645%3A0x627afb3044e5b7d!2sAv.%20J%C3%BAlio%20Buono%2C%202386%20-%20Vila%20Gustavo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002201-002!5e0!3m2!1sen!2sbr!4v1696517034567!5m2!1sen!2sbr';

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5511977670498?text=Olá,%20encontrei%20o%20Studio%20Amendolla%20Noivas%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços!',
      '_blank'
    );
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Entre em Contato</h1>
      <div className={styles.gridContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.infoTitle}>
            <MdLocationOn /> Nossa Localização
          </h2>
          <p>
            Estamos localizados na Avenida Julio Buono, 2386. Venha nos visitar!
          </p>
          <p>
            Telefone: <a href="tel:+5511977670498">(11) 97767-0498</a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:priscilaamendola.sa@hotmail.com">
              priscilaamendola.sa@hotmail.com
            </a>
          </p>
          <button
            className={styles.whatsAppButton}
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp /> Fale conosco pelo WhatsApp
          </button>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src={googleMapsEmbedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Localização"
            className={styles.mapIframe}
          ></iframe>
        </div>
      </div>
      <div className={styles.routeButtonContainer}>
        <a
          href="https://www.google.com/maps/place/Av.+J%C3%BAlio+Buono,+2386+-+Vila+Gustavo,+S%C3%A3o+Paulo+-+SP,+02201-002/data=!4m2!3m1!1s0x94cef5e4452eb645:0x627afb3044e5b7d?sa=X&ved=1t:242&ictx=111"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.routeButton}
        >
          Traçar Rota
        </a>
      </div>
      <ServiceSimulator />
    </div>
  );
};

export default Contact;
