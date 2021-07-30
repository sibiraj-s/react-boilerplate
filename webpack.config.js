const path = require('path');

const { ProgressPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const pkgJson = require('./package.json');
const Paths = require('./webpack/utils/paths');
const { WEBPACK_MODE, isProduction } = require('./webpack/utils/env');
const devConfig = require('./webpack/dev.config');
const prodConfig = require('./webpack/prod.config');

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
    publicPath: '/',
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
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: isProduction ? 'images/[name]-[contenthash][ext][query]' : '[name][ext]',
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
    splitChunks: {
      chunks: 'all',
    },
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
  },
};

// changes required to deploy in Github Pages
if (process.env.NODE_ENV === 'gh-pages') {
  baseConfig.output.publicPath = `/${pkgJson.name}/`;
}

module.exports = merge(baseConfig, WEBPACK_MODE === 'development' ? devConfig : prodConfig);
