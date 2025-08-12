import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { footerData } from '../../../constants/footer';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div 
      className="footer-bottom"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="footer-bottom-content">
        <div className="footer-copyright">
          <p>&copy; {currentYear} {footerData.legal.companyName}. All rights reserved.</p>
        </div>
        
        <div className="footer-legal">
          {footerData.legal.links.map((link, index) => (
            <div key={link.to} className="footer-legal-item">
              <Link to={link.to}>{link.label}</Link>
              {index < footerData.legal.links.length - 1 && (
                <span className="separator">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FooterBottom;

