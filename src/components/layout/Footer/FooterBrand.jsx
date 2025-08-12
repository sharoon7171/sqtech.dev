import Logo from '../../common/Logo';
import { footerData } from '../../../constants/footer';

const FooterBrand = () => {
  return (
    <div className="footer-brand">
      <Logo variant="footer" showLink={false} />
      <p className="footer-description">
        {footerData.brand.description}
      </p>
    </div>
  );
};

export default FooterBrand;

