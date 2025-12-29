import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minus, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal = ({ onCommand }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'Welcome to AyderOS v1.0.0' },
        { type: 'system', content: 'Type "help" for commands. Try "matrix" for a surprise.' }
    ]);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'user', content: cmd }];

        // Check external command handlers first
        if (onCommand) {
            const externalResponse = onCommand(trimmedCmd);
            if (externalResponse) {
                newHistory.push({ type: 'system', content: externalResponse });
                setHistory(newHistory);
                return;
            }
        }

        switch (trimmedCmd) {
            case 'help':
                newHistory.push({ type: 'system', content: 'Available commands:\n  help     - Show this message\n  whoami   - Display user info\n  skills   - List technical skills\n  contact  - Show contact details\n  matrix   - Toggle Matrix mode 🟢\n  clear    - Clear terminal' });
                break;
            case 'whoami':
                newHistory.push({ type: 'system', content: 'Ayder Parmankulov\nStudent at BMU (Accounting & Finance)\nCyber Security Enthusiast & Web Developer' });
                break;
            case 'skills':
                newHistory.push({ type: 'system', content: 'CORE: Cyber Security, Pentesting, Web Dev, Video Editing\nDESIGN: Figma, MS Designer' });
                break;
            case 'contact':
                newHistory.push({ type: 'system', content: 'Email: aiderparmankulov@gmail.com\nTelegram: @air_a_P\nPhone: +998 (93) 517-91-46' });
                break;
            case 'clear':
                setHistory([]);
                return; // Early return to avoid adding clear command to empty history logic if we wanted strictly empty
            default:
                if (trimmedCmd !== '') {
                    newHistory.push({ type: 'error', content: `Command not found: ${trimmedCmd}` });
                }
        }
        setHistory(newHistory);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommand(input);
        setInput('');
    };

    return (
        <>
            {/* Floating Toggle Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="fixed bottom-6 right-6 z-50 p-4 bg-dark/90 border border-neon/50 text-neon rounded-full shadow-[0_0_15px_rgba(0,243,255,0.3)] backdrop-blur-md"
                    onClick={() => setIsOpen(true)}
                >
                    <TerminalIcon size={24} />
                </motion.button>
            )}

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[600px] h-[400px] bg-dark/95 border border-white/10 rounded-lg shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col font-mono text-sm"
                    >
                        {/* Header */}
                        <div className="bg-white/5 p-2 flex justify-between items-center border-b border-white/10 cursor-move">
                            <div className="flex items-center gap-2 px-2">
                                <TerminalIcon size={14} className="text-gray-400" />
                                <span className="text-gray-300 text-xs">AyderOS -- -zsh</span>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white"><Minus size={14} /></button>
                                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-red-500/20 rounded text-gray-400 hover:text-red-400"><X size={14} /></button>
                            </div>
                        </div>

                        {/* Content Actions */}
                        <div className="flex-1 p-4 overflow-y-auto custom-scrollbar" onClick={() => document.getElementById('terminal-input')?.focus()}>
                            {history.map((line, i) => (
                                <div key={i} className={`mb-1 whitespace-pre-wrap ${line.type === 'user' ? 'text-white' : line.type === 'error' ? 'text-red-400' : 'text-neon/80'}`}>
                                    {line.type === 'user' && <span className="text-secondary mr-2">$</span>}
                                    {line.content}
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input Line */}
                        <form onSubmit={handleSubmit} className="p-2 bg-black/20 border-t border-white/5 flex items-center gap-2">
                            <span className="text-secondary pl-2">$</span>
                            <input
                                id="terminal-input"
                                type="text"
                                value={input}
                                placeholder='Try "matrix" or "help"...'
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-gray-600"
                                autoFocus
                                autoComplete="off"
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
