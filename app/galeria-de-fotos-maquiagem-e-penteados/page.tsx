"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from 'app/styles/GaleriaDeFotos.module.css';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';  // Ajustar caminho para o arquivo correto

interface Foto {
  url: string;
  alt: string;
  categoria: string;
}

const fotos: Foto[] = [
  { url: '/images/dia-da-noiva-no-studio-amendolla.webp', alt: 'Maquiagem para noiva', categoria: 'maquiagem' },
  { url: '/images/maquiagem-noiva-classica.webp', alt: 'Maquiagem para noiva', categoria: 'maquiagem' },
  { url: '/images/maquiagem-noiva-pele-negra.webp', alt: 'Maquiagem para noiva', categoria: 'maquiagem' },
  { url: '/images/maquiagem-para-noivas-luxo.webp', alt: 'Penteado para noiva', categoria: 'penteado' },
  { url: '/images/nosso-espaco-sala9.webp', alt: 'Massagem relaxante', categoria: 'massagem' },
  { url: '/images/nosso-espaco-sala1.webp', alt: 'Fotos do Studio', categoria: 'studio' },
  { url: '/images/maquiagem-a-domicio.webp', alt: 'Atendimento a domicílio', categoria: 'domicilio' },
  // Adicione mais fotos conforme necessário
];

const GaleriaDeFotos = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('maquiagem');
  const [fotoModal, setFotoModal] = useState<Foto | null>(null);
  const [fotoIndex, setFotoIndex] = useState<number>(0);
  const [exibirFotos, setExibirFotos] = useState<number>(6);

  const fotosFiltradas = fotos.filter(foto => foto.categoria === categoriaSelecionada);

  const handleVerMais = () => {
    setExibirFotos((prev) => prev + 3);
  };

  const handleNextImage = () => {
    setFotoIndex((prev) => (prev + 1) % fotosFiltradas.length);
  };

  const handlePrevImage = () => {
    setFotoIndex((prev) => (prev - 1 + fotosFiltradas.length) % fotosFiltradas.length);
  };

  const openModal = (index: number) => {
    setFotoModal(fotosFiltradas[index]);
    setFotoIndex(index);
  };

  // Dados para o schema de imagens
  const pageData = {
    images: fotosFiltradas.map(foto => ({
      url: `https://www.studioamendollanoivas.com.br${foto.url}`,
      description: foto.alt,
      width: 800,
      height: 600,
    })),
  };

  return (
    <div className={styles.galeria}>
      {/* Filtros */}
      <div className={styles.filtros}>
        {['maquiagem', 'penteado', 'massagem', 'studio', 'domicilio'].map((categoria) => (
          <button
            key={categoria}
            className={categoriaSelecionada === categoria ? styles.ativo : ''}
            onClick={() => {
              setCategoriaSelecionada(categoria);
              setExibirFotos(6); // Reinicia a quantidade ao mudar de categoria
            }}
          >
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </button>
        ))}
      </div>

      {/* UnifiedSchemas para gerar schemas automaticamente */}
      <UnifiedSchemas pageData={pageData} />

      {/* Galeria de Imagens */}
      <div className={styles.grid}>
        {fotosFiltradas.slice(0, exibirFotos).map((foto, index) => (
          <div key={index} className={styles.item} onClick={() => openModal(index)}>
            <Image src={foto.url} alt={foto.alt} width={300} height={200} className={styles.image} />
          </div>
        ))}
      </div>

      {/* Botão Ver Mais */}
      {exibirFotos < fotosFiltradas.length && (
        <button className={styles.verMais} onClick={handleVerMais}>
          Ver mais
        </button>
      )}

      {/* Modal de Imagem com Carrossel */}
      {fotoModal && (
        <div className={styles.modal} onClick={() => setFotoModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.carouselButton} onClick={handlePrevImage}>❮</button>
            <Image
              src={fotosFiltradas[fotoIndex].url}
              alt={fotosFiltradas[fotoIndex].alt}
              width={400}
              height={300}
              className={styles.modalImage}
            />
            <button className={styles.carouselButton} onClick={handleNextImage}>❯</button>
            <p>{fotosFiltradas[fotoIndex].alt}</p>
            <button className={styles.closeButton} onClick={() => setFotoModal(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaDeFotos;
