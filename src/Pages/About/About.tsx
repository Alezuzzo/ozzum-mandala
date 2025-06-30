import { Link } from 'react-router-dom';
import './About.css';
// Recomendo instalar e usar uma biblioteca de ícones como a 'react-icons'
// npm install react-icons
import { FaPaintBrush, FaSeedling, FaHeart } from 'react-icons/fa';

export const About = () => {
  return (
    // Esta div agora usa a classe 'about-page' para o estilo específico
    <div className="about-page">
      
      {/* Seção Principal com foto e texto */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1 className="about-title">Arte que nasce da alma</h1>
          <p className="about-subtitle">
            Olá! Sou a artista por trás deste universo de cores e formas. Meu trabalho é uma busca constante por equilíbrio, harmonia e conexão através da geometria sagrada das mandalas.
          </p>
          <div className="about-main-content">
            <h2>Minha Jornada</h2>
            <p>
              Desde criança, sempre fui fascinada pelos padrões e pela simetria da natureza. Essa paixão me levou a explorar o mundo das mandalas, que se tornaram minha principal forma de expressão e meditação. Cada peça é um reflexo de uma jornada interior.
            </p>
            <h2>Processo Criativo</h2>
            <p>
              Cada mandala é única, feita à mão com intenção e atenção plena aos detalhes. Utilizo uma combinação de técnicas tradicionais e meu estilo pessoal para criar peças que não apenas decoram, mas também vibram e contam uma história.
            </p>
          </div>
        </div>
        <div className="about-hero-image-wrapper">
          <img 
            src="https://placehold.co/600x800/40916c/FFFFFF?text=Foto+Artista" 
            alt="Artista criando uma mandala" 
            className="about-hero-image"
          />
        </div>
      </section>

      {/* Seção de Valores/Pilares */}
      <section className="about-values">
        <div className="value-card">
          <FaPaintBrush className="value-icon" />
          <h3>Feito à Mão</h3>
          <p>Cada traço é único e carrega a energia do trabalho artesanal e dedicado.</p>
        </div>
        <div className="value-card">
          <FaSeedling className="value-icon" />
          <h3>Energia Única</h3>
          <p>As mandalas são criadas com uma intenção específica para harmonizar e inspirar.</p>
        </div>
        <div className="value-card">
          <FaHeart className="value-icon" />
          <h3>Conexão Espiritual</h3>
          <p>Mais que arte, são ferramentas para meditação, foco e autoconhecimento.</p>
        </div>
      </section>
      
      {/* Seção Final de Chamada para Ação (CTA) */}
      <section className="about-cta">
        <h2>Vamos criar algo especial juntos?</h2>
        <p>
          Se você se conectou com minha história e meu trabalho, imagine ter uma mandala criada especialmente para você.
        </p>
        <Link to="/comissions" className="about-cta-button">
          Encomendar minha mandala
        </Link>
      </section>

    </div>
  );
};
