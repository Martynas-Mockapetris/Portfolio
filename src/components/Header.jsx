import './Header.css';
import { useSiteSettings, useNavigation } from '../hooks/useContent';

export default function Header() {
  const siteSettings = useSiteSettings();
  const navigation = useNavigation();

  const handleScrollToSection = (url) => {
    const sectionId = url.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="header" className="header">
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
