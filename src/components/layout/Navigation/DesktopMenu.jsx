import { Link } from 'react-router-dom';
import { navigationItems, ctaButton } from '../../../constants/navigation';
import { useActiveLink } from '../../../hooks/useActiveLink';

const DesktopMenu = () => {
  const { isActiveLink } = useActiveLink();

  return (
    <>
      <div className="navbar-menu">
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`navbar-link ${isActiveLink(item.path, item.exact) ? 'active' : ''}`}
          >
            <i className={item.icon}></i>
            {item.label}
          </Link>
        ))}
      </div>

      <div className="navbar-cta">
        <Link to={ctaButton.path} className="btn btn-primary">
          <i className={ctaButton.icon}></i>
          {ctaButton.label}
        </Link>
      </div>
    </>
  );
};

export default DesktopMenu;
