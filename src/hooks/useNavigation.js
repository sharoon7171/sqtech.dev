import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from './useScrolled';

export const useNavigation = () => {
  const location = useLocation();
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    // Scroll to top when location changes
    scrollToTop();
  }, [location.pathname, scrollToTop]);

  return { scrollToTop };
};
