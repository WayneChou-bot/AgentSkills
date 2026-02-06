import { motion } from 'framer-motion';

const NeonButton = ({ children, onClick, disabled, className = '', variant = 'cyan' }) => {
    const colors = {
        cyan: 'border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:bg-cyan-950/30',
        fuchsia: 'border-fuchsia-500 text-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.3)] hover:shadow-[0_0_20px_rgba(217,70,239,0.6)] hover:bg-fuchsia-950/30',
        gray: 'border-gray-600 text-gray-400 hover:bg-gray-800'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            disabled={disabled}
            className={`
        px-6 py-2 rounded-full border transition-all duration-300 font-orbitron tracking-widest uppercase text-sm
        disabled:opacity-50 disabled:cursor-not-allowed
        ${colors[variant]}
        ${className}
      `}
        >
            {children}
        </motion.button>
    );
};

export default NeonButton;
