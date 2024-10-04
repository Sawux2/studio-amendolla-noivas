// app/layout.tsx
import './globals.css'; // Estilos globais
import { ReactNode } from 'react';
import Menu from './components/Menu';

export const metadata = {
  title: 'Studio Amendolla Noivas',
  description: 'Salão de noivas especializado em maquiagem, penteados e pacotes de dia da noiva.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
