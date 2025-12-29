import Section from './Section';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Certificates = () => {
    const { t } = useLanguage();
    const certificates = t.certificates.list;

    return (
        <Section id="certificates">
            <h2 className="text-4xl font-cyber text-white mb-12 text-center">{t.certificates.title}</h2>

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
                                {cert.link && <span className="text-neon/80 text-[10px] hidden group-hover:inline-block">{t.certificates.verify}</span>}
                            </div>

                            <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                                {cert.issuer}
                                <span className="text-[10px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded-full">{t.certificates.certified}</span>
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
