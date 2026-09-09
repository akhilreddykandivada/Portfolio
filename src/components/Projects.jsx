import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, X } from "lucide-react";
import { projectFilters, projects } from "../data/portfolioData.js";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(null);
  const closeButtonRef = useRef(null);
  const scrollYRef = useRef(0);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) || null,
    [selectedId]
  );

  useEffect(() => {
    if (!selectedProject) return undefined;

    scrollYRef.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedId(null);
    };

    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [selectedProject]);

  const openProject = (id) => {
    setSelectedId(id);
  };

  const closeProject = () => {
    setSelectedId(null);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Work</p>
          <h2>Projects</h2>
          <p className="section-lead">
            Featured work in Java, Spring Boot, secure APIs, and practical applications.
          </p>
        </motion.div>

        <div className="filter-row" role="tablist" aria-label="Filter projects">
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={`filter-btn ${filter === item ? "active" : ""}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                className={`project-card ${project.featured ? "featured" : ""}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.28 }}
              >
                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>

                <h3>{project.name}</h3>
                <p>{project.shortDescription}</p>

                <div className="tag-list">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                  {project.technologies.length > 5 ? (
                    <span>+{project.technologies.length - 5}</span>
                  ) : null}
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => openProject(project.id)}
                  >
                    View Project
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="project-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-overlay-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="project-overlay-backdrop"
              aria-label="Close project details"
              onClick={closeProject}
            />

            <motion.div
              className="project-overlay-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
            >
              <div className="project-overlay-toolbar">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeProject}
                  ref={closeButtonRef}
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  Back
                </button>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={closeProject}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="project-overlay-content">
                <div className="project-top">
                  <span className="project-category">{selectedProject.category}</span>
                  {selectedProject.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>

                <h2 id="project-overlay-title">{selectedProject.name}</h2>
                <p className="project-overlay-lead">{selectedProject.shortDescription}</p>

                <div className="project-block">
                  <h4>Problem solved</h4>
                  <p>{selectedProject.problemSolved}</p>
                </div>

                <div className="project-block">
                  <h4>Key features</h4>
                  <ul>
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-block">
                  <h4>My contribution</h4>
                  <p>{selectedProject.contribution}</p>
                </div>

                <div className="project-block">
                  <h4>Technologies</h4>
                  <div className="tag-list">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <a
                    className="btn btn-secondary"
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} aria-hidden="true" />
                    GitHub
                  </a>
                  {selectedProject.liveDemo ? (
                    <a
                      className="btn btn-primary"
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Live Demo
                    </a>
                  ) : null}
                  <button type="button" className="btn btn-primary" onClick={closeProject}>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
