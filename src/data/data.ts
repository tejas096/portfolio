import profile_img from "../assests/tejas.webp";
import coursestack_project from "../assests/course_stack.png";
import personasite_project from "../assests/Persona.png";
import dsa from "../assests/DSA Java.webp";
import java from "../assests/Java NPTEL.webp";
import dbms from "../assests/DBMS NPTEL.webp";
import javaimg from "../assests/java.webp";
import nextimg from "../assests/next.webp";
import reactimg from "../assests/react.webp";
import typeimg from "../assests/typescript.webp";
import nodeimg from "../assests/node.webp";
import sqlimg from "../assests/sql.webp";
import intern from "../assests/internship.webp";

export interface Project {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  points: string[];
  live_link: string;
  git_link: string;
  skills: string[];
}

interface Skill {
  id: number;
  title: string;
  description: string;
  img: string;
}

export interface Achievement {
  id: number;
  title: string;
  img: string;
  date: string;
  description?: string;
  points: string[];
  skills: string[];
}

export interface Experience {
  id: number;
  company: string;
  img: string;
  duration: string;
  description?: string;
  points: string[];
  skills: string[];
}

interface Data {
  about: {
    name: string;
    profile_img: string;
    description: string;
    main_role: string;
    location: string;
    years_of_exp: number;
    projects_completed: number;
    roles: string[];
    linkdinurl: string;
    giturl: string;
    instaurl: string;
    mail: string;
  };
  projects: Project[];
  skills: Skill[];
  achievements: Achievement[];
  experiences: Experience[];
}

