import { Link } from 'react-router-dom';
import { footerData } from '../../../constants/footer';

const FooterContact = () => {
  return (
    <>
      <h4 className="footer-heading">{footerData.contact.title}</h4>
      <div className="footer-contact">
        <p>{footerData.contact.description}</p>
        <Link to={footerData.contact.ctaLink} className="btn btn-primary">
          <i className={footerData.contact.ctaIcon}></i>
          {footerData.contact.ctaText}
        </Link>
      </div>
    </>
  );
};

export default FooterContact;

