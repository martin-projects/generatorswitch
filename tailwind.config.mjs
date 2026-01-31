/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        warning: '#fbbf24',
        danger: '#ef4444',
        success: '#22c55e',
        info: '#3b82f6',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            lineHeight: '1.75',
            h2: {
              marginTop: '2em',
              paddingTop: '1em',
              borderTopWidth: '1px',
              borderTopColor: '#e5e7eb',
            },
            h3: {
              marginTop: '1.5em',
            },
            a: {
              color: '#0284c7',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: '#0369a1',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
