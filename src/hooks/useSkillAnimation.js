import { useState, useEffect } from 'react';

/**
 * Custom hook for incremental skill bar animation
 * @param {number} targetLevel - The target percentage (0-100)
 * @param {number} duration - Animation duration in milliseconds
 * @param {boolean} inView - Whether the element is in view
 * @param {number} delay - Delay before starting animation
 */
export const useSkillAnimation = (targetLevel, duration = 1500, inView = false, delay = 0) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (!inView) return;
    
    const startAnimation = () => {
      setIsAnimating(true);
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Faster, smoother easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const level = Math.floor(easeOutQuart * targetLevel);
        
        setCurrentLevel(level);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCurrentLevel(targetLevel); // Ensure we hit the exact target
          setIsAnimating(false);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    };
    
    const timeoutId = setTimeout(startAnimation, delay);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [targetLevel, duration, inView, delay]);
  
  return { currentLevel, isAnimating };
};

export default useSkillAnimation;
