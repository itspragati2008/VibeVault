/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        energy: {
          50: '#fff5f3',
          100: '#ffe5e0',
          200: '#ffccc2',
          300: '#ffa894',
          400: '#ff7a5c',
          500: '#ff4500',
          600: '#e63d00',
          700: '#cc3600',
          800: '#b32f00',
          900: '#992800',
        },
        citrus: {
          50: '#fff8f0',
          100: '#ffedd6',
          200: '#ffd9ad',
          300: '#ffc575',
          400: '#ffb047',
          500: '#ffa500',
          600: '#e69500',
          700: '#cc8400',
          800: '#b37300',
          900: '#996300',
        },
        lime: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#32cd32',
          600: '#2db82d',
          700: '#28a428',
          800: '#228f22',
          900: '#1d7a1d',
        },
        dark: {
          950: '#0a0a0a',
          900: '#1a1a1a',
          800: '#2a2a2a',
          700: '#3a3a3a',
          600: '#4a4a4a',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'wave-delay': 'wave 8s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0) scaleY(1)' },
          '25%': { transform: 'translateX(5%) translateY(-5%) scaleY(1.1)' },
          '50%': { transform: 'translateX(0) translateY(0) scaleY(0.9)' },
          '75%': { transform: 'translateX(-5%) translateY(5%) scaleY(1.1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
