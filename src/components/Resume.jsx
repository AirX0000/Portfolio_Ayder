import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Printer, Github, Linkedin, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Resume = () => {
    const { t, language, toggleLanguage } = useLanguage();

    const printResume = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 print:p-0 print:bg-white text-gray-800 font-sans">
            {/* Control Bar (Hidden when printing) */}
            <div className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center print:hidden">
                <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">{t.resume.back}</a>
                <div className="flex gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors font-medium shadow-sm"
                    >
                        <Globe size={18} />
                        <span className="uppercase">{language}</span>
                    </button>
                    <button
                        onClick={printResume}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-sm"
                    >
                        <Printer size={18} />
                        {t.resume.download}
                    </button>
                </div>
            </div>

            {/* A4 Resume Page */}
            <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none p-[15mm] min-h-[297mm]">

                {/* Header */}
                <header className="border-b-2 border-gray-800 pb-6 mb-6">
                    <div className="flex justify-between items-end">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-tight mb-2">Ayder Parmankulov</h1>
                            <p className="text-xl text-gray-600 font-light">{t.resume.role}</p>
                        </div>
                        <div className="text-right text-sm text-gray-600 leading-relaxed">
                            <div className="flex items-center justify-end gap-2">
                                <span>aiderparmankulov@gmail.com</span>
                                <Mail size={14} />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <span>+998 (93) 517-91-46</span>
                                <Phone size={14} />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <span>Uzbekistan</span>
                                <MapPin size={14} />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-3 gap-8">
                    {/* Left Column (Main Content) */}
                    <div className="col-span-2 space-y-6">

                        {/* Summary */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">{t.resume.profile.title}</h2>
                            <p className="text-sm text-gray-600 leading-relaxed text-justify">
                                {t.resume.profile.text}
                            </p>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">{t.experience.title}</h2>

                            {t.experience.list.map((exp, index) => (
                                <div className="mb-4" key={index}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-gray-800">{exp.company}</h3>
                                        <span className="text-sm text-gray-500 italic">{exp.date}</span>
                                    </div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-1">{exp.role}</h4>
                                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                        <li>{exp.description}</li>
                                    </ul>
                                </div>
                            ))}
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">{t.projects.title}</h2>

                            {t.projects.list.map((proj, index) => (
                                <div className="mb-3" key={index}>
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800 text-sm">{proj.title}</h3>
                                        <span className="text-xs px-2 py-0.5 bg-gray-200 rounded text-gray-600">{proj.tech.join(', ')}</span>
                                    </div>
                                    <p className="text-xs text-gray-600">{proj.description}</p>
                                </div>
                            ))}
                        </section>

                        {/* Certificates */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">{t.certificates.title}</h2>
                            <ul className="space-y-2">
                                {t.certificates.list.map((cert, index) => (
                                    <li className="text-sm text-gray-700" key={index}>
                                        <span className="font-semibold block">{cert.name}</span>
                                        <span className="text-xs text-gray-500">{cert.issuer} • {cert.date}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="space-y-6">

                        {/* Education */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">{t.resume.education.title}</h2>
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm">{t.resume.education.uni}</h3>
                                <p className="text-sm text-gray-600 italic">{t.resume.education.faculty}</p>
                                <p className="text-xs text-gray-500 mt-1">{t.resume.education.status}</p>
                            </div>
                        </section>

                        {/* Technical Skills */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">{t.resume.skills.title}</h2>

                            <div className="mb-3">
                                <h3 className="text-xs font-bold text-gray-500 uppercase mb-1">{t.resume.skills.cyber}</h3>
                                <div className="flex flex-wrap gap-1">
                                    {t.skills.categories.core.items.filter(i => ['Cyber Security', 'Penetration Testing'].some(k => i.includes(k) || k.includes(i))).concat(['Kali Linux', 'Burp Suite', 'Nmap', 'Metasploit', 'Wireshark']).slice(0, 8).map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">{skill}</span>
                                    ))}
                                    {/* Note: I'm merging some hardcoded skills with dynamic ones for now, as the translations.js structure for skills is slightly different than what was in Resume.jsx originally. 
                                         Ideally, we should standardize the skills list in translations.js to match exactly what is needed here, or just use the ones from translations.js directly. 
                                         For now, I'll use the translations.js categories.core and design for consistency. */}
                                </div>
                            </div>

                            <div className="mb-3">
                                <h3 className="text-xs font-bold text-gray-500 uppercase mb-1">{t.resume.skills.dev}</h3>
                                <div className="flex flex-wrap gap-1">
                                    {['Python', 'JavaScript', 'React', 'HTML/CSS', 'SQL', 'Git'].map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">{skill}</span>
                                    ))}
                                </div>
                            </div>


                            <div>
                                <h3 className="text-xs font-bold text-gray-500 uppercase mb-1">{t.resume.skills.design}</h3>
                                <div className="flex flex-wrap gap-1">
                                    {t.skills.categories.design.items.map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </section>



                        {/* Languages */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">{t.resume.languages.title}</h2>
                            <ul className="text-sm text-gray-700 space-y-1">
                                {t.resume.languages.list.map((lang, index) => (
                                    <li className="flex justify-between" key={index}>
                                        <span>{lang.name}</span>
                                        <span className="font-medium text-gray-500">{lang.level}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Links */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">{t.resume.links.title}</h2>
                            <div className="space-y-2 text-sm text-blue-700">
                                <a href="https://t.me/air_a_P" target="_blank" className="flex items-center gap-2 hover:underline">
                                    <ExternalLink size={12} /> Telegram (@air_a_P)
                                </a>
                                <a href="https://www.instagram.com/air_a_p/" target="_blank" className="flex items-center gap-2 hover:underline">
                                    <ExternalLink size={12} /> Instagram (@air_a_p)
                                </a>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

            <div className="text-center mt-6 print:hidden text-gray-500 text-xs">
                {t.resume.tip}
            </div>
        </div>
    );
};

export default Resume;
