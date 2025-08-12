import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigationItems, ctaButton } from '../../../constants/navigation';
import { useActiveLink } from '../../../hooks/useActiveLink';

const MobileMenu = ({ isOpen }) => {
  const { isActiveLink } = useActiveLink();

  if (!isOpen) return null;

  return (
    <motion.div
      className="mobile-menu"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mobile-menu-content">
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-link ${isActiveLink(item.path, item.exact) ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
        
        <div className="mobile-cta">
          <Link to={ctaButton.path} className="btn btn-primary">
            {ctaButton.label}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
