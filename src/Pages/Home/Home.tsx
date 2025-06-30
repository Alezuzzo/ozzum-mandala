import { useState, useEffect } from 'react';
// Importe o seu componente de Link do react-router-dom se estiver usando
// import { Link } from 'react-router-dom';
import './Home.css';

// Reutilizando a interface que definimos anteriormente
interface Mandala {
  id: string | number;
  title: string;
  imageUrl: string;
  description: string;
  category: string;
}

// Mock de uma função que busca dados. Em um projeto real, isso viria de uma API/Firebase.
const fetchMandalasFromAPI = (): Promise<Mandala[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mandalasFromDB: Mandala[] = [
        {
          id: 1,
          title: 'Mandala Intuitiva',
          imageUrl: 'https://placehold.co/600x600/1e40af/FFFFFF?text=Mandala+1',
          description: 'Criada com foco na energia e intuição do momento.',
          category: 'Intuitivas'
        },
        {
          id: 2,
          title: 'Geometria Curativa',
          imageUrl: 'https://placehold.co/600x600/be185d/FFFFFF?text=Mandala+2',
          description: 'Baseada em padrões da geometria sagrada para harmonização.',
          category: 'Geométricas'
        },
        {
          id: 3,
          title: 'Círculo Floral',
          imageUrl: 'https://placehold.co/600x600/047857/FFFFFF?text=Mandala+3',
          description: 'Inspirada na delicadeza e beleza da natureza.',
          category: 'Florais'
        },
      ];
      resolve(mandalasFromDB);
    }, 1000);
  });
};

export const Home = () => {
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

  // Um componente de "skeleton" para mostrar enquanto as imagens carregam
  const SkeletonCard = () => (
    <div className="mandala-card-skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
    </div>
  );

  return (
    <div className="home-container">
      {/* ===== Seção Hero ===== */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Feito com amor, feitos à mão.</h1>
          <p className="hero-subtitle">
            Transforme sua intenção em uma peça de arte única. Crio mandalas personalizadas que vibram com a sua energia.
          </p>
          {/* Se estiver usando react-router, troque a tag 'a' por 'Link' */}
          <a href="/comissions" className="hero-cta-button">
            Encomende sua Mandala
          </a>
        </div>
      </section>

      {/* ===== Seção de Trabalhos Recentes/Galeria ===== */}
      <section className="featured-section">
        <h2 className="section-title">Trabalhos Recentes</h2>
        <div className="mandala-gallery">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            mandalas.map((mandala) => (
              <div key={mandala.id} className="mandala-card">
                <div className="card-image-wrapper">
                   <img src={mandala.imageUrl} alt={mandala.title} className="card-image" />
                </div>
                <div className="card-content">
                  <span className="card-category">{mandala.category}</span>
                  <h3 className="card-title">{mandala.title}</h3>
                  <p className="card-description">{mandala.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ===== Seção de Chamada para Ação Final (CTA) ===== */}
      <section className="final-cta-section">
        <h2 className="cta-title">Tem uma ideia em mente?</h2>
        <p className="cta-text">
          Vamos conversar e co-criar uma mandala que seja a expressão da sua alma.
        </p>
        <a href="/comissions" className="hero-cta-button inverted">
          Criar minha encomenda
        </a>
      </section>
    </div>
  );
};
