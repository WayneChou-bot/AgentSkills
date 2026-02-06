import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, speed = 30, className = "" }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        setDisplayedText("");
        setIsComplete(false);

        if (!text) return; // Guard against undefined text

        const startTimeout = setTimeout(() => {
            let index = 0;
            const intervalId = setInterval(() => {
                if (index <= text.length) {
                    setDisplayedText(text.slice(0, index));
                    index++;
                } else {
                    clearInterval(intervalId);
                    setIsComplete(true);
                }
            }, speed);

            return () => clearInterval(intervalId);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [text, delay, speed]);

    return (
        <motion.div className={className}>
            {displayedText}
            {!isComplete && (
                <span className="inline-block w-[0.5em] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle"></span>
            )}
        </motion.div>
    );
};

export default TypewriterText;
