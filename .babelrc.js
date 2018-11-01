const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['emotion', isDev ? { sourceMap: true, autoLabel: true } : { hoist: true }],
  ],
};
