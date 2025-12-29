import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center py-20 px-6 relative ${className}`}>
            <div className="max-w-7xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
