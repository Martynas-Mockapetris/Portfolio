import './AboutMe.css';
import { useAboutMe, useSocialLinks } from '../hooks/useContent';

export default function AboutMe() {
  const aboutMe = useAboutMe();
  const socialLinks = useSocialLinks();

  return (
    <section id="about-me" className="section section--light">
      <div className="section-container">
        {/* Left: Avatar */}
        <div className="about-me-avatar">
          <img src={`/Portfolio/src/assets/${aboutMe.avatar}`} alt="Martynas Avatar" className="avatar-image" />
        </div>

        {/* Right: Bio & Social Links */}
        <div className="about-me-content">
          <h2 className="about-me-title">About Me</h2>

          <p className="about-me-blurb">{aboutMe.blurb}</p>

          {/* Social Links */}
          <div className="social-links">
            {Object.entries(socialLinks).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="social-link" title={platform}>
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
