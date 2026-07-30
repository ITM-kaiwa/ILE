/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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