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
      'asn1.js': require.resolve('asn1.js/'),
      buffer: require.resolve('buffer/'),
      crypto: require.resolve('crypto-browserify/'),
      stream: require.resolve('stream-browserify/'),
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
    new webpack.DefinePlugin({
      'process.browser': JSON.stringify(process.browser),
      'process.version': JSON.stringify(process.version),
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[fullhash].js',
    sourceMapFilename: 'bundle.[fullhash].js.map',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8888,
    host: 'localhost',
    historyApiFallback: true,
  },
};
