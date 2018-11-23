const path = require('path');

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
      Main: path.join(mainPath, 'src/main/'),
      Class: path.join(mainPath, 'src/class/'),
      Tag: path.join(mainPath, 'src/tag/'),
      Custom: path.join(mainPath, 'src/custom/'),
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
};

module.exports = webpackConfig;
