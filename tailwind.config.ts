import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },

      colors: {
        /* =========================
           NAVY
        ========================= */
        navy: {
          50: '#E8ECF4',
          100: '#C5CCDB',
          200: '#9AA8C4',
          300: '#6E7FAB',
          400: '#465E8C',
          500: '#2A4474',
          600: '#1A3060',
          700: '#102452',
          800: '#0B1C42',
          900: '#071A3D',
          950: '#041029',
        },

        /* =========================
           GOLD
        ========================= */
        gold: {
          50: '#FBF7EE',
          100: '#F5EBD3',
          200: '#EBD6A8',
          300: '#DDBF7A',
          400: '#D4AE5E',
          500: '#C9A45C',
          600: '#B88E45',
          700: '#9A7138',
          800: '#7E5B33',
          900: '#6A4D2F',
        },

        /* =========================
           BRAND COLORS
        ========================= */
        cream: '#F8F5EF',
        slatey: '#7A8494',

        /* =========================
           SHADCN / UI COLORS
        ========================= */
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },

        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },

      /* =========================
         BACKGROUND GRADIENTS
      ========================= */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'navy-gradient':
          'linear-gradient(135deg, #071A3D 0%, #102452 100%)',

        'gold-gradient':
          'linear-gradient(135deg, #D4AE5E 0%, #B88E45 100%)',
      },

      /* =========================
         ANIMATIONS
      ========================= */
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },

        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },

        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },

        'fade-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },

      /* =========================
         SHADOWS
      ========================= */
      boxShadow: {
        'gold-glow': '0 0 20px rgba(201, 164, 92, 0.15)',
        'navy-card': '0 10px 40px rgba(7, 26, 61, 0.08)',
      },
    },
  },

  /*
   * tailwindcss-animate removed.
   * Animations are defined above using standard Tailwind keyframes.
   */
  plugins: [],
};

export default config;