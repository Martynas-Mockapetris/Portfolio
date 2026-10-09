import './Button.css';

/**
 * Reusable Button Component
 * 
 * Props:
 * @param {string} text - Button text to display
 * @param {function} onClick - Click handler function
 * @param {string} variant - 'primary' | 'secondary' | 'outline' (default: 'primary')
 * @param {boolean} disabled - Disable button (default: false)
 * @param {string} type - 'button' | 'submit' | 'reset' (default: 'button')
 * @param {string} className - Additional CSS classes
 */
export default function Button({
  text = 'Click me',
  onClick = () => {},
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = ''
}) {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}