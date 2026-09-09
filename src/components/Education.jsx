import { motion } from "framer-motion";
import { education } from "../data/portfolioData.js";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Education</p>
          <h2>Academic Background</h2>
          <p className="section-lead">
            Formal education supporting my software engineering foundation.
          </p>
        </motion.div>

        <div className="timeline">
          {education.map((item, index) => (
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
                <h3>{item.degree}</h3>
                <p className="timeline-place">
                  {item.institution} · {item.location}
                </p>
                <p className="education-result">{item.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
