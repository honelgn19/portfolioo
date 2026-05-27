import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "EZM ERP System",
      description: "A comprehensive Enterprise Resource Planning system designed to streamline business operations, inventory management, accounting, and reporting for medium to large organizations.",
      image: "/projects/ezm-erp.jpg",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
      liveLink: "#",
      githubLink: "#",
      category: "ERP System"
    },
    {
      id: 2,
      title: "Hotel QR Ordering System",
      description: "Contactless digital ordering platform for hotels and restaurants. Guests can scan QR codes to browse menus, place orders, and track status in real-time.",
      image: "/projects/hotel-qr.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Firebase"],
      liveLink: "#",
      githubLink: "#",
      category: "SaaS Platform"
    },
    {
      id: 3,
      title: "Digital Menu Platform",
      description: "Multi-tenant digital menu management system with real-time updates, analytics, and QR code generation for restaurants and cafes.",
      image: "/projects/digital-menu.jpg",
      tech: ["React", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      category: "Business Tool"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#121212] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world solutions I've built for businesses, focusing on scalability, user experience, and performance.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#1A1A1A] border border-white/10 rounded-3xl overflow-hidden hover:border-[#C0C0C0]/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-5 left-5 px-4 py-1.5 bg-black/70 backdrop-blur-md text-xs font-medium text-[#C0C0C0] border border-white/20 rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#C0C0C0] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-[15px] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <motion.a
                    href={project.liveLink}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#C0C0C0] hover:bg-white text-black font-semibold py-3.5 rounded-2xl transition-all"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-2 border border-white/30 hover:border-[#C0C0C0] font-medium py-3.5 rounded-2xl transition-all"
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
                  </motion.a>
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