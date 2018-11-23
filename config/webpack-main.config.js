const path = require('path');
const webpack = require('webpack');

const mainPath = process.cwd();
const ENV = process.env.NODE_ENV;

const webpackConfig = {
  mode: ENV,
  output: {
    path: path.join(mainPath, 'dist'),
  },
  resolve: {
    extensions: ['.css', '.js'],
    alias: {
      Main: path.join(mainPath, 'src/css/main/'),
      Classed: path.join(mainPath, 'src/css/classed/'),
      Tags: path.join(mainPath, 'src/css/tags/'),
      Custom: path.join(mainPath, 'src/css/custom/'),
      Static: path.join(mainPath, 'static/'),
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
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(ENV),
    }),
  ],
};

module.exports = webpackConfig;
