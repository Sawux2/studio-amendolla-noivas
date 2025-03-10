import styles from '../styles/Footer.module.css';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Coluna "Sobre Nós" */}
        <div className={styles.column}>
          <h4>Sobre Nós</h4>
          <p>
            O Studio Amendolla Noivas é especializado em maquiagens e penteados personalizados, oferecendo serviços de alta qualidade para noivas e eventos especiais. Nossa missão é fazer com que você se sinta linda e confiante no seu grande dia!
          </p>
        </div>

        {/* Coluna de Acessos Rápidos */}
        <div className={styles.column}>
          <h4>Acessos Rápidos</h4>
          <p>
            <Link href="/" className={styles.accessButton}>Início</Link>
          </p>
          <p>
            <Link href="/servicos" className={styles.accessButton}>Serviços</Link>
          </p>
          <p>
            <Link href="/sobre" className={styles.accessButton}>Sobre Nós</Link>
          </p>
          <p>
            <Link href="/contato" className={styles.accessButton}>Contato</Link>
          </p>
        </div>

        {/* Coluna de Contato */}
        <div className={styles.column}>
          <h4>Contato</h4>
          <p>
            <FaPhone className={styles.icon} />{' '}
            <a
              href="https://api.whatsapp.com/send?phone=5511977670498&text=Olá, encontrei o Studio Amendolla Noivas no Google e gostaria de saber mais sobre os seus serviços!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar via WhatsApp"
            >
              (11) 97767-0498
            </a>
          </p>
          <p>
            <FaEnvelope className={styles.icon} />{' '}
            <a href="mailto:priscilaamendola.sa@hotmail.com" aria-label="Enviar email para priscilaamendola.sa@hotmail.com">
              priscilaamendola.sa@hotmail.com
            </a>
          </p>
          <p>Avenida Julio Buono, 2386, 2386</p>
        </div>

        {/* Coluna de Redes Sociais */}
        <div className={styles.column}>
          <h4>Redes Sociais</h4>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/studioamendolla/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
            >
              <FaInstagram />
              <span className={styles.srOnly}>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/studioamendolla/?_rdr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Facebook"
            >
              <FaFacebook />
              <span className={styles.srOnly}>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Seção Inferior */}
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Studio Amendolla Noivas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
