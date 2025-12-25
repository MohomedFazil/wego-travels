export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f0f8',
          100: '#cce2f1',
          200: '#99c5e3',
          300: '#66a8d5',
          400: '#338bc7',
          500: '#0167B2', // Main Brand Blue
          600: '#015da0',
          700: '#014d85',
          800: '#013e6b',
          900: '#012e50', // Dark text blue
          950: '#001f3d',
        },
        orange: {
          50: '#fef3ea',
          100: '#fde8d6',
          200: '#fbd1ae',
          300: '#f9bb85',
          400: '#f7a45d',
          500: '#F48A34', // Main Brand Orange
          600: '#db7c2f',
          700: '#b76827',
          800: '#92531f',
          900: '#784319',
          950: '#43250e',
        }
      }
    }
  },
  plugins: [],
}