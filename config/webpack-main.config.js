const path = require('path');
const webpack = require('webpack');
const slug = require('remark-slug');

const mainPath = process.cwd();
const ENV = process.env.NODE_ENV;

const isProd = process.env.NODE_ENV === 'production';

const babelConfigs = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
    ],
  },
};

if (isProd) {
  babelConfigs.options.plugins.push('transform-react-remove-prop-types');
}

const mdxConfigs = {
  loader: '@mdx-js/loader',
  options: {
    mdPlugins: [slug],
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
      Components: path.join(mainPath, 'src/components/'),
      Classes: path.join(mainPath, 'src/css/classes/'),
      Tags: path.join(mainPath, 'src/css/tags/'),
      Custom: path.join(mainPath, 'src/css/shared/'),
      Static: path.join(mainPath, 'static/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: babelConfigs,
      },
      {
        test: /.mdx?$/,
        use: [
          babelConfigs,
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
