import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/portfolioData.js";

export default function Certifications() {
  return (
    <section id="certifications" className="section section-muted">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Certifications</p>
          <h2>Certifications</h2>
          <p className="section-lead">
            Courses and programs that complement my academic and project work.
          </p>
        </motion.div>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="cert-icon" aria-hidden="true">
                <Award size={20} />
              </div>
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
