import './Work.css';
import { useProjects } from '../hooks/useContent';
import sectionIMG2 from '../assets/Sections/sectionIMG2.png';

const thumbnailModules = import.meta.glob('../assets/Work/*/thumb.png', { eager: true });

const getThumbnailSrc = (folder) => {
  const path = `../assets/Work/${folder}/thumb.png`;
  return thumbnailModules[path]?.default || '';
};

export default function Work() {
  const projects = useProjects();

  return (
    <section id="work" className="section section--primary-lightest">
      <img src={sectionIMG2} alt="Section decoration" className="section-decoration section-decoration--right section-decoration-2" />
      <div className="work-container">
        <h2 className="work-title">My Work</h2>
        
        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.id} className="work-card">
              <a href={`#${project.folder}`} className="work-card-link">
                <img 
                  src={getThumbnailSrc(project.folder)}
                  alt={project.name}
                  className="work-card-image"
                />
                <div className="work-card-overlay">
                  <h3 className="work-card-title">{project.name}</h3>
                  <p className="work-card-desc">{project.shortDesc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
