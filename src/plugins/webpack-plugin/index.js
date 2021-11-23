const webpack = require('webpack');

module.exports = function (context, options) {
  return {
    name: 'custom-webpack-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        plugins: [
          ...config.plugins,
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer']
          })
        ],
        resolve: {
          alias: {
            ...config.resolve.alias,
            buffer: require.resolve('buffer'),
            stream: require.resolve('stream-browserify')
          }
        }
      };
    },
  };
};
