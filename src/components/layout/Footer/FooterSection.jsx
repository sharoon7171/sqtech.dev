import { motion } from 'framer-motion';

const FooterSection = ({ 
  children, 
  delay = 0, 
  className = '',
  ...props 
}) => {
  return (
    <motion.div 
      className={`footer-section ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FooterSection;

