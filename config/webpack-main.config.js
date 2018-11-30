const path = require('path');

const mainPath = process.cwd();
const ENV = process.env.NODE_ENV;

const webpackConfig = {
  mode: ENV,
  output: {
    path: path.join(mainPath, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.css'],
    alias: {
      Root: path.join(mainPath),
      Classes: path.join(mainPath, 'src/css/classes/'),
      Tags: path.join(mainPath, 'src/css/tags/'),
      Custom: path.join(mainPath, 'src/css/shared/'),
    },
  },
};

module.exports = webpackConfig;
