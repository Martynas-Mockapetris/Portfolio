// Color Palette
export const colors = {
  // Primary Palette (Your chosen colors)
  primary: {
    darkest: '#27374D', // Deep Navy - Headers, primary text
    dark: '#526D82', // Steel Blue - Secondary elements, borders
    light: '#9DB2BF', // Soft Blue - Light backgrounds, hover states
    lightest: '#DDE6ED' // Pale Blue - Very light backgrounds
  },

  // Semantic Colors (for status messages)
  semantic: {
    success: '#10B981', // Green - Success messages, checkmarks
    error: '#EF4444', // Red - Error messages, warnings
    warning: '#F59E0B', // Amber - Warning messages
    info: '#3B82F6' // Blue - Info messages
  },

  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent'
  },

  // Text Colors
  text: {
    primary: '#27374D', // Dark navy for main text
    secondary: '#526D82', // Steel blue for secondary text
    muted: '#9DB2BF', // Soft blue for muted text
    light: '#DDE6ED' // Pale blue for very light text
  },

  // Background Colors
  background: {
    primary: '#FFFFFF', // Main background
    secondary: '#DDE6ED', // Light background
    tertiary: '#9DB2BF', // Medium background
    dark: '#27374D' // Dark background (for sections)
  },

  // Interactive Colors
  interactive: {
    hover: '#526D82', // Hover state
    active: '#27374D', // Active/Pressed state
    disabled: '#9DB2BF', // Disabled state
    focus: '#3B82F6' // Focus ring (blue from semantic)
  },

  // Gradient (optional - for visual interest)
  gradients: {
    primary: 'linear-gradient(135deg, #27374D 0%, #526D82 100%)',
    light: 'linear-gradient(135deg, #9DB2BF 0%, #DDE6ED 100%)',
    accent: 'linear-gradient(135deg, #526D82 0%, #9DB2BF 100%)'
  }
};

export default colors;
