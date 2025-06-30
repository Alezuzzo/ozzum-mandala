import './MandalaCard.css';

// Interface para os dados da mandala
interface Mandala {
  id?: number;
  title?: string;
  imageUrl?: string;
  category?: string;
  description?: string;
}

// Props do componente, incluindo o estado de carregamento
interface MandalaCardProps {
  mandala?: Mandala;
  isLoading: boolean;
}

export const MandalaCard = ({ mandala, isLoading }: MandalaCardProps) => {

  // Se estiver carregando, mostra o esqueleto
  if (isLoading) {
    return (
      <div className="card-skeleton">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-line short"></div>
          <div className="skeleton-line long"></div>
          <div className="skeleton-line medium"></div>
        </div>
      </div>
    );
  }

  // Renderiza o cartão normal se não estiver carregando
  return (
    <div className="mandala-card">
      <div className="card-image-wrapper">
        <img src={mandala?.imageUrl} alt={mandala?.title} className="card-image" />
      </div>
      <div className="card-content">
        <span className="card-category">{mandala?.category}</span>
        <h3 className="card-title">{mandala?.title}</h3>
        <p className="card-description">{mandala?.description}</p>
      </div>
    </div>
  );
};
