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
        entry: [path.join(mainPath, 'src/entry')],
        'charm.classed': [path.join(mainPath, 'src/css/classes/all')],
        'charm.tagged': [path.join(mainPath, 'src/css/tags/all')],
      },
    }
    : {
      devtool: 'source-map',
      entry: {
        entry: [path.join(mainPath, 'src/entry')],
        custom: [path.join(mainPath, 'src/css/custom/all')],
        'charm.classed': [path.join(mainPath, 'src/css/classes/all')],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(mainPath, 'src/template.html'),
          title: 'Charm UI',
        }),
      ],
    },
);

const webpackDocsConfig = merge(
  webpackConfig,
  webpackCssConfig,
  isProd
    ? {
      entry: {
        custom: [path.join(mainPath, 'src/css/custom/all')],
        entry: [path.join(mainPath, 'src/entry')],
        'charm.classed': [path.join(mainPath, 'src/css/classes/all')],
      },
      output: {
        path: path.join(mainPath, 'docs'),
        publicPath: '',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(mainPath, 'src/template.html'),
          title: 'Charm UI',
        }),
      ],
    }
    : {
    },
);

module.exports = [
  webpackEnvConfig,
  webpackDocsConfig,
];
