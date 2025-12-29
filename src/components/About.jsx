import Section from './Section';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Section id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-4xl font-cyber text-white mb-6">About <span className="text-neon">Me</span></h2>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            I am currently a fast-learning student at <strong className="text-white">British Management University</strong>,
                            specializing in <span className="text-secondary">Accounting & Finance</span>.
                        </p>
                        <p className="text-gray-400 mb-6">
                            My unique advantage lies in the intersection of finance and technology.
                            While I understand the logic of business and numbers, I also possess the technical capability to build, protect, and present digital solutions.
                        </p>

                        <h3 className="text-xl font-bold text-white mb-4">My Multidisciplinary Approach:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-neon mt-1">▹</span>
                                <span className="text-gray-300">
                                    <strong className="text-white">Cyber Security:</strong> Ensuring data integrity and system safety (Pentesting).
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-neon mt-1">▹</span>
                                <span className="text-gray-300">
                                    <strong className="text-white">Web Creation:</strong> Building functional and modern interfaces.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-neon mt-1">▹</span>
                                <span className="text-gray-300">
                                    <strong className="text-white">Design & Content:</strong> Using <span className="text-secondary">Figma</span> and <span className="text-secondary">Microsoft Designer</span> to create visually compelling products, alongside video editing skills for storytelling.
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
                            <div className="text-xs text-neon uppercase tracking-widest">University</div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-dark/80 border border-secondary/30 p-6 rounded-xl text-center"
                        >
                            <div className="text-4xl font-bold text-white mb-2">A&F</div>
                            <div className="text-xs text-secondary uppercase tracking-widest">Faculty</div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-dark/80 border border-purple-500/30 p-6 rounded-xl text-center col-span-2"
                        >
                            <div className="text-xl font-bold text-white mb-2">Finance + Tech</div>
                            <div className="text-xs text-purple-400 uppercase tracking-widest">Unique Synergy</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
