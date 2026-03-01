/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* =========================
         FONTS
      ========================= */
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      /* =========================
         BRAND COLORS (IEN LOGO BASED)
      ========================= */
      colors: {

        /* NAVY SYSTEM */
        navy: {
          50:  '#eef3fa',
          100: '#d9e3f2',
          200: '#b3c7e5',
          300: '#8dabd8',
          400: '#678fcb',
          500: '#4173be',
          600: '#2f5ea4',
          700: '#234a80',
          800: '#17365c',
          900: '#0B2C5F',
          950: '#061A38',   // 🔥 added for dark tech backgrounds
        },

        /* GOLD SYSTEM */
        gold: {
          100: '#f9f2d7',
          200: '#f2e3a6',
          300: '#ebd475',
          400: '#e4c544',
          500: '#D4AF37',
          600: '#b9962f',
          700: '#9e7e27',
        },

        /* SUPPORT COLORS */
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },

        accent: {
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },

      },

      /* =========================
         BACKGROUNDS
      ========================= */
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-navy': 'linear-gradient(135deg, #0B2C5F, #17365c)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37, #b9962f)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      /* =========================
         SHADOW SYSTEM (TECH LOOK)
      ========================= */
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212,175,55,0.35)',
        'navy-glow': '0 0 40px rgba(11,44,95,0.4)',
        'glass': '0 8px 30px rgba(0,0,0,0.15)',
      },

      /* =========================
         BLUR SYSTEM (TECH UI)
      ========================= */
      backdropBlur: {
        xs: '2px',
      },

      /* =========================
         ANIMATIONS
      ========================= */
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },

    },
  },

  plugins: [],
}
