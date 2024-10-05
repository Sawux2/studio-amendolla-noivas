// app/sobre/page.tsx
"use client"; // Adicione isso para transformar em Client Component

import { useEffect } from 'react';

const SobrePage = () => {
  const pageTitle = "Sobre o Studio Amendolla Noivas";
  const pageDescription = "Saiba mais sobre o Studio Amendolla Noivas, especialista em maquiagem e penteados para noivas em São Paulo.";

  useEffect(() => {
    // Lógica do useEffect aqui, se for necessário
  }, []);

  return (
    <>
      <h1>{pageTitle}</h1>
      <p>{pageDescription}</p>
    </>
  );
};

export default SobrePage;
