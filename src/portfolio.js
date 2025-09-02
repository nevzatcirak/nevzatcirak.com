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
  subTitle: "Lead Full Stack Software Engineer, Java, GO, Rust, React 🧪. AI Agents & Blockchain Enthusiast 🔥",
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
        "⚡ Develop highly interactive Front end / User Interfaces for your web",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend and AI Agents in Spring & JAVA, GO",
        "⚡ Building smart contracts in Rust and Solidity",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
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
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
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
        "⚡ In addition to Electronic courses, I have studied Algorithms and Data Structures, Image Processing, Data Network Architecture and Microprocessor Programming.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
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
        "⚡ I have studied courses like Accounting, Finance, Statistics, Business ethics, Operations and supply chain management, Marketing management etc.",
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
    "I am currently working as Software Engineer. Also, I've completed two internship and I took part in the Unmanned Aerial Systems team at University, which is Developing a mission-focused unmanned air system capable of autonomous\n" +
      "flight and navigation",
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
          description: `In brief, working on Backend and Frontend programming in infra team. As Backend, Using GO, Spring Boot, Spring Data, Spring AI, OAuth2, Apache Kafka, OPA, Docker and Java technologies. As Frontend, Using React framework.`,
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
            "Developing a mission-focused unmanned air system capable of autonomous flight and navigation.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nevzatcirak.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
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
        "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Augmented Reality",
          iconifyClass: "bi:badge-ar",
        },
      ],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url: "",
          iconifyClass: "mdi:web",
        },
      ],
    }
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
