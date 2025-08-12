import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../../styles/components/StatCard.css';

const StatCard = ({ 
  stat, 
  index = 0,
  className = '',
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const animatedNumber = useCounter(stat.number, 2000 + index * 200, isInView);

  return (
    <motion.div
      ref={ref}
      className={`stat-card ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        bounce: 0.4
      }}
      whileHover={{ 
        y: -8,
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      {...props}
    >
      <motion.div 
        className="stat-icon"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.15 + 0.3,
          type: "spring",
          bounce: 0.6
        }}
      >
        {/* Space reserved for icon - will be added later */}
        <div className="stat-icon-placeholder"></div>
      </motion.div>
      
      <motion.div 
        className="stat-number"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.15 + 0.5 
        }}
      >
        {animatedNumber}
      </motion.div>
      
      <motion.div 
        className="stat-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.15 + 0.7 
        }}
      >
        {stat.label}
      </motion.div>
      
      <motion.div 
        className="stat-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.15 + 0.9 
        }}
      >
        {stat.description}
      </motion.div>
    </motion.div>
  );
};

export default StatCard;
