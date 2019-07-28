const webpackMerge = require('webpack-merge');

module.exports = ({ mode, presets }) => {
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(mode),
  );
  return webpackMerge({}, ...mergedConfigs);
};
