import './IconButton.css';

export default function IconButton({ 
  icon: Icon, 
  href, 
  title, 
  size = 24,
  variant = 'icon',
  children
}) {
  // For links (social icons)
  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`icon-button icon-button--${variant}`}
        title={title}
      >
        {Icon ? <Icon size={size} /> : children}
      </a>
    );
  }

  // For buttons
  return (
    <button 
      className={`icon-button icon-button--${variant}`}
      title={title}
    >
      {Icon ? <Icon size={size} /> : children}
    </button>
  );
}
