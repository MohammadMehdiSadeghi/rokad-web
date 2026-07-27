/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          light: '#6BC7BA',
          DEFAULT: '#53BBAE',
          dark: '#3AA89A',
          deep: '#18A196',
        },
        navy: {
          DEFAULT: '#202A5A',
          light: '#2B3566',
          card: '#333E6D',
        },
        magenta: {
          DEFAULT: '#E0195B',
          dark: '#C21550',
        },
        orange: {
          DEFAULT: '#FF8441',
        },
        ink: '#1B2437',
        muted: '#6B7280',
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      backgroundImage: {
        'diamond-pattern':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(20, 30, 60, 0.12)',
        'card-hover': '0 18px 40px -14px rgba(20, 30, 60, 0.2)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
