/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'absa': {
          50: '#ffebec',
          100: '#ffd7d9',
          200: '#ffb0b3',
          300: '#ff888d',
          400: '#ff6166',
          500: '#f03940',
          600: '#e42313', // Primary ABSA red
          700: '#c61d10',
          800: '#a3180d',
          900: '#84140a',
        },
        'absaSecondary': {
          50: '#f3f7fb',
          100: '#e6eff7',
          200: '#c7dff0',
          300: '#97c3e3',
          400: '#196fb6',  // Secondary color
          500: '#3b82c4',
          600: '#196fb6',
          700: '#1a5c99',
          800: '#1a4d7e',
          900: '#1a4168',
          950: '#112942'
        },
        'absaAccent': {
          50: '#f2f9f1',
          100: '#e4f3e3',
          200: '#c9e8c7',
          300: '#a3d7a0',
          400: '#7fc67b',
          500: '#59b550',
          600: '#3d9235', // Accent green
          700: '#307329',
          800: '#275e21',
          900: '#1f4b1b',
        },
        'brand': {
          'black': '#242424',
          'white': '#ffffff'
        }
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-delayed': 'float-delayed 25s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 8s linear infinite',
        'spin-reverse-slower': 'spin-reverse 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'wiggle-slow': 'wiggle 5s ease-in-out infinite',
        'slide': 'slide 3s ease-in-out infinite',
        'slide-slow': 'slide 5s ease-in-out infinite',
        'fade': 'fade 3s ease-in-out infinite',
        'fade-slow': 'fade 5s ease-in-out infinite',
        'progress': 'progress 5s linear',
        'float-orb': 'float 20s ease-in-out infinite',
        'float-orb-delayed': 'float-delayed 25s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(10px, -10px) rotate(2deg) scale(1.05)' },
          '50%': { transform: 'translate(-5px, 15px) rotate(-1deg) scale(0.95)' },
          '75%': { transform: 'translate(-15px, -5px) rotate(1deg) scale(1.02)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(-10px, 10px) rotate(-2deg) scale(1.05)' },
          '50%': { transform: 'translate(5px, -15px) rotate(1deg) scale(0.98)' },
          '75%': { transform: 'translate(15px, 5px) rotate(-1deg) scale(1.03)' },
        },
        'float-orb': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, -10px) rotate(2deg)' },
          '50%': { transform: 'translate(-5px, 15px) rotate(-1deg)' },
          '75%': { transform: 'translate(-15px, -5px) rotate(1deg)' },
        },
        'float-orb-delayed': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(-10px, 10px) rotate(-2deg)' },
          '50%': { transform: 'translate(5px, -15px) rotate(1deg)' },
          '75%': { transform: 'translate(15px, 5px) rotate(-1deg)' },
        },
        'spin-reverse': {
          'to': { transform: 'rotate(-360deg)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        slide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' }
        },
        fade: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shine: {
          'to': { backgroundPosition: '200% center' }
        }
      },
      fontSize: {
        'xxs': '0.625rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      minHeight: {
        '0': '0',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        'screen': '100vh',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        'screen': '100vh',
      },
      scale: {
        '175': '1.75',
        '200': '2',
      },
      blur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
