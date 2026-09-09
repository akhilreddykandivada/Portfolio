export const profile = {
  name: "Kandivada Akhil Reddy",
  shortName: "Akhil Reddy",
  title: "Java Developer | Spring Boot | CSE Student",
  location: "Hyderabad, Telangana, India",
  status: "4th Year B.Tech Computer Science Engineering Student",
  tagline: "Building practical software with Java, Spring Boot and secure REST APIs.",
  email: "akhilkandivada@gmail.com",
  phone: "+91 9014496901",
  github: "https://github.com/akhilreddykandivada",
  githubUsername: "akhilreddykandivada",
  linkedin: "https://www.linkedin.com/in/akhilreddykandivada/",
  leetcode: "https://leetcode.com/u/23h51a05cx/",
  resume: "/Akhil_Kandivada_Resume.pdf",
  photo: "/proffesional_photo.png",
  objective:
    "I am looking for a software development opportunity where I can apply my Java and backend development skills, solve real-world problems, learn from experienced professionals, contribute to the organization, and grow as a software engineer.",
};

export const typingRoles = [
  "Java Developer",
  "Spring Boot Developer",
  "Backend Developer",
  "Software Engineer",
];

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export const about = {
  paragraphs: [
    "I am Kandivada Akhil Reddy, a Computer Science Engineering student with a strong foundation in Java, Object-Oriented Programming, Data Structures and Algorithms, and backend development using Spring Boot and REST APIs.",
    "I enjoy breaking down complex problems into manageable solutions and building practical applications. My involvement in collaborative projects and group activities has helped me improve my communication, teamwork, and problem-solving abilities.",
    "My primary development interest is Java backend development, especially Spring Boot, Spring Security, REST APIs, database integration, and secure application development.",
    "I am currently looking for a software development opportunity where I can apply my technical skills to real-world problems, learn from experienced professionals, contribute to the organization, and continuously grow as a developer.",
  ],
};

export const skillCategories = [
  {
    title: "Programming Skills",
    skills: [
      { name: "Java" },
      { name: "SQL" },
      { name: "React (Basics)" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot" },
      { name: "Spring Security" },
      { name: "REST APIs" },
      { name: "JDBC" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL" },
      { name: "Postgres" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "IntelliJ IDEA" },
      { name: "Postman" },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "DBMS" },
      { name: "Operating Systems" },
    ],
  },
];

export const projectFilters = ["All", "Full Stack", "Backend", "Frontend"];

export const projects = [
  {
    id: "real-estate-due-diligence",
    name: "Real-Estate Due Diligence Agent",
    category: "Full Stack",
    featured: true,
    shortDescription:
      "A centralized platform that helps users collect, validate, and review important property information for real-estate due diligence.",
    problemSolved:
      "Property research is often scattered across multiple sources. This application brings search, validation, history, and related property information into one workflow.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "REST APIs",
      "ATTOM API",
      "Regrid",
    ],
    features: [
      "User registration and login",
      "JWT-based authentication",
      "Role-based access control",
      "Property search and property details",
      "Address validation and property history",
      "Property-related information views",
      "REST APIs with PostgreSQL persistence",
      "Integration with ATTOM and Regrid",
    ],
    contribution:
      "Built the full-stack application structure with Spring Boot backend services, React frontend screens, authentication, and property-data workflows.",
    github: "https://github.com/akhilreddykandivada",
    liveDemo: null,
  },
  {
    id: "security-auth-microservice",
    name: "Security Authentication Microservice",
    category: "Backend",
    featured: false,
    shortDescription:
      "A backend security-focused authentication microservice for stateless login, authorization, and account recovery flows.",
    problemSolved:
      "Applications need a reusable authentication layer for secure login, token handling, OAuth, and role-based access without tightly coupling security logic into every service.",
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "MySQL",
      "JPA/Hibernate",
      "JWT",
      "OAuth2",
    ],
    features: [
      "JWT authentication",
      "Access tokens and refresh tokens",
      "Google OAuth2 login",
      "Email verification",
      "Password reset",
      "Role-based authorization",
      "Secure REST APIs",
      "Stateless authentication",
    ],
    contribution:
      "Implemented authentication and authorization flows with Spring Security, JWT, OAuth2, and MySQL-backed account management.",
    github: "https://github.com/akhilreddykandivada",
    liveDemo: null,
  },
  {
    id: "dailyyou",
    name: "DailyYou",
    category: "Frontend",
    featured: false,
    shortDescription:
      "A habit-tracking web application with streak-based progress monitoring and local browser data persistence.",
    problemSolved:
      "People need a lightweight way to track daily habits and streaks without creating an account or relying on a backend.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    features: [
      "Habit tracking",
      "Streak tracking",
      "Progress monitoring",
      "LocalStorage persistence",
      "Responsive interface",
      "Desktop and mobile support",
    ],
    contribution:
      "Designed and built the frontend interface, streak logic, and LocalStorage-based persistence.",
    github: "https://github.com/akhilreddykandivada",
    liveDemo: null,
  },
];

export const experience = [
  {
    id: "infosys-springboard",
    company: "Infosys Springboard",
    role: "Java Developer Intern",
    duration: "July 2026 – September 2026",
    location: "Remote",
    description:
      "Worked on Java application development and gained hands-on experience with Core Java, Object-Oriented Programming, and Spring Boot. Completed hands-on projects and assessments as part of the Infosys Springboard Java Developer internship program.",
    technologies: ["Java", "Spring Boot", "OOP"],
  },
];

export const education = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "CMR College of Engineering and Technology",
    duration: "September 2023 – July 2027",
    result: "CGPA: 8.05",
    location: "Hyderabad, Telangana",
  },
  {
    id: "intermediate",
    degree: "Intermediate — MPC",
    institution: "NRI Junior College",
    duration: "June 2021 – March 2023",
    result: "Percentage: 98.3%",
    location: "Hyderabad, Telangana",
  },
];

export const certifications = [
  { id: "ibm-spring", title: "Spring Injection", issuer: "IBM" },
  { id: "anthropic-claude", title: "Claude Code 101", issuer: "Anthropic" },
  {
    id: "infosys-dsa",
    title: "Data Structures and Algorithms Using Java",
    issuer: "Infosys",
  },
  {
    id: "walmart-ase",
    title: "Advanced Software Engineering",
    issuer: "Walmart US (Forage)",
  },
];

export const achievements = [
  {
    id: "leetcode",
    title: "250+ problems solved on LeetCode",
    description:
      "Consistent practice across Data Structures and Algorithms to strengthen problem-solving skills.",
    link: "https://leetcode.com/u/23h51a05cx/",
    linkLabel: "View LeetCode profile",
  },
  {
    id: "hackerrank",
    title: "Active on HackerRank",
    description:
      "Participates in coding practice and problem-solving challenges on HackerRank.",
    link: null,
    linkLabel: null,
  },
];
