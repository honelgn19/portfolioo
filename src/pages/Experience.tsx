import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      role: "Senior Full-Stack Developer & ERP Specialist",
      company: "Freelance / Independent Projects",
      description: "Developing custom ERP systems and SaaS platforms for businesses in East Africa. Focused on building scalable solutions that automate business processes and improve operational efficiency.",
      highlights: [
        "Built EZM ERP System from scratch",
        "Developed multiple SaaS platforms",
        "Implemented real-time business intelligence tools"
      ],
      icon: Briefcase
    },
    {
      year: "2023 - 2024",
      role: "Full-Stack Developer",
      company: "TechVision Solutions",
      description: "Led the development of modern web applications and digital transformation projects. Specialized in creating seamless user experiences with robust backend architecture.",
      highlights: [
        "Developed Hotel QR Ordering System",
        "Integrated Firebase solutions for multiple clients",
        "Optimized application performance by 60%"
      ],
      icon: Award
    },
    {
      year: "2022 - 2023",
      role: "Software Developer",
      company: "Nexus Business Systems",
      description: "Worked on enterprise-level business management systems with a strong focus on ERP modules and data-driven decision making tools.",
      highlights: [
        "Built Digital Menu Platform",
        "Developed custom CRM modules",
        "Implemented secure multi-tenant architecture"
      ],
      icon: Calendar
    },
    {
      year: "2021 - 2022",
      role: "Junior Full-Stack Developer",
      company: "StartUp Ethiopia",
      description: "Began professional journey building responsive web applications and learning enterprise software development practices.",
      highlights: [
        "Mastered React & TypeScript",
        "Gained hands-on ERP development experience",
        "Delivered 10+ client projects"
      ],
      icon: Award
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#121212] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">
            My Journey
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C0C0C0] to-transparent rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            From building simple applications to delivering complex enterprise solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-white/10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="mb-12 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-4 border-[#C0C0C0] bg-[#121212]" />

                <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 hover:border-[#C0C0C0]/30 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center">
                        <exp.icon size={22} className="text-[#C0C0C0]" />
                      </div>
                      <div>
                        <p className="text-[#C0C0C0] font-medium">{exp.year}</p>
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 font-medium">{exp.company}</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <span className="text-[#C0C0C0] mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
