import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_d27n86h",
        "template_finx1lo",
        {
          "From Name": formData.name,
          "From Email": formData.email,
          "Content": formData.message,
          "Subject": `New Portfolio Message from ${formData.name}`,
        },
        "DK7Mgl7amcXyh4kOy"
      );

      alert("✅ Message sent successfully! Thank you.");
      setFormData({ name: "", email: "", message: "" });

    } catch (error: any) {
      console.error("Full Error:", error);
      alert("Failed to send. Please check F12 console.");
    } finally {
      setLoading(false);
    }
  };

  // ... rest of your return JSX stays the same

  return (
    <section id="contact" className="py-24 bg-[#121212] border-t border-white/10">
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
            Let's Work Together
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C0C0C0] to-transparent rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'm currently available for freelance opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-7">
                
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                    <User size={16} className="text-[#C0C0C0]" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#C0C0C0] focus:ring-2 focus:ring-[#C0C0C0]/20 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                    <Mail size={16} className="text-[#C0C0C0]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#C0C0C0] focus:ring-2 focus:ring-[#C0C0C0]/20 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                    <MessageSquare size={16} className="text-[#C0C0C0]" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-3xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#C0C0C0] focus:ring-2 focus:ring-[#C0C0C0]/20 transition-all duration-300 resize-none min-h-[160px]"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-gradient-to-r from-[#C0C0C0] to-[#E5E5E5] hover:from-white hover:to-[#CFCFCF] text-black font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>

              </form>
            </div>
          </motion.div>

          {/* Social & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Connect With Me</h3>
                <p className="text-gray-400 mb-8">
                  Feel free to reach out through any of these platforms. I typically respond within 24 hours.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/honelgn19"
                  target="_blank"
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C0C0C0]/30 rounded-2xl transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#C0C0C0]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-gray-400">View my projects</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/honelgn-metaferiya-b8876237a"
                  target="_blank"
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C0C0C0]/30 rounded-2xl transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#C0C0C0]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-gray-400">Professional profile</p>
                  </div>
                </a>

                <a
                  href="https://t.me/kebron1921"
                  target="_blank"
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C0C0C0]/30 rounded-2xl transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#C0C0C0]/10">
                    <Send size={26} className="text-[#C0C0C0]" />
                  </div>
                  <div>
                    <p className="font-medium">Telegram</p>
                    <p className="text-sm text-gray-400">Quick chat</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;