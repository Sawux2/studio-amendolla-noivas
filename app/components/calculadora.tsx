"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

// Definindo as variáveis de estilo
const theme = {
  colorPrimary: "#621e2c", // Rosa suave
  colorSecondary: "#ffe0e3", // Rosa claro
  colorAccent: "#ffffff", // Branco para destacar
  colorText: "#4a4a4a", // Cinza escuro para contraste
  colorMuted: "#828282", // Cinza médio
  colorBg: "#fafafa", // Fundo neutro e claro
  radiusLg: "20px",
  radiusMd: "12px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

// Estilos com styled-components
const CalculatorContainer = styled.div`
  max-width: 750px;
  margin: 50px auto;
  padding: 25px 30px;
  background: ${theme.colorAccent};
  border-radius: ${theme.radiusLg};
  box-shadow: ${theme.boxShadow};
  border: 1px solid ${theme.colorSecondary};
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px auto;
  }

  @media (max-width: 480px) {
    padding: 15px;
    margin: 10px auto;
  }
`;

const CalculatorTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${theme.colorPrimary};
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const CalculatorInfo = styled.p`
  text-align: center;
  font-size: 0.95rem;
  color: ${theme.colorMuted};
  margin-bottom: 25px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CalculatorForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const CalculatorCard = styled.div`
  background: ${theme.colorAccent};
  border-radius: ${theme.radiusMd};
  padding: 15px;
  box-shadow: ${theme.boxShadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${theme.colorSecondary};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }
`;

const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colorText};
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CardInput = styled.input`
  width: 60px;
  padding: 8px;
  font-size: 1rem;
  text-align: center;
  border: 1px solid ${theme.colorMuted};
  border-radius: ${theme.radiusMd};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colorPrimary};
    box-shadow: 0 0 5px ${theme.colorPrimary};
  }

  @media (max-width: 480px) {
    width: 50px;
    padding: 6px;
    font-size: 0.9rem;
  }
`;

const CalculatorTotal = styled.div`
  grid-column: span 2;
  text-align: right;
  margin-top: 20px;
  background: ${theme.colorSecondary};
  padding: 15px 20px;
  border-radius: ${theme.radiusMd};

  @media (max-width: 480px) {
    grid-column: span 1;
    text-align: center;
    padding: 10px;
  }
`;

const TotalPrice = styled.p`
  font-size: 1.8rem;
  color: ${theme.colorPrimary};
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const TotalDiscount = styled.p`
  font-size: 0.9rem;
  color: ${theme.colorMuted};
  font-style: italic;
  margin-top: 5px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CalculatorButton = styled.button`
  grid-column: span 2;
  padding: 15px;
  font-size: 1.2rem;
  background: ${theme.colorPrimary};
  color: white;
  border: none;
  border-radius: ${theme.radiusLg};
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: ${theme.colorText};
    color: white;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
    background: ${theme.colorPrimary};
  }

  @media (max-width: 480px) {
    grid-column: span 1;
    font-size: 1rem;
    padding: 12px;
  }
`;

// Componente principal
const predefinedServices = [
  { name: "Maquiagem Noiva", price: 300 },
  { name: "Penteado Noiva", price: 300 },
  { name: "Maquiagem de Madrinha", price: 200 },
  { name: "Penteado de Madrinha", price: 200 },
  { name: "Massagem Relaxante", price: 200 },
  { name: "Babyliss", price: 100 },
];

const ServiceSimulator: React.FC = () => {
  const [quantities, setQuantities] = useState(
    predefinedServices.reduce((acc, service) => {
      acc[service.name] = 0;
      return acc;
    }, {} as Record<string, number>)
  );

  const router = useRouter();

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    serviceName: string
  ) => {
    const { value } = e.target;
    setQuantities((prev) => ({ ...prev, [serviceName]: Number(value) }));
  };

  const calculateTotal = () => {
    const total = predefinedServices.reduce((sum, service) => {
      return sum + service.price * (quantities[service.name] || 0);
    }, 0);

    return total >= 1000 ? total * 0.9 : total; // Aplica desconto de 10% acima de R$ 1000
  };

  const handleSendToWhatsApp = () => {
    const total = calculateTotal();
    const selectedServices = predefinedServices
      .filter((service) => quantities[service.name] > 0)
      .map(
        (service) =>
          `${quantities[service.name]}x ${service.name}`
      )
      .join("\n");

    const message = `Olá, gostaria de um orçamento para o seguinte:\n${selectedServices}\n\nTotal com desconto (se aplicável): R$ ${total.toFixed(
      2
    )}\n\nObs: Este é um orçamento aproximado e os valores podem variar.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511977670498?text=${encodedMessage}`;
    router.push(whatsappUrl);
  };

  return (
    <CalculatorContainer>
      <CalculatorTitle>Simulador de Orçamento</CalculatorTitle>
      <CalculatorInfo>
        Este é um cálculo aproximado com base nos serviços selecionados. Os valores podem variar para mais ou para menos.
      </CalculatorInfo>
      <CalculatorForm>
        {predefinedServices.map((service) => (
          <CalculatorCard key={service.name}>
            <div>
              <CardTitle>{service.name}</CardTitle>
            </div>
            <CardInput
              type="number"
              min="0"
              value={quantities[service.name] || 0}
              onChange={(e) => handleQuantityChange(e, service.name)}
              placeholder="0"
            />
          </CalculatorCard>
        ))}
        <CalculatorTotal>
          <TotalPrice>Total Estimado: R$ {calculateTotal().toFixed(2)}</TotalPrice>
          {calculateTotal() >= 1000 && (
            <TotalDiscount>Desconto de 10% aplicado!</TotalDiscount>
          )}
        </CalculatorTotal>
        <CalculatorButton
          type="button"
          onClick={handleSendToWhatsApp}
        >
          Enviar orçamento para o WhatsApp
        </CalculatorButton>
      </CalculatorForm>
    </CalculatorContainer>
  );
};

export default ServiceSimulator;