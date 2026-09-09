import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile, typingRoles } from "../data/portfolioData.js";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingRoles[roleIndex];
    const delay = isDeleting ? 45 : typed === current ? 1400 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting && typed === current) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typed === "") {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % typingRoles.length);
        return;
      }

      const next = isDeleting
        ? current.slice(0, typed.length - 1)
        : current.slice(0, typed.length + 1);
      setTyped(next);
    }, delay);

    return () => clearTimeout(timer);
  }, [typed, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="hero-eyebrow">{profile.status}</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">Java Developer</p>
          <p className="hero-subtitle">Spring Boot, DSA, Java, SQL</p>
          <p className="typed-line" aria-live="polite">
            <span>{typed}</span>
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={scrollToProjects}>
              View Projects
            </button>
            <a className="btn btn-secondary" href={profile.resume} download>
              Download Resume
              <Download size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
              <Code2 size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-media"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
        >
          <img
            src={profile.photo}
            alt="Professional portrait of Kandivada Akhil Reddy"
            width="520"
            height="650"
          />
        </motion.div>
      </div>
    </section>
  );
}
