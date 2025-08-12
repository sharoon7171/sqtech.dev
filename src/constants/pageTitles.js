// Page title configuration for dynamic title updates
export const pageTitles = {
  '/': 'Home',
  '/about': 'About Us', 
  '/services': 'Our Services',
  '/projects': 'Our Projects',
  '/contact': 'Contact Us'
};

// Default title configuration
export const siteConfig = {
  siteName: 'SQ Tech',
  defaultTitle: 'SQ Tech - Professional Development & Digital Marketing Solutions',
  titleSeparator: ' | ',
  description: 'Leading technology company specializing in React development, Chrome Extensions, Web Applications, and Digital Marketing Solutions'
};

/**
 * Get formatted title for a specific route
 * @param {string} pathname - Current route pathname
 * @returns {string} Formatted title
 */
export const getPageTitle = (pathname) => {
  const pageTitle = pageTitles[pathname];
  if (!pageTitle) return siteConfig.defaultTitle;
  
  return `${pageTitle}${siteConfig.titleSeparator}${siteConfig.siteName}`;
};

/**
 * Get just the page name without site branding
 * @param {string} pathname - Current route pathname  
 * @returns {string} Page name only
 */
export const getPageName = (pathname) => {
  return pageTitles[pathname] || 'Page';
};
