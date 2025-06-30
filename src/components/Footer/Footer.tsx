import './Footer.css';
import { FaHeart } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          Feito com <FaHeart className="heart-icon" /> por Thalles Alexsander
        </p>
      </div>
    </footer>
  );
};
