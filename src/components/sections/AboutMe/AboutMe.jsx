import { useState, useRef, useEffect } from 'react';
import Tabs from '../../common/Tabs/Tabs';
import IconButton from '../../common/IconButton/IconButton';
import './AboutMe.css';
import { useAboutMe, useSocialLinks, useSkills, useSectionDecorations } from '../../../hooks/useContent';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

// Dynamic imports for section decorations
const sectionImages = import.meta.glob('../../../assets/Sections/*.png', { eager: true });

const getSectionImage = (filename) => {
  const path = `../../../assets/Sections/${filename}`;
  return sectionImages[path]?.default || '';
};

const iconMap = {
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  github: FaGithub
};

export default function AboutMe() {
  const aboutMe = useAboutMe();
  const socialLinks = useSocialLinks();
  const decorations = useSectionDecorations();
  const toolsSkills = useSkills('tools');
  const frontendSkills = useSkills('frontend');
  const backendSkills = useSkills('backend');

  const sectionImage = getSectionImage(decorations.aboutMe);
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const skillsSection = skillsRef.current;

    if (!skillsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0
      }
    );

    observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-me" className="section section--light">
      <img src={sectionImage} alt="Section decoration" className="section-decoration section-decoration-1" />
      <div className="about-me-container">
        {/* Title */}
        <h2 className="about-me-title">About Me</h2>

        {/* Avatar */}
        <div className="about-me-avatar">
          <img src={`/Portfolio/src/assets/${aboutMe.avatar}`} alt="Martynas Avatar" className="about-me-avatar-image" />
        </div>

        {/* Description Container (for desktop layout) */}
        <div className="about-me-description-wrapper">
          {/* Description */}
          <p className="about-me-blurb">{aboutMe.blurb}</p>

          {/* Social Links - Desktop Version (inside description) */}
          <div className="social-links social-links--desktop">
            {Object.entries(socialLinks).map(([platform, url]) => {
              const IconComponent = iconMap[platform];
              return <IconButton key={platform} icon={IconComponent} href={url} title={platform} size={24} variant="icon" />;
            })}
          </div>
        </div>

        {/* Social Links - Mobile Version (after description) */}
        <div className="social-links social-links--mobile">
          {Object.entries(socialLinks).map(([platform, url]) => {
            const IconComponent = iconMap[platform];
            return <IconButton key={platform} icon={IconComponent} href={url} title={platform} size={24} variant="icon" />;
          })}
        </div>
      </div>

      {/* Skills Tabs - Full Width */}
      <div ref={skillsRef} className={`about-me-skills ${skillsVisible ? 'about-me-skills--visible' : ''}`}>
        <h3 className="skills-title">My Skillset</h3>
        <Tabs
          tabs={[
            {
              label: 'Tools',
              content: (
                <div className="skills-list">
                  {toolsSkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">
                          {skill.name} <span className="skill-value">{skill.value}/10</span>
                        </span>
                      </div>
                      <div className="skill-dots">
                        {[...Array(10)].map((_, i) => (
                          <span key={i} className={`skill-dot ${i < skill.value ? 'skill-dot--filled' : ''}`}></span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )
            },
            {
              label: 'Frontend',
              content: (
                <div className="skills-list">
                  {frontendSkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">
                          {skill.name} <span className="skill-value">{skill.value}/10</span>
                        </span>
                      </div>
                      <div className="skill-dots">
                        {[...Array(10)].map((_, i) => (
                          <span key={i} className={`skill-dot ${i < skill.value ? 'skill-dot--filled' : ''}`}></span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )
            },
            {
              label: 'Backend',
              content: (
                <div className="skills-list">
                  {backendSkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">
                          {skill.name} <span className="skill-value">{skill.value}/10</span>
                        </span>
                      </div>
                      <div className="skill-dots">
                        {[...Array(10)].map((_, i) => (
                          <span key={i} className={`skill-dot ${i < skill.value ? 'skill-dot--filled' : ''}`}></span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )
            }
          ]}
        />
      </div>
    </section>
  );
}
