"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fotos, Foto } from "app/data/galeriaData";
import styles from "app/styles/GaleriaDeFotos.module.css";

const GaleriaDeFotos = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("maquiagem");
  const [fotoModal, setFotoModal] = useState<Foto | null>(null);
  const [fotoIndex, setFotoIndex] = useState<number>(0);
  const [exibirFotos, setExibirFotos] = useState<number>(6);
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulando carregamento das imagens
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [categoriaSelecionada]);

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
    document.body.style.overflow = 'hidden'; // Impede o scroll da página
  };

  const closeModal = () => {
    setFotoModal(null);
    document.body.style.overflow = 'auto'; // Permite o scroll da página novamente
  };

  const toggleLike = (index: number) => {
    setLiked(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className={styles.galeria}>
      {/* Header estilo Instagram */}
      <div className={styles.header}>
        <h2 className={styles.title}>Galeria de Inspirações</h2>
        <p className={styles.subtitle}>Explore nossos looks favoritos para o seu dia especial</p>
      </div>

      {/* Filtros com visual stories */}
      <div className={styles.filtros}>
        {["maquiagem", "penteado", "massagem", "studio"].map((categoria) => (
          <button
            key={categoria}
            className={`${styles.filtroBtn} ${categoriaSelecionada === categoria ? styles.ativo : ""}`}
            onClick={() => {
              setCategoriaSelecionada(categoria);
              setExibirFotos(6);
              setIsLoading(true);
            }}
          >
            <div className={styles.storyCircle}>
              <span className={styles.storyInitial}>
                {categoria.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className={styles.categoriaLabel}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </span>
          </button>
        ))}
      </div>

      {/* Grid de fotos */}
      <div className={styles.grid}>
        {isLoading ? (
          // Skeleton loader
          Array(6).fill(0).map((_, i) => (
            <div key={i} className={styles.skeletonItem}></div>
          ))
        ) : (
          // Fotos reais
          fotosFiltradas.slice(0, exibirFotos).map((foto, index) => (
            <div key={index} className={styles.card}>
              {/* Cabeçalho do post */}
              <div className={styles.cardHeader}>
                <div className={styles.profileCircle}>
                  <span>A</span>
                </div>
                <div className={styles.profileInfo}>
                  <p className={styles.profileName}>Studio Amendolla</p>
                  <p className={styles.profileCategory}>{foto.categoria}</p>
                </div>
              </div>
              
              {/* Imagem */}
              <div className={styles.cardImage} onClick={() => openModal(index)}>
                <Image 
                  src={foto.url} 
                  alt={foto.alt} 
                  width={600} 
                  height={600} 
                  className={styles.image}
                />
              </div>
              
              {/* Interações */}
              <div className={styles.cardActions}>
                <div className={styles.actionButtons}>
                  <button onClick={() => toggleLike(index)} className={styles.actionBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill={liked[index] ? "#ff4d79" : "none"} stroke={liked[index] ? "#ff4d79" : "currentColor"} strokeWidth="2" className={styles.heartIcon}>
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  <button className={styles.actionBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </button>
                  <button className={styles.actionBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                      <polyline points="16 6 12 2 8 6"></polyline>
                      <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                  </button>
                </div>
                <p className={styles.cardDescription}>
                  <span className={styles.boldText}>Studio Amendolla</span> {foto.alt}
                </p>
                <p className={styles.cardLink}>Ver mais detalhes</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Botão Ver Mais */}
      {exibirFotos < fotosFiltradas.length && (
        <button 
          className={styles.verMais}
          onClick={handleVerMais}
        >
          Ver mais inspirações
        </button>
      )}

      {/* Modal expandido estilo Instagram */}
      {fotoModal && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Botão fechar */}
            <button className={styles.closeButton} onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Imagem */}
            <div className={styles.modalImageContainer}>
              <button className={styles.carouselButton} onClick={handlePrevImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <Image
                src={fotosFiltradas[fotoIndex].url}
                alt={fotosFiltradas[fotoIndex].alt}
                width={800}
                height={800}
                className={styles.modalImage}
              />
              <button className={styles.carouselButton} onClick={handleNextImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            
            {/* Informações */}
            <div className={styles.modalInfo}>
              {/* Cabeçalho */}
              <div className={styles.modalHeader}>
                <div className={styles.profileCircle}>
                  <span>A</span>
                </div>
                <div className={styles.profileInfo}>
                  <p className={styles.profileName}>Studio Amendolla</p>
                  <p className={styles.profileCategory}>{fotosFiltradas[fotoIndex].categoria}</p>
                </div>
              </div>
              
              {/* Descrição */}
              <div className={styles.modalDescription}>
                <div className={styles.descriptionContent}>
                  <p>
                    <span className={styles.boldText}>Studio Amendolla</span> {fotosFiltradas[fotoIndex].alt}
                  </p>
                  <p className={styles.descriptionText}>
                    Esse é um de nossos trabalhos mais recentes para noivas! Ideal para quem busca um visual 
                    {fotosFiltradas[fotoIndex].categoria === "maquiagem" ? " elegante e sofisticado" : 
                     fotosFiltradas[fotoIndex].categoria === "penteado" ? " delicado e romântico" : " relaxante e revigorante"}.
                  </p>
                  <p className={styles.timeText}>há 3 dias</p>
                </div>
              </div>
              
              {/* Interações */}
              <div className={styles.modalActions}>
                <div className={styles.actionButtons}>
                  <button onClick={() => toggleLike(fotoIndex)} className={styles.actionBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill={liked[fotoIndex] ? "#ff4d79" : "none"} stroke={liked[fotoIndex] ? "#ff4d79" : "currentColor"} strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  <button className={styles.actionBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </button>
                  <button className={styles.actionBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                      <polyline points="16 6 12 2 8 6"></polyline>
                      <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                  </button>
                </div>
                <p className={styles.callToAction}>
                  Agende agora sua maquiagem e penteado ou produção de noiva entre em contato hj mesmo!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaDeFotos;