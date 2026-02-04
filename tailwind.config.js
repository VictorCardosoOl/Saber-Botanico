/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    // Definindo breakpoints mais amplos para monitores modernos
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', // Aumentado de 1440px para padrão mais largo
      '3xl': '1920px', // Adicionado suporte nativo a Full HD+
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem', // Padding proporcional
        '3xl': '6rem',
      },
      // Configuração explícita para permitir que o container cresça
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px', // O conteúdo agora vai até 1800px de largura
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
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.2em',
        'widest-xl': '0.3em',
      },
      colors: {
        gold: {
          DEFAULT: '#C5A028', // Ajustado para melhor contraste (Original: #D4AF37)
          light: '#E6D8AD',
          dark: '#8A6D15',   // Escurecido para textos sobre fundo claro (Original: #997B20)
          dim: '#B59530',
          subtle: 'rgba(197, 160, 40, 0.1)'
        },
        forest: {
          DEFAULT: '#0F2F1E',
          dark: '#051605',
          light: '#1A3C2B',
          deep: '#020B02'
        },
        paper: '#F9F7F2',
        ink: '#1A1A1A',
        sage: {
          DEFAULT: '#8FA196',
          light: '#AABCB1',
          dark: '#6B7C72'
        },
        charcoal: '#262626',
        premium: {
          black: '#0c0a09', // stone-950 ajustado
          dark: '#1c1917',  // stone-900
          accent: '#d6d3d1', // stone-300
        }
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #051605 0%, #0F2F1E 100%)',
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E')",
        'linen': "repeating-linear-gradient(0deg, transparent, transparent 2px, #E8E6DE 2px, #E8E6DE 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, #E8E6DE 2px, #E8E6DE 3px)",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    }
  },
  plugins: [],
}