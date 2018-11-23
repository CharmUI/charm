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
  isProd
    ? {
      entry: {
        charm: [path.join(mainPath, 'src/index')],
      },
    }
    : {
      devtool: 'source-map',
      entry: {
        custom: [path.join(mainPath, 'src/custom')],
        charm: [path.join(mainPath, 'src/index')],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(mainPath, 'src/template.html'),
          title: 'Charm UI',
        }),
      ],
    },
);

module.exports = [
  webpackEnvConfig,
];
