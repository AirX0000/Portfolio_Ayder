import Section from './Section';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certificates = [
    {
        name: "Foundations of Cybersecurity",
        issuer: "Google",
        date: "Oct 2025",
        score: "Completed",
        tags: ["Linux", "Python", "Network Security"],
        color: "border-green-500",
        link: "https://coursera.org/share/c30b365e8dac6f06250ddb4618a555b1"
    },
    {
        name: "Play It Safe: Manage Security Risks",
        issuer: "Google",
        date: "Oct 2025",
        score: "Completed",
        tags: ["Audit", "Risk Mgmt", "Incident Response"],
        color: "border-red-500",
        link: "https://coursera.org/share/f78a08175afe8c45c63a972fb242c300"
    },
    {
        name: "Connect and Protect: Networks",
        issuer: "Google",
        date: "Oct 2025",
        score: "Completed",
        tags: ["Network Security", "Cloud Computing"],
        color: "border-blue-500",
        link: "https://coursera.org/share/ba40c760f3a2af29008d379a5c30008e"
    },
    {
        name: "Tools of the Trade: Linux and SQL",
        issuer: "Google",
        date: "Oct 2025",
        score: "Completed",
        tags: ["Linux", "SQL", "Packet Analysis"],
        color: "border-yellow-500",
        link: "https://coursera.org/share/21ef169dc357e264c63f4edd1324715b"
    },
    {
        name: "Assets, Threats, and Vulnerabilities",
        issuer: "Google",
        date: "Oct 2025",
        score: "Completed",
        tags: ["Cryptography", "Risk Mgmt", "Controls"],
        color: "border-purple-500",
        link: "https://coursera.org/share/8d4c0c041e8f33b9325e2edbd1878c41"
    }
];

const Certificates = () => {
    return (
        <Section id="certificates">
            <h2 className="text-4xl font-cyber text-white mb-12 text-center">Certifications <span className="text-gray-500">&</span> <span className="text-white">Achievements</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificates.map((cert, index) => {
                    const MotionTag = cert.link ? motion.a : motion.div;
                    const props = cert.link ? {
                        href: cert.link,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    } : {};

                    return (
                        <MotionTag
                            key={index}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden group block cursor-pointer`}
                            {...props}
                        >
                            <div className={`absolute top-0 left-0 w-1 h-full ${cert.color.replace('border-', 'bg-')}`}></div>

                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-white group-hover:text-neon transition-colors max-w-[80%]">{cert.name}</h3>
                                {cert.link && <ExternalLink size={16} className="text-gray-500 group-hover:text-neon transition-colors" />}
                            </div>

                            <div className="flex justify-between items-center text-xs text-gray-500 font-mono mb-4">
                                <span>{cert.date}</span>
                                {cert.link && <span className="text-neon/80 text-[10px] hidden group-hover:inline-block">Verify Credential →</span>}
                            </div>

                            <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                                {cert.issuer}
                                <span className="text-[10px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded-full">Certified</span>
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4 border-t border-white/5 pt-4">
                                {cert.tags.map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </MotionTag>
                    );
                })}
            </div>
        </Section>
    );
};

export default Certificates;
