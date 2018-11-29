const path = require('path');
const webpack = require('webpack');

const mainPath = process.cwd();
const ENV = process.env.NODE_ENV;

const webpackConfig = {
  mode: ENV,
  output: {
    path: path.join(mainPath, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.css', '.js'],
    alias: {
      Root: path.join(mainPath),
      Classes: path.join(mainPath, 'src/css/classes/'),
      Tags: path.join(mainPath, 'src/css/tags/'),
      Custom: path.join(mainPath, 'src/css/shared/'),
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
