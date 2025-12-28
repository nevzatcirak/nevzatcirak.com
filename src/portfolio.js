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
    "Lead Software Engineer | Security & IAM Interoperability Expert | Agentic AI Developer.",
  note: "🤖 Want the deep dive? Chat with my Digital Assistant.",
  resumeLink:
    "https://drive.google.com/file/d/1yLQqIF5NlyD-QvCaCPdYt6kG1Z98b5uv/view?usp=sharing",
  mail: "mailto:nevzatcirak17@gmail.com",
  aiLink: "https://ai.nevzatcirak.com",
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
      title: "Platform & Security",
      fileName: "FullStackImg",
      skills: [
        "⚡ Architecting secure, scalable distributed systems and cloud-native microservices",
        "⚡ Implementing Identity Access Management (IAM) solutions (OAuth2, OpenID Connect, AuthZEN)",
        "⚡ Developing with Java (Spring Boot), Golang, and Rust",
        "⚡ Policy-based authorization using OPA and zero-trust architectures",
        "⚡ Experience with Docker, Kafka, Traefik, PostgreSQL, and MongoDB"
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: { color: "#00ADD8" },
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "simple-icons:rust",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "OpenID",
          fontAwesomeClassname: "simple-icons:openid",
          style: { color: "#F78C40" },
        },
        {
          skillName: "Google Gemini",
          fontAwesomeClassname: "simple-icons:googlegemini",
          style: { color: "#8E75B2" },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "DesignImg",
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
    "Leading backend engineering for secure distributed systems and contributing to global identity standards.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Lead Software Engineer",
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
          title: "AuthZEN WG · Shared Signals WG Contributor",
          company: "OpenID Foundation",
          company_url: "https://openid.net/",
          logo_path: "openid.png",
          duration: "2025 - Present",
          location: "Remote",
          description:
            "Contributing to modern identity standards including AuthZEN specifications, Shared Signals Framework (SSF / RISC / CAEP) and identity interoperability efforts under the OpenID Foundation.",
          color: "#0B5FFF"
        },
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
      id: "1",
      name: "Shared Signals Framework (SSF) Implementation",
      url: "https://github.com/nevzatcirak/SharedSignals",
      description:
        "Implementing the Shared Signal Framework specification as an open source project. Reference implementation for SSF spec supporting modern security signaling patterns.",
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "Security", iconifyClass: "logos-google-security" },
      ],
    },
    {
      id: "2",
      name: "MIP4 Gateway Implementation",
      url: "",
      description:
        "Creating prototypes validating MIP Block 4 baseline specifications and MIP4 Gateway implementation using SOAP and REST Web Services for Multilateral Interoperability Programme.",
      languages: [
        { name: "SOAP/REST", iconifyClass: "logos-web" },
        { name: "Java", iconifyClass: "logos-java" },
      ],
    },
    {
      id: "3",
      name: "Agentic AI Applications",
      url: "https://medium.com/@nevzatcirak",
      description:
        "Personalized digital twin assistant project and Agentic AI applications inspired by Medium articles.",
      languages: [
        { name: "AI", iconifyClass: "logos-tensorflow" },
        { name: "Python", iconifyClass: "logos-python" },
      ],
    },
    {
      id: "4",
      name: "OpenID Connect React Wrapper",
      url: "https://github.com/nevzatcirak",
      description:
        "Developing OpenID Connect React Wrapper Library for Javascript applications.",
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "OIDC", iconifyClass: "logos-openid" },
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
