import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Navbar } from './components/Navbar/Navbar';
import { Commission } from './Pages/Comissions/Comissions';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/commission" element={<Commission />} />
      </Routes>
    </Router>
  );
}

export default App;