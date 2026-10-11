import './Work.css';
import { useProjects } from '../hooks/useContent';

export default function Work() {
  const projects = useProjects();

  return (
    <section id="work" className="section section--dark">
      <div className="work-container">
        <h2 className="work-title">My Work</h2>
        
        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.folder} className="work-card">
              <a href={`#${project.folder}`} className="work-card-link">
                <img 
                  src={`/Portfolio/src/assets/thumb.jpg`} 
                  alt={project.name}
                  className="work-card-image"
                />
                <div className="work-card-overlay">
                  <h3 className="work-card-title">{project.name}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
