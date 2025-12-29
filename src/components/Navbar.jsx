import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { t, language, toggleLanguage } = useLanguage();

    // Scroll to top if already on home page
    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const links = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.certificates, href: '#certificates' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' },
    ];

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const id = targetId.replace('#', '');

        if (location.pathname === '/') {
            setIsOpen(false);
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } else {
            setIsOpen(false);
            navigate('/', { state: { targetId: id } });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    onClick={handleLogoClick}
                    className="text-2xl font-bold text-neon tracking-wider cursor-pointer"
                >
                    AYDER
                </Link>

                {/* Desktop Menu and CV Button */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-gray-300 hover:text-neon transition-colors duration-300 text-sm uppercase tracking-widest cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                        <Globe size={18} />
                        <span className="text-sm font-mono uppercase">{language}</span>
                    </button>

                    <Link to="/resume" target="_blank" className="px-4 py-2 bg-neon/10 text-neon border border-neon/50 rounded hover:bg-neon/20 transition-all text-sm">
                        {t.nav.cv}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-gray-300 hover:text-white flex items-center gap-1"
                    >
                        <Globe size={20} />
                        <span className="text-sm font-mono uppercase">{language}</span>
                    </button>
                    <button
                        className="text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-dark/95 border-b border-white/10 py-4 flex flex-col items-center space-y-4"
                >
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-gray-300 hover:text-neon text-lg cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link to="/resume" target="_blank" className="text-neon border border-neon/50 px-4 py-2 rounded">
                        {t.nav.cv}
                    </Link>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
