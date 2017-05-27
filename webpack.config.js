const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'SSR',
  entry: './app/SSR.js',
  output: {
    path: path.join(__dirname, '.', 'dist', 'assets'),
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath: '/assets/',
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    rules: [
      use: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            include: path.join(__dirname, '.', 'app'),
            exclude: path.join(__dirname, '.', 'node_modules'),
          },
        },
      ],
    ],
  },
};
