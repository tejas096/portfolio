import React, { useState, useRef, useEffect } from "react";
import { Sparkle, ArrowRight } from "lucide-react";
import Project1 from "../assests/project1.webp";
import Project2 from "../assests/project2.webp";
import Project3 from "../assests/project3.webp";
import Project4 from "../assests/project4.webp";

const projects = [
  {
    id: 1,
    title: "Google Clone",
    description:
      "A fully functional Google Search clone with real-time search results, pagination, and a clean responsive UI. Built with modern frontend and backend technologies for seamless search experience.",
    details: [
      "Implements a Google-like search experience with instant results fetched from a public Search API and efficient caching for repeated queries.",
      "Includes pagination with smooth navigation, allowing users to explore results across multiple pages without performance issues.",
      "Responsive and minimalist UI inspired by Google’s design, enhanced with dark mode support using Tailwind CSS utilities.",
      "Global search state management with Zustand combined with RTK Query for data fetching, error handling, and automatic loading indicators.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "RTK Query",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: Project1,
    demo: "https://www.google.com/",
    github: "https://github.com/you/google-clone",
  },
  {
    id: 2,
    title: "Airbnb Clone",
    description:
      "A modern Airbnb-inspired platform for browsing, booking, and managing rental properties with a clean UI and full-stack integration.",
    details: [
      "Browse and filter properties by location, price, and amenities with a responsive UI inspired by Airbnb’s design system.",
      "Integrated authentication and authorization with JWT for secure user accounts, bookings, and property management.",
      "Property creation with image uploads, detailed descriptions, and availability scheduling powered by Node.js, Express, and MongoDB.",
      "State management using Zustand with RTK Query for data fetching, caching, and real-time updates for bookings and availability.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "RTK Query",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],
    image: Project2,
    demo: "https://www.airbnb.co.in/",
    github: "https://github.com/you/airbnb-clone",
  },

  {
    id: 3,
    title: "Amazon Clone",
    description:
      "A full-stack Amazon-inspired e-commerce platform with product listings, cart, checkout, and authentication.",
    details: [
      "Dynamic product browsing with categories, filters, and search powered by Zustand and RTK Query for state and data management.",
      "Shopping cart with add, remove, and quantity update functionality, along with persistent cart state across sessions.",
      "Secure authentication and authorization with JWT, enabling user sign-up, login, and order history tracking.",
      "Integrated checkout flow with order placement, payment simulation, and backend powered by Node.js, Express, and MongoDB.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "RTK Query",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    image: Project3,
    demo: "https://www.amazon.in/",
    github: "https://github.com/you/amazon-clone",
  },
  {
    id: 4,
    title: "ChatGPT Clone",
    description:
      "An AI-powered ChatGPT-inspired web app with real-time messaging, context-aware responses, and a clean conversational UI.",
    details: [
      "Interactive chat interface with streaming responses, typing indicators, and conversation history management.",
      "API integration for AI-powered responses with support for context retention across multiple messages.",
      "Responsive and minimalist design using Tailwind CSS with dark mode for an authentic ChatGPT-like feel.",
      "Global state handled via Zustand and RTK Query for caching, error handling, and seamless communication with the backend built on Node.js and Express.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "RTK Query",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "WebSockets",
    ],
    image: Project4,
    demo: "https://chatgpt.com/",
    github: "https://github.com/you/chatgpt-clone",
  },
];

const Project: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX - 10, y: e.clientY - 10 });
    };

    const leave = () => setPos(null); // hide cursor when leaving area

    container.addEventListener("mousemove", move);
    container.addEventListener("mouseleave", leave);

    return () => {
      container.removeEventListener("mousemove", move);
      container.removeEventListener("mouseleave", leave);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const el = document.getElementById(
        window.innerWidth >= 1024 ? `${targetId}` : `mobile-${targetId}`
      );
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveProject(projects[index]);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="h-[calc(100vh-150px)] lg:h-[580px] snap-y snap-mandatory overflow-y-scroll w-full scrollbar-hide">
      <div className="h-full w-full flex max-lg:hidden">
        <div className="w-[55%] h-full" ref={containerRef}>
          {pos && (
            <div
              className="size-16 bg-[rgb(145,75,241)] rounded-full text-white grid place-items-center text-sm font-semibold pointer-events-none fixed"
              style={{
                left: pos.x,
                top: pos.y,
                position: "fixed",
              }}
            >
              VIEW
            </div>
          )}
          {projects.map((project, index) => (
            <a href={project.demo} target="_blank">
              <div
                key={project.id}
                id={`project${project.id}`}
                data-index={index}
                className="h-full snap-start p-[20px] cursor-pointer"
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl h-full w-full"
                />
              </div>
            </a>
          ))}
        </div>
        <div className="w-[40%] h-[calc(100vh-150px)] lg:h-[580px] p-6 left-[54%] pointer-events-none fixed flex flex-col justify-between">
          <h2 className="max-lg:w-full max-lg:text-center text-[36px] xs:text-[48px] font-semibold leading-[1.1em]">
            {activeProject.title}
          </h2>
          <p className="text-[16px] text-[rgb(217,217,217)] leading-[1.2em] pt-[10px]">
            {activeProject.description}
          </p>

          <ul className="flex flex-col text-[15px] text-[rgb(217,217,217)] gap-[10px]">
            {activeProject.details.map((t, index) => (
              <li
                key={t}
                className={`flex items-center gap-3 leading-[1.3em] ${
                  index > 1 && `max-xl:hidden`
                }`}
              >
                <Sparkle
                  className="w-4 h-4 text-[rgb(145,75,241)]"
                  fill="currentColor"
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[10px] text-[15px] flex-wrap">
            {activeProject.tech.map((t) => (
              <li
                key={t}
                className="bg-[rgb(39,40,41)] py-[5px] px-[15px] border-1 border-[rgb(145,75,241)] rounded-3xl"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-[30px]">
            <a
              href={activeProject.github}
              target="_blank"
              className="h-[40px] font-semibold w-[180px] gap-[10px] pointer-events-auto cursor-pointer rounded-lg flex justify-center items-center bg-[rgb(145,75,241)]"
            >
              GitHub
            </a>
            <a
              href={activeProject.demo}
              target="_blank"
              className="flex items-center font-semibold gap-[10px] group pointer-events-auto"
            >
              Live
              <ArrowRight
                size={16}
                className="scale-x-150 scale-y-100 group-hover:text-[rgb(145,75,241)] group-hover:translate-x-1 transition-all duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:hidden h-full w-full flex flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            id={`mobile-project${project.id}`}
            className="snap-start min-h-full flex flex-col justify-between p-4 items-center"
          >
            <a
              href={project.demo}
              className="h-[35%] sm:h-[45%] rounded-lg w-full sm:w-[80%]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full rounded-lg"
              />
            </a>
            <h2 className="w-full text-center text-[36px] xs:text-[48px] font-semibold leading-[1.1em]">
              {project.title}
            </h2>
            <p className="text-[18px] text-center max-md:line-clamp-3 text-[rgb(217,217,217)] leading-[1.2em] pt-[10px]">
              {project.description}
            </p>
            <ul className="flex justify-center gap-[10px] text-[15px] flex-wrap">
              {project.tech.map((t, index) => (
                <li
                  key={t}
                  className={`bg-[rgb(39,40,41)] py-[5px] px-[15px] border-1 border-[rgb(145,75,241)] rounded-3xl ${
                    index > 8 && "max-md:hidden"
                  }`}
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-[30px]">
              <a
                href={project.github}
                target="_blank"
                className="h-[40px] font-semibold w-[180px] gap-[10px] pointer-events-auto cursor-pointer rounded-lg flex justify-center items-center bg-[rgb(145,75,241)]"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="flex items-center font-semibold gap-[10px] group pointer-events-auto"
              >
                Live
                <ArrowRight
                  size={16}
                  className="scale-x-150 scale-y-100 group-hover:text-[rgb(145,75,241)] group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
