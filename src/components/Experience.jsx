import Section from './Section';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();
    const experiences = t.experience.list;

    return (
        <Section id="experience">
            <h2 className="text-4xl font-cyber text-white mb-16 text-center">{t.experience.title.split(' ')[0]} <span className="text-neon">{t.experience.title.split(' ').slice(1).join(' ')}</span></h2>

            <div className="relative max-w-3xl mx-auto pl-8 md:pl-0">
                {/* Central Line for desktop */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 hidden md:block transform -translate-x-1/2"></div>

                {/* Timeline Line for mobile */}
                <div className="absolute left-2 top-0 bottom-0 w-1 bg-white/10 md:hidden"></div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>

                            {/* Dot */}
                            {/* <div className={`absolute left-2 md:left-1/2 w-4 h-4 bg-dark border-2 ${exp.color.replace('border-', 'border-')} rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_10px_currentColor]`} style={{ borderColor: index === 0 ? '#00f3ff' : 'white' }}></div> */}

                            {/* Content */}
                            {/* <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right" style={{ paddingLeft: index % 2 === 0 ? '3rem' : '0', paddingRight: index % 2 === 0 ? '0' : '3rem', textAlign: index % 2 === 0 ? 'left' : 'right' }}> */}
                            {/* Mobile fix: always left align on mobile, handle reset in style logic above which is getting complex. Let's simplify class logic */}
                            {/* </div> */}
                        </div>
                    ))}
                    {/* Re-doing the map structure for cleaner responsive code */}
                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex items-center justify-between md:justify-normal w-full group mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Dot */}
                            <div className={`absolute left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-dark border-2 ${exp.color || 'border-white'} md:-translate-x-1/2 z-10 box-content shadow-[0_0_8px_currentColor]`}></div>

                            <div className="w-full md:w-[45%] pl-10 md:pl-0">
                                <div className={`p-6 rounded-xl bg-white/5 border border-white/10 hover:border-neon/50 transition-colors duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                    <p className="text-neon mb-2">{exp.role}</p>
                                    <span className="text-sm text-gray-400 font-mono block mb-4">{exp.date}</span>
                                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                            <div className="hidden md:block w-[45%]"></div> {/* Spacer */}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
