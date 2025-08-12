import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import '../../styles/components/TechCard.css';

const TechCard = ({ 
  category, 
  index = 0,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      className={`tech-category modern-card ${className}`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.15,
        duration: 0.7,
        type: "spring",
        bounce: 0.3
      }}
      {...props}
    >
      <div className="tech-card-glow"></div>
      
      <motion.div 
        className="tech-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
      >
        <div className="tech-icon-container">
          <i className={`${category.icon} tech-icon`}></i>
          <div className="icon-bg"></div>
        </div>
        <div className="tech-title-section">
          <h3 className="tech-title">{category.title}</h3>
          <div className="tech-subtitle">Professional expertise</div>
        </div>
      </motion.div>
      
      <motion.div 
        className="tech-skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
      >
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={index * 0.15 + 0.6}
            skillIndex={skillIndex}
          />
        ))}
      </motion.div>
      
      <div className="tech-card-border"></div>
    </motion.div>
  );
};

export default TechCard;
