import styles from '../styles/Footer.module.css';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'; // Importando ícones

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
          <p><a href="/home" className={styles.accessButton}>Início</a></p>
          <p><a href="/servicos" className={styles.accessButton}>Serviços</a></p>
          <p><a href="/sobre" className={styles.accessButton}>Sobre Nós</a></p>
          <p><a href="/contato" className={styles.accessButton}>Contato</a></p>
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
            >
              (11) 97767-0498
            </a>
          </p>
          <p>
            <FaEnvelope className={styles.icon} />{' '}
            <a href="mailto:priscilaamendola.sa@hotmail.com">priscilaamendola.sa@hotmail.com</a>
          </p>
        </div>

        {/* Coluna de Redes Sociais */}
        <div className={styles.column}>
          <h4>Redes Sociais</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/studioamendolla/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/studioamendolla/?_rdr" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
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
