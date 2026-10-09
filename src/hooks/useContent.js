import content from '../data/content.json';

/**
 * Custom hook to access ALL portfolio content
 *
 * @returns {Object} Content object with all portfolio data
 */
export function useContent() {
  return content;
}

/**
 * Hook to access site settings (title, email, etc.)
 *
 * @returns {Object} Site settings
 */
export function useSiteSettings() {
  return content.siteSettings;
}

/**
 * Hook to access navigation menu
 *
 * @returns {Array} Navigation items
 */
export function useNavigation() {
  return content.navigation;
}

/**
 * Hook to access about me section
 *
 * @returns {Object} About me data (avatar, blurb)
 */
export function useAboutMe() {
  return content.aboutMe;
}

/**
 * Hook to access specific skill category
 * @param {string} category - 'tools', 'frontend', or 'backend'
 * @returns {Array} Array of skills in that category
 */
export function useSkills(category) {
  return content.skills[category] || [];
}

/**
 * Hook to get all skills (all categories)
 *
 * @returns {Object} All skills organized by category
 */
export function useAllSkills() {
  return content.skills;
}

/**
 * Hook to access all projects
 *
 * @returns {Array} Array of all projects
 */
export function useProjects() {
  return content.projects;
}

/**
 * Hook to access testimonials
 *
 * @returns {Array} Array of testimonials
 */
export function useTestimonials() {
  return content.testimonials;
}

/**
 * Hook to access social media links
 *
 * @returns {Object} Social links (linkedin, github, facebook, etc.)
 */
export function useSocialLinks() {
  return content.socialLinks;
}

/**
 * Hook to access contact section data
 *
 * @returns {Object} Contact section (form fields, messages, etc.)
 */
export function useContact() {
  return content.contact;
}

/**
 * Hook to access footer section data
 *
 * @returns {Object} Footer data (copyright, links, etc.)
 */
export function useFooter() {
  return content.footer;
}
