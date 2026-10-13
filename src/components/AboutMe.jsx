import Tabs from './common/Tabs';
import IconButton from './common/IconButton';
import './AboutMe.css';
import { useAboutMe, useSocialLinks, useSkills } from '../hooks/useContent';
import sectionIMG from '../assets/Sections/sectionIMG.png';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const iconMap = {
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  github: FaGithub
};

export default function AboutMe() {
  const aboutMe = useAboutMe();
  const socialLinks = useSocialLinks();
  const toolsSkills = useSkills('tools');
  const frontendSkills = useSkills('frontend');
  const backendSkills = useSkills('backend');

  return (
    <section id="about-me" className="section section--light">
      <img src={sectionIMG} alt="Section decoration" className="section-decoration section-decoration--left section-decoration-1" />
      <div className="about-me-container">
        {/* Left: Avatar */}
        <div className="about-me-avatar">
          <img src={`/Portfolio/src/assets/${aboutMe.avatar}`} alt="Martynas Avatar" className="about-me-avatar-image" />
        </div>

        {/* Right: Bio and Social Links */}
        <div className="about-me-right">
          <div className="about-me-content">
            <h2 className="about-me-title">About Me</h2>
            <p className="about-me-blurb">{aboutMe.blurb}</p>

            {/* Social Links */}
            <div className="social-links">
              {Object.entries(socialLinks).map(([platform, url]) => {
                const IconComponent = iconMap[platform];
                return (
                  <IconButton 
                    key={platform}
                    icon={IconComponent}
                    href={url}
                    title={platform}
                    size={24}
                    variant="icon"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Tabs - Full Width */}
      <div className="about-me-skills">
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
                        <span className="skill-name">{skill.name} <span className="skill-value">{skill.value}/10</span></span>
                      </div>
                      <div className="skill-dots">
                        {[...Array(10)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`skill-dot ${i < skill.value ? 'skill-dot--filled' : ''}`}
                          ></span>
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
                        <span className="skill-name">{skill.name} <span className="skill-value">{skill.value}/10</span></span>
                      </div>
                      <div className="skill-dots">
                        {[...Array(10)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`skill-dot ${i < skill.value ? 'skill-dot--filled' : ''}`}
                          ></span>
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
                        <span className="skill-name">{skill.name} <span className="skill-value">{skill.value}/10</span></span>
                      </div>
                      <div className="skill-dots">
                        {[...Array(10)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`skill-dot ${i < skill.value ? 'skill-dot--filled' : ''}`}
                          ></span>
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
