import { useState } from 'react';
import './Testimonials.css';
import { useTestimonials } from '../hooks/useContent';

// Import testimonial images
import DianaF from '../assets/Testimonials/DianaF.jpg';
import GermanS from '../assets/Testimonials/GermanS.jpg';
import LaimaP from '../assets/Testimonials/LaimaP.jpg';
import PremK from '../assets/Testimonials/PremK.jpg';

// Import logos
import CBS from '../assets/Testimonials/CBS.png';
import AAU from '../assets/Testimonials/AAU.png';
import VivaBatai from '../assets/Testimonials/VivaBatai.png';
import CPHU from '../assets/Testimonials/CPHU.png';

const imageMap = {
  'DianaF.jpg': DianaF,
  'GermanS.jpg': GermanS,
  'LaimaP.jpg': LaimaP,
  'PremK.jpg': PremK,
};

const logoMap = {
  'CBS.png': CBS,
  'AAU.png': AAU,
  'VivaBatai.png': VivaBatai,
  'CPHU.png': CPHU,
};

export default function Testimonials() {
  const testimonials = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];
  const avatarSrc = imageMap[current.avatar];
  const logoSrc = logoMap[current.logo];

  return (
    <section id="clients" className="section section--light">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What People Say</h2>
        
        <div className="testimonials-carousel">
          <button className="carousel-button carousel-button--prev" onClick={goToPrevious}>
            &#10094;
          </button>

          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <img 
                src={avatarSrc}
                alt={current.name}
                className="avatar-image"
              />
            </div>

            <div className="testimonial-content">
              <p className="testimonial-quote">{current.quote}</p>
              
              <div className="testimonial-footer">
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{current.name}</h3>
                  <p className="testimonial-title">{current.title}</p>
                </div>
                
                <div className="testimonial-logo">
                  <img 
                    src={logoSrc}
                    alt={current.name}
                    className="logo-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-button carousel-button--next" onClick={goToNext}>
            &#10095;
          </button>
        </div>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? 'indicator--active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
