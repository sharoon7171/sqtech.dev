import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSkillAnimation } from '../../hooks/useSkillAnimation';
import '../../styles/components/SkillBar.css';

const SkillBar = ({ 
  skill, 
  delay = 0,
  skillIndex = 0,
  className = '',
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const { currentLevel, isAnimating } = useSkillAnimation(skill.level, 1500, isInView, delay);

  return (
    <motion.div 
      ref={ref}
      className={`skill-item ${className}`} 
      initial={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{currentLevel}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          className="skill-progress"
          style={{ width: `${currentLevel}%` }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: delay,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
        />
        <div className="skill-track" />
      </div>
    </motion.div>
  );
};

export default SkillBar;
