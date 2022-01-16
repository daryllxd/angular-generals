const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      blue: {
        400: 'red'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
