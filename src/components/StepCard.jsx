import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react'; // Dynamic import for icons
import TypewriterText from './TypewriterText';

const StepCard = ({ step, direction, lang, onCopy }) => {
    const handleContentClick = (e) => {
        // Check if the clicked element or parent has 'copy-trigger' class
        const target = e.target.closest('.copy-trigger');
        if (target) {
            const textToCopy = target.getAttribute('data-text') || target.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                if (onCopy) onCopy(lang === 'zh' ? '指令已複製！' : 'Command Copied!');
            });
        }
    };

    const IconComponent = Icons[step.icon] || Icons.HelpCircle;

    const variants = {
        enter: (direction) => ({
            scale: direction > 0 ? 0.8 : 1.2, // Next: Comes from back. Prev: Comes from front.
            opacity: 0,
            filter: 'blur(10px)',
            x: 0, // No horizontal movement
        }),
        center: {
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            zIndex: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "circOut"
            }
        },
        exit: (direction) => ({
            scale: direction < 0 ? 0.8 : 1.2, // Next: Goes to front. Prev: Goes to back.
            opacity: 0,
            filter: 'blur(10px)',
            zIndex: 0,
            transition: {
                duration: 0.4,
                ease: "circIn"
            }
        }),
    };

    return (
        <div className="w-full max-w-6xl mx-auto h-[60vh] relative" style={{ perspective: '1200px' }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={step.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute w-full h-full"
                >
                    <div className="glass-panel w-full h-full rounded-2xl p-1 flex flex-col md:flex-row gap-4 overflow-hidden neon-border">

                        {/* Left Content */}
                        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col relative">
                            {/* Decorative corner */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg"></div>

                            {/* Content Section */}
                            <div className="flex-1 p-6 md:p-10 flex flex-col relative z-10">

                                <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-6 neon-text h-20 md:h-24 flex items-center">
                                    <TypewriterText key={step.id + lang} text={step.title[lang]} speed={50} />
                                </h2>

                                <div
                                    className="text-gray-300 leading-relaxed font-space content-html"
                                    onClick={handleContentClick}
                                    dangerouslySetInnerHTML={{ __html: step.content[lang] }}
                                />

                                {step.proTip && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 }} // Wait for typing to mostly finish
                                        className="mt-6 bg-yellow-500/10 border-l-2 border-yellow-500 p-3"
                                    >
                                        <p className="text-xs text-yellow-200/80 font-mono">
                                            <span className="font-bold text-yellow-400">&gt;&gt; PRO_TIP:</span> {step.proTip[lang]}
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                            {/* Skills Grid */}
                            {step.skills && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {step.skills.map((skill, idx) => (
                                        <div key={idx} className="bg-white/5 border border-white/10 p-3 rounded hover:bg-white/10 transition-colors group">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors bg-cyan-950/50 p-1.5 rounded">
                                                    {Icons[skill.icon] ? React.createElement(Icons[skill.icon], { size: 16 }) : <Icons.Box size={16} />}
                                                </span>
                                                <span className="font-bold text-white text-sm font-orbitron tracking-wide">{skill.name}</span>
                                            </div>
                                            <p className="text-xs text-gray-400 leading-relaxed pl-1 mb-2">
                                                {typeof skill.desc === 'object' ? skill.desc[lang] : skill.desc}
                                            </p>

                                            {/* Skill Meta Tags */}
                                            <div className="flex gap-2 pl-1">
                                                <span className={`text - [10px] px - 1.5 py - 0.5 rounded border ${skill.type === 'Cloud'
                                                    ? 'bg-fuchsia-900/30 text-fuchsia-300 border-fuchsia-500/20'
                                                    : 'bg-green-900/30 text-green-300 border-green-500/20'
                                                    } `}>
                                                    {skill.type}
                                                </span>
                                                {skill.reqs && skill.reqs !== '無' && (
                                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-gray-400 border border-white/10 uppercase">
                                                        Req: {skill.reqs}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Pro Tip Section */}
                            {step.proTip && (
                                <div className="mt-auto mb-4 bg-gradient-to-r from-yellow-500/10 to-transparent border-l-2 border-yellow-500 pl-4 py-2">
                                    <div className="text-yellow-500 text-xs font-bold tracking-widest mb-1 flex items-center gap-2">
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                                        HACKER_MODE // PRO_TIP
                                    </div>
                                    <p className="text-gray-300 text-sm italic">
                                        "{typeof step.proTip === 'object' ? step.proTip[lang] : step.proTip}"
                                    </p>
                                </div>
                            )}

                        </div>

                        {/* Right Visual Panel - Dynamic Tech Graphic */}
                        <div className="flex-1 bg-black/40 rounded-xl m-2 overflow-hidden relative group flex items-center justify-center">
                            {/* Animated Background Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_1px] pointer-events-none z-20"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-fuchsia-900/20 z-0"></div>

                            {/* Rotating Ring */}
                            <div className="absolute w-64 h-64 rounded-full border border-cyan-500/20 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute w-48 h-48 rounded-full border border-fuchsia-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>

                            {/* Central Icon */}
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="w-24 h-24 rounded-2xl bg-black/50 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] relative overflow-hidden group-hover:scale-105 transition-transform"
                                >
                                    <div className="absolute inset-0 bg-cyan-500/10 animate-pulse"></div>
                                    {step.icon && Icons[step.icon]
                                        ? React.createElement(Icons[step.icon], { size: 48, className: "text-cyan-400 relative z-10" })
                                        : <Icons.Activity size={48} className="text-cyan-400 relative z-10" />
                                    }
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-center"
                                >
                                    <h3 className="text-cyan-300 font-orbitron font-bold tracking-widest text-sm uppercase mb-1">
                                        {step.title[lang].split(' ')[0]} {/* Simple truncated title */}
                                    </h3>
                                    <div className="flex items-center justify-center gap-2 text-[10px] text-fuchsia-400 font-mono">
                                        <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-blink"></span>
                                        STATUS: ACTIVE
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default StepCard;
