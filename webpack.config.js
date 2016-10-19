const path = require('path');

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './app.jsx',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  'webpack-dev-server': {
    options: {
      hot: true,
      publicPath: '/dist/',
      historyApiFallback: true,
    },
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
