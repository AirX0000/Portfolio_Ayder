import Section from './Section';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    // Array of roles to cycle through or display
    const roles = t.hero.roles;

    return (
        <Section id="hero" className="min-h-screen flex items-center justify-center pt-0">
            <div className="text-center z-10 w-full">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold font-cyber text-white mb-6 uppercase tracking-wider relative inline-block group"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Ayder <span className="text-neon drop-shadow-[0_0_10px_rgba(0,243,255,0.7)]">Parmankulov</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-neon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                </motion.h1>

                <motion.div
                    className="mt-4 text-xl md:text-2xl text-gray-300 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    &lt; <span className="text-secondary">{t.hero.statusValues.label}</span> status="<span className="text-green-400">{t.hero.statusValues.online}</span>" /&gt;
                </motion.div>

                <motion.div
                    className="mt-8 flex flex-wrap justify-center gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    {roles.map((role, index) => (
                        <span key={index} className="px-4 py-2 bg-dark-lighter border border-neon/30 rounded text-neon font-cyber text-sm tracking-widest hover:bg-neon/10 transition-colors cursor-default">
                            {role}
                        </span>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
