import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
import { achievements } from "../data/portfolioData.js";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Achievements</p>
          <h2>Achievements</h2>
          <p className="section-lead">
            Consistent practice in problem solving and coding platforms.
          </p>
        </motion.div>

        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <motion.article
              key={item.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="achievement-icon" aria-hidden="true">
                <Trophy size={20} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.linkLabel}
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
