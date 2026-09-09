# Kandivada Akhil Reddy — Portfolio

A complete, production-ready personal portfolio website for **Kandivada Akhil Reddy**, a Java Developer and Computer Science Engineering student focused on Spring Boot, REST APIs, and backend development.

Built with React + Vite.

## Technologies

- React 19
- Vite
- JavaScript
- CSS
- Framer Motion
- Lucide React
- GitHub public API

## Features

- Sticky responsive navbar with mobile hamburger menu
- Dark / light mode with `localStorage` persistence
- Animated hero section with rotating typing effect
- About, Skills, Projects, Experience, Education, Certifications, Achievements
- Featured Real-Estate Due Diligence Agent project
- Project filtering: All / Full Stack / Backend / Frontend
- GitHub repository section with graceful API error handling
- Resume download button
- Contact form using `mailto:` (no fake backend)
- Scroll reveal animations, hover effects, smooth scrolling, back-to-top
- SEO metadata, Open Graph tags, favicon
- Accessible semantic HTML, focus states, and alt text

## Folder structure

```text
akhil-portfolio/
├── public/
│   ├── profile.png
│   ├── Akhil_Kandivada_Resume.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── GitHub.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## Installation

```bash
npm install
```

## Running locally

```bash
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Build command

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This is a static Vite React app. Deploy the `dist/` folder to:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static host

Example with Vercel:

1. Push the project to GitHub
2. Import the repository in Vercel
3. Use default Vite build settings
4. Deploy

## How to replace the profile photo

1. Replace `public/profile.png` with your photo
2. Keep the same filename, or update `photo` in `src/data/portfolioData.js`
3. Prefer a square image around 800×800 or larger

## How to replace the resume

1. Replace `public/Akhil_Kandivada_Resume.pdf` with your real resume PDF
2. Keep the same filename, or update `resume` in `src/data/portfolioData.js`

## How to update projects

Edit the `projects` array in:

```text
src/data/portfolioData.js
```

You can change:

- name
- category (`Full Stack`, `Backend`, or `Frontend`)
- description fields
- technologies
- features
- contribution
- github / liveDemo links
- featured flag

## How to update skills

Edit the `skillCategories` array in `src/data/portfolioData.js`.

Use honest levels such as:

- `Strong`
- `Working`
- `Basics`

## How to change social links

Update the `profile` object in `src/data/portfolioData.js`:

- email
- phone
- github
- linkedin
- leetcode

## How GitHub integration works

`src/components/GitHub.jsx` fetches public repositories from:

```text
https://api.github.com/users/akhilreddykandivada/repos
```

- No GitHub token is required
- Forks are filtered out
- If the API fails or rate-limits, the section shows a fallback message
- The rest of the portfolio continues to work normally

## How to connect a real contact form

The current contact form uses `mailto:` for a frontend-only solution.

To connect a real service later:

### Option 1 — Formspree

1. Create a Formspree form
2. Point the form `action` to your Formspree endpoint
3. Use `method="POST"`

### Option 2 — EmailJS

1. Create an EmailJS account and email template
2. Install `@emailjs/browser`
3. Send the form values through the EmailJS SDK

### Option 3 — Web3Forms

1. Get an access key from Web3Forms
2. POST the form fields to their endpoint

### Option 4 — Your own backend

1. Create a POST API endpoint
2. Send JSON from the form with `fetch`
3. Handle email delivery server-side

## Notes

- Project GitHub buttons currently point to the GitHub profile because exact repository URLs were not provided
- Replace the placeholder resume PDF with your actual CV before sharing the site publicly
- Replace the monogram profile image with a real professional photo if desired
