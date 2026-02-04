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
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        alt: ['Cormorant Garamond', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.25em', // Aumentado para títulos pequenos
        'widest-xl': '0.4em', // Estilo editorial extremo
      },
      colors: {
        gold: {
          DEFAULT: '#CFB783', // Champagne Gold (Menos amarelo, mais sofisticado)
          light: '#EBE2CD',   // Off-white gold
          dark: '#8F7A48',    // Bronze antigo
          dim: '#9E8C60',
          subtle: 'rgba(207, 183, 131, 0.1)'
        },
        forest: {
          DEFAULT: '#142118',
          dark: '#0A0F0D', // Quase preto, com tom verde imperceptível
          light: '#233329',
          deep: '#050806'
        },
        paper: '#F5F2EB', // Warm white, textura de papel art
        ink: '#1C1C1C',
        sage: {
          DEFAULT: '#949D90',
          light: '#BCC4B9',
          dark: '#5C6659'
        },
        charcoal: '#242424',
        premium: {
          black: '#080808', 
          dark: '#121212',
          accent: '#A1A1AA', 
        }
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(180deg, rgba(10,15,13,0) 0%, #0A0F0D 100%)',
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.7%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.06%22/%3E%3C/svg%3E')",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: [],
}