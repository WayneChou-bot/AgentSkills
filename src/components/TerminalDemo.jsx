import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Check, AlertCircle } from 'lucide-react';

const TerminalDemo = ({ skill, lang = 'en' }) => {
    const [lines, setLines] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    // Default scripts if none provided
    const defaultScript = [
        { type: 'cmd', text: 'init system --verbose' },
        { type: 'log', text: 'Loading core modules...' },
        { type: 'success', text: 'System Ready.' },
        { type: 'info', text: 'Waiting for user input...' }
    ];

    const currentScript = skill?.demoScript || defaultScript;

    useEffect(() => {
        // Reset sequence when skill changes
        setLines([]);
        setIsTyping(true);
        let currentIndex = 0;
        let timeoutIds = [];

        const runScript = async () => {
            if (!skill) {
                // Idle state
                setLines([{ type: 'info', text: 'Select a skill to view demo...' }]);
                setIsTyping(false);
                return;
            }

            // Initial clear
            setLines([]);

            const processLine = (index) => {
                if (index >= currentScript.length) {
                    setIsTyping(false);
                    return;
                }

                const line = currentScript[index];
                const delay = line.type === 'cmd' ? 500 : Math.random() * 800 + 200;

                const id = setTimeout(() => {
                    setLines(prev => [...prev, line]);
                    // Auto scroll
                    if (scrollRef.current) {
                        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                    }
                    processLine(index + 1);
                }, delay);

                timeoutIds.push(id);
            };

            processLine(0);
        };

        runScript();

        return () => timeoutIds.forEach(clearTimeout);
    }, [skill]);

    // Keep scroll at bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div className="w-full h-full bg-slate-950/90 font-mono text-xs md:text-sm p-4 relative overflow-hidden flex flex-col rounded-xl border border-white/10 shadow-inner">
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2 text-gray-500 select-none">
                <Terminal size={14} />
                <span className="text-[10px] uppercase tracking-wider">Antigravity Console</span>
                <div className="ml-auto flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/30"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                </div>
            </div>

            {/* Content */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar space-y-1.5 font-mono">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`break-all ${line.type === 'cmd' ? 'text-cyan-300 font-bold mt-3' :
                                line.type === 'success' ? 'text-green-400' :
                                    line.type === 'error' ? 'text-red-400' :
                                        line.type === 'info' ? 'text-blue-300' :
                                            'text-gray-400'
                            }`}
                    >
                        {line.type === 'cmd' && <span className="mr-2 text-fuchsia-500">➜ ~</span>}
                        {line.type === 'success' && <Check size={12} className="inline mr-1" />}
                        {line.type === 'error' && <AlertCircle size={12} className="inline mr-1" />}
                        {line.text}
                    </motion.div>
                ))}

                {isTyping && (
                    <div className="animate-pulse text-cyan-500">_</div>
                )}
            </div>

            {/* Status Footer */}
            <div className="mt-2 pt-2 border-t border-white/10 flex justify-between text-[10px] text-gray-500 uppercase">
                <span>Status: {isTyping ? <span className="text-yellow-500 animate-pulse">PROCESSING</span> : <span className="text-green-500">IDLE</span>}</span>
                <span>{skill ? skill.name : 'SYSTEM_READY'}</span>
            </div>
        </div>
    );
};

export default TerminalDemo;
