const path = require('path');

module.exports = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@layout': path.resolve(__dirname, 'src/layouts'),
      '@type': path.resolve(__dirname, 'src/type'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  };

  return config;
};