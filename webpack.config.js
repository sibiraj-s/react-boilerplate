const path = require('path');

const { ProgressPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const Paths = require('./webpack/utils/paths');
const devConfig = require('./webpack/dev.config');
const prodConfig = require('./webpack/prod.config');

const isDevEnv = process.env.NODE_ENV === 'development';

const baseConfig = {
  context: Paths.rootDir,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Assets: path.resolve(Paths.srcDir, 'assets'),
    },
  },
  entry: path.resolve(Paths.srcDir, 'index.js'),
  output: {
    path: Paths.outDir,
    publicPath: 'auto',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(?:node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          isDevEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: isDevEnv ? '[name][ext]' : 'images/[name]-[contenthash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(Paths.srcDir, 'index.html'),
      favicon: path.resolve(Paths.srcDir, 'assets', 'webpack.png'),
    }),
    new ProgressPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
  },
};

module.exports = merge(baseConfig, isDevEnv ? devConfig : prodConfig);
