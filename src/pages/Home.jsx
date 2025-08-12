import HeroSection from '../components/layout/HeroSection';
import StatsSection from '../components/layout/StatsSection';
import TechnicalSection from '../components/layout/TechnicalSection';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <StatsSection />
      <TechnicalSection />
    </div>
  );
};

export default Home;
