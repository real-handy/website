// tailwind.config.js
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
        // Gray scale
        gray: {
          50: 'rgb(255, 252, 252)',
          100: 'rgb(247, 246, 239)',
          200: 'rgb(198, 197, 191)',
          300: 'rgb(148, 148, 143)',
          400: 'rgb(99, 98, 96)',
          500: 'rgb(49, 49, 48)',
        },
        // Green scale
        green: {
          200: 'rgb(173, 187, 186)',
          300: 'rgb(131, 154, 151)',
          400: 'rgb(90, 120, 117)',
          500: 'rgb(49, 86, 82)',
          900: 'rgb(10, 17, 16)',
        },
        // Brown scale
        brown: {
          300: 'rgb(214, 205, 200)',
          350: 'rgb(187, 172, 163)',
          400: 'rgb(197, 155, 142)',
          500: 'rgb(158, 89, 66)',
          700: 'rgb(126, 71, 53)',
        },
        // Chart colors
        chart: {
          1: 'rgb(209, 107, 55)',
          2: 'rgb(72, 153, 172)',
          3: 'rgb(56, 79, 132)',
          4: 'rgb(227, 173, 53)',
          5: 'rgb(232, 143, 58)',
        },
        // Sidebar colors
        sidebar: {
          DEFAULT: 'rgb(250, 250, 252)',
          foreground: 'rgb(30, 28, 45)',
          primary: 'rgb(48, 45, 66)',
          'primary-foreground': 'rgb(250, 250, 252)',
          accent: 'rgb(246, 246, 250)',
          'accent-foreground': 'rgb(48, 45, 66)',
          border: 'rgb(235, 235, 240)',
          ring: 'rgb(176, 174, 189)',
        },
        // Semantic colors
        primary: {
          DEFAULT: 'rgb(49, 86, 82)',
          light: 'rgb(90, 120, 117)',
          dark: 'rgb(10, 17, 16)',
          foreground: 'rgb(255, 255, 255)',
        },
        secondary: {
          DEFAULT: 'rgb(173, 187, 186)',
          foreground: 'rgb(10, 17, 16)',
        },
        accent: {
          DEFAULT: 'rgb(158, 89, 66)',
          light: 'rgb(197, 155, 142)',
          dark: 'rgb(126, 71, 53)',
          foreground: 'rgb(255, 255, 255)',
        },
        background: {
          DEFAULT: 'rgb(255, 252, 252)',
          alt: 'rgb(247, 246, 239)',
        },
        muted: {
          DEFAULT: 'rgb(247, 246, 239)',
          foreground: 'rgb(99, 98, 96)',
        },
        destructive: {
          DEFAULT: 'rgb(220, 38, 38)',
          foreground: 'rgb(255, 255, 255)',
        },
        border: 'rgb(198, 197, 191)',
        input: 'rgb(198, 197, 191)',
        ring: 'rgb(197, 155, 142)',
      },
      textColor: {
        DEFAULT: 'rgb(49, 49, 48)',
        muted: 'rgb(99, 98, 96)',
      },
      darkMode: {
        selector: '.dark-mode',
        colors: {
          primary: {
            DEFAULT: 'rgb(90, 120, 117)',
            foreground: 'rgb(255, 252, 252)',
          },
          secondary: {
            DEFAULT: 'rgb(10, 17, 16)',
            foreground: 'rgb(173, 187, 186)',
          },
          accent: {
            DEFAULT: 'rgb(197, 155, 142)',
            foreground: 'rgb(255, 252, 252)',
          },
          background: {
            DEFAULT: 'rgb(49, 49, 48)',
            alt: 'rgb(99, 98, 96)',
          },
          muted: {
            DEFAULT: 'rgb(99, 98, 96)',
            foreground: 'rgb(198, 197, 191)',
          },
          destructive: {
            DEFAULT: 'rgb(248, 113, 113)',
            foreground: 'rgb(255, 252, 252)',
          },
          border: 'rgb(148, 148, 143)',
          input: 'rgb(148, 148, 143)',
          ring: 'rgb(197, 155, 142)',
          chart: {
            1: 'rgb(113, 79, 177)',
            2: 'rgb(98, 167, 140)',
            3: 'rgb(232, 143, 58)',
            4: 'rgb(163, 71, 179)',
            5: 'rgb(211, 95, 80)',
          },
          sidebar: {
            DEFAULT: 'rgb(48, 45, 66)',
            foreground: 'rgb(250, 250, 252)',
            primary: 'rgb(113, 79, 177)',
            'primary-foreground': 'rgb(250, 250, 252)',
            accent: 'rgb(62, 58, 85)',
            'accent-foreground': 'rgb(250, 250, 252)',
            border: 'rgba(255, 255, 255, 0.1)',
            ring: 'rgb(132, 118, 160)',
          },
          text: {
            DEFAULT: 'rgb(255, 252, 252)',
            muted: 'rgb(247, 246, 239)',
          },
        },
      },
    },
  },
  plugins: [],
};
