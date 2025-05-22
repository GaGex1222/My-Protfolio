'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StackIcon from 'tech-stack-icons';

const projects = [
  {
    title: 'Rummikub Multiplayer',
    description: 'A full multiplayer Rummikub game with real-time gameplay, user authentication, and secure communication.',
    url: 'https://github.com/GaGex1222/RummikubMultiplayer',
    image: '/rummikub.png',
  },
  {
    title: 'Trivia Competitor',
    description: 'A trivia competetive site that allow users to create & play differnet trivias with score.',
    url: 'https://trivia-competitor-vy24.vercel.app/',
    image: '/trivia.png',
  },
  {
    title: 'Mood Sync',
    description: 'An emotion-based music app that plays songs based on your mood using facial recognition and AI.',
    url: 'https://github.com/GaGex1222/Mood-Sync#',
    image: 'moodsync.png',
  }
];

const skills = [
  { name: 'JavaScript', iconName: 'js' },
  { name: 'TypeScript', iconName: 'typescript' },
  { name: 'Python', iconName: 'python' },
  { name: 'C#', iconName: 'csharp' },
  { name: 'Tailwind CSS', iconName: 'tailwindcss' },
  { name: 'Next', iconName: 'nextjs2' },
  { name: 'Flask', iconName: 'flask' },
  { name: 'Node.js', iconName: 'nodejs' },
  { name: 'PostgreSQL', iconName: 'postgresql' },
  { name: 'MongoDB', iconName: 'mongodb' },
  { name: 'Git', iconName: 'git' }
];

export default function CleanWebsite() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const [status, setStatus] = React.useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [loading, setLoading] = React.useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await fetch("/api/email/send", {
        method: "POST",
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          message: form.message
        }),
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', message: `Thanks ${form.name}, I'll be in touch soon!` });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: 'error', message: "Network error. Please try again later." });
    }
    setLoading(false)
  };


  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700 text-slate-100 px-8 py-16 font-mono select-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto mb-20 flex flex-col md:flex-row items-center gap-10"
      >

      <header className="flex-1 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Gal Dadon</h1>
        <p className="text-lg max-w-xl text-slate-300">
          I’m a 19-year-old developer from Israel, constantly pushing myself to learn and build more, Driven by curiosity and a love for programming, I specialize in building real-world apps with clean, scalable code across the full stack — all self-taught through hands-on projects and personal dedication.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Lets Talk!
        </button>
      </header>


        <div className="flex-1 w-full max-w-xs">
          <img
            src="/me.jpeg"
            alt="Gal Dadon"
            className="rounded-xl shadow-lg w-full h-full object-cover object-top"
          />
        </div>
      </motion.div>


      <section className="max-w-6xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map(({ title, description, url, image }, i) => (
          <motion.a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
            className="transform hover:scale-105 transition-transform rounded-xl overflow-hidden shadow-xl bg-blue-900 hover:bg-blue-800"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-slate-300">{description}</p>
            </div>
          </motion.a>
        ))}
      </section>


      <section className="max-w-6xl mx-auto mb-24 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl font-bold mb-8 text-center tracking-wide"
        >
          Tech Stack
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {skills.map(({ name, iconName }) => (
            <motion.div
              key={name}
              className="flex flex-col items-center space-y-2 text-slate-300 cursor-default"
              whileHover={{ scale: 1.1, color: '#60a5fa' }}
              transition={{ type: 'spring', stiffness: 900 }}
            >
              <StackIcon name={iconName} />
              <span className="mt-2 text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>


      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        id='contact'
        className="max-w-4xl mx-auto bg-blue-900 rounded-xl p-10 shadow-lg border border-blue-700"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Let's Talk</h2>
        <p className="text-center text-slate-300 mb-8">
          Feel free to reach out for anything — a project, a collaboration, or just to talk about life!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-4 rounded-md bg-blue-800 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="p-4 rounded-md bg-blue-800 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-4 rounded-md bg-blue-800 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className={` text-white shadow-md font-semibold py-4 rounded-md transition ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 text-center text-slate-300">
          <p>You can also reach me here:</p>
          <p className="mt-2">
            Instagram:{" "}
            <a
              href="https://instagram.com/gal_dadon1212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @gal_dadon1212
            </a>
          </p>
          <p className="mt-2">
            Github:{" "}
            <a
              href="https://github.com/GaGex1222"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @GaGex1222
            </a>
          </p>
          <p className="mt-1">
            Discord: <span className="text-blue-400">GaGex</span>
          </p>
        </div>
        {status && (
          <div
            className={`mt-6 p-4 rounded-md text-center ${
              status.type === "success"
                ? "bg-green-600 text-green-100"
                : "bg-red-600 text-red-100"
            }`}
          >
            {status.message}
          </div>
        )}
      </motion.section>
      <footer className="text-center text-slate-400 mt-24  border-t border-blue-800 pt-8">
        <p>© {new Date().getFullYear()} Gal Dadon. All rights reserved.</p>
        <p className="mt-1 text-sm">Made with ❤️ using Next.js, Tailwind, and Framer Motion</p>
      </footer>
    </div>
  );
}