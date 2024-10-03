// app/layout.tsx
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="pt-BR">
        <head />
        <body>
          {/* Layout pode incluir cabeçalho, rodapé, etc. */}
          {children}
        </body>
      </html>
    );
  }
  