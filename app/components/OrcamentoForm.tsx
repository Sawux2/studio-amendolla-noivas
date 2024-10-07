import { useState } from 'react';
import styles from '../styles/OrcamentoForm.module.css';

const OrcamentoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    service: 'maquiagem-social',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Email enviado com sucesso!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          service: 'maquiagem-social',
          message: '',
        });
      } else {
        const data = await response.json();
        setResponseMessage(data.error || 'Erro ao enviar email.');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setResponseMessage('Erro ao enviar email. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome</label>
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Telefone</label>
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
        <label htmlFor="eventDate">Data do Evento</label>
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
        <label htmlFor="service">Serviço</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="maquiagem-social">Maquiagem Social</option>
          <option value="penteado-para-noivas">Penteado para Noivas</option>
          <option value="massagem-relaxante">Massagem Relaxante</option>
          <option value="dia-da-noiva">Dia da Noiva Completo</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Observações</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Descreva detalhes do seu evento, número de participantes, etc."
        />
      </div>
      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
      {responseMessage && <p className={styles.responseMessage}>{responseMessage}</p>}
    </form>
  );
};

export default OrcamentoForm;
