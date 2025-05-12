import { MandalaCard } from '../MandalaCard/MandalaCard';
import './Gallery.css';

interface Mandala {
  id: number;
  title: string;
  imageUrl: string;
  price?: number;
  description?: string;
}

interface GalleryProps {
  mandalas: Mandala[];
}

export const Gallery = ({ mandalas }: GalleryProps) => {
  return (
    <div className="gallery">
      {mandalas.map((mandala) => (
        <MandalaCard key={mandala.id} mandala={mandala} />
      ))}
    </div>
  );
};