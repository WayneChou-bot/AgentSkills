import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
    const progress = (current / total) * 100;

    return (
        <div className="w-full max-w-xl mx-auto mb-8 relative">
            <div className="flex justify-between mb-2 text-xs font-orbitron text-cyan-500/80 px-1">
                <span>INITIALIZING...</span>
                <span>STEP {current} / {total}</span>
            </div>

            {/* Track */}
            <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-white/10 relative">
                {/* Fill */}
                <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                >
                    {/* Glitch/Scanline effect on bar */}
                    <div className="absolute inset-0 bg-white/20 animate-pulse-fast"></div>
                </motion.div>
            </div>

            {/* Decorative markers */}
            <div className="flex justify-between mt-1">
                {Array.from({ length: total }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-0.5 h-1 transition-colors duration-500 ${i < current ? 'bg-cyan-500' : 'bg-slate-700'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;
