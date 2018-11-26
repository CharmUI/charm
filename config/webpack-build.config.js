const path = require('path');
const merge = require('webpack-merge');

const webpackConfig = require('./webpack-main.config.js');
const webpackCssConfig = require('./webpack-css.config.js');

const mainPath = process.cwd();

const webpackEnvConfig = merge(
  webpackConfig,
  webpackCssConfig,
  {
    entry: {
      'charm.classed': [path.join(mainPath, 'src/css/classes/all')],
      'charm.tagged': [path.join(mainPath, 'src/css/tags/all')],
    },
  },
);

module.exports = [
  webpackEnvConfig,
];
