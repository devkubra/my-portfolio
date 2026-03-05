/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  MessageSquare, 
  Globe, 
  Star, 
  BookOpen, 
  Leaf, 
  Languages, 
  Telescope,
  Menu,
  X,
  ArrowUpRight,
  ChevronUp
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  type: 'internship' | 'hackathon' | 'club' | 'speaking';
}

interface SkillCategory {
  title: string;
  skills: string[];
}

// --- Data (Placeholders for User to Edit) ---
const PROFILE = {
  name: "Kubra Aiman Khira",
  tagline: "Relentless Tech Enthusiast | AI & Innovation Explorer | Fierce Orator | Environmentalist | Philosophical Bibliophile | Linguaphile | Astrophile",
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  year: "2nd Year (Sophomore)",
  location: "Ajmer, Rajasthan, India",
  linkedin: "https://www.linkedin.com/in/kubra-aiman-khira-9a178a323",
  email: "kubrakhira2006@gmail.com", // Placeholder
  intro: "I am a sophomore driven by the intersection of artificial intelligence and human potential. Currently exploring deep learning architectures and their applications in environmental sustainability, while maintaining a fierce passion for public speaking and philosophical inquiry."
};

const SKILLS: SkillCategory[] = [
  {
    title: "Programming & AI",
    skills: ["Python", "Data Structures", "C++", "FastAPI", "MySQL (Learning)"]
  },
  {
    title: "Communication & Leadership",
    skills: ["Public Speaking", "Impromptu Sessions", "Team Coordination", "Technical Writing", "Event Management"]
  },
  {
    title: "Domains & Interests",
    skills: ["Environmentalism", "Philosophy", "Linguistics", "Astronomy", "Innovation Strategy"]
  }
];

const PROJECTS: Project[] = [
  {
    title: "The Elf Tree",
    description: "An elegant and calming online grocery platform specializing in premium-quality fruits and vegetables sourced from farms around the world.",
    tags: ["React 19", "TypeScript", "Vite 6"],
    link: "#",
    github: "#"
  },
  {
    title: "My Book Library",
    description: "A website that showcases the books I've read.",
    tags: ["HTML"],
    link: "#",
    github: "#"
  },
  {
    title: "Solar System Graphic",
    description: "A small-scale project visualizing the solar system, blending my love for astrophysics and coding.",
    tags: ["Python", "Turtle module"],
    link: "#"
  }
];

const EXPERIENCE: Experience[] = [
  {
    role: "Core Member",
    organization: "GDG On Campus GWECA",
    period: "2025 - Present",
    description: "Leading workshops on Google Tech. for beginners and coordinating technical discussions.",
    type: "club"
  },
  {
    role: "NEC 2025 Core Member",
    organization: "E-Cell, IIT Bombay",
    period: "July 2025",
    description: "Collaborated with peers to ideate and pitch innovative project ideas.",
    type: "club"
  },
  {
    role: "Participant",
    organization: "Smart India Hackathon",
    period: "Sep 2025",
    description: "Worked on a team of 6 to present a prototype for smart tourist safety monitoring.",
    type: "hackathon"
  }
];

