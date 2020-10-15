const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
