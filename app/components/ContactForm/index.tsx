"use client";

import React, { useState } from 'react';
import styles from 'app/styles/ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  location: string;
  message: string;
}

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    date: '',
    location: '',
    message: ''
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Nova solicitação de serviço:
Nome: ${formData.name}
Telefone: ${formData.phone}
Serviço: ${formData.serviceType}
Data: ${formData.date}
Local: ${formData.location}
Mensagem: ${formData.message}`;

    window.open(`https://wa.me/5511977670498?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Agende seu Atendimento</h2>
      <div className={styles.progressBar}>
        <div 
          className={styles.progress} 
          style={{ width: `${(step / 3) * 100}%` }} 
        />
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        {step === 1 && (
          <div className={styles.formStep}>
            <input
              type="text"
              placeholder="Nome Completo"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <input
              type="tel"
              placeholder="WhatsApp"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <button type="button" onClick={handleNext} className={styles.nextButton}>
              Próximo
            </button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.formStep}>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Selecione o Serviço</option>
              <option value="makeup">Maquiagem</option>
              <option value="hair">Penteado</option>
              <option value="both">Maquiagem + Penteado</option>
              <option value="both">Madrinha</option>
              <option value="both">Debutante</option>
              <option value="both">Dia de Noiva</option>
              <option value="both">Pacote de Noivas</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <div className={styles.buttonGroup}>
              <button type="button" onClick={handlePrev} className={styles.prevButton}>
                Voltar
              </button>
              <button type="button" onClick={handleNext} className={styles.nextButton}>
                Próximo
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.formStep}>
            <input
              type="text"
              placeholder="Assunto / Serviço"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <textarea
              placeholder="Envie sua mensagem"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows={3}
            />
            <div className={styles.buttonGroup}>
              <button type="button" onClick={handlePrev} className={styles.prevButton}>
                Voltar
              </button>
              <button type="submit" className={styles.submitButton}>
                Agendar
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;