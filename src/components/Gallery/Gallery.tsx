import { useState, useEffect } from 'react';
import { MandalaCard } from '../MandalaCard/MandalaCard';
import './Gallery.css';

// Interface para os dados da mandala
interface Mandala {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
}

// Mock de uma função que busca dados de uma API/banco de dados
const fetchMandalasFromAPI = (): Promise<Mandala[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mandalasFromDB: Mandala[] = [
        { id: 1, title: 'Círculo de Fogo', imageUrl: 'https://placehold.co/600x600/ef4444/FFFFFF?text=Mandala', category: 'Intuitivas', description: 'Energia vibrante para motivação e força.' },
        { id: 2, title: 'Oceano Profundo', imageUrl: 'https://placehold.co/600x600/3b82f6/FFFFFF?text=Mandala', category: 'Geométricas', description: 'Calma e serenidade para momentos de introspecção.' },
        { id: 3, title: 'Jardim Secreto', imageUrl: 'https://placehold.co/600x600/22c55e/FFFFFF?text=Mandala', category: 'Florais', description: 'Conexão com a natureza e a beleza da vida.' },
        { id: 4, title: 'Sol Dourado', imageUrl: 'https://placehold.co/600x600/eab308/FFFFFF?text=Mandala', category: 'Intuitivas', description: 'Clareza mental, otimismo e prosperidade.' },
        { id: 5, title: 'Noite Estrelada', imageUrl: 'https://placehold.co/600x600/6d28d9/FFFFFF?text=Mandala', category: 'Geométricas', description: 'Intuição, mistério e conexão com o universo.' },
        { id: 6, title: 'Raízes da Terra', imageUrl: 'https://placehold.co/600x600/a16207/FFFFFF?text=Mandala', category: 'Florais', description: 'Estabilidade, segurança e sentimento de pertença.' },
      ];
      resolve(mandalasFromDB);
    }, 1500);
  });
};

export const Gallery = () => {
  const [mandalas, setMandalas] = useState<Mandala[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMandalas = async () => {
      setIsLoading(true);
      const data = await fetchMandalasFromAPI();
      setMandalas(data);
      setIsLoading(false);
    };
    loadMandalas();
  }, []);

  return (
    <div className="gallery-page">
      {/* Seção do banner verde */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Explore meus Trabalhos</h1>
          <p>Cada mandala é uma janela para a alma, criada com intenção e carinho.</p>
        </div>
      </section>

      {/* Conteúdo da galeria */}
      <div className="gallery-content-wrapper">
        <div data-testid="cypress-thumbnail" className="gallery-grid">
          {isLoading ? (
            // Mostra 6 "skeletons" de cartões enquanto carrega
            Array.from({ length: 6 }).map((_, index) => <MandalaCard key={index} isLoading={true} />)
          ) : (
            mandalas.map((mandala) => (
              <MandalaCard key={mandala.id} mandala={mandala} isLoading={false} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
