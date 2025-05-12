import { Gallery } from '../../components/Gallery/Gallery';
import './Home.css';

// Exemplo de dados - substitua pelas suas mandalas
const mandalas = [
  {
    id: 1,
    title: 'Mandalas Florais',
    imageUrl: '/src/assets/mandalas/mandala1.jpg',
    price: 50.0,
    description: 'Mandala inspirada em flores da primavera'
  },
  // Adicione mais mandalas aqui
];

export const Home = () => {
  return (
    <main>
      <h1>Minhas Mandalas Artísticas</h1>
      <Gallery mandalas={mandalas} />
    </main>
  );
};