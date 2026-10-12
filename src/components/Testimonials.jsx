import { useState, useEffect } from 'react';
import './Testimonials.css';
import { useTestimonials } from '../hooks/useContent';
import sectionIMG3 from '../assets/Sections/sectionIMG3.png';

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
  'PremK.jpg': PremK
};

const logoMap = {
  'CBS.png': CBS,
  'AAU.png': AAU,
  'VivaBatai.png': VivaBatai,
  'CPHU.png': CPHU
};

export default function Testimonials() {
  const testimonials = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const goToPrevious = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 15000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];
  const avatarSrc = imageMap[current.avatar];
  const logoSrc = logoMap[current.logo];

  return (
    <section id="clients" className="section section--light">
      <img src={sectionIMG3} alt="Section decoration" className="section-decoration section-decoration--left section-decoration-3" />
      <div className="testimonials-container">
        <h2 className="testimonials-title">What People Say</h2>

        <div className="testimonials-carousel">
          <button className="carousel-button carousel-button--prev" onClick={goToPrevious}>
            &#10094;
          </button>

          <div className={`testimonial-card testimonial-card--${direction}`} key={currentIndex}>
            <div className="testimonial-avatar">
              <img src={avatarSrc} alt={current.name} className="avatar-image" />
            </div>

            <div className="testimonial-content">
              <p className="testimonial-quote">
                <span className="quote-mark">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <path
                      fill="currentColor"
                      d="M8.652,14.418c4.84,0,8.763,5.727,8.763,12.791S13.492,40,8.652,40s-8.763-5.727-8.763-12.791l-0.039-1.827C-0.15,11.253,7.697-0.2,17.377-0.2v7.309c-3.344,0-6.488,1.901-8.852,5.352c-0.455,0.664-0.871,1.371-1.245,2.114C7.727,14.472,8.185,14.418,8.652,14.418z M31.187,14.418c4.84,0,8.763,5.727,8.763,12.791S36.026,40,31.187,40s-8.763-5.727-8.763-12.791l-0.039-1.827c0-14.128,7.847-25.582,17.527-25.582v7.309c-3.344,0-6.488,1.901-8.852,5.352c-0.455,0.664-0.871,1.371-1.245,2.114C30.261,14.472,30.719,14.418,31.187,14.418z"
                    />
                  </svg>
                </span>
                {current.quote}
                <span className="end-quote-mark">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <path
                      fill="currentColor"
                      d="M8.652,14.418c4.84,0,8.763,5.727,8.763,12.791S13.492,40,8.652,40s-8.763-5.727-8.763-12.791l-0.039-1.827C-0.15,11.253,7.697-0.2,17.377-0.2v7.309c-3.344,0-6.488,1.901-8.852,5.352c-0.455,0.664-0.871,1.371-1.245,2.114C7.727,14.472,8.185,14.418,8.652,14.418z M31.187,14.418c4.84,0,8.763,5.727,8.763,12.791S36.026,40,31.187,40s-8.763-5.727-8.763-12.791l-0.039-1.827c0-14.128,7.847-25.582,17.527-25.582v7.309c-3.344,0-6.488,1.901-8.852,5.352c-0.455,0.664-0.871,1.371-1.245,2.114C30.261,14.472,30.719,14.418,31.187,14.418z"
                    />
                  </svg>
                </span>
              </p>

              <div className="testimonial-footer">
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{current.name}</h3>
                  <p className="testimonial-title">{current.title}</p>
                </div>

                <div className="testimonial-logo">
                  <img src={logoSrc} alt={current.name} className="logo-image" />
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
            <div key={index} className={`indicator ${index === currentIndex ? 'indicator--active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
          ))}
        </div>
      </div>
    </section>
  );
}
