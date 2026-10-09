import content from '../data/content.json';

/**
 * Custom hook to access portfolio content
 *
 * Usage in components:
 * const { skills, projects, aboutMe } = useContent();
 *
 * @returns {Object} Content object with all portfolio data
 */
export function useContent() {
  return content;
}

/**
 * Helper hook to get specific skill category
 * @param {string} category - 'tools', 'frontend', or 'backend'
 * @returns {Array} Array of skills in that category
 */
export function useSkills(category) {
  return content.skills[category] || [];
}

/**
 * Helper hook to get all projects
 * @returns {Array} Array of all projects
 */
export function useProjects() {
  return content.projects;
}

/**
 * Helper hook to get testimonials
 * @returns {Array} Array of testimonials
 */
export function useTestimonials() {
  return content.testimonials;
}
