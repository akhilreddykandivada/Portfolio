import { motion } from "framer-motion";
import { experience } from "../data/portfolioData.js";

export default function Experience() {
  return (
    <section id="experience" className="section section-muted">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Experience</p>
          <h2>Internship</h2>
          <p className="section-lead">
            Hands-on learning through structured Java development practice.
          </p>
        </motion.div>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-card">
                <p className="timeline-date">{item.duration}</p>
                <h3>{item.role}</h3>
                <p className="timeline-place">
                  {item.company} · {item.location}
                </p>
                <p>{item.description}</p>
                <div className="tag-list">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
