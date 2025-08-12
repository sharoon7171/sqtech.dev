import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/Logo.css';

const Logo = ({ variant = 'header', showLink = true }) => {
  const LogoContent = () => (
    <div
      className={`logo-text logo-${variant}`}
    >
      <img 
        src="/images/coding-icon.png" 
        alt="SQ Tech Coding Icon" 
        className="logo-icon"
      />
      <div className="logo-text-content">
        <span className="logo-primary">SQ</span>
        <span className="logo-secondary">TECH</span>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link to="/" className="logo-link">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default Logo;
