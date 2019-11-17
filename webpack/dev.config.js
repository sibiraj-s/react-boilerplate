module.exports = {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  devServer: {
    port: 7297,
    historyApiFallback: true
  }
};
