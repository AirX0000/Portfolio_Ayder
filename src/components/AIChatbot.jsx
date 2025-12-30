import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const AIChatbot = () => {
    const { t, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimizing, setIsMinimizing] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: language === 'en'
                ? "Hello! I am Ayder's AI Assistant. Ask me about his skills, experience, projects, or how to contact him."
                : "Привет! Я ИИ-ассистент Айдера. Спроси меня о его навыках, опыте, проектах или как с ним связаться."
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Update initial message when language changes if it's the only message
    useEffect(() => {
        if (messages.length === 1 && messages[0].id === 1) {
            setMessages([
                {
                    id: 1,
                    type: 'bot',
                    text: language === 'en'
                        ? "Hello! I am Ayder's AI Assistant. Ask me about his skills, experience, projects, or how to contact him."
                        : "Привет! Я ИИ-ассистент Айдера. Спроси меня о его навыках, опыте, проектах или как с ним связаться."
                }
            ]);
        }
    }, [language]);


    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: userMsg }]);
        setIsTyping(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, { role: 'user', content: userMsg }].map(m => ({
                        role: m.type === 'bot' ? 'assistant' : 'user',
                        content: m.text
                    })),
                    language
                })
            });

            if (!response.ok) throw new Error('API Error');

            const data = await response.json();

            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: data.reply }]);
        } catch (error) {
            console.error(error);
            // Fallback for demo/error
            const fallbackText = language === 'en'
                ? "I'm having trouble connecting to my brain (API). Please check your internet or API configuration."
                : "Проблемы с подключением к мозгу (API). Проверьте интернет или конфигурацию.";
            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: fallbackText }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-neon to-blue-500 rounded-full shadow-[0_0_20px_rgba(0,243,255,0.4)] text-dark font-bold hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all"
                >
                    <Bot size={28} />
                </motion.button>
            )}

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8, x: -50 }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8, x: -50 }}
                        className="fixed bottom-6 left-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-dark/95 border border-neon/30 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neon to-blue-600 flex items-center justify-center shadow-lg">
                                    <Bot size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                                    <span className="text-xs text-neon flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                    <Minimize2 size={16} />
                                </button>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-400 transition-colors">
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.type === 'user'
                                            ? 'bg-blue-600/20 border border-blue-500/30 text-white rounded-tr-sm'
                                            : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm shadow-sm'
                                            }`}
                                    >
                                        {msg.text.split('**').map((part, i) =>
                                            i % 2 === 1 ? <strong key={i} className="text-neon font-normal">{part}</strong> : part
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-white/5 border-t border-white/10 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={language === 'en' ? "Ask something..." : "Спросите что-нибудь..."}
                                className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon/50 transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                className="p-3 bg-neon/10 text-neon rounded-xl border border-neon/30 hover:bg-neon/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
