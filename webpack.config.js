/* eslint-disable no-undef, no-unused-vars */

const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', 'jpeg', 'jpg', '.gif', '.png', '.svg', '.woff2', '.mp3'],
    alias: {
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@img': path.resolve(__dirname, 'src/assets/images'),
      '@sounds': path.resolve(__dirname, 'src/assets/sounds')
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
        use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'postcss-loader'],
          fallback: 'style-loader'
        })),
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader?name=sound/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {
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
    new ExtractTextWebpackPlugin('styles.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: 'favicon.ico',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    inline: true,
    open: true
  },
  devtool: 'eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCSSAssets()
  );
} else {
  module.exports.plugins.push(
    new webpack.NamedModulesPlugin()
  );
}
