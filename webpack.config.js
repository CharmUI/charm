const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

const ENV = process.env.NODE_ENV;
const isProd = process.env.NODE_ENV === 'production';

const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssCustomProperties = require('postcss-custom-properties');
const autoprefixer = require('autoprefixer');
const perfectionist = require('perfectionist');

const postCssPlugins = [
  postcssImport,
  postcssNested,
  postcssCustomProperties,
  autoprefixer,
  perfectionist,
];

const webpackConfig = {
  mode: ENV,
  entry: {
    charming: ['./src/index'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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

const webpackCssConfig = merge(
  isProd
    ? {
      devtool: 'source-map',
    }
    : {},
  webpackConfig,
  {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            isProd
              ? {
                loader: 'style-loader',
              }
              : {
                loader: MiniCssExtractPlugin.loader,
              },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => postCssPlugins,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
  },
);

module.exports = [
  webpackCssConfig,
];
