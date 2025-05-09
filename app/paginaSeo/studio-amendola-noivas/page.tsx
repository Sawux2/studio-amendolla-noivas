import GaleriaDeFotos from "@/components/GaleriaDeFotos";
import React from "react";

export const metadata = {
  title: "Studio Amendolla Noivas - Dia da Noiva na Zona Norte",
  description:
    "Studio Amendolla Noivas: Especialistas em maquiagem e penteado para o Dia da Noiva. Localizado na Av. Júlio Buono, 2386, Zona Norte de São Paulo.",
  keywords:
    "Studio Amendolla Noivas, Dia da Noiva, maquiagem, penteado, salão de beleza, Zona Norte, Av. Júlio Buono",
  author: "Studio Amendolla Noivas",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.studioamendollanoivas.com.br",
  },
};

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#fff5f7", color: "#1f2937", fontFamily: "sans-serif" }}>
      {/* Header */}
      <header
  style={{
    background: "linear-gradient(to right, #a56c60, #8b5e54)", // Gradiente rose mais escuro puxado para marrom
    color: "white",
    padding: "2rem 0",
    textAlign: "center",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "800" }}>Studio Amendolla Noivas</h1>
    <p style={{ marginTop: "1rem", fontSize: "1.125rem" }}>
      Especialistas em maquiagem e penteado para o Dia da Noiva.
    </p>
  </div>
</header>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1rem" }}>
        {/* Sobre Nós */}
        <section style={{ marginBottom: "3rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1.5rem" }}>Sobre Nós</h2>
          <p style={{ fontSize: "1.125rem", lineHeight: "1.75", maxWidth: "800px", margin: "0 auto" }}>
            Localizado na <strong>Av. Júlio Buono, 2386</strong>, na Zona Norte de São Paulo, o Studio Amendolla Noivas
            é referência em serviços de maquiagem e penteado para noivas. Nossa equipe é especializada em criar looks
            inesquecíveis para o seu grande dia.
          </p>
        </section>

        {/* Serviços */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center", marginBottom: "1.5rem" }}>
            Nossos Serviços
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Maquiagem</h3>
              <p>Maquiagem profissional para noivas, destacando sua beleza natural.</p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Penteados</h3>
              <p>Penteados personalizados para combinar com o seu estilo e vestido.</p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Pacotes Exclusivos</h3>
              <p>Pacotes completos para o Dia da Noiva, com tudo que você precisa.</p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Atendimento VIP</h3>
              <p>Atendimento personalizado para garantir uma experiência única.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "3rem", textAlign: "center" }}>
  <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1.5rem" }}>Dicas para Noivas</h2>
  <ul style={{ listStyle: "none", padding: "0", maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
    <li style={{ marginBottom: "1rem" }}>
      <strong>1. Planeje com antecedência:</strong> Agende sua maquiagem e penteado com pelo menos 3 meses de antecedência.
    </li>
    <li style={{ marginBottom: "1rem" }}>
      <strong>2. Faça um teste:</strong> Realize um teste de maquiagem e penteado para garantir que o look seja perfeito.
    </li>
    <li style={{ marginBottom: "1rem" }}>
      <strong>3. Cuide da pele:</strong> Hidrate e cuide da pele semanas antes do casamento para um resultado impecável.
    </li>
    <li style={{ marginBottom: "1rem" }}>
      <strong>4. Escolha um estilo que combine com você:</strong> Certifique-se de que o penteado e a maquiagem reflitam sua personalidade.
    </li>
  </ul>
</section>
<section style={{ marginBottom: "3rem", textAlign: "center" }}>
  <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1.5rem" }}>Tendências de Maquiagem e Penteados</h2>
  <p style={{ fontSize: "1.125rem", lineHeight: "1.75", maxWidth: "800px", margin: "0 auto" }}>
    Descubra as tendências mais recentes para noivas:
  </p>
  <ul style={{ listStyle: "none", padding: "0", maxWidth: "800px", margin: "1.5rem auto", textAlign: "left" }}>
    <li style={{ marginBottom: "1rem" }}>
      <strong>Maquiagem Natural:</strong> Pele iluminada e tons neutros continuam em alta.
    </li>
    <li style={{ marginBottom: "1rem" }}>
      <strong>Penteados Despojados:</strong> Coques baixos e tranças soltas são os favoritos das noivas modernas.
    </li>
    <li style={{ marginBottom: "1rem" }}>
      <strong>Detalhes Florais:</strong> Flores naturais no cabelo adicionam um toque romântico ao visual.
    </li>
    <li style={{ marginBottom: "1rem" }}>
      <strong>Olhos Marcantes:</strong> Delineados gráficos e sombras metálicas estão em alta para noivas ousadas.
    </li>
  </ul>
</section>

<GaleriaDeFotos />    
<section style={{ marginBottom: "3rem", textAlign: "center" }}>
  <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1.5rem" }}>Perguntas Frequentes</h2>
  <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
    <details style={{ marginBottom: "1rem" }}>
      <summary style={{ fontWeight: "600", cursor: "pointer" }}>Quais serviços estão incluídos no Dia da Noiva?</summary>
      <p>Incluímos maquiagem, penteado, e outros serviços personalizados para o seu grande dia.</p>
    </details>
    <details style={{ marginBottom: "1rem" }}>
      <summary style={{ fontWeight: "600", cursor: "pointer" }}>Quanto tempo antes devo agendar?</summary>
      <p>Recomendamos agendar com pelo menos 3 meses de antecedência para garantir disponibilidade.</p>
    </details>
    <details style={{ marginBottom: "1rem" }}>
      <summary style={{ fontWeight: "600", cursor: "pointer" }}>Vocês oferecem teste de maquiagem e penteado?</summary>
      <p>Sim, realizamos testes para garantir que o look escolhido seja perfeito para você.</p>
    </details>
  </div>
</section>
<section style={{ marginBottom: "3rem", textAlign: "center" }}>
  <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1.5rem" }}>Nossa História</h2>
  <p style={{ fontSize: "1.125rem", lineHeight: "1.75", maxWidth: "800px", margin: "0 auto" }}>
    O Studio Amendolla Noivas foi fundado com o objetivo de oferecer serviços de beleza personalizados para noivas. Com
    mais de 5 anos de experiência, nossa equipe é apaixonada por transformar sonhos em realidade, garantindo que cada
    noiva se sinta única e especial no seu grande dia.
  </p>
</section>

        {/* Localização */}
        <section style={{ marginBottom: "3rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1.5rem" }}>Localização</h2>
          <p style={{ fontSize: "1.125rem" }}>
            Estamos localizados na <strong>Av. Júlio Buono, 2386</strong>, Zona Norte de São Paulo. Venha nos visitar e
            conheça nossos serviços!
          </p>
          <iframe
            style={{
              width: "100%",
              height: "16rem",
              marginTop: "1.5rem",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-46.123456!3d-23.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sAv.%20J%C3%BAlio%20Buono%2C%202386!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            allowFullScreen
            loading="lazy"
            title="Mapa do Studio Amendolla Noivas"
          ></iframe>
        </section>
      </main>


    </div>
  );
};

export default Home;