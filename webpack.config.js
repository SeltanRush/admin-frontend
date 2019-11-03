const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
}

const config = {
  context: paths.src,
  entry: {
    app: './index',
  },

  output: {
    path: paths.dist,
    filename: '[name].bundle.[hash].js',
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: '/img',
              publicPath: '/img',
            },
          }],
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './assets/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css',
      publicPath: './',
    }),
  ],

  devServer: {
    port: 8000,
    stats: 'errors-only',
    publicPath: '/',
    historyApiFallback: true,
  },
}

module.exports = config;