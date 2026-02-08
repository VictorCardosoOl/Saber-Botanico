/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
        '3xl': '8rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        alt: ['Cormorant Garamond', 'serif'], 
        mono: ['Space Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }], // 10px
        '3xs': ['0.5rem', { lineHeight: '0.75rem' }], // 8px (Micro labels)
      },
      letterSpacing: {
        tighter: '-0.04em', 
        tight: '-0.02em',
        normal: '0em',
        wide: '0.03em',
        wider: '0.08em',
        widest: '0.25em',
        'widest-xl': '0.4em',
      },
      lineHeight: {
        'display': '0.95', 
        'loose-p': '1.9', 
      },
      colors: {
        gold: {
          DEFAULT: '#D4AF37', // Classic Gold
          light: '#F3E5AB',   // Champagne
          dark: '#AA8C2C',    // Antique Gold
          dim: '#8A7120',
          subtle: 'rgba(212, 175, 55, 0.08)'
        },
        forest: {
          DEFAULT: '#0F1F15',
          dark: '#050A07', 
          light: '#1A2E22',
          deep: '#020403'
        },
        paper: '#F7F5F0', 
        ink: '#1A1A1A',
        sage: {
          DEFAULT: '#8FA196',
          light: '#AABCB1',
          dark: '#6B7C72'
        },
        charcoal: '#222222',
        premium: {
          black: '#0A0A0A', 
          dark: '#141414',
          accent: '#444444', 
        }
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.4, 0.25, 1)', // Smooth lag / Heavy interaction
        'sharp': 'cubic-bezier(0.6, 0.05, -0.01, 0.9)',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(180deg, rgba(5,10,7,0) 0%, #050A07 100%)',
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.7%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.06%22/%3E%3C/svg%3E')",
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'fade-in-up': 'fadeInUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-subtle': 'pulseSubtle 8s ease-in-out infinite',
        'float': 'float 10s ease-in-out infinite',
        'breathing-glow': 'breathing 12s ease-in-out infinite',
        'sheen': 'glass-sheen 1.5s ease-in-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        breathing: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        }
      }
    }
  },
  plugins: [],
}