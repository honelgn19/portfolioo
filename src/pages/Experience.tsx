import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: "Oct 2025 - Present",
      role: "Full-Stack Developer & ERP Systems Developer",
      company: "Independent Projects",
      description: "Focused on building real-world ERP systems, business management platforms, and scalable web applications. Continuously expanding expertise in modern full-stack technologies through hands-on project development.",
      highlights: [
        "Developed EZM ERP System",
        "Built Scan2Order QR Ordering Platform",
        "Developed Car Spare Parts Store ERP System"
      ],
      icon: Briefcase
    },
    {
      year: "2025",
      role: "Full-Stack Development Trainee",
      company: "Udacity, EthioCoders & Evangadi Academy",
      description: "Completed intensive full-stack development training programs covering modern frontend and backend technologies, database design, APIs, authentication, and deployment.",
      highlights: [
        "Graduated from Evangadi Full-Stack Program",
        "Completed Udacity & EthioCoders Training",
        "Built production-ready web applications"
      ],
      icon: Award
    },
    {
      year: "2025",
      role: "Full-Stack Developer",
      company: "Portfolio & Clone Projects",
      description: "Strengthened practical development skills by recreating popular large-scale applications and implementing industry-standard development practices.",
      highlights: [
        "Built Amazon Clone",
        "Built Netflix Clone",
        "Built Apple Website Clone"
      ],
      icon: Calendar
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