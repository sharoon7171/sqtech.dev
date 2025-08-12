import { motion } from 'framer-motion';
import StatCard from '../ui/StatCard';
import { statsData, statsContent } from '../../constants/stats';
import '../../styles/components/StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-h2 text-center">{statsContent.title}</h2>
          <p className="text-lead text-center text-muted">
            {statsContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {statsData.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
