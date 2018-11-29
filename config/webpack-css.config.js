const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

// Postcss plugins
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssCustomProperties = require('postcss-custom-properties');
const autoprefixer = require('autoprefixer');
const perfectionist = require('perfectionist');
const url = require('postcss-url');

const postCssPlugins = [
  postcssImport(),
  url({
    url: 'rebase',
  }),
  postcssNested,
  postcssCustomProperties,
  autoprefixer,
  perfectionist,
];

const isProd = process.env.NODE_ENV === 'production';

const webpackCssConfig = merge(
  {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            isProd
              ? {
                loader: MiniCssExtractPlugin.loader,
              }
              : {
                loader: 'style-loader',
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
      }),
    ],
  },
);

module.exports = webpackCssConfig;
