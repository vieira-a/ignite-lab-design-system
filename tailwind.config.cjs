/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      'transparent': 'transparent',
      'gray-900': '#111827',
      'gray-800': '#1F2937',
      'gray-700': '#374151',
      'gray-500': '#6B7280',
      'gray-200': '#E5E7EB',
      'cyan-light': '#A0EBFF',
      'cyan-medium-light': '#61DAFB'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
