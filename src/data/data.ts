import profile_img from "../assests/tejas.webp";
import crpto_project from "../assests/project1.webp";
import travelnest_project from "../assests/project2.webp";
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

interface Project {
  id: number;
  title: string;
  image: String[];
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

interface Achievement {
  id: number;
  title: string;
  img: string;
  date: string;
  description?: string;
  points: string[];
  skills: string[];
}

interface Experience {
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
      title: "Crypto Coins Tracker",
      image: [crpto_project],
      description:
        "A real-time crypto tracker app fetching live market data via API, displaying prices, trends, and updates for multiple coins with an intuitive, user-friendly interface.",
      points: [
        "Developed a real-time cryptocurrency tracking application using live market data APIs",
        "Integrated external APIs to fetch up-to-date prices, trends, and market updates",
        "Displayed data for multiple cryptocurrencies with a dynamic and responsive UI",
        "Implemented real-time updates to ensure accurate and current information",
        "Designed an intuitive and user-friendly interface for a seamless user experience",
        "Visualized market trends and price movements for better data understanding",
        "Optimized performance for smooth data rendering and fast API responses",
      ],
      live_link: "https://www.youtube.com/",
      git_link: "https://www.youtube.com/",
      skills: ["HTML", "CSS", "Javascript", "Typescript"],
    },
    {
      id: 2,
      title: "Travelnest",
      image: [travelnest_project],
      description:
        "A full-stack Airbnb clone featuring property listings, maps integration, reviews, and secure authentication with complete CRUD operations for adding, editing, and managing stays seamlessly.",
      points: [
        "Built a full-stack Airbnb clone with end-to-end functionality",
        "Implemented property listing features with detailed stay information",
        "Integrated maps for location-based property visualization",
        "Developed a review and rating system for user feedback",
        "Added secure authentication and authorization for users",
        "Implemented complete CRUD operations for managing property listings",
        "Enabled seamless adding, editing, and deletion of stays",
        "Designed a smooth and user-friendly booking and browsing experience",
      ],
      live_link: "https://www.youtube.com/",
      git_link: "https://www.youtube.com/",
      skills: ["HTML", "CSS", "Javascript", "Typescript"],
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
      skills: ["Java", "Data Structure"],
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
      skills: ["SQL", "MongoDB"],
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
      skills: ["Java", "Data Structure"],
    },
  ],
  experiences: [
    {
      id: 1,
      company: "NPTEL - IIT Ropar",
      duration: "Dec, 2025 - Jan, 2026",
      description:
        "Completed an internship under NPTEL in collaboration with IIT Ropar, gaining hands-on experience in MERN stack development, case studies, viva evaluations, peer mentoring, and a virtual hackathon. The program strengthened my technical expertise, problem-solving, teamwork, communication, leadership, and professional networking skills, preparing me for real-world software development.",
      points: [
        "Completed an intensive MERN Stack training program on the ViBe platform.",
        "Ranked among the Top 15 participants to complete the course.",
        "Successfully cleared the technical viva and earned a Bronze Ticket.",
        "Mentored peers through the endorsement process, improving leadership and communication.",
        "Participated in a 12-hour virtual hackathon, gaining real-world teamwork and development experience.",
        "Enhanced problem-solving, collaboration, and technical communication through case studies.",
        "Built a professional network with 150+ LinkedIn connections during the internship.",
      ],
      img: intern,
      skills: ["Javascript", "React"],
    },
  ],
};
