import { useState } from 'react';
import Section from './Section';
import { Mail, Send, Phone, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        title: "Bot for BMU Canteen",
        description: "Automated ordering and menu management system for the university canteen.",
        tech: ["Python", "Aiogram", "PostgreSQL"],
        status: "Completed"
    },
    {
        title: "Accounting System",
        description: "Comprehensive 1C replacement for accounting automation.",
        tech: ["React", "Typescript", "Node.js"],
        status: "In Progress"
    }
];

const Projects = () => {
    return (
        <Section id="projects">
            <h2 className="text-4xl font-cyber text-white mb-12 text-center">Featured <span className="text-purple-500">Projects</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="group relative h-72 rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-neon/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex justify-between items-end mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-neon transition-colors">{project.title}</h3>
                                <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10">{project.status}</span>
                            </div>

                            <p className="text-gray-300 mb-6 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs text-secondary font-mono px-2 py-1 bg-secondary/10 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

const Contact = () => {
    const [activeContact, setActiveContact] = useState(null);

    const contactMethods = [
        {
            id: 'email',
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'aiderparmankulov@gmail.com',
            action: 'mailto:aiderparmankulov@gmail.com',
            color: 'text-neon',
            bg: 'bg-neon/10',
            border: 'border-neon/30'
        },
        {
            id: 'telegram',
            icon: <Send size={24} />,
            label: 'Telegram',
            value: '@air_a_P',
            action: 'https://t.me/air_a_P',
            color: 'text-secondary',
            bg: 'bg-secondary/10',
            border: 'border-secondary/30'
        },
        {
            id: 'phone',
            icon: <Phone size={24} />,
            label: 'Phone',
            value: '+998 (93) 517-91-46',
            action: 'tel:+998935179146',
            color: 'text-green-400',
            bg: 'bg-green-400/10',
            border: 'border-green-400/30'
        },
        {
            id: 'instagram',
            icon: <Instagram size={24} />,
            label: 'Instagram',
            value: '@air_a_p',
            action: 'https://www.instagram.com/air_a_p?igsh=MTFqZHcwYWR2MXRo&utm_source=qr',
            color: 'text-pink-500',
            bg: 'bg-pink-500/10',
            border: 'border-pink-500/30'
        }
    ];

    return (
        <Section id="contact" className="pb-20">
            <div className="max-w-xl mx-auto text-center border p-12 rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm">
                <h2 className="text-3xl font-cyber text-white mb-8">Initialize <span className="text-neon">Handshake</span></h2>
                <p className="text-gray-400 mb-10">Select a channel to establish connection:</p>

                {/* Icons Row */}
                <div className="flex justify-center gap-6 mb-8">
                    {contactMethods.map((method) => (
                        <button
                            key={method.id}
                            onClick={() => setActiveContact(activeContact === method.id ? null : method.id)}
                            className={`p-4 rounded-full transition-all duration-300 border ${activeContact === method.id
                                    ? `${method.bg} ${method.color} ${method.border} scale-110 shadow-[0_0_15px_currentColor]`
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {method.icon}
                        </button>
                    ))}
                </div>

                {/* Info Display Area */}
                <div className="h-16 flex items-center justify-center">
                    <AnimatePresence mode='wait'>
                        {activeContact && (
                            <motion.div
                                key={activeContact}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <span className="text-xs uppercase tracking-widest text-gray-500">
                                    {contactMethods.find(m => m.id === activeContact).label}
                                </span>
                                <a
                                    href={contactMethods.find(m => m.id === activeContact).action}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xl font-bold ${contactMethods.find(m => m.id === activeContact).color} hover:underline decoration-1 underline-offset-4`}
                                >
                                    {contactMethods.find(m => m.id === activeContact).value}
                                </a>
                            </motion.div>
                        )}
                        {!activeContact && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-gray-600 italic"
                            >
                                Click an icon to reveal details
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    )
}

export { Projects, Contact };
