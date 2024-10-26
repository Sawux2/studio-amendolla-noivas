// components/GaleriaDeFotos.tsx

import { useState } from 'react';
import Image from 'next/image';
import styles from './GaleriaDeFotos.module.css';

interface Foto {
  url: string;
  categoria: string;
  alt: string;
}

interface GaleriaDeFotosProps {
  fotos: Foto[];
}

const categorias = [
  'Todas',
  'Maquiagem',
  'Penteado',
  'Massagem',
  'Fotos do Studio',
  'Atendimentos a Domicílio',
];

const GaleriaDeFotos: React.FC<GaleriaDeFotosProps> = ({ fotos }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
  const [imagemAtual, setImagemAtual] = useState<number | null>(null);

  // Filtra as fotos com base na categoria selecionada
  const fotosFiltradas = categoriaSelecionada === 'Todas'
    ? fotos
    : fotos.filter((foto) => foto.categoria === categoriaSelecionada);

  // Função para abrir a imagem no modal
  const abrirModal = (index: number) => {
    setImagemAtual(index);
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setImagemAtual(null);
  };

  // Funções para navegar no carrossel
  const imagemAnterior = () => {
    if (imagemAtual !== null) {
      setImagemAtual((imagemAtual - 1 + fotosFiltradas.length) % fotosFiltradas.length);
    }
  };

  const proximaImagem = () => {
    if (imagemAtual !== null) {
      setImagemAtual((imagemAtual + 1) % fotosFiltradas.length);
    }
  };

  return (
    <div className={styles.galeria}>
      {/* Filtros de Categoria */}
      <div className={styles.filtros}>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={categoriaSelecionada === categoria ? styles.filtroAtivo : ''}
            onClick={() => setCategoriaSelecionada(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Galeria de Imagens */}
      <div className={styles.grid}>
        {fotosFiltradas.map((foto, index) => (
          <div key={index} className={styles.item}>
            <Image
              src={foto.url}
              alt={foto.alt}
              width={300}
              height={200}
              className={styles.imagem}
              onClick={() => abrirModal(index)}
            />
          </div>
        ))}
      </div>

      {/* Modal de Carrossel */}
      {imagemAtual !== null && (
        <div className={styles.modal}>
          <button onClick={fecharModal} className={styles.fecharModal}>X</button>
          <button onClick={imagemAnterior} className={styles.anterior}>❮</button>
          <Image
            src={fotosFiltradas[imagemAtual].url}
            alt={fotosFiltradas[imagemAtual].alt}
            width={800}
            height={600}
            className={styles.imagemModal}
          />
          <button onClick={proximaImagem} className={styles.proximo}>❯</button>
        </div>
      )}
    </div>
  );
};

export default GaleriaDeFotos;
