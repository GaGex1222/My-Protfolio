'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence, color } from 'framer-motion';
import StackIcon from 'tech-stack-icons';
import { Sparkle, Code, GitBranch, MessageSquare, BriefcaseBusiness, User, Mail, Instagram, Linkedin, Puzzle, Terminal, Home, Menu, X } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const projects = [
    {
        title: 'רמיקוב מרובה משתתפים',
        description: 'משחק רמיקוב מרובה משתתפים מלא עם משחק בזמן אמת, אימות משתמשים, ותקשורת מאובטחת. נבנה עם Python, WebSockets, customTkinter, ו-SQLite.',
        url: 'https://github.com/GaGex1222/RummikubMultiplayer',
        image: '/rummikub.png',
    },
    {
        title: 'מתחרה טריוויה',
        description: 'אתר תחרותי לטריוויה המאפשר למשתמשים ליצור ולשחק משחקי טריוויה שונים עם מעקב ניקוד. נבנה עם Next.js, Drizzle, ו-Tailwind CSS.',
        url: 'https://trivia-competitor-vy24.vercel.app/',
        image: '/trivia.png',
    },
    {
        title: 'Mood Sync',
        description: 'אפליקציית מוזיקה מבוססת רגשות המנגנת שירים בהתאם למצב הרוח שלך באמצעות זיהוי פנים ובינה מלאכותית. נבנה עם Python, Next.js, ו-TensorFlow.',
        url: 'https://github.com/GaGex1222/Mood-Sync#',
        image: '/moodsync.png', // Corrected image path
    },
    {
        title: 'בוט דיסקורד Osu!',
        description: 'בוט דיסקורד המאפשר למשתמשים לצפות בפרופילי osu!, להשוות ציונים, ולעקוב אחר פעילות חברים באמצעות ה-API של osu!. נבנה ב-Python עם Selenium ו-Discord.py.',
        url: 'https://github.com/GaGex1222/osu-friends-discord-bot',
        image: '/osu.png', // Corrected image path
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

const aboutContent = {
    paragraph1: "בגיל 18 בלבד, צברתי ניסיון רב בפיתוח יישומים מגוונים, התחלתי הכל מאפס והגעתי עד לאפליקציות חכמות המשלבות בינה מלאכותית. אני מאמין שהדרך הטובה ביותר ללמוד היא דרך עשייה, ולכן אני תמיד מחפש את הפרויקט הבא שיאתגר אותי וידחוף אותי קדימה.",
    paragraph2: "התשוקה שלי טמונה ביצירת פתרונות אלגנטיים ויעילים לבעיות מורכבות. אני שם דגש על כתיבת קוד נקי, מודולרי וקל לתחזוקה, תוך שימוש בטכנולוגיות החדישות ביותר. כל פרויקט הוא עבורי הזדמנות ללמוד, לצמוח ולהביא ערך אמיתי. אני שואף לשלמות בכל פרט, ומתחייב לספק מוצרים ברמה הגבוהה ביותר.",
};

const services = [
    {
        icon: <Code size={30} className="text-lime-400" />,
        title: "פיתוח Full-Stack",
        description: "בניית אפליקציות ווב מקצה לקצה עם חווית משתמש מדהימה וביצועים אופטימליים."
    },
    {
        icon: <Puzzle size={30} className="text-lime-400" />,
        title: "אוטומציה וסקריפטים",
        description: "יצירת כלים וסקריפטים לאוטומציה של תהליכים משעממים וייעול העבודה."
    },
    {
        icon: <Terminal size={30} className="text-lime-400" />,
        title: "פתרונות מותאמים אישית",
        description: "פיתוח פתרונות תוכנה ייחודיים המותאמים בדיוק לצרכים העסקיים שלך."
    }
];

// Refactored Navbar Component with Mobile Configuration
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close menu after navigation
    };

    const navItems = [
        { name: 'בית', id: 'home', icon: <Home size={20} /> },
        { name: 'אודותיי', id: 'about', icon: <User size={20} /> },
        { name: 'שירותים', id: 'services', icon: <BriefcaseBusiness size={20} /> },
        { name: 'פרויקטים', id: 'projects', icon: <Code size={20} /> },
        { name: 'טכנולוגיות', id: 'skills', icon: <Terminal size={20} /> },
        { name: 'צור קשר', id: 'contact', icon: <Mail size={20} /> },
    ];

    // Animation variants for the mobile menu overlay
    const mobileMenuVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "tween", ease: "easeOut", duration: 0.3 } },
        exit: { x: "100%", opacity: 0, transition: { type: "tween", ease: "easeIn", duration: 0.3 } },
    };

    // Animation variants for individual links in the mobile menu
    const mobileLinkVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] bg-opacity-90 backdrop-blur-md shadow-lg py-4 px-8 border-b border-gray-800"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center" dir="rtl">
                {/* Logo / Name */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lime-400 text-3xl font-extrabold flex-shrink-0"
                >
                    <a href="#home" onClick={() => scrollToSection('home')} className="flex items-center">
                        <Sparkle className="ml-2" size={30} strokeWidth={1.5} /> גל דדון
                    </a>
                </motion.div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center space-x-8"> {/* Hidden on mobile, visible on md and up */}
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.id}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                                className="flex items-center text-gray-300 hover:text-lime-400 transition-colors duration-300 text-lg font-medium whitespace-nowrap"
                            >
                                {item.icon}
                                <span className="mr-2">{item.name}</span>
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button (Hamburger/X icon) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-300 hover:text-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-md p-2 transition-colors duration-200"
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay with AnimatePresence */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        // This overlay will slide in from the right
                        className="md:hidden fixed inset-0 bg-[#0A0A0A] bg-opacity-95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 pt-20" // Reduced pt slightly
                        dir="rtl"
                    >
                        <motion.ul
                            className="flex flex-col space-y-6"
                            // Stagger children for entrance animation
                            variants={{
                                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                            }}
                        >
                            {navItems.map((item) => (
                                <motion.li
                                    key={item.id}
                                    variants={mobileLinkVariants} // Apply item animation variants
                                >
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.id);
                                        }}
                                        className="flex items-center text-gray-100 hover:text-lime-400 transition-colors duration-300 text-3xl font-bold py-2"
                                    >
                                        {item.icon}
                                        <span className="mr-4">{item.name}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default function ReimaginedPortfolio() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
    const [status, setStatus] = React.useState<{ type: 'success' | 'error'; message: string } | null>(null);
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
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
                setStatus({ type: 'success', message: `תודה ${form.name}, אהיה בקשר בקרוב!` });
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.error || "משהו השתבש. אנא נסה שוב." });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus({ type: 'error', message: "שגיאת רשת. אנא נסה שוב מאוחר יותר." });
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div dir="rtl" className="min-h-screen bg-[#0A0A0A] text-gray-100 font-sans antialiased px-4 py-16 selection:bg-lime-400 selection:text-black">
            <Navbar />

            {/* Offset for fixed navbar. Adjust pt- value to be slightly more than navbar height */}
            <div id="home" className="pt-24 md:pt-32">
                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="max-w-6xl mx-auto mb-24 flex flex-col md:flex-row items-center gap-12 text-right"
                >
                    <header className="flex-1 text-center md:text-right">
                        <motion.h1
                        variants={itemVariants}
                        dir="rtl"
                        className="text-6xl font-extrabold mb-4 tracking-tight text-lime-400 text-right"
                        >
                            <TypeAnimation
                                sequence={[
                                'גל דדון', // types
                                2000,      // waits 2s
                                '',        // deletes
                                1000,      // waits 1s
                                ]}
                                wrapper="span"
                                speed={80}
                                repeat={Infinity}
                                className="inline-block"
                            />
                        </motion.h1>


                        <motion.p
                            variants={itemVariants}
                            className="text-xl max-w-xl text-gray-300 leading-relaxed mb-6"
                        >
                            מפתח תוכנה חדשני עם התמחות בבניית יישומים חזקים, סקלביליים וידידותיים למשתמש.
                        </motion.p>
                        <motion.button
                            variants={itemVariants}
                            className="mt-6 px-8 py-4 bg-lime-500 hover:bg-lime-600 text-black font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center md:justify-end mx-auto md:mr-0"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <MessageSquare className="ml-3" size={24} /> בואו נדבר!
                        </motion.button>
                    </header>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100, damping: 10 }}
                        className="flex-1 w-full max-w-xs md:max-w-md rounded-full overflow-hidden shadow-2xl border-4 border-lime-500 ring-4 ring-lime-700 ring-opacity-50"
                    >
                        <img
                            src="/me.jpeg"
                            alt="גל דדון"
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* --- */}
            {/* About Section */}
            <section id="about" className="max-w-6xl mx-auto mb-24 py-16 bg-[#1A1A1A] rounded-2xl shadow-xl border border-gray-800 scroll-mt-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-5xl font-bold mb-12 text-center text-lime-400 flex items-center justify-center"
                >
                    <User className="ml-4 text-lime-300" size={48} strokeWidth={1.5} /> אודותיי
                </motion.h2>
                <div className="text-gray-300 text-lg leading-relaxed px-8 text-right space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {aboutContent.paragraph1}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {aboutContent.paragraph2}
                    </motion.p>
                </div>
            </section>

            {/* --- */}
            {/* Services Section */}
            <section id="services" className="max-w-6xl mx-auto mb-24 py-16 scroll-mt-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-5xl font-bold mb-12 text-center text-lime-400 flex items-center justify-center"
                >
                    <BriefcaseBusiness className="ml-4 text-lime-300" size={48} strokeWidth={1.5} /> מה אני מציע
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
                            className="bg-[#1A1A1A] rounded-2xl p-8 text-center shadow-xl border border-gray-800 transform hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div className="mb-4 flex justify-center">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- */}
            {/* Projects Section */}
            <section id="projects" className="max-w-7xl mx-auto mb-24 py-16 scroll-mt-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-5xl font-bold mb-12 text-center text-lime-400 flex items-center justify-center"
                >
                    <Code className="ml-4 text-lime-300" size={48} strokeWidth={1.5} /> הפרויקטים שלי
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {projects.map(({ title, description, url, image }, i) => (
                        <motion.a
                            key={title}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                            className="transform hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden shadow-xl bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-gray-800"
                        >
                            <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy" />
                            <div className="p-6 text-right">
                                <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
                                <p className="text-gray-300 text-sm">{description}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* --- */}
            {/* Skills Section */}
            <section id="skills" className="max-w-6xl mx-auto mb-24 py-16 scroll-mt-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-5xl font-bold mb-12 text-center text-lime-400 flex items-center justify-center"
                >
                    <Terminal className="ml-4 text-lime-300" size={48} strokeWidth={1.5} /> טכנולוגיות
                </motion.h2>
                <motion.div
                    className="flex flex-wrap justify-center gap-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {skills.map(({ name, iconName }) => (
                        <motion.div
                            key={name}
                            className="flex flex-col items-center space-y-3 text-gray-300 cursor-default"
                            whileHover={{ scale: 1.15, color: '#A3E635' }}
                            transition={{ type: 'spring', stiffness: 900, damping: 15 }}
                        >
                            <StackIcon variant={name === "flask" ? "dark" : "default"} name={iconName} className="w-18 h-18 text-gray-200" />
                            <span className="mt-2 text-lg font-medium">{name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* --- */}
            {/* Contact Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                id='contact'
                className="max-w-4xl mx-auto bg-[#1A1A1A] rounded-2xl p-10 shadow-lg border border-gray-800 scroll-mt-24"
            >
                <h2 className="text-4xl font-bold mb-6 text-center text-lime-400 flex items-center justify-center">
                    <Mail className="ml-4 text-lime-300" size={40} strokeWidth={1.5} /> בואו נדבר
                </h2>
                <p className="text-center text-gray-300 mb-8 text-lg">
                    יש לכם פרויקט בראש? רוצים לשתף פעולה? או סתם רוצים להגיד שלום? אני זמין לשמוע!
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="שמך המלא"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="p-4 rounded-lg bg-[#0A0A0A] placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-500 text-right border border-gray-700"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="כתובת אימייל"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="p-4 rounded-lg bg-[#0A0A0A] placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-500 text-right border border-gray-700"
                    />
                    <textarea
                        name="message"
                        placeholder="הקלד את ההודעה שלך כאן..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="p-4 rounded-lg bg-[#0A0A0A] placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none text-right border border-gray-700"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className={`text-black shadow-md font-bold py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center ${
                            loading ? "bg-gray-500 cursor-not-allowed" : "bg-lime-500 hover:bg-lime-600 transform hover:-translate-y-0.5 hover:scale-[1.01]"
                        }`}
                    >
                        {loading ? "שולח..." : <><MessageSquare className="ml-3" size={24} /> שלח הודעה</>}
                    </button>
                </form>
                <div className="mt-10 text-center text-gray-300 text-lg">
                    <p className="mb-4">ניתן ליצור איתי קשר גם כאן:</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <p className="flex items-center">
                            <Instagram className="ml-2" size={20} />
                            אינסטגרם:{' '}
                            <a
                                href="https://instagram.com/gal_dadon1212"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lime-400 hover:underline hover:text-lime-300 transition-colors mr-1"
                            >
                                @gal_dadon1212
                            </a>
                        </p>
                        <p className="flex items-center">
                            <GitBranch className="ml-2" size={20} />
                            גיטהאב:{' '}
                            <a
                                href="https://github.com/GaGex1222"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lime-400 hover:underline hover:text-lime-300 transition-colors mr-1"
                            >
                                @GaGex1222
                            </a>
                        </p>
                        <p className="flex items-center">
                            <Linkedin className="ml-2" size={20} />
                            לינקדאין:{' '}
                            <a
                                href="https://www.linkedin.com/in/gal-dadon-58ba19307/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lime-400 hover:underline hover:text-lime-300 transition-colors mr-1"
                            >
                                @Gal Dadon
                            </a>
                        </p>
                        <p className="flex items-center">
                            דיסקורד: <span className="text-lime-400 mr-1">GaGex</span>
                        </p>
                    </div>
                </div>
                {status && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-6 p-4 rounded-md text-center font-semibold ${
                            status.type === "success"
                                ? "bg-emerald-700 text-emerald-100"
                                : "bg-red-700 text-red-100"
                        }`}
                    >
                        {status.message}
                    </motion.div>
                )}
            </motion.section>

            {/* Footer */}
            <footer className="text-center text-gray-500 mt-24 border-t border-gray-800 pt-8 text-sm">
                <p>© {new Date().getFullYear()} גל דדון. כל הזכויות שמורות.</p>
                <p className="mt-1 text-xs">נבנה עם תשוקה ויצירתיות ✨ באמצעות Next.js, Tailwind, ו-Framer Motion</p>
            </footer>
        </div>
    );
}