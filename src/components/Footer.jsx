import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <p>Java Developer · Spring Boot · CSE</p>
        </div>

        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={17} />
          </a>
        </div>

        <p className="footer-copy">© {year} {profile.shortName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
