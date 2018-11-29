const path = require('path');
const webpack = require('webpack');
const slug = require('remark-slug');
const highlight = require('remark-highlight.js');

const mainPath = process.cwd();
const ENV = process.env.NODE_ENV;

const mdxConfigs = {
  loader: '@mdx-js/loader',
  options: {
    mdPlugins: [slug, highlight],
  },
};

const webpackConfig = {
  mode: ENV,
  output: {
    path: path.join(mainPath, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.css', '.js', '.mdx'],
    alias: {
      Root: path.join(mainPath),
      Layout: path.join(mainPath, 'src/layout/'),
      Classes: path.join(mainPath, 'src/css/classes/'),
      Tags: path.join(mainPath, 'src/css/tags/'),
      Custom: path.join(mainPath, 'src/css/shared/'),
      Static: path.join(mainPath, 'src/docs/static/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.mdx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          mdxConfigs,
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      PropTypes: 'prop-types',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
  ],
};

module.exports = webpackConfig;
