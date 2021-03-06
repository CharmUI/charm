const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

module.exports =
{
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
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
}
