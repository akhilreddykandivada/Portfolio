import { motion } from "framer-motion";
import { about, profile } from "../data/portfolioData.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">About</p>
          <h2>About Me</h2>
          <p className="section-lead">
            A 4th-year CSE student focused on Java backend development and practical problem solving.
          </p>
        </motion.div>

        <div className="about-layout">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.aside
            className="about-meta"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Java • Spring Boot • REST APIs</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>Open to software development opportunities</strong>
            </div>
            <div>
              <span>Objective</span>
              <strong>{profile.objective}</strong>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
