/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06080F',
          900: '#0B0F19',
          850: '#0F1523',
          800: '#141B2D',
          700: '#1E293B',
        },
        brand: {
          purple: '#8B5CF6',
          indigo: '#6366F1',
          cyan: '#38BDF8',
          blue: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(30px)' },
          '100%': { opacity: '0.7', filter: 'blur(45px)' },
        }
      }
    },
  },
  plugins: [],
}
