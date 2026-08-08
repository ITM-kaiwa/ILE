/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        attentionBlink: {
          '0%, 100%': { backgroundColor: '#e7e5e4', borderColor: 'rgba(214, 211, 209, 0.6)', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
          '50%': { backgroundColor: '#fef3c7', borderColor: '#fcd34d', boxShadow: '0 0 8px rgba(252, 211, 77, 0.6)' },
        }
      },
      animation: {
        'attention-blink': 'attentionBlink 1.5s ease-in-out infinite',
      },
      colors: {
        vak: {
          visual: {
            light: '#3B82F6',
            DEFAULT: '#2563EB',
            dark: '#1D4ED8',
            bg: '#EFF6FF',
          },
          auditory: {
            light: '#10B981',
            DEFAULT: '#059669',
            dark: '#047857',
            bg: '#ECFDF5',
          },
          kinesthetic: {
            light: '#F59E0B',
            DEFAULT: '#D97706',
            dark: '#B45309',
            bg: '#FFFBEB',
          },
        },
      },
    },
  },
  plugins: [],
}