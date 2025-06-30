import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação dos Componentes de Layout
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

// Importação das Páginas
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Commission } from './Pages/Comissions/Comissions';

// O componente Gallery está na pasta components, como corrigimos anteriormente
import { Gallery } from './components/Gallery/Gallery';

// Importação do CSS Global
import './App.css';

function App() {
  return (
    <Router>
      {/* A Navbar aparece no topo de todas as páginas */}
      <Navbar />
      
      {/* O conteúdo principal do site, onde as páginas são trocadas */}
      <main>
        <Routes>
          {/* Rota para a Página Inicial */}
          <Route path="/" element={<Home />} />

          {/* Rota para a Página Sobre */}
          <Route path="/about" element={<About />} />

          {/* Rota para a Página de Galeria */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Rota para a Página de Encomendas */}
          <Route path="/comissions" element={<Commission />} />
        </Routes>
      </main>

      {/* O Footer aparece no fundo de todas as páginas */}
      <Footer />
    </Router>
  );
}

export default App;
