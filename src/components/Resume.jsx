import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Printer, Github, Linkedin } from 'lucide-react';

const Resume = () => {
    const printResume = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 print:p-0 print:bg-white text-gray-800 font-sans">
            {/* Control Bar (Hidden when printing) */}
            <div className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center print:hidden">
                <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">← Back to Portfolio</a>
                <button
                    onClick={printResume}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-sm"
                >
                    <Printer size={18} />
                    Save as PDF / Print
                </button>
            </div>

            {/* A4 Resume Page */}
            <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none p-[15mm] min-h-[297mm]">

                {/* Header */}
                <header className="border-b-2 border-gray-800 pb-6 mb-6">
                    <div className="flex justify-between items-end">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-tight mb-2">Ayder Parmankulov</h1>
                            <p className="text-xl text-gray-600 font-light">Cyber Security Specialist & Web Developer</p>
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
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Profile</h2>
                            <p className="text-sm text-gray-600 leading-relaxed text-justify">
                                Ambitious student at British Management University (Accounting & Finance) with a strong passion for Cyber Security and IT.
                                Combining financial acumen with technical skills in network security, Linux administration, and web development.
                                Enthusiastic about creating secure, efficient, and visually stunning digital solutions.
                            </p>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Experience</h2>

                            <div className="mb-4">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-800">British Management University</h3>
                                    <span className="text-sm text-gray-500 italic">Sep 2024 - Apr 2025</span>
                                </div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">IT Specialist</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>Managed IT infrastructure and support.</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-800">Qanot Sharq</h3>
                                    <span className="text-sm text-gray-500 italic">May 2024</span>
                                </div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Accounting Intern</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>Assisted with financial records and reporting.</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-800">Ipoteka Bank</h3>
                                    <span className="text-sm text-gray-500 italic">June 2022</span>
                                </div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Intern (IT Dept)</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>Gained initial experience in banking IT systems.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Key Projects</h2>

                            <div className="mb-3">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-bold text-gray-800 text-sm">Bot for BMU Canteen</h3>
                                    <span className="text-xs px-2 py-0.5 bg-gray-200 rounded text-gray-600">Python, Telegram API</span>
                                </div>
                                <p className="text-xs text-gray-600">Automated ordering system enhancing service speed and reducing queues in the university canteen.</p>
                            </div>

                            <div className="mb-3">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-bold text-gray-800 text-sm">Accounting System</h3>
                                    <span className="text-xs px-2 py-0.5 bg-gray-200 rounded text-gray-600">Excel, VBA</span>
                                </div>
                                <p className="text-xs text-gray-600">Custom automated spreadsheet for financial tracking and reporting.</p>
                            </div>
                        </section>

                        {/* Certificates */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Certifications</h2>
                            <ul className="space-y-2">
                                <li className="text-sm text-gray-700">
                                    <span className="font-semibold block">Foundations of Cybersecurity</span>
                                    <span className="text-xs text-gray-500">Google • Oct 2025</span>
                                </li>
                                <li className="text-sm text-gray-700">
                                    <span className="font-semibold block">Play It Safe: Manage Security Risks</span>
                                    <span className="text-xs text-gray-500">Google • Oct 2025</span>
                                </li>
                                <li className="text-sm text-gray-700">
                                    <span className="font-semibold block">Connect and Protect: Networks</span>
                                    <span className="text-xs text-gray-500">Google • Oct 2025</span>
                                </li>
                                <li className="text-sm text-gray-700">
                                    <span className="font-semibold block">Tools of the Trade: Linux and SQL</span>
                                    <span className="text-xs text-gray-500">Google • Oct 2025</span>
                                </li>
                                <li className="text-sm text-gray-700">
                                    <span className="font-semibold block">Assets, Threats, and Vulnerabilities</span>
                                    <span className="text-xs text-gray-500">Google • Oct 2025</span>
                                </li>
                            </ul>
                        </section>
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="space-y-6">

                        {/* Education */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Education</h2>
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm">British Management University</h3>
                                <p className="text-sm text-gray-600 italic">Accounting & Finance</p>
                                <p className="text-xs text-gray-500 mt-1">Current Student</p>
                            </div>
                        </section>

                        {/* Technical Skills */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Technical Skills</h2>

                            <div className="mb-3">
                                <h3 className="text-xs font-bold text-gray-500 uppercase mb-1">Cyber Security</h3>
                                <div className="flex flex-wrap gap-1">
                                    {['Kali Linux', 'Burp Suite', 'Nmap', 'Metasploit', 'Wireshark'].map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-3">
                                <h3 className="text-xs font-bold text-gray-500 uppercase mb-1">Development</h3>
                                <div className="flex flex-wrap gap-1">
                                    {['Python', 'JavaScript', 'React', 'HTML/CSS', 'SQL', 'Git'].map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-gray-500 uppercase mb-1">Design & Tools</h3>
                                <div className="flex flex-wrap gap-1">
                                    {['Figma', 'Photoshop', 'Premiere Pro', 'MS Office'].map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </section>



                        {/* Languages */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Languages</h2>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li className="flex justify-between">
                                    <span>Russian</span>
                                    <span className="font-medium text-gray-500">Native</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>English</span>
                                    <span className="font-medium text-gray-500">Advanced (C1)</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Uzbek</span>
                                    <span className="font-medium text-gray-500">Intermediate (B1)</span>
                                </li>
                            </ul>
                        </section>

                        {/* Links */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Links</h2>
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
                Tip: Use the button above or Ctrl+P to save as PDF. Background graphics are removed for clean printing.
            </div>
        </div>
    );
};

export default Resume;
