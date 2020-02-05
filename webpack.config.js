const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  target: 'web',
  entry: './app/index.js',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.js/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.html$/,
      use: ['html-loader'],
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      minify: {
        caseSensitive: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        collapseBooleanAttributes: true,
        removeCommentsFromCDATA: true,
        minifyJS: true,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8888,
    host: 'localhost',
    historyApiFallback: true,
  },
};
