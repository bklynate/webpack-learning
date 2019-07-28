const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
  },
  plugins: [new miniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
