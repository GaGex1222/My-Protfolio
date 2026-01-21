'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StackIcon from 'tech-stack-icons';
import { Sparkle, Code, GitBranch, BriefcaseBusiness, Mail, Instagram, Linkedin, Puzzle, Terminal, Home, Menu, X, Rocket, ShieldCheck, ChevronLeft, Loader2 } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

// --- DATA ---
const projects = [
    {
        title: 'רמיקוב מרובה משתתפים',
        description: 'משחק רמיקוב מלא עם Real-time WebSockets. חווית משחק חלקה וממשק משתמש מודרני.',
        url: 'https://github.com/GaGex1222/RummikubMultiplayer',
        image: '/rummikub.png',
        tags: ['Python', 'WebSockets', 'SQLite']
    },
    {
        title: 'מתחרה טריוויה',
        description: 'פלטפורמת טריוויה תחרותית עם לוחות ניקוד וניהול משתמשים בזמן אמת.',
        url: 'https://trivia-competitor-vy24.vercel.app/',
        image: '/trivia.png',
        tags: ['Next.js', 'Tailwind', 'Vercel']
    },
    {
        title: 'Mood Sync',
        description: 'בינה מלאכותית המזהה רגשות דרך המצלמה ומתאימה פלייליסט אישי ב-Spotify.',
        url: 'https://github.com/GaGex1222/Mood-Sync#',
        image: '/moodsync.png',
        tags: ['AI', 'Python', 'React']
    },
    {
        title: 'בוט דיסקורד למשחק - Osu!',
        description: 'בוט שמשמש בין חברים לבדיקת ציונים במשחק, הכל בזמן אמת ומזהה מפות במשחק לפי שם עם Selenium.',
        url: 'https://github.com/GaGex1222/osu-friends-discord-bot',
        image: '/osu.png',
        tags: ['Python', "Websockets", "Discord", "Selenium"]
    },
    {
        title: 'NewChemi',
        description: 'אתר נחיתה מקצועי שנבנה עבור עסק לייבוא כימיקלים, תוך דגש על מהירות וביצועים.',
        url: 'https://newchemi.com',
        image: '/newchemi.png',
        tags: ['Next.js', 'UI/UX', 'Tailwind']
    }
];

const timelineData = [
    {
        age: "גיל 17",
        title: "הניצוץ הראשון",
        description: "הכניסה שלי לעולם הפיתוח, למידה אינטנסיבית של שנה שלמה מכל הסוגים, שפות, מאגרי נתונים, אלגוריתמים, תקשורת ועוד..",
        icon: <Code className="text-sky-500" size={24} />
    },
    {
        age: "גיל 18",
        title: "פרילאנס ופתרונות לעסקים בשוק החופשי",
        description: "הקמת תשתיות דיגיטליות לעסקים ופיתוח Full-Stack מותאם אישית ללקוחות בשוק החופשי.",
        icon: <BriefcaseBusiness className="text-sky-500" size={24} />
    },
    {
        age: "גיל 19",
        title: "פיתוח מערכת לחיל השריון (כיום)",
        description: "פיתוח מערכת חיונית ומסווגת לחיל השריון, הכוללת איסוף נתונים ועזרה סטטיסטית ללוחמים להצליח בשדה הקרב.",
        icon: <ShieldCheck className="text-sky-500" size={24} />
    }
];

