const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

const blendModes = plugin(({ addUtilities }) => {
  const utils = {
    '.blend-screen': { mixBlendMode: 'screen' },
    '.blend-multiply': { mixBlendMode: 'multiply ' },
  };
  addUtilities(utils, { variants: ['dark'] });
});

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    mixBlendMode: ['dark'],
  },
  plugins: [blendModes],
};
