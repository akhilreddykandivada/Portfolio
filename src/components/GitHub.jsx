import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { profile } from "../data/portfolioData.js";

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      setStatus("loading");
      try {
        const response = await fetch(
          `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=8`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("GitHub API unavailable");
        }

        const data = await response.json();
        const publicRepos = data
          .filter((repo) => !repo.fork)
          .slice(0, 6)
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            language: repo.language,
            url: repo.html_url,
          }));

        setRepos(publicRepos);
        setStatus(publicRepos.length ? "ready" : "empty");
      } catch (error) {
        if (error.name !== "AbortError") {
          setRepos([]);
          setStatus("error");
        }
      }
    }

    loadRepos();
    return () => controller.abort();
  }, []);

  return (
    <section id="github" className="section section-muted">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">GitHub</p>
          <h2>Public Repositories</h2>
          <p className="section-lead">
            Live data from the GitHub public API. The rest of the portfolio still works if this request fails.
          </p>
        </motion.div>

        <div className="github-panel">
          <div className="github-intro">
            <Github size={28} aria-hidden="true" />
            <p>
              Explore my public work on{" "}
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/{profile.githubUsername}
              </a>
              .
            </p>
            <a
              className="btn btn-secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="repo-list" aria-live="polite">
            {status === "loading" && (
              <p className="repo-status">Loading repositories…</p>
            )}
            {status === "error" && (
              <p className="repo-status">
                Unable to load repositories right now. Please visit my GitHub profile directly.
              </p>
            )}
            {status === "empty" && (
              <p className="repo-status">No public repositories to display yet.</p>
            )}
            {status === "ready" &&
              repos.map((repo) => (
                <a
                  key={repo.id}
                  className="repo-card"
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <strong>{repo.name}</strong>
                    <p>{repo.description || "No description provided."}</p>
                    {repo.language ? <span>{repo.language}</span> : null}
                  </div>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