const techStack = [
    { name: 'Next.js', icon: 'nextjs2' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'reactjs' },
    { name: 'Python', icon: 'python' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Git', icon: 'git' },
    { name: 'C#', icon: 'csharp' }
];

// --- COMPONENTS ---

const BackgroundGradient = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-200/30 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/20 blur-[120px]" />
    </div>
);

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('/api/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const navItems = [
        { name: 'בית', id: 'home', icon: <Home size={18} /> },
        { name: 'ציר זמן', id: 'timeline', icon: <Rocket size={18} /> },
        { name: 'שירותים', id: 'services', icon: <BriefcaseBusiness size={18} /> },
        { name: 'פרויקטים', id: 'projects', icon: <Code size={18} /> },
        { name: 'צור קשר', id: 'contact', icon: <Mail size={18} /> },
    ];

    return (
        <div dir="rtl" className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden">
            <BackgroundGradient />
            
            {/* Navbar */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
                <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl px-4 md:px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2 font-black text-sky-600 text-xl cursor-pointer shrink-0" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        גל דדון <Sparkle size={24} className="animate-pulse" />
                        <span className="hidden xs:block">גל דדון</span>
                    </div>
                    <ul className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button onClick={() => document.getElementById(item.id)?.scrollIntoView({behavior:'smooth'})} className="flex items-center gap-1.5 text-slate-600 hover:text-sky-600 transition-all font-semibold text-sm hover:scale-105">
                                    {item.icon} {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-600">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/50 md:hidden flex flex-col gap-4 items-center">
                            {navItems.map(item => (
                                <button key={item.id} onClick={() => {document.getElementById(item.id)?.scrollIntoView({behavior:'smooth'}); setIsMenuOpen(false);}} className="text-lg font-bold text-slate-700 flex items-center gap-3 w-full justify-center">
                                    {item.icon} {item.name}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-40 md:pt-52 pb-32 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="flex-1 text-center md:text-right">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sky-100 text-sky-700 font-bold text-sm animate-bounce">זמין לפרויקטים חדשים 🚀</div>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] bg-gradient-to-l from-slate-900 via-sky-800 to-sky-600 bg-clip-text text-transparent">
                            <TypeAnimation sequence={['גל דדון', 2000, 'Software', 2000]} repeat={Infinity} />
                        </h1>
                        <p className="text-xl text-slate-500 mb-10 max-w-xl font-medium mx-auto md:mx-0">מפתח פתרונות קצה-לקצה, מתמחה במערכות מורכבות, ארכיטקטורה נקייה וחווית משתמש שלא שוכחים.</p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="px-8 md:px-10 py-4 bg-sky-600 text-white font-black rounded-2xl shadow-xl hover:bg-sky-700 transition-all hover:-translate-y-1">בואו נתחיל</button>
                            <button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})} className="px-8 md:px-10 py-4 bg-white text-slate-900 font-black rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all">לצפייה בעבודות</button>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
                        <div className="absolute inset-0 bg-sky-400 rounded-full blur-[100px] opacity-20 animate-pulse" />
                        <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] bg-gradient-to-tr from-sky-400 to-blue-600 rounded-[3rem] md:rounded-[4rem] rotate-6 group-hover:rotate-3 transition-all duration-500 overflow-hidden shadow-2xl">
                            <img src="/me.jpeg" className="w-full h-full object-cover -rotate-6 group-hover:rotate-0 transition-transform duration-500 scale-110" alt="גל דדון" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-slate-400 font-bold uppercase tracking-[0.2em] text-sm mb-12">הכלים שבאמצעותם אני בונה</h2>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70">
                        {techStack.map((tech) => (
                            <div key={tech.name} className="flex flex-col items-center gap-2 group">
                                <StackIcon name={tech.icon} className="w-10 h-10 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-[10px] font-bold text-slate-400 group-hover:text-sky-600">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section id="timeline" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">ציר הזמן שלי</h2>
                        <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full" />
                    </div>
                    <div className="space-y-12 relative">
                        {/* Line - hidden on mobile for cleaner look or kept as you wish */}
                        <div className="absolute top-0 bottom-0 right-[39px] w-1 bg-gradient-to-b from-sky-500 via-blue-200 to-transparent rounded-full hidden md:block" />
                        
                        {timelineData.map((item, i) => (
                            <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} viewport={{ once: true }} className="relative md:pr-24 group">
                                {/* Age Indicator - Updated to show on mobile */}
                                <div className="absolute -right-2 md:right-0 -top-6 md:top-0 w-14 h-14 md:w-20 md:h-20 bg-white shadow-xl rounded-2xl md:rounded-3xl flex items-center justify-center text-sky-600 z-10 border border-slate-50 group-hover:scale-110 transition-transform">
                                    <span className="text-lg md:text-xl font-black">{item.age}</span>
                                </div>
                                
                                <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 mt-4 md:mt-0">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-sky-50 text-sky-600 rounded-2xl shrink-0">{item.icon}</div>
                                        <h3 className="text-xl md:text-2xl font-black">{item.title}</h3>
                                    </div>
                                    <p className="text-slate-500 text-base md:text-lg leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 bg-white/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-right">
                        <div>
                            <h2 className="text-4xl font-black mb-2">פרויקטים נבחרים</h2>
                            <p className="text-slate-500 font-medium">בניית פתרונות חכמים לבעיות מורכבות</p>
                        </div>
                        <a href="https://github.com/GaGex1222" target="_blank" className="flex items-center gap-2 text-sky-600 font-bold hover:gap-4 transition-all">ל-GitHub המלא <ChevronLeft size={20}/></a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((p, i) => (
                            <motion.a href={p.url} key={i} whileHover={{ y: -10 }} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} />
                                    <div className="absolute bottom-4 right-4 flex flex-wrap gap-2">
                                        {p.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-sky-600 uppercase">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 text-right flex-1">
                                    <h3 className="text-xl font-black mb-3 group-hover:text-sky-600 transition-colors">{p.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{p.description}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 md:py-40 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-20 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                            <div className="text-center lg:text-right">
                                <h2 className="text-3xl md:text-5xl font-black mb-6">יש לכם רעיון?<br/><span className="text-sky-400">בואו נהפוך אותו לקוד.</span></h2>
                                <p className="text-slate-400 text-base md:text-lg mb-10">אני פתוח לשיתופי פעולה מעניינים, פרויקטים מאתגרים או סתם שיחה על טכנולוגיה.</p>
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row items-center gap-4 justify-center lg:justify-start">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-sky-400 border border-white/10 shrink-0"><Mail size={24}/></div>
                                        <span className="font-bold text-sm md:text-lg break-all">gald12123434@gmail.com</span>
                                    </div>
                                    <div className="flex gap-4 justify-center lg:justify-start">
                                        <a href="https://linkedin.com" target="_blank" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-sky-600 transition-all border border-white/10"><Linkedin size={22}/></a>
                                        <a href="https://github.com/GaGex1222" target="_blank" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-sky-600 transition-all border border-white/10"><GitBranch size={22}/></a>
                                        <a href="https://instagram.com/gal_dadon1212" target="_blank" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-sky-600 transition-all border border-white/10"><Instagram size={22}/></a>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/10 space-y-4 w-full">
                                <input required type="text" placeholder="שם מלא" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-sky-500 transition-all font-bold placeholder:text-slate-500 text-white" />
                                <input required type="email" placeholder="אימייל" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-sky-500 transition-all font-bold placeholder:text-slate-500 text-white" />
                                <textarea required placeholder="ספרו לי על הפרויקט..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} className="w-full p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-sky-500 transition-all font-bold placeholder:text-slate-500 text-white resize-none" />
                                <button disabled={status === 'loading'} className={`w-full py-4 md:py-5 font-black rounded-2xl transition-all flex items-center justify-center gap-2 ${status === 'loading' ? 'bg-slate-700 cursor-not-allowed' : status === 'success' ? 'bg-green-500 shadow-green-500/20' : 'bg-sky-500 hover:bg-sky-400 shadow-sky-500/20'}`}>
                                    {status === 'loading' ? <><Loader2 className="animate-spin" /> שולח...</> : status === 'success' ? 'הודעה נשלחה!' : 'שגר הודעה'}
                                </button>
                                {status === 'error' && <p className="text-red-400 text-center text-sm font-bold mt-2">אופס! חלה שגיאה בשליחה.</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 text-center text-slate-400 font-bold text-sm">
                <p>© {new Date().getFullYear()} גל דדון — עוצב ונבנה עם המון קוד.</p>
            </footer>
        </div>
    );
}