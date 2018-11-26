const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const mainPath = process.cwd();
const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = require('./webpack-main.config.js');
const webpackCssConfig = require('./webpack-css.config.js');

const webpackDocsConfig = merge(
  webpackConfig,
  webpackCssConfig,
  isProd
    ? {}
    : {
      devtool: 'source-map',
    },
  {
    entry: {
      entry: [path.join(mainPath, 'src/entry')],
      custom: [path.join(mainPath, 'src/docs/css/all')],
      'charm.classed': [path.join(mainPath, 'src/css/classes/all')],
    },
    output: {
      path: path.join(mainPath, 'docs'),
      publicPath: '',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(mainPath, 'src/docs/template.html'),
        title: 'Charm UI',
      }),
    ],
  },
);

module.exports = [
  webpackDocsConfig,
];
