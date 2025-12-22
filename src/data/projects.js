import project1 from "../assets/images/hms.PNG";
import project2 from "../assets/images/eLearning.PNG";
// import project3 from "../assets/images/eLearning.NG";
// import project4 from "../assets/images/project2.jpg";
// import project5 from "../assets/images/project2.jpg";
// import project6 from "../assets/images/project2.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Hospital Management System (Admin)",
    description: "A full-featured and responsive hospital management dashboard with patient, doctor, department, profile management...",
    tech: ["React", "Tailwind CSS", "Framer-Motion", "Chart.js"],
    image: project1,  
    demoLink: "https://hm-sys.netlify.app",
    githubLink: "https://github.com/Aurang-zaib-Rehman/HMS-Admin-Dashboard"
  },
  {
    id: 2,
    title: "eLearning Plateform",
    description: "A responsive multi-page eLearning website built with HTML, CSS, and JavaScript. Includes a homepage and additional pages for courses and contact. Designed to provide an interactive learning experience.",
    tech: ["Html5", "CSS3", "JavaSript"],
    image: project2,
    demoLink: "https://elearningplateform1.netlify.app",
    githubLink: "https://github.com/Aurang-zaib-Rehman/elearning-platform"
  },
  {
    id: 3,
    title: "",
    description: "A responsive multi-page eLearning website built with HTML, CSS, and JavaScript. Includes a homepage and additional pages for courses and contact. Designed to provide an interactive learning experience.",
    tech: ["Html5", "CSS3", "JavaSript"],
    // image: project3,
    demoLink: "https://elearningplateform1.netlify.app",
    githubLink: "https://github.com/Aurang-zaib-Rehman/elearning-platform"
  },
  {
    id: 4,
    title: "Weather Application",
    description: "Real-time weather app with location-based forecasts, beautiful UI, and multiple city support.",
    tech: ["React", "Weather API", "CSS"],
    image: "project4.jpg",
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/zaib/project4"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A modern blogging platform with markdown support, categories, tags, and responsive layouts.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: "project5.jpg",
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/zaib/project5"
  },
  {
    id: 6,
    title: "Landing Page Builder",
    description: "An intuitive tool for creating stunning landing pages with pre-built components and templates.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "project6.jpg",
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/zaib/project6"
  }
];

export const skillsData = [
  { name: "React.js", level: 90, icon: "⚛️" },
  { name: "JavaScript", level: 85, icon: "🟨" },
  { name: "Tailwind CSS", level: 95, icon: "🎨" },
  { name: "HTML", level: 95, icon: "📄" },
  { name: "CSS", level: 90, icon: "🎭" },
  { name: "Git & GitHub", level: 80, icon: "🔧" }
];

export const socialLinks = {
  github: "https://github.com/zaib",
  linkedin: "https://linkedin.com/in/zaib",
  email: "zaib@example.com",
  twitter: "https://twitter.com/zaib"
};