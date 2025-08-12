import HeroSection from '../components/layout/HeroSection';
import StatsSection from '../components/layout/StatsSection';
import TechnicalSection from '../components/layout/TechnicalSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Home = () => {
  // Set dynamic page title
  useDocumentTitle('Home');

  return (
    <div className="home">
      <HeroSection />
      <StatsSection />
      <TechnicalSection />
    </div>
  );
};

export default Home;
