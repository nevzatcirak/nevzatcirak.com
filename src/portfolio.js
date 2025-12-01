/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Nevzat ÇIRAK",
  nickname: "nevzatcirak",
  full_name: "Nevzat ÇIRAK",
  subTitle:
    "Lead Software Engineer specializing in Agentic AI Systems, Identity & Access Management, Java · Go · Rust · React. Building secure, resilient and scalable platforms.",
  resumeLink:
    "https://drive.google.com/file/d/1mNLyvgCiT_xlUWHCjGHbYvhY_V38B4kJ/view?usp=sharing",
  mail: "mailto:nevzatcirak17@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/nevzatcirak",
  linkedin: "https://www.linkedin.com/in/nevzatcirak/",
  gmail: "nevzatcirak17@gmail.com",
  gitlab: "https://gitlab.com/nevzatcirak",
  // facebook: "https://www.facebook.com/nevzatcirak/",
  twitter: "https://twitter.com/nevzatcirak",
  instagram: "https://www.instagram.com/nevzatcirak/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing and building secure, scalable applications end-to-end.",
        "⚡ Developing responsive and modern UIs using ReactJS.",
        "⚡ Building distributed backends, IAM systems and AI Agents using Java, Spring, Go and Rust.",
        "⚡ Smart contract development on CosmWasm and EVM (Rust & Solidity).",
        "⚡ Integrating third-party and cloud-native services (Firebase, AWS, DigitalOcean, Kafka, OPA).",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "GO",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "simple-icons:rust",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architecting microservice-based and zero-trust compatible infrastructures.",
        "⚡ Managing deployments, containerization, secrets, and service mesh.",
        "⚡ Implementing CI/CD pipelines and automated security checks.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Anadolu University",
      subtitle: "Bachelor in Electric And Electronic Engineering",
      logo_path: "anadolu.png",
      alt_name: "Anadolu",
      duration: "2012 - 2017",
      descriptions: [
        "⚡ Studied signal processing, algorithms, embedded systems and network architectures.",
        "⚡ Completed additional courses and independent projects in backend, web and mobile development.",
      ],
      website_link: "https://www.anadolu.edu.tr/",
    },
    {
      title: "Anadolu University",
      subtitle: "Bachelor in Business Administration and Management",
      logo_path: "anadolu.png",
      alt_name: "Anadolu",
      duration: "2014 - 2020",
      descriptions: [
        "⚡ Learned core concepts of finance, strategy, statistics, operations and management.",
      ],
      website_link: "https://www.anadolu.edu.tr/",
    },
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I currently work as a Software Engineer focusing on backend systems, IAM, Zero-Trust architectures and AI-driven microservices. I have completed two internships and contributed to the development of autonomous UAV systems during university.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "HAVELSAN",
          company_url: "https://havelsan.com.tr/",
          logo_path: "havelsan.svg",
          duration: "Oct 2017 - Present",
          location: "Ankara, Türkiye",
          description:
            "Working in the infrastructure and security-focused engineering team. Backend experience includes Go, Spring Boot, Spring Data, Spring AI, OAuth2, Kafka, OPA and Java. Frontend development with React. Contributing to IAM, zero-trust, policy enforcement and distributed systems.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Software Developer",
          company: "Unmanned Aerial Vehicle Team - Anadolu University",
          company_url: "https://www.anadolu.edu.tr/",
          logo_path: "anadolu.png",
          duration: "Sep 2015 - June 2017",
          location: "Eskişehir, Türkiye",
          description:
            "Developed autonomous navigation and mission-oriented flight software as part of the UAV team.",
          color: "#D83B01",
        },
        {
          title: "AuthZEN WG · Shared Signals WG Contributor",
          company: "OpenID Foundation",
          company_url: "https://openid.net/",
          logo_path: "openid.png",
          duration: "2025 - Present",
          location: "Remote",
          description:
            "Contributing to modern identity standards including AuthZEN specifications, Shared Signals Framework (SSF / RISC / CAEP) and identity interoperability efforts under the OpenID Foundation.",
          color: "#0B5FFF"
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I build scalable backend systems, AI agent frameworks, IAM solutions, secure cloud components, NodeJS utilities, and modern React applications. Below is a selection of my projects (not all are public on GitHub).",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nevzatcirak.jpeg",
    description:
      "Feel free to reach out through any of the platforms below. I typically respond quickly, especially regarding AI, IAM, security or engineering collaborations.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I document technical research, AI agent experiments, and IAM/Zero-Trust insights.",
    link: "https://twitter.com/nevzatcirak",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Keep Calm and Carry On",
      url: "",
      description:
        "A platform offering AR-based meditation, cognitive stress-relief tools, mini-games and productivity tracking to help users manage anxiety and focus better.",
      languages: [
        { name: "HTML5", iconifyClass: "logos-html-5" },
        { name: "CSS3", iconifyClass: "logos-css-3" },
        { name: "NodeJs", iconifyClass: "logos-nodejs" },
        { name: "Augmented Reality", iconifyClass: "bi:badge-ar" },
      ],
      links: [
        { name: "Github", url: "", iconifyClass: "ri:github-fill" },
        { name: "Devpost", url: "", iconifyClass: "fluent:window-dev-edit-20-filled" },
        { name: "Live Demo", url: "", iconifyClass: "mdi:web" },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
