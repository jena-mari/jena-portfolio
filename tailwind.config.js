/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: '#f0e6d2',
        paper: '#f5e6d3',
        ink: '#1b1b1b',
        black: '#000',
        redbrand: '#c04231',
        redbright: '#ff4433',
      },
      fontFamily: {
        display: ['"altehaasgrotesk"', 'sans-serif'],
        serif: ['"ztformom"', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Space Grotesk"', 'sans-serif']
      },
      boxShadow: {
        soft1: '0 10px 20px rgba(0,0,0,0.1)',
        soft2: '0 15px 25px rgba(0,0,0,0.2)',
        brutal: '4px 4px 0px 0px rgba(0,0,0,1)',
        glow: '0 0 20px rgba(33,150,243,0.5)' // for alert pulse/glow
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem'
      },
      spacing: {
        section: 'clamp(2rem, 5vw, 4rem)',
        card: 'clamp(1rem, 2vw, 1.5rem)'
      },
      keyframes: {
        introFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bubblePop: {
          '0%': { opacity: '0', transform: 'scale(0.5) rotate(-10deg)' },
          '100%': { opacity: '1', transform: 'scale(0.85) rotate(-10deg)' }
        },
        gradientPulse: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        ledeIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        alertFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        alertGlow: {
          '0%': { boxShadow: '0 8px 20px rgba(0,0,0,0.4), 0 0 10px rgba(33,150,243,0.5)' },
          '100%': { boxShadow: '0 12px 28px rgba(0,0,0,0.5), 0 0 20px rgba(33,150,243,0.8)' }
        }
      },
      animation: {
        introFadeIn: 'introFadeIn 1s cubic-bezier(.23,1,.32,1) forwards',
        bubblePop: 'bubblePop 0.7s cubic-bezier(.23,1,.32,1) 0.6s forwards',
        gradientPulse: 'gradientPulse 2.5s ease-in-out infinite alternate',
        ledeIn: 'ledeIn 0.9s cubic-bezier(.23,1,.32,1) 1s forwards',
        alertFadeIn: 'alertFadeIn 0.6s ease forwards',
        alertGlow: 'alertGlow 2s ease-in-out infinite alternate'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem'
        }
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    }
  },
  plugins: [],
}
