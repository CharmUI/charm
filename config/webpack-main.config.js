const path = require('path');

const mainPath = process.cwd();
const ENV = process.env.NODE_ENV;

const webpackConfig = {
  mode: ENV,
  devtool: 'source-map',
  entry: {
    charm: [path.join(mainPath, 'src/index')],
  },
  output: {
    path: path.join(mainPath, 'dist'),
  },
  resolve: {
    extensions: ['.css', '.js'],
    alias: {
      Stylesheets: path.join(mainPath, 'src/stylesheets/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

module.exports = webpackConfig;
