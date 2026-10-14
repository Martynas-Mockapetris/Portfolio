import { useState } from 'react';
import './Footer.css';
import { useSocialLinks } from '../hooks/useContent';
import IconButton from './common/IconButton';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const iconMap = {
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  github: FaGithub
};

const navigationLinks = [
  { name: '↑ Top', url: '#top', isTop: true },
  { name: 'About Me', url: '#about-me' },
  { name: 'Work', url: '#work' },
  { name: 'Testimonials', url: '#clients' },
  { name: 'Contact', url: '#contact' }
];

export default function Footer() {
  const socialLinks = useSocialLinks();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Copyright + Social Icons */}
        <div className="footer-section footer-left">
          <div className="footer-left-content">
            <p className="footer-copyright">
              © {currentYear} Martynas Mockapetris. All rights reserved.
            </p>
            <div className="footer-social-links">
              {Object.entries(socialLinks).map(([platform, url]) => {
                const IconComponent = iconMap[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    title={platform}
                  >
                    {IconComponent && <IconComponent size={24} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Menu Links + Scroll to Top */}
        <div className="footer-section footer-right">
          <nav className="footer-nav">
            {navigationLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                className="footer-nav-link"
                onClick={(e) => link.isTop ? (e.preventDefault(), scrollToTop()) : null}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
