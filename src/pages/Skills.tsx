import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Code2, Database, Wrench, Building2 } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "shadcn/ui", level: 90 },
    ]
  },
  {
    category: "Backend",
    icon: <Star className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "Firebase", level: 80 },
    ]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Firestore", level: 82 },
    ]
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Firebase Console", level: 85 },
    ]
  },
  {
    category: "ERP & Business Systems",
    icon: <Building2 className="w-6 h-6" />,
    skills: [
      { name: "ERP System Development", level: 85 },
      { name: "SaaS Platforms", level: 80 },
      { name: "Business Process Automation", level: 82 },
    ]
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      <div className="relative pt-28 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Technical Skills
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build powerful digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#C0C0C0]/50 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#C0C0C0]/10 rounded-xl text-[#C0C0C0]">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{category.category}</h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-200 font-medium">{skill.name}</span>
                          <span className="text-sm text-[#C0C0C0]">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                            className="h-1.5 bg-gradient-to-r from-[#C0C0C0] to-[#D9D9D9] rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 text-gray-400"
        >
          Continuously learning and exploring new technologies to deliver better solutions
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;