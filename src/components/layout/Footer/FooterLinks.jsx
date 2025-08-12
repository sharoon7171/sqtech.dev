import { Link } from 'react-router-dom';

const FooterLinks = ({ 
  title, 
  links = [], 
  isClickable = true 
}) => {
  return (
    <>
      <h4 className="footer-heading">{title}</h4>
      <ul className="footer-links">
        {links.map((item, index) => (
          <li key={item.to || item || index}>
            {isClickable && item.to ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span>{item.label || item}</span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinks;

