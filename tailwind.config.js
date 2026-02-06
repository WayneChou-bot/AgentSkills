/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'orbitron': ['"Orbitron"', 'sans-serif'],
                'space': ['"Space Grotesk"', 'sans-serif'],
            },
            colors: {
                neon: {
                    blue: '#06b6d4', // cyan-500
                    purple: '#d946ef', // fuchsia-500
                }
            },
            animation: {
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #06b6d4' },
                    '100%': { boxShadow: '0 0 20px #06b6d4, 0 0 10px #d946ef' },
                }
            }
        },
    },
    plugins: [],
}
