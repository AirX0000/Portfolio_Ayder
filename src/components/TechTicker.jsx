import { useRef } from 'react';
import { motion } from 'framer-motion';

const techs = [
    "Kali Linux", "Wireshark", "Metasploit", "Python", "React", "Node.js",
    "Figma", "Docker", "Git", "PostgreSQL", "Three.js", "TailwindCSS",
    "Burp Suite", "Nmap", "Linux", "SQL"
];

const TechTicker = () => {
    return (
        <div className="w-full bg-black/30 border-y border-white/5 py-4 overflow-hidden relative z-10 backdrop-blur-sm">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark to-transparent z-10"></div>

            <div className="flex whitespace-nowrap gap-12 w-max animate-scroll">
                {/* Duplicated list x4 to ensure enough width for large screens */}
                {[...techs, ...techs, ...techs, ...techs].map((tech, index) => (
                    <span
                        key={index}
                        className="text-lg font-mono text-gray-400 hover:text-neon transition-colors cursor-default"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechTicker;
