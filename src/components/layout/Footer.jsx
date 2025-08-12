import FooterSection from './Footer/FooterSection';
import FooterBrand from './Footer/FooterBrand';
import FooterLinks from './Footer/FooterLinks';
import FooterContact from './Footer/FooterContact';
import FooterBottom from './Footer/FooterBottom';
import { footerData } from '../../constants/footer';
import '../../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-gradient"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          {/* Company Brand */}
          <FooterSection delay={0}>
            <FooterBrand />
          </FooterSection>

          {/* Quick Links */}
          <FooterSection delay={0.1}>
            <FooterLinks 
              title={footerData.quickLinks.title}
              links={footerData.quickLinks.links}
              isClickable={true}
            />
          </FooterSection>

          {/* Services */}
          <FooterSection delay={0.2}>
            <FooterLinks 
              title={footerData.services.title}
              links={footerData.services.items}
              isClickable={false}
            />
          </FooterSection>

          {/* Contact Info */}
          <FooterSection delay={0.3}>
            <FooterContact />
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
