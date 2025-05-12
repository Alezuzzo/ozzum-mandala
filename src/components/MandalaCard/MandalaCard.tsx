import './MandalaCard.css';

// Importe a imagem diretamente (opção recomendada)
import mandalaImage from '../../assets/Mandala.png';

interface Mandala {
  id: number;
  title: string;
  imageUrl?: string; // Tornando opcional já que vamos usar a importação direta
  price?: number;
  description?: string;
}

interface MandalaCardProps {
  mandala: Mandala;
}

export const MandalaCard = ({ mandala }: MandalaCardProps) => {
  return (
    <div className="mandala-card">
      {/* Usando a imagem importada diretamente */}
      <img 
        src={mandala.imageUrl || mandalaImage} // Usa a URL se existir, senão usa a imagem importada
        alt={mandala.title}
        onError={(e) => {
          (e.target as HTMLImageElement).src = mandalaImage; // Fallback para a imagem local
        }}
      />
      <h3>{mandala.title}</h3>
      {mandala.description && <p>{mandala.description}</p>}
      {mandala.price && <span className="price">R$ {mandala.price.toFixed(2)}</span>}
    </div>
  );
};