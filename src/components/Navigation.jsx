import { useState, useEffect, useRef } from 'react';
import './Navigation.css';
import { useNavigation } from '../hooks/useContent';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  const navigation = useNavigation();

  useEffect(() => {
    const header = document.querySelector('#header');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (header) {
      observer.observe(header);
    }

    return () => {
      if (header) {
        observer.unobserve(header);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <nav className="sticky-navigation">
      <div className="sticky-nav-container">
        <ul className="sticky-nav-links">
          {navigation.map((link) => (
            <li key={link.name}>
              <a href={link.url} className="sticky-nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
