const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const webpackConfig = require('./webpack-main.config.js');
const webpackCssConfig = require('./webpack-css.config.js');

const mainPath = process.cwd();
const isProd = process.env.NODE_ENV === 'production';

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
      docs: [path.join(mainPath, 'src/docs/entry')],
    },
    output: {
      path: path.join(mainPath, 'docs'),
      publicPath: '',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(mainPath, 'src/docs/template.html'),
      }),
    ],
  },
);

module.exports = [
  webpackDocsConfig,
];
