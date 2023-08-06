module.exports = function (api) {
  const presets = ['@babel/preset-env'];
  const plugins = [];

  // You can use 'api.env()' to enable different configurations based on the environment
  // For example, to enable certain plugins only in development mode:
  if (api.env('development')) {
    plugins.push('some-dev-plugin');
  }

  return {
    presets,
    plugins,
  };
};