export const data: Data = {
  about: {
    name: "Tejas Jain",
    profile_img: profile_img,
    description:
      "An aspiring full-stack developer exploring the realms of AI & Machine Learning. Passionate about continuous learning, creative problem-solving, and building projects that make an impact.",
    main_role: "Full Stack Developer & DSA Enthusiast",
    location: "Bhopal, India",
    years_of_exp: 1,
    projects_completed: 5,
    roles: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Problem Solver",
      "SQL Developer",
      "AI/ML Enthusiast",
      "Open Source Contributor",
    ],
    linkdinurl: "https://www.linkedin.com/in/tejas096/",
    giturl: "https://github.com/tejas096",
    mail: "mailto:tejasjain096@gmail.com",
    instaurl: "https://www.instagram.com/_tejas_jain/",
  },
  projects: [
    {
      id: 1,
      name: "CourseStack",
      title: "CourseStack - Learning Playlist Platform",
      image: coursestack_project,
      description:
        "Learning resources are scattered across countless YouTube channels, making it difficult to follow a structured path. CourseStack enables users to create, organize, share, and monetize curated learning roadmaps by combining YouTube videos from multiple creators into a single, well-structured playlist.",
      points: [
        "Developed a full-stack platform for creating structured learning playlists using YouTube videos from multiple creators.",
        "Implemented secure authentication with Google OAuth for seamless user onboarding and account management.",
        "Built playlist management features allowing users to create, edit, organize, and categorize learning roadmaps.",
        "Added privacy controls to support public, private, and premium playlists for flexible content sharing.",
        "Integrated Razorpay payment gateway to enable creators to monetize premium learning playlists securely.",
        "Designed a responsive and modern user interface using React, TypeScript, and Tailwind CSS for an intuitive user experience.",
        "Built a scalable backend using Node.js, Express, and MongoDB to efficiently manage users, playlists, and transactions.",
      ],
      live_link: "https://course-stack096.vercel.app/",
      git_link: "https://github.com/tejas096/course-stack",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google OAuth",
        "JWT Authentication",
        "Razorpay",
        "REST APIs",
        "CRUD Operations",
        "Responsive Design",
        "Playlist Management",
        "Access Control",
        "Database Design",
        "Full-Stack Development",
      ],
    },
    {
      id: 2,
      name: "PersonaSite",
      title: "PersonaSite - No-Code Portfolio Builder",
      image: personasite_project,
      description:
        "Creating a professional portfolio website often requires coding, design, and deployment knowledge. PersonaSite simplifies the process by enabling users to build, customize, preview, and publish fully responsive portfolio websites through a no-code interface using reusable templates and dynamic website generation.",
      points: [
        "Developed a full-stack no-code platform that enables users to create and publish professional portfolio websites without writing code.",
        "Implemented secure authentication and user account management for creating, editing, and managing multiple portfolio websites.",
        "Built reusable portfolio templates with dynamic rendering to generate personalized websites from user-provided information.",
        "Implemented extensive customization features, allowing users to edit personal information, projects, skills, experience, education, themes, and social links.",
        "Integrated real-time live preview so users can instantly visualize portfolio changes before publishing.",
        "Enabled one-click portfolio publishing with unique portfolio URLs, making websites instantly accessible online.",
        "Implemented image uploads, resume management, and SEO-friendly portfolio pages to improve discoverability and professional presentation.",
        "Designed fully responsive layouts using Next.js, TypeScript, and Tailwind CSS to provide a seamless experience across desktop, tablet, and mobile devices.",
        "Developed a scalable backend using Node.js and MongoDB to efficiently manage users, templates, portfolios, and published content.",
      ],
      live_link: "https://persona-site096.vercel.app/",
      git_link: "https://github.com/tejas096/persona-site",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "REST APIs",
        "CRUD Operations",
        "Dynamic Rendering",
        "Template System",
        "Live Preview",
        "SEO",
        "Image Upload",
        "Responsive Design",
        "Dynamic Routing",
        "Portfolio Generation",
        "Database Design",
        "Full-Stack Development",
      ],
    },
  ],
  skills: [
    { id: 1, title: "Java", img: javaimg, description: "Powerful Programming" },
    { id: 2, title: "NextJs", img: nextimg, description: "Web Framework" },
    { id: 3, title: "React", img: reactimg, description: "Dynamic Interfaces" },
    {
      id: 4,
      title: "Typescript",
      img: typeimg,
      description: "Typed JavaScript",
    },
    { id: 5, title: "NodeJs", img: nodeimg, description: "Backend Runtime" },
    { id: 6, title: "Sql", img: sqlimg, description: "Data Management" },
  ],
  achievements: [
    {
      id: 1,
      title: "Data Structure & Algorithms using Java",
      img: dsa,
      date: "Oct, 2025",
      description:
        "Completed the NPTEL Data Structures and Algorithms using Java course by IIT Kharagpur, earning an Elite certification (72%) and ranking in the top 5% nationwide. This achievement reflects strong analytical ability and a solid foundation in writing efficient, optimized code for complex problem-solving.",
      points: [
        "Mastered core data structures including arrays, linked lists, stacks, and queues",
        "Developed strong understanding of trees, binary search trees, heaps, and balanced trees",
        "Applied graph theory concepts such as traversals and real-world problem modeling",
        "Implemented algorithms including sorting, searching, greedy, and shortest path techniques",
        "Solved challenging assignments focused on optimization and time-space complexity",
        "Strengthened debugging skills and logical thinking through hands-on coding practice",
        "Built a strong base for designing scalable and efficient backend systems",
      ],
      skills: [
        "Java",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Object-Oriented Programming",
        "Time Complexity",
        "Space Complexity",
        "Algorithm Optimization",
        "Graph Algorithms",
        "Dynamic Programming",
      ],
    },
    {
      id: 2,
      title: "Database Management System",
      img: dbms,
      date: "Sep, 2025",
      description:
        "Completed the NPTEL Database Management Systems (DBMS) course by IIT Kharagpur, earning an Elite + Silver certification (80%) and ranking in the top 2% nationwide. This accomplishment demonstrates strong proficiency in database design, query optimization, and handling data-intensive applications at scale.",
      points: [
        "Gained strong understanding of SQL, relational algebra, and data querying techniques",
        "Designed databases using Entity-Relationship models and normalization principles",
        "Learned storage mechanisms, indexing, and hashing for efficient data retrieval",
        "Explored query processing and optimization techniques for performance improvement",
        "Understood transaction management including serializability and recoverability concepts",
        "Implemented concurrency control mechanisms and database recovery strategies",
        "Applied database concepts through rigorous assignments and real-world case studies",
        "Built a solid foundation for developing scalable and efficient data-driven systems",
      ],
      skills: [
        "SQL",
        "Database Management Systems",
        "Database Design",
        "Entity-Relationship Modeling",
        "Normalization",
        "Relational Algebra",
        "Query Optimization",
        "Indexing",
        "Transaction Management",
        "Concurrency Control",
        "Database Recovery",
        "ACID Properties",
      ],
    },
    {
      id: 3,
      title: "Programming In Java",
      img: java,
      date: "Apr, 2025",
      description:
        "Completed the NPTEL Programming in Java course by IIT Kharagpur, achieving a Gold + Elite certification (94%) and ranking in the top 1% nationwide. This accomplishment highlights strong proficiency in writing scalable, maintainable Java applications and a deep understanding of core programming principles.",
      points: [
        "Mastered object-oriented programming concepts including inheritance, polymorphism, and abstraction",
        "Worked extensively with interfaces, exception handling, and file I/O operations",
        "Utilized Java Collections Framework and generics for efficient data handling",
        "Explored multithreading and concurrency for building high-performance applications",
        "Understood JVM internals and memory management concepts",
        "Solved complex programming assignments focusing on clean and optimized code",
        "Improved debugging, code structuring, and maintainability practices",
        "Built a strong foundation for backend development using Java",
      ],
      skills: [
        "Java",
        "Object-Oriented Programming",
        "Java Collections Framework",
        "Exception Handling",
        "Generics",
        "Multithreading",
        "Concurrency",
        "File I/O",
        "JVM Fundamentals",
        "Memory Management",
        "Debugging",
        "Problem Solving",
      ],
    },
  ],
  experiences: [
    {
      id: 1,
      company: "NPTEL - IIT Ropar",
      duration: "Dec, 2025 - Jan, 2026",
      description:
        "Completed a full-stack development internship under NPTEL in collaboration with IIT Ropar, gaining hands-on experience in MERN stack development through practical case studies, technical evaluations, peer mentoring, and a virtual hackathon. Strengthened problem-solving, teamwork, communication, and professional collaboration while applying full-stack concepts in real-world scenarios.",
      points: [
        "Completed an intensive MERN Stack training program on the ViBe learning platform.",
        "Ranked among the Top 15 participants to complete the program.",
        "Successfully cleared the technical viva and earned a Bronze Ticket for demonstrating strong technical understanding.",
        "Mentored peers during the endorsement process, strengthening leadership, mentoring, and communication skills.",
        "Participated in a 12-hour virtual hackathon, collaborating with a team to design and develop a solution under strict time constraints.",
        "Solved real-world case studies that enhanced analytical thinking and practical problem-solving.",
        "Built a professional network of 150+ developers and mentors through LinkedIn during the internship.",
      ],
      img: intern,
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MERN Stack",
        "Problem Solving",
        "Team Collaboration",
        "Leadership",
      ],
    },
  ],
};
