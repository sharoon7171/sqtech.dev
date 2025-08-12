import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';
import DesktopMenu from './Navigation/DesktopMenu';
import MobileMenu from './Navigation/MobileMenu';
import { useScrolled } from '../../hooks/useScrolled';
import { closeMobileMenuOnResize } from '../../utils/navigation';
import '../../styles/components/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrolled(50);

  useEffect(() => {
    return closeMobileMenuOnResize(setIsMobileMenuOpen);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <Logo variant="header" />
        </div>

        {/* Desktop Navigation */}
        <DesktopMenu />

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        <MobileMenu isOpen={isMobileMenuOpen} />
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
