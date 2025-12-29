import Section from './Section';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <Section id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-4xl font-cyber text-white mb-6">{t.about.title} <span className="text-neon">{t.about.me}</span></h2>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            {t.about.bio1} <strong className="text-white">{t.about.university}</strong>,
                            {t.about.bio2} <span className="text-secondary">{t.about.faculty}</span>.
                        </p>
                        <p className="text-gray-400 mb-6">
                            {t.about.bio3}
                        </p>

                        <h3 className="text-xl font-bold text-white mb-4">{t.about.multidisciplinary}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-neon mt-1">▹</span>
                                <span className="text-gray-300">
                                    <strong className="text-white">{t.about.skills.cyber.title}</strong> {t.about.skills.cyber.desc}
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-neon mt-1">▹</span>
                                <span className="text-gray-300">
                                    <strong className="text-white">{t.about.skills.web.title}</strong> {t.about.skills.web.desc}
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-neon mt-1">▹</span>
                                <span className="text-gray-300">
                                    <strong className="text-white">{t.about.skills.design.title}</strong> {t.about.skills.design.desc}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Visual/Stats Column */}
                <div className="relative">
                    {/* Decorative circle glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon/20 rounded-full blur-[80px]"></div>

                    <div className="relative grid grid-cols-2 gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-dark/80 border border-neon/30 p-6 rounded-xl text-center"
                        >
                            <div className="text-4xl font-bold text-white mb-2">BMU</div>
                            <div className="text-xs text-neon uppercase tracking-widest">{t.about.stats.uni}</div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-dark/80 border border-secondary/30 p-6 rounded-xl text-center"
                        >
                            <div className="text-4xl font-bold text-white mb-2">A&F</div>
                            <div className="text-xs text-secondary uppercase tracking-widest">{t.about.stats.faculty}</div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-dark/80 border border-purple-500/30 p-6 rounded-xl text-center col-span-2"
                        >
                            <div className="text-xl font-bold text-white mb-2">Finance + Tech</div>
                            <div className="text-xs text-purple-400 uppercase tracking-widest">{t.about.stats.synergy}</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
