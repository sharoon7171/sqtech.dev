import { motion } from 'framer-motion';
import TechCard from '../ui/TechCard';
import { technicalCategories, technicalContent } from '../../constants/technical';
import '../../styles/components/TechnicalSection.css';

const TechnicalSection = () => {
  return (
    <section className="technical-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-h2 text-center">{technicalContent.title}</h2>
          <p className="text-lead text-center text-muted">
            {technicalContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="technical-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {technicalCategories.map((category, index) => (
            <TechCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSection;