const TALKS = [
  {
    title: "Anchor",
    event: "Freshers' Party 2025",
    date: "Oct 2025",
    description: "Hosted the Freshers' event for the new batch."
  },
  {
    title: "Content Writer",
    event: "College Newsletter & Magazine",
    date: "June 2025",
    description: "Crafted and contributed articles to the college newsletter and magazine."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Interests', href: '#interests' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-space-950/80 backdrop-blur-lg border-bottom border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-space-950">K</div>
          <span className="hidden sm:inline">Kubra Aiman Khira</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link text-sm font-medium">
              {link.name}
            </a>
          ))}
          <a 
            href={PROFILE.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary py-2 px-5 text-sm"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-space-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg text-slate-300 hover:text-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={PROFILE.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Connect on LinkedIn
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-display mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
  </div>
);

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 border border-accent/20">
              {PROFILE.year} • {PROFILE.degree}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-8 leading-[1.1]">
              {PROFILE.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl">
              {PROFILE.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary group">
                View Projects
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-space-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="A voyage of curiosity and code.">About Me</SectionHeading>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {PROFILE.intro}
              </p>
              <p className="text-slate-400 mb-8">
                I balance my technical pursuits with a deep appreciation for cross-domain knowledge. Whether it's debating ethical frameworks or gazing at the cosmos, I believe true innovation happens at the intersection of diverse disciplines.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Tech Enthusiast", "Public Speaker", "Environmental Advocate", "Astrophile"].map(chip => (
                  <span key={chip} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
                <img 
                  src="https://drive.google.com/uc?export=view&id=14eFa2Ab115xMnoyEy_d68e0cBd-yPQ5t" 
                  alt="Profile Placeholder" 
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-6 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-space-950">
                    <Star size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Current Focus</p>
                    <p className="text-white font-semibold">AI for Sustainability</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="A blend of technical prowess and soft skills.">My Toolkit</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 hover:border-accent/30 group"
              >
                <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                  {idx === 0 ? <Code2 size={32} /> : idx === 1 ? <MessageSquare size={32} /> : <Globe size={32} />}
                </div>
                <h3 className="text-xl mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-space-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Selected works from personal explorations.">Projects</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display group-hover:text-accent transition-colors">{project.title}</h3>
                    <div className="flex gap-3">
                      {project.github && <a href={project.github} className="text-slate-400 hover:text-white"><Github size={20} /></a>}
                      <a href={project.link} className="text-slate-400 hover:text-white"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-accent/80 px-2 py-1 rounded bg-accent/5 border border-accent/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Milestones in my academic and professional growth.">Experience & Activities</SectionHeading>
          <div className="space-y-6">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.organization}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 flex flex-col md:flex-row gap-6 md:items-center hover:bg-white/10"
              >
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-sm font-bold text-accent">{exp.period}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-display">{exp.role}</h3>
                  <p className="text-slate-400 text-sm mb-2">{exp.organization}</p>
                  <p className="text-slate-300 text-sm">{exp.description}</p>
                </div>
                <div className="md:w-32 flex-shrink-0 text-right">
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400">
                    {exp.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking & Writing Section */}
      <section className="py-24 px-6 bg-space-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Sharing insights and engaging in discourse.">Speaking & Writing</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            {TALKS.map((talk, idx) => (
              <motion.div
                key={talk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-accent/30 pl-8 relative"
              >
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">{talk.date}</span>
                <h3 className="text-2xl font-display mb-3">{talk.title}</h3>
                <p className="text-slate-400 text-sm mb-4 italic">{talk.event}</p>
                <p className="text-slate-300 leading-relaxed">
                  {talk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests & Personality Section */}
      <section id="interests" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="The facets that make me who I am.">Interests & Personality</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Leaf />, title: "Environmentalist", desc: "Advocating for sustainable tech." },
              { icon: <BookOpen />, title: "Bibliophile", desc: "Lost in philosophical texts." },
              { icon: <Languages />, title: "Linguaphile", desc: "Fascinated by the structure of speech." },
              { icon: <Telescope />, title: "Astrophile", desc: "Gazing at the infinite cosmos." }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 text-center hover:bg-accent/5 hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="font-display text-lg mb-2">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-space-900/80">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading subtitle="Let's build something meaningful together.">Get In Touch</SectionHeading>
          <p className="text-slate-300 mb-12">
            I'm always open to discussing AI research, public speaking opportunities, or environmental initiatives. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href={`mailto:${PROFILE.email}`} 
              className="glass-card p-8 flex flex-col items-center gap-4 hover:border-accent group"
            >
              <Mail className="text-accent group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Email Me</p>
                <p className="text-white font-medium">{PROFILE.email}</p>
              </div>
            </a>
            <a 
              href={PROFILE.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-8 flex flex-col items-center gap-4 hover:border-accent group"
            >
              <Linkedin className="text-accent group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">LinkedIn</p>
                <p className="text-white font-medium">Connect with me</p>
              </div>
            </a>
          </div>

          <form className="space-y-4 text-left glass-card p-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="How can we collaborate?"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-slate-500 text-sm mb-4">
            Designed & Built by Kubra Aiman Khira • 2026
          </p>
          <div className="flex justify-center gap-6">
            <a href={PROFILE.linkedin} className="text-slate-500 hover:text-accent"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-accent"><Github size={20} /></a>
            <a href={`mailto:${PROFILE.email}`} className="text-slate-500 hover:text-accent"><Mail size={20} /></a>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-space-950 flex items-center justify-center shadow-lg z-50 hover:bg-white transition-colors"
          >
            <ChevronUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
