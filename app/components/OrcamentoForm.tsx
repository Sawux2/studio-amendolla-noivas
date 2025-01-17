import { useState } from 'react';
import styles from '../styles/OrcamentoForm.module.css';

const OrcamentoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone, eventDate, service, message } = formData;

    const whatsappMessage = `
      Olá, meu nome é ${name}.
      Gostaria de solicitar um orçamento para o seguinte serviço: ${service}.
      Data do evento: ${eventDate}.
      Mensagem adicional: ${message}.
      Meu telefone: ${phone}.
      Meu e-mail: ${email}.
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage.trim());
    const whatsappURL = `https://wa.me/5511977670498?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');

    setIsSubmitting(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Telefone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="eventDate">Data do Evento:</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="service">Serviço:</label>
        <input
          type="text"
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          placeholder="Digite o serviço desejado"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Mensagem Adicional:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Digite uma mensagem adicional"
        />
      </div>
      <button
        type="submit"
        className={`${styles.submitButton} ${isSubmitting ? styles.disabled : ''}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
};

export default OrcamentoForm;
