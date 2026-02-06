import { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundParticles from './BackgroundParticles';
import Toast from './Toast';

const Layout = ({ children, lang, setLang }) => {
    // Shared Toast State could be lifted here or context, but for simplicity let's expose a window method or just pass set props if structure allowed.
    // Actually, simpler to put Toast in App.jsx or Layout and expose trigger.
    // Let's keep Layout as "Visual Layout" and assume children might trigger things. 
    // To make it easy: Let's simply render children. The Click-to-Copy logic will be handled inside StepCard which needs the toast trigger.
    // So we lift state up to App, or create a Context. Let's do Context-lite by modifying App.jsx instead.

    return (
        <div className="min-h-screen grid-bg relative flex flex-col items-center justify-center p-4 overflow-hidden">
            <BackgroundParticles />
            {/* Background ambient glow */}
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none animate-float"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-500/10 blur-[120px] rounded-full pointer-events-none animate-float" style={{ animationDelay: '-3s' }}></div>

            {/* Header */}
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-7xl mx-auto flex justify-between items-center mb-8 py-4 px-6 glass-panel rounded-full"
            >
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
                    <span className="font-orbitron font-bold tracking-widest text-lg">AGENT <span className="text-cyan-400">SKILLS GUIDE</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex bg-black/40 rounded-full p-1 border border-white/10 backdrop-blur">
                        <button
                            onClick={() => setLang('zh')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'zh' ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            中
                        </button>
                        <button
                            onClick={() => setLang('en')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-fuchsia-500 text-black shadow-[0_0_10px_rgba(217,70,239,0.5)]' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Main Content Area */}
            <main className="w-full relative z-10 flex-1 flex flex-col justify-center">
                {children}
            </main>

            {/* Footer */}
            <footer className="mt-8 text-center text-gray-500 text-xs font-mono">
                <p>POWERED BY Wayne // <span className="text-cyan-500">ANTIGRAVITY ENGINE</span></p>
            </footer>
        </div>
    );
};

export default Layout;
