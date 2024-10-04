// app/page.tsx
"use client"; // Certifique-se de que esta linha está no topo

import Hero from './components/Hero';
import Services from './components/Services';
import { useEffect } from 'react';
import { generateOrganizationSchema } from '@schemas/organizationSchema';

export default function HomePage() {
  useEffect(() => {
    console.log("useEffect foi chamado"); // Para depuração
    const organizationSchema = generateOrganizationSchema({
      name: 'Studio Amendolla Noivas',
      url: 'https://www.studioamendollanoivas.com.br',
      description: 'Salão de noivas especializado em maquiagem, penteados e dia da noiva.',
      logoUrl: 'https://www.studioamendollanoivas.com.br/logo.png',
      telephone: '+5511977670498',
      contactType: 'Customer Service',
      areaServed: 'São Paulo, Brasil',
    });

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
