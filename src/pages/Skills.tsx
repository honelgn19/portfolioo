import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Building2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["MongoDB", "Firebase", "PostgreSQL", "MySQL"],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: [
        "Git & GitHub",
        "Postman",
        "Vercel",
        "Agile Methodologies",
        "Netlify",
        "Docker",
      ],
    },
    {
      title: "ERP & Business Systems",
      icon: Building2,
      skills: [
        "ERP Development",
        "SaaS Platforms",
        "Business Process Automation",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#1A1A1A] border-t border-white/10"
    >
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
            Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C0C0C0] to-transparent rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build powerful digital solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-[#121212] border border-white/10 rounded-3xl p-8 hover:border-[#C0C0C0]/30 transition-all group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl">
                  <category.icon className="w-7 h-7 text-[#C0C0C0]" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 transition-all hover:border-[#C0C0C0]/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
