"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "app/styles/GaleriaDeFotos.module.css";
import { fotos, Foto } from "app/data/galeriaData"; // Importe a lista de fotos

const GaleriaDeFotos = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("maquiagem");
  const [fotoModal, setFotoModal] = useState<Foto | null>(null);
  const [fotoIndex, setFotoIndex] = useState<number>(0);
  const [exibirFotos, setExibirFotos] = useState<number>(6);

  const fotosFiltradas = fotos.filter((foto) => foto.categoria === categoriaSelecionada);

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

  return (
    <div className={styles.galeria}>
      {/* Filtros */}
      <div className={styles.filtros}>
        {["maquiagem", "penteado", "massagem", "studio",].map((categoria) => (
          <button
            key={categoria}
            className={categoriaSelecionada === categoria ? styles.ativo : ""}
            onClick={() => {
              setCategoriaSelecionada(categoria);
              setExibirFotos(6); // Reinicia a quantidade ao mudar de categoria
            }}
          >
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </button>
        ))}
      </div>

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