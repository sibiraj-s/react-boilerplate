const glob = require('glob');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const Paths = require('./utils/paths');

module.exports = {
  mode: 'production',
  bail: true,
  output: {
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name]-[contenthash].css',
      chunkFilename: 'styles/[name]-[contenthash].css'
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${Paths.srcDir}/**/*`, { nodir: true }),
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new TerserPlugin()
    ]
  }
};
