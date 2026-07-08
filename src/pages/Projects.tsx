import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitHub } from "lucide-react";
import ezmErp from "../assets/ezmErp.jpg";
import hotelQr from "../assets/admin.PNG";
import digitalMenu from "../assets/menu.PNG";
import careSpare from "../assets/careSpare.PNG"

const Projects = () => {
  const projects = [
    {
      title: "EZM ERP System",
      description:
        "A comprehensive Enterprise Resource Planning solution designed to streamline business operations, inventory, accounting, and reporting for growing organizations.",
      image: ezmErp,
      category: "ERP System",
      tech: ["React", "TypeScript", "Node.js", "Firebase", "Tailwind"],
      liveLink: "#",
      githubLink: "https://github.com/honelgn19/ezm-ERP",
    },
    {
      title: "Hotel QR Ordering System",
      description:
        "Contactless QR-based ordering platform for hotels and restaurants. Enables seamless menu browsing, real-time order tracking, and digital payments.",
      image: hotelQr,
      category: "SaaS Platform",
      tech: ["React.js", "TypeScript", "Firebase", "Shadcn UI", "Tailwind"],
      liveLink: "#",
      githubLink: "https://github.com/honelgn19/scan2order ",
    },
    {
      title: "Digital Menu Platform",
      description:
        "Multi-tenant digital menu management system with dynamic QR generation, real-time updates, and analytics dashboard for restaurants and cafes.",
      image: digitalMenu,
      category: "Business Tool",
      tech: ["React", "TypeScript", "Express.js", "MongoDB", "Tailwind"],
      liveLink: "#",
      githubLink: "https://github.com/honelgn19/scan2order ",
    },
    {
      title: "Car Spare Parts Store ERP System",
      description:
        "Comprehensive ERP system for managing car spare parts inventory, sales, customer orders, suppliers, and business analytics.",
      image: careSpare,
      category: "ERP System",
      tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "https://github.com/honelgn19/car-spare-parts-erp",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#121212] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Fixed for better visibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C0C0C0] to-transparent rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world applications I've built focusing on scalability, user
            experience, and business impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group bg-[#1A1A1A] border border-white/10 rounded-3xl overflow-hidden hover:border-[#C0C0C0]/30 transition-all"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-5 left-5 px-4 py-1.5 text-xs font-medium bg-black/70 backdrop-blur-md border border-white/20 rounded-full text-[#C0C0C0]">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#C0C0C0] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#C0C0C0] hover:bg-white text-black font-semibold py-3.5 rounded-2xl transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 flex items-center justify-center gap-2 border border-white/30 hover:border-[#C0C0C0] font-medium py-3.5 rounded-2xl transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
