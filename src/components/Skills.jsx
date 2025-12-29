import Section from './Section';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();
    const categories = t.skills.categories;

    return (
        <Section id="skills">
            <h2 className="text-4xl font-cyber text-white mb-12 text-center">{t.skills.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(categories).map(([key, category]) => (
                    <div key={key} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-secondary/50 transition-all duration-300 transform hover:-translate-y-2">
                        <h3 className="text-xl font-bold text-gray-200 mb-6 border-b border-white/10 pb-2">{category.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.items.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/5 text-sm md:text-base text-neon rounded-full border border-white/5 shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
