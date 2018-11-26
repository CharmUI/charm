const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const mainPath = process.cwd();
const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = require('./webpack-main.config.js');
const webpackCssConfig = require('./webpack-css.config.js');

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
