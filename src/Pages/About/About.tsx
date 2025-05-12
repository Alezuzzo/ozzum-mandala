import './About.css';

export const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>Sobre Mim e Minhas Mandalas</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Minha Jornada Artística</h2>
            <p>
              Desde criança, sempre fui fascinada pelos padrões geométricos e pela simetria da natureza. 
              Essa paixão me levou a explorar o mundo das mandalas, que se tornou minha forma de expressão 
              artística preferida.
            </p>
            
            <h2>O Processo Criativo</h2>
            <p>
              Cada mandala que crio é única e feita à mão com muita atenção aos detalhes. Uso técnicas 
              tradicionais combinadas com meu estilo pessoal, trabalhando com diferentes materiais como 
              tinta, lápis de cor e até digitalmente.
            </p>
            
            <h2>Significado das Mandalas</h2>
            <p>
              Para mim, as mandalas representam mais do que belos desenhos - são símbolos de equilíbrio, 
              harmonia e conexão espiritual. Cada peça que crio carrega uma intenção especial e positiva.
            </p>
            
            <h2>Comissionamentos</h2>
            <p>
              Aceito encomendas de mandalas personalizadas. Se você tem uma ideia específica em mente ou 
              deseja uma mandala com significado especial, entre em contato para conversarmos sobre seu 
              projeto.
            </p>
          </div>
          
          <div className="about-image">
            <img 
              src="/src/assets/mandalas/artist-working.jpg" 
              alt="Artista criando mandalas" 
            />
            <div className="image-caption">Trabalhando em uma nova mandala</div>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <h2>Entre em Contato</h2>
        <p>
          Quer saber mais sobre meu trabalho ou tem alguma dúvida? Ficarei feliz em conversar!
        </p>
        <div className="contact-methods">
          <a href="mailto:seuemail@exemplo.com" className="contact-link">Email</a>
          <a href="https://instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>
          <a href="https://wa.me/seunumerodewhatsapp" className="contact-link">WhatsApp</a>
        </div>
      </section>
    </div>
  );
};