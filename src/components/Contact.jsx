import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "../data/portfolioData.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Contact</p>
          <h2>Get In Touch</h2>
          <p className="section-lead">
            Open to software development opportunities and conversations about Java backend work.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <Phone size={18} aria-hidden="true" />
              <span>{profile.phone}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <label>
              Name
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                rows="6"
                value={form.message}
                onChange={onChange}
                placeholder="Write your message…"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
              <Send size={16} aria-hidden="true" />
            </button>
            <p className="form-note">
              This form opens your email client with a pre-filled message. No backend is required.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
