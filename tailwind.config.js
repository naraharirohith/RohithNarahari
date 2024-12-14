/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#111827',
          card: '#1F2937',
          text: '#F9FAFB',
          muted: '#9CA3AF'
        }
      },
      backgroundColor: {
        'tech-badge': {
          light: '#F3F4F6',
          dark: '#374151'
        }
      },
      textColor: {
        'tech-badge': {
          light: '#1F2937',
          dark: '#E5E7EB'
        }
      }
    },
  },
  plugins: [],
};