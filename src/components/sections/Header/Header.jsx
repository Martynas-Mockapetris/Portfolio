import './Header.css';
import { useSiteSettings, useNavigation, useSectionDecorations } from '../../../hooks/useContent';

// Dynamic imports for section decorations
const sectionImages = import.meta.glob('../../../assets/Sections/*.jpg', { eager: true });

const getSectionImage = (filename) => {
  const path = `../../../assets/Sections/${filename}`;
  return sectionImages[path]?.default || '';
};

export default function Header() {
  const siteSettings = useSiteSettings();
  const navigation = useNavigation();
  const decorations = useSectionDecorations();
  const sectionImage = getSectionImage(decorations.header);

  const handleScrollToSection = (url) => {
    const sectionId = url.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="header" className="header" style={{ '--header-bg-image': `url(${sectionImage})` }}>
      <div className="header-container">
        {/* Left: Kicker */}
        {Array.isArray(siteSettings.kicker) ? (
          <div className="kicker">
            {siteSettings.kicker.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        ) : (
          <p className="kicker">{siteSettings.kicker}</p>
        )}

        {/* Middle: Navigation Links */}
        <nav className="header-nav">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(item.url);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

