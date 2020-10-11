const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  bail: true,
  output: {
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name]-[contenthash].css',
      chunkFilename: 'styles/[name]-[contenthash].css',
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()],
  },
};
