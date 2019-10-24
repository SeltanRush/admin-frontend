const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
}

const config = {
  context: paths.src,
  entry: {
    app: './index',
    publicPath: '/',
  },

  output: {
    path: paths.dist,
    filename: '[name].bundle.[hash].js',
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '..', 'src')],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/,
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],

  devServer: {
    port: 8000,
    stats: 'errors-only',
    publicPath: '/',
    historyApiFallback: true,
  },
}

module.exports = config;