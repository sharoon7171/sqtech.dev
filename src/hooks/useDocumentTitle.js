import { useEffect } from 'react';

/**
 * Custom hook to manage document title dynamically
 * @param {string} title - The title for the current page
 * @param {string} siteName - The site name to append (default: "SQ Tech")
 * @param {boolean} appendSiteName - Whether to append site name (default: true)
 */
export const useDocumentTitle = (title, siteName = "SQ Tech", appendSiteName = true) => {
  useEffect(() => {
    if (!title) return;
    
    // Create the final title
    const finalTitle = appendSiteName ? `${title} | ${siteName}` : title;
    
    // Update document title
    document.title = finalTitle;
    
    // Cleanup function to restore original title on unmount
    return () => {
      // Optional: You can set a default title here if needed
      // document.title = `${siteName} - Professional Development & Digital Marketing Solutions`;
    };
  }, [title, siteName, appendSiteName]);
};

/**
 * Hook that automatically sets title based on current route
 * Uses the route configuration to determine the appropriate title
 */
export const useRouteTitle = () => {
  const setTitle = (title, appendSiteName = true) => {
    const siteName = "SQ Tech";
    const finalTitle = appendSiteName ? `${title} | ${siteName}` : title;
    document.title = finalTitle;
  };

  return { setTitle };
};
