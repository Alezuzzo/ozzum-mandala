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
        { id: 1, title: 'Mandala dos Elementos', imageUrl: '/public/icefire.jpeg', category: 'Florais', description: 'Energia vibrante para motivação e força.' },
        { id: 2, title: 'Mandala Yin Yang', imageUrl: '/public/yngang.jpeg', category: 'Geométricas', description: 'Calma e serenidade para momentos de introspecção.' },
        { id: 3, title: 'Lótus Celestial', imageUrl: '/public/lotus.jpeg', category: 'Florais', description: 'Conexão com a natureza e a beleza da vida.' },
        { id: 4, title: 'Nossa Senhora', imageUrl: '/public/senhora.jpeg', category: 'Intuitivas', description: 'Clareza mental, otimismo e prosperidade.' },
        { id: 5, title: 'Mandala em Pontilhismo', imageUrl: '/public/pontilhismo.jpeg', category: 'Geométricas', description: 'Intuição, mistério e conexão com o universo.' },
        { id: 6, title: 'Mandala dos Elementos', imageUrl: '/public/icefire.jpeg', category: 'Florais', description: 'Estabilidade, segurança e sentimento de pertença.' },
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
