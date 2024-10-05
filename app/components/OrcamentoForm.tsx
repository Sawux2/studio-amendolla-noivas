import styles from '../styles/OrcamentoForm.module.css';

const OrcamentoForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Telefone</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="eventDate">Data do Evento</label>
        <input type="date" id="eventDate" name="eventDate" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="service">Serviço</label>
        <select id="service" name="service" required>
          <option value="maquiagem-social">Maquiagem Social</option>
          <option value="penteado-para-noivas">Penteado para Noivas</option>
          <option value="massagem-relaxante">Massagem Relaxante</option>
          <option value="dia-da-noiva">Dia da Noiva Completo</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Observações</label>
        <textarea id="message" name="message" rows={4} placeholder="Descreva detalhes do seu evento, número de participantes, etc." />
      </div>
      <button type="submit" className={styles.button}>Enviar</button>
    </form>
  );
};

export default OrcamentoForm;
