const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  important: true,
  purge: {
    content: ['./src/**/*.{js,mdx}'],
    safelist: [
      'text-code-red',
      'text-code-red',
      'text-code-red',
      'text-code-blue',
      'text-code-green',
      'text-code-green',
      'text-code-white',
      'text-code-green',
      'text-code-yellow',
      'text-code-purple',
      'text-gray-400 italic',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        code: {
          white: '#fff',
          red: '#ff8383',
          blue: '#93ddfd',
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
    ({ addBase }) => {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontDisplay: 'optional',
            src: 'url("/fonts/inter-var-latin.woff2") format("woff2")',
          },
        },
      ]);
    },
  ],
};
