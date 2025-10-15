/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          50: 'hsl(250, 100%, 97%)',
          100: 'hsl(250, 100%, 94%)',
          500: 'hsl(250, 100%, 60%)',
          600: 'hsl(250, 100%, 54%)',
          700: 'hsl(250, 100%, 48%)',
        },
        secondary: {
          500: 'hsl(320, 85%, 60%)',
          600: 'hsl(320, 85%, 54%)',
        },
        accent: {
          500: 'hsl(180, 100%, 50%)',
        },
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium: "0 10px 25px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
        hard: "0 25px 50px -12px rgba(0,0,0,0.25)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'gradient-x': 'gradientX 15s ease infinite',
        'gradient-y': 'gradientY 15s ease infinite',
        'gradient-xy': 'gradientXY 20s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        gradientX: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        gradientY: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' },
        },
        gradientXY: {
          '0%, 100%': { transform: 'translate(0%, 0%)' },
          '25%': { transform: 'translate(100%, 0%)' },
          '50%': { transform: 'translate(100%, 100%)' },
          '75%': { transform: 'translate(0%, 100%)' },
        },
      },
    },
  },
  plugins: [],
};
