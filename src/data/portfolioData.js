// ============================================================
// portfolioData.js
// Single source of truth for all content and links on the portfolio
// ============================================================

export const personalInfo = {
  name: "Swetha SenthilKumar",
  firstName: "Swetha SenthilKumar",
  brandName: "Swetha SenthilKumar", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Salem, India",
  phone: "+919384716717",
  emails: {
    primary: "saiswethasalem@gmail.com",
    secondary: "",
  },
  summary:
    "2026 B.Tech graduate and aspiring Java Full Stack Developer with hands-on project experience in Java, Spring, SQL, HTML, CSS, and web development, passionate about building practical software solutions and learning new technologies.",
  resumeUrl: "/swetha.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/SwethaSenthil",
  linkedin: "https://www.linkedin.com/in/swetha-senthilkumar-62b381315",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Swetha SenthilKumar",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "2026 B.Tech graduate building scalable backend systems, robust REST APIs, and modern responsive web applications.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:saiswethasalem@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Swetha,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/swetha.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Swetha SenthilKumar</span>, a motivated B.Tech graduate in Artificial Intelligence and Data Science based in Salem, India, sharpening my skills through the placement training program at TAP Academy. I have a strong interest in Java Full Stack Development and software engineering, enjoying developing practical projects, solving problems, and learning new technologies.`,
  techStack: ["Java", "Spring", "MySQL", "React", "Python"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A disciplined four-step engineering methodology to build reliable, high-performing software.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze project requirements, understand user workflows, and architect scalable data schemas.",
    },
    {
      number: "02",
      title: "Design",
      text: "Model normalized relational databases and craft accessible, clean user interfaces.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Implement robust business logic with Java and Spring, connecting reactive frontend components.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Perform rigorous testing, refine database queries, and release stable, production-ready code.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "React" }],
    },
    {
      title: "Frameworks & Backend",
      skills: [{ name: "Spring" }, { name: "Hibernate" }, { name: "JDBC" }],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL" },
        { name: "SQL" },
        { name: "VS Code" },
        { name: "Eclipse" },
        { name: "MySQL Workbench" },
      ],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "Tap Academy",
    role: "Java Full Stack Developer",
    duration: "Ongoing",
    skills: ["Java", "OOPs", "JDBC", "SQL", "HTML", "CSS", "Spring", "Hibernate"],
    tech: ["Java", "MySQL", "JDBC", "HTML", "CSS"],
  },
  {
    organization: "Codebind Technology",
    role: "Web Development Intern",
    duration: "1 Month",
    skills: [
      "Gained hands-on experience in developing, deploying, and maintaining web applications.",
      "Worked on frontend development and applied industry-standard web development practices.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Work seamlessly with cross-functional peers to achieve shared development milestones.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Deconstruct complex architectural problems into clean, efficient algorithms.",
  },
  {
    name: "Adaptability",
    icon: "🔄",
    desc: "Rapidly embrace new frameworks, libraries, and developer toolchains.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Prioritize critical path engineering tasks to deliver reliable software on schedule.",
  },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Food Ordering System",
    description:
      "A web application that allows users to browse restaurants, view menus, add items to a cart, and place food orders seamlessly.",
    techTags: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "HTML", "CSS"],
    links: {
      github: "https://github.com/SwethaSenthilkumar30/Food-Ordering-System",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "NeuroLink – AI-Based Thought-to-Text Detection System",
    description:
      "An AI-based project that uses EEG signal patterns and machine learning to predict trained cognitive patterns and convert them into text.",
    techTags: ["Python", "NumPy", "HTML", "CSS"],
    links: {
      github:
        "https://github.com/SwethaSenthilkumar30/NeuroLink-AI-Based-Consciousness-Detection-System",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "project-three",
    number: "03",
    badge: null,
    title: "Hospital Management System",
    description:
      "A web-based application designed to manage hospital-related information, patient records, and staff appointments.",
    techTags: ["Java", "HTML", "CSS", "SQL"],
    links: {
      github: "https://github.com/SwethaSenthilkumar30/Hosipital-Management",
      demo: "",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/swetha-senthilkumar-62b381315",
};

export const education = {
  degree: "B.Tech Artificial Intelligence and Data Science",
  institution: "Dhirajlal Gandhi College of Technology",
  cgpa: "2022 – 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · Spring · MySQL · React",
    "Building Reliable Software Solutions",
  ],
  credential: "B.Tech in Artificial Intelligence & Data Science",
  copyright: `© ${new Date().getFullYear()} Swetha SenthilKumar | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

export default personalInfo;
