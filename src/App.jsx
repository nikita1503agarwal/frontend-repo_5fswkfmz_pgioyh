import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Menu, ChevronRight, ExternalLink } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const onScroll = () => setIsOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">Abhay Aditya</a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm hover:bg-gray-800 transition-colors">
            Get in touch <ChevronRight size={16} />
          </a>
        </div>
        <button onClick={() => setIsOpen((v) => !v)} className="md:hidden p-2 rounded-md border border-black/10 shadow-sm">
          <Menu size={20} />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm text-gray-700 bg-white border border-black/5 rounded-md px-3 py-2 shadow-sm">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="block text-center text-sm font-medium bg-gray-900 text-white rounded-md px-3 py-2 shadow-sm">Get in touch</a>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay to improve text contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center text-xs font-medium uppercase tracking-wide text-gray-600 bg-white/80 border border-black/5 rounded-full px-3 py-1 shadow-sm">
            Computer Science Student
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Hi, I’m Abhay Aditya.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            I build clean, efficient, and user-friendly software. Here you’ll find my skills, projects, and achievements. Let’s connect and create something great.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/abhay-placeholder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm hover:bg-gray-800 transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-placeholder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-md shadow-sm border border-black/10 hover:bg-gray-50"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center text-xs font-medium uppercase tracking-wide text-gray-600 bg-white border border-black/5 rounded-full px-3 py-1 shadow-sm">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="About" title="A bit about me" subtitle="Curious, methodical, and always learning." />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="aspect-square rounded-2xl bg-gray-200 shadow-inner overflow-hidden border border-black/5">
              {/* Profile photo placeholder */}
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1200&auto=format&fit=crop"
                alt="Abhay Aditya portrait placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-2"
          >
            <div className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                I’m a computer science student focused on crafting reliable, performant applications with clean code and thoughtful UX. My interests span full‑stack web development, algorithms, and developer tooling. I enjoy collaborating, breaking down complex problems, and shipping features that make a difference.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-gray-50 border border-black/5 shadow-inner">
                  <div className="text-gray-500">Location</div>
                  <div className="mt-1 font-medium text-gray-900 flex items-center gap-2"><MapPin size={16} /> Remote / Open to relocate</div>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-black/5 shadow-inner">
                  <div className="text-gray-500">Email</div>
                  <div className="mt-1 font-medium text-gray-900 flex items-center gap-2"><Mail size={16} /> abhay@example.com</div>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-black/5 shadow-inner">
                  <div className="text-gray-500">Phone</div>
                  <div className="mt-1 font-medium text-gray-900 flex items-center gap-2"><Phone size={16} /> +91 90000 00000</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-800">{label}</span>
        <span className="text-gray-500">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 border border-black/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"
        />
      </div>
    </div>
  )
}

function Skills() {
  const core = [
    { label: 'JavaScript / TypeScript', value: 85 },
    { label: 'React / Next.js', value: 85 },
    { label: 'Node.js / Express', value: 75 },
    { label: 'Python', value: 80 },
    { label: 'Data Structures & Algorithms', value: 80 },
  ]
  const tools = ['Git & GitHub', 'MongoDB / SQL', 'Tailwind CSS', 'REST APIs', 'CI/CD Basics']

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Skills" title="What I work with" subtitle="A balanced mix of fundamentals and modern tools." />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm space-y-5">
            {core.map((s) => (
              <SkillBar key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
          <div className="bg-gradient-to-b from-gray-50 to-white border border-black/5 rounded-2xl p-6 shadow-sm">
            <div className="text-sm text-gray-600">Also familiar with</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-white border border-black/5 text-gray-700 shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, image, tags, link }) {
  return (
    <motion.a
      href={link || '#'}
      target={link ? '_blank' : undefined}
      rel={link ? 'noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">Project Image</div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {link && <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-600" />}
        </div>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
        {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-50 border border-black/5 text-gray-700">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  )
}

function Projects() {
  const items = [
    {
      title: 'Clean Portfolio Template',
      description: 'A modern and minimal portfolio with smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      link: 'https://github.com/abhay-placeholder/portfolio',
    },
    {
      title: 'Task Manager API',
      description: 'RESTful API for managing tasks with authentication and MongoDB.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
      tags: ['Node', 'Express', 'MongoDB'],
      link: 'https://github.com/abhay-placeholder/task-api',
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive visualizations for common algorithms and data structures.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
      tags: ['JavaScript', 'D3.js'],
      link: 'https://github.com/abhay-placeholder/algorithms',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Projects" title="Selected work" subtitle="A few highlights. More available on GitHub." />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  const items = [
    { title: 'Hackathon Finalist', detail: 'Top 5 out of 120+ teams for a productivity app.', year: '2024' },
    { title: 'Open Source Contributor', detail: 'Merged PRs in community-driven projects.', year: '2023' },
    { title: 'Competitive Programming', detail: 'Solved 500+ problems across platforms.', year: '2022' },
  ]

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Achievements" title="Milestones" subtitle="A few things I’m proud of." />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((a) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-md"
            >
              <div className="text-xs uppercase tracking-wide text-gray-500">{a.year}</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">{a.title}</div>
              <p className="mt-2 text-sm text-gray-600">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contact" title="Let’s work together" subtitle="Feel free to reach out for opportunities, collaborations, or just to say hi." />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault()
              const data = new FormData(e.currentTarget)
              const subject = encodeURIComponent(`Hello Abhay — ${data.get('name')}`)
              const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`)
              window.location.href = `mailto:abhay@example.com?subject=${subject}&body=${body}`
            }}
            className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-700">Message</label>
              <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm hover:bg-gray-800">
              <Mail size={18} /> Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-gradient-to-b from-gray-50 to-white border border-black/5 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
            <p className="mt-2 text-sm text-gray-600">I’m active on these platforms.</p>
            <div className="mt-4 space-y-3">
              <a href="https://github.com/abhay-placeholder" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white border border-black/5 hover:bg-gray-50">
                <Github size={18} /> <span className="text-sm">github.com/abhay-placeholder</span>
              </a>
              <a href="https://www.linkedin.com/in/abhay-placeholder" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white border border-black/5 hover:bg-gray-50">
                <Linkedin size={18} /> <span className="text-sm">linkedin.com/in/abhay-placeholder</span>
              </a>
              <a href="mailto:abhay@example.com" className="flex items-center gap-3 p-3 rounded-lg bg-white border border-black/5 hover:bg-gray-50">
                <Mail size={18} /> <span className="text-sm">abhay@example.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Abhay Aditya. All rights reserved.</p>
        <div className="flex items-center gap-4 text-gray-600">
          <a href="https://github.com/abhay-placeholder" target="_blank" rel="noreferrer" className="hover:text-gray-900"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/abhay-placeholder" target="_blank" rel="noreferrer" className="hover:text-gray-900"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    // Ensure the mobile menu closes on route hash change
    const closeOnHash = () => {
      // no-op here but reserved for future interactions
    }
    window.addEventListener('hashchange', closeOnHash)
    return () => window.removeEventListener('hashchange', closeOnHash)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}
