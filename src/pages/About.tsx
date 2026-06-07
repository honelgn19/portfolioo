import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#121212] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-zinc-100 mb-6">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#C0C0C0] to-transparent rounded-full" />
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Full-Stack Developer and M.Sc. Chemical
                Engineering graduate who enjoys building technology that solves
                real-world problems.
              </p>

              <p>
                {" "}
                Driven by continuous learning and innovation, I develop scalable
                web applications and ERP solutions that help businesses operate
                more efficiently.
              </p>

              <p>
                With software development expertise and industrial internship
                experience, I create practical, user-friendly systems that
                support business and industrial growth.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#C0C0C0]/40 transition-all">
                <h4 className="text-[#C0C0C0] font-semibold mb-2">
                  Full-Stack Development
                </h4>
                <p className="text-sm text-gray-400">
                  React, TypeScript, Node.js &amp; Modern Tools
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#C0C0C0]/40 transition-all">
                <h4 className="text-[#C0C0C0] font-semibold mb-2">
                  ERP Systems
                </h4>
                <p className="text-sm text-gray-400">
                  Business Process Automation &amp; SaaS Solutions
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3.5] border border-white/10">
              <img
                src="/profile.jpg"
                alt="Honelgn"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-6 bg-[#1A1A1A] border border-white/10 backdrop-blur-xl rounded-2xl p-7 shadow-2xl">
              <div className="flex gap-10">
                <div>
                  <p className="text-4xl font-bold text-[#C0C0C0]">2+</p>
                  <p className="text-xs text-gray-400 tracking-widest">
                    YEARS EXP
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#C0C0C0]">7+</p>
                  <p className="text-xs text-gray-400 tracking-widest">
                    PROJECTS
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
