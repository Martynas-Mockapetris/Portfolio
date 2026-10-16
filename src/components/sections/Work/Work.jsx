import { useState, useRef, useEffect } from 'react';
import './Work.css';
import { useProjects, useSectionDecorations } from '../../../hooks/useContent';
import WorkDetail from './WorkDetail';

// Dynamic imports for section decorations
const sectionImages = import.meta.glob('../../../assets/Sections/*.png', { eager: true });

const getSectionImage = (filename) => {
  const path = `../../../assets/Sections/${filename}`;
  return sectionImages[path]?.default || '';
};

// Dynamic imports for project thumbnails
const thumbnailModules = import.meta.glob('../../../assets/Work/**/*.{jpg,png}', { eager: true });

const getThumbnailSrc = (folder, filename) => {
  const path = `../../../assets/Work/${folder}/${filename}`;
  return thumbnailModules[path]?.default || '';
};

export default function Work() {
  const projects = useProjects();
  const decorations = useSectionDecorations();

  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  const sectionImage = getSectionImage(decorations.work);

  // Trigger gallery animation when the Work section enters the viewport
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        // Trigger when the section reaches the central
        // part of the viewport.
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToGallery = () => {
    setSelectedProject(null);
    window.location.hash = '#work';
  };

  return (
    <section id="work" ref={sectionRef} className="section section--light">
      <img src={sectionImage} alt="Section decoration" className="section-decoration section-decoration-2" />

      <div className="work-container">
        {selectedProject ?
          <WorkDetail project={selectedProject} onBack={handleBackToGallery} />
        : <>
            <h2 className="work-title">My Work</h2>

            <div className={`work-grid ${isVisible ? 'work-grid--visible' : ''}`}>
              {projects.map((project) => (
                <div key={project.id} className="work-card" onClick={() => handleCardClick(project)}>
                  <a href="#" className="work-card-link" onClick={(e) => e.preventDefault()}>
                    <img src={getThumbnailSrc(project.folder, project.thumbnail)} alt={project.name} className="work-card-image" />

                    <div className="work-card-overlay">
                      <h3 className="work-card-title">{project.name}</h3>

                      <p className="work-card-desc">{project.shortDesc}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </>
        }
      </div>
    </section>
  );
}
