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
          title: 'Mandala Em Pontilhismo',
          imageUrl: '/public/pontilhismo.jpeg',
          description: 'Uma mandala espiralada vibrante e hipnótica, criada com a técnica de pontilhismo sobre fundo preto. A composição utiliza gotas e pontos multicoloridos dispostos em camadas espirais, representando a harmonia entre movimento, cor e simetria. As cores do arco-íris fluem em perfeita transição, criando um efeito visual dinâmico e meditativo.',
          category: 'Decorativas'
        },
        {
          id: 2,
          title: 'Lótus Celestial',
          imageUrl: '/public/lotus.jpeg',
          description: 'Arte circular com técnica de pontilhismo, centrada em uma delicada flor de lótus branca e dourada que simboliza pureza espiritual e iluminação. A composição é envolvida por pétalas azuis e detalhes rosados, todos dispostos com precisão em camadas circulares, evocando harmonia, equilíbrio e contemplação. A borda com folhas amarelas remete à energia e à vida, encerrando a mandala com elegância e intensidade visual.',
          category: 'Circulares'
        },
        {
          id: 3,
          title: 'Mandala dos Elementos',
          imageUrl: '/public/icefire.jpeg',
          description: 'Esta mandala floral combina duas flores principais que representam os elementos fogo e água, dispostas harmonicamente sobre um fundo claro. Através do pontilhismo colorido e dos padrões orgânicos, a obra transmite equilíbrio entre força, serenidade e expansão. Os detalhes dourados e arabescos interligam os elementos, criando uma peça vibrante e refinada, ideal para ambientes que buscam beleza e energia harmonizadora.',
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
