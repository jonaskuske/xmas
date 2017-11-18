/* eslint-disable no-undef, no-unused-vars */

const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpacklugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', 'jpeg', 'jpg', '.gif', '.png', '.svg', '.woff2', '.mp3'],
    alias: {
      styles: path.resolve(__dirname, 'src/assets/styles'),
      sound: path.resolve(__dirname, 'src/assets/sound')
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(ExtractTextWebpacklugin.extract({
          use: ['css-loader', 'postcss-loader'],
          fallback: 'style-loader'
        })),
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader?name=sound/[name].[ext]'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/assets/img/&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: /assets/,
      },
    ]
  },
  plugins: [
    new ExtractTextWebpacklugin('styles.css')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    inline: true,
    open: true
  },
  devtool: 'eval-source-map'
};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCSSAssets()
  );
}