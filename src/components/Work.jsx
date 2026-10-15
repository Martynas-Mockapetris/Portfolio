import { useState } from 'react';
import './Work.css';
import { useProjects } from '../hooks/useContent';
import WorkDetail from './WorkDetail';
import sectionIMG2 from '../assets/Sections/sectionIMG2.png';

const thumbnailModules = import.meta.glob('../assets/Work/**/*.{jpg,png}', { eager: true });

const getThumbnailSrc = (folder, filename) => {
  const path = `../assets/Work/${folder}/${filename}`;
  return thumbnailModules[path]?.default || '';
};

export default function Work() {
  const projects = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToGallery = () => {
    setSelectedProject(null);
    // Use anchor navigation
    window.location.hash = '#work';
  };

  return (
    <section id="work" className="section section--light">
      <img src={sectionIMG2} alt="Section decoration" className="section-decoration section-decoration--right section-decoration-2" />
      <div className="work-container">
        {selectedProject ?
          <WorkDetail project={selectedProject} onBack={handleBackToGallery} />
        : <>
            <h2 className="work-title">My Work</h2>

            <div className="work-grid">
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
