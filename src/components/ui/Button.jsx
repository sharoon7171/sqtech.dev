import { forwardRef } from 'react';
import '../../styles/components/buttons.css';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'base',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
  ...props 
}, ref) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = size !== 'base' ? `btn-${size}` : '';
  
  const buttonClass = [
    baseClass,
    variantClass,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      ref={ref}
      className={buttonClass}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <i className={icon}></i>}
      {children}
      {icon && iconPosition === 'right' && <i className={icon}></i>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
