const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require('webpack-merge');
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({ mode = 'production', presets = [] } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode: 'none',
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000,
                },
              },
            ],
          },
          {
            test: /\.js$/,
            use: 'babel-loader',
          },
        ],
      },
      output: {
        filename: 'bundle.js',
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({ mode, presets }),
  );
};
