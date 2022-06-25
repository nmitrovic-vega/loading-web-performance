// craco.config.js
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  style: {
    postOptions: {
      plugins: [
        purgecss({
          content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
          keyframes: true,
          variables: true
        }),
      ],
    },
  },
};

