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
        bg: 'hsl(210, 30%, 98%)',
        accent: 'hsl(160, 80%, 45%)',
        primary: 'hsl(210, 80%, 50%)',
        surface: 'hsl(210, 30%, 95%)',
        'text-primary': 'hsl(210, 30%, 10%)',
        'text-secondary': 'hsl(210, 30%, 40%)',
        purple: {
          50: '#f8f6ff',
          100: '#f0ebff',
          200: '#e1d6ff',
          300: '#d1c7ff',
          400: '#b39dff',
          500: '#9573ff',
          600: '#7c5cff',
          700: '#6644ff',
          800: '#5233cc',
          900: '#3e2699'
        },
        gradient: {
          from: 'hsl(260, 70%, 30%)',
          to: 'hsl(280, 80%, 50%)'
        }
      },
      borderRadius: {
        'lg': '16px',
        'md': '10px',
        'sm': '6px'
      },
      boxShadow: {
        'card': '0 4px 16px hsla(210, 30%, 10%, 0.08)'
      },
      spacing: {
        'lg': '20px',
        'md': '12px',
        'sm': '8px'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
};
