import { useState, useEffect } from 'react';

/**
 * Custom hook for animated counter effect
 * @param {number|string} end - The target number (can include + symbol)
 * @param {number} duration - Animation duration in milliseconds
 * @param {boolean} inView - Whether the element is in view
 */
export const useCounter = (end, duration = 2000, inView = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    // Extract numeric value from string (e.g., "50+" -> 50)
    const numericEnd = parseInt(end.toString().replace(/[^\d]/g, ''));
    if (isNaN(numericEnd)) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * numericEnd);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);
  
  // Return the formatted count with original suffix
  const suffix = end.toString().replace(/^\d+/, '');
  return count + suffix;
};

export default useCounter;
