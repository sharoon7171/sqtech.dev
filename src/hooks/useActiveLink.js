import { useLocation } from 'react-router-dom';

export const useActiveLink = () => {
  const location = useLocation();

  const isActiveLink = (path, exact = false) => {
    if (exact) return location.pathname === path;
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const getActiveLinkClass = (path, exact = false, activeClass = 'active') => {
    return isActiveLink(path, exact) ? activeClass : '';
  };

  const getLinkProps = (path, exact = false) => ({
    className: isActiveLink(path, exact) ? 'active' : '',
    'aria-current': isActiveLink(path, exact) ? 'page' : undefined
  });

  return { 
    isActiveLink, 
    getActiveLinkClass, 
    getLinkProps,
    currentPath: location.pathname 
  };
};
