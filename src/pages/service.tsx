import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Building2, 
  Cloud, 
  Zap, 
  LayoutDashboard, 
  Briefcase 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      description: "End-to-end web applications using modern technologies like React, TypeScript, Node.js, and Next.js.",
      color: "#C0C0C0"
    },
    {
      icon: Building2,
      title: "ERP System Development",
      description: "Custom Enterprise Resource Planning systems to automate and optimize business processes.",
      color: "#C0C0C0"
    },
    {
      icon: Cloud,
      title: "SaaS Platform Development",
      description: "Scalable Software-as-a-Service platforms with multi-tenancy, subscriptions, and analytics.",
      color: "#C0C0C0"
    },
    {
      icon: Zap,
      title: "Firebase Integration",
      description: "Seamless Firebase integration for authentication, real-time database, and cloud functions.",
      color: "#C0C0C0"
    },
    {
      icon: LayoutDashboard,
      title: "Admin Dashboard Development",
      description: "Powerful and intuitive admin panels with data visualization and management tools.",
      color: "#C0C0C0"
    },
    {
      icon: Briefcase,
      title: "Business Management Systems",
      description: "Custom solutions for inventory, CRM, HR, and workflow automation.",
      color: "#C0C0C0"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#1A1A1A] border-t border-white/10">
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
            Services I Offer
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C0C0C0] to-transparent rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering high-quality digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group bg-[#121212] border border-white/10 rounded-3xl p-8 hover:border-[#C0C0C0]/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#C0C0C0]/10 transition-colors">
                <service.icon 
                  size={32} 
                  className="text-[#C0C0C0]" 
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#C0C0C0] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-[15px]">
                {service.description}
              </p>

              {/* Subtle bottom accent */}
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#C0C0C0] to-transparent mt-8 group-hover:w-20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;