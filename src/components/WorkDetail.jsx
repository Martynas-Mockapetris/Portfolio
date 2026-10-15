import { useState } from 'react';
import './WorkDetail.css';

const galleryModules = import.meta.glob('../assets/Work/**/*.{jpg,png}', { eager: true });

const getGalleryImage = (folder, filename) => {
  const path = `../assets/Work/${folder}/${filename}`;
  return galleryModules[path]?.default || '';
};

export default function WorkDetail({ project, onBack }) {
  const [isClosing, setIsClosing] = useState(false);

  if (!project) return null;

  const images = project.gallery || [];

  const handleBackClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      onBack();
    }, 400); // Match the fade-out animation duration
  };

  const scrollToTop = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      const headerElement = workSection.querySelector('.work-detail-header');
      if (headerElement) {
        headerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`work-detail ${isClosing ? 'work-detail--closing' : ''}`}>
      {/* Title with back button */}
      <div className="work-detail-header">
        <button className="work-detail-back" onClick={handleBackClick} aria-label="Back to gallery" title="Back to gallery">
          <svg version="1.1" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.9,55.9c-0.4,0.4-0.9,0.6-1.4,0.6s-1-0.2-1.4-0.6L26.1,39c-0.8-0.8-0.8-2,0-2.8l16.1-16.1 c0.8-0.8,2.1-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8L30.4,37.6l15.5,15.5C46.6,53.9,46.6,55.1,45.9,55.9z M76,38c0,21-17,38-38,38 S0,59,0,38S17,0,38,0S76,17,76,38z M72,38C72,19.2,56.8,4,38,4S4,19.2,4,38s15.2,34,34,34S72,56.8,72,38z"/>
          </svg>
          <span>Back to Gallery</span>
        </button>
        <h2 className="work-detail-title">{project.name}</h2>
      </div>

      {/* Content alternating with images */}
      <div className="work-detail-content">
        {/* Image 2 (first shown) */}
        {images.length > 1 && (
          <img
            src={getGalleryImage(project.folder, images[1])}
            alt={`${project.name} - Image 1`}
            className="work-detail-image"
          />
        )}

        {/* Description */}
        <div className="work-detail-section">
          <h3 className="work-detail-section-title">Description</h3>
          <p className="work-detail-text">{project.description}</p>
        </div>

        {/* Image 3 */}
        {images.length > 2 && (
          <img
            src={getGalleryImage(project.folder, images[2])}
            alt={`${project.name} - Image 2`}
            className="work-detail-image"
          />
        )}

        {/* Challenge */}
        <div className="work-detail-section">
          <h3 className="work-detail-section-title">Challenge</h3>
          <p className="work-detail-text">{project.challenge}</p>
        </div>

        {/* Image 1 (third shown - was first) */}
        {images.length > 0 && (
          <img
            src={getGalleryImage(project.folder, images[0])}
            alt={`${project.name} - Image 3`}
            className="work-detail-image"
          />
        )}

        {/* Results */}
        <div className="work-detail-section">
          <h3 className="work-detail-section-title">Results</h3>
          <p className="work-detail-text">{project.results}</p>
        </div>

        {/* Back to Top Button */}
        <div className="work-detail-footer">
          <button className="work-detail-back-top" onClick={scrollToTop} aria-label="Back to top" title="Back to top">
            <svg version="1.1" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.9,55.9c-0.4,0.4-0.9,0.6-1.4,0.6s-1-0.2-1.4-0.6L26.1,39c-0.8-0.8-0.8-2,0-2.8l16.1-16.1 c0.8-0.8,2.1-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8L30.4,37.6l15.5,15.5C46.6,53.9,46.6,55.1,45.9,55.9z M76,38c0,21-17,38-38,38 S0,59,0,38S17,0,38,0S76,17,76,38z M72,38C72,19.2,56.8,4,38,4S4,19.2,4,38s15.2,34,34,34S72,56.8,72,38z"/>
            </svg>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </div>
  );
}
