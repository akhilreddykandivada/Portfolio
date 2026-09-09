import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolioData.js";

export default function Skills() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Skills</p>
          <h2>Technical Skills</h2>
          <p className="section-lead">
            A focused toolkit centered on Java and backend development.
          </p>
        </motion.div>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.04 }}
            >
              <h3>{category.title}</h3>
              <div className="skills-badges" role="list">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skill-badge" role="listitem">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
