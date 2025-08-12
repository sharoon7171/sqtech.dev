import { Link } from 'react-router-dom';
import { useActiveLink } from '../../hooks/useActiveLink';
import '../../styles/components/links.css';

const NavLink = ({ 
  to, 
  children, 
  exact = false, 
  variant = 'nav', 
  icon,
  className = '',
  ...props 
}) => {
  const { getActiveLinkClass } = useActiveLink();
  
  const linkClass = [
    `${variant}-link`,
    getActiveLinkClass(to, exact),
    className
  ].filter(Boolean).join(' ');

  return (
    <Link
      to={to}
      className={linkClass}
      aria-current={getActiveLinkClass(to, exact) ? 'page' : undefined}
      {...props}
    >
      {icon && <i className={icon}></i>}
      {children}
    </Link>
  );
};

export default NavLink;
