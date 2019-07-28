module.exports = () => ({
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // how/what file will be matching this file
        test: /\.css$/,
        // how we will be transforming it
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
