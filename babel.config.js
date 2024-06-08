const path = require('path');

module.exports = function (api) {
  api.cache(false);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module:react-native-dotenv',
        {
          envName: 'WMS_ENV', // default: APP_ENV
          moduleName: '@env',
          //加载 env 目录下的环境变量文件
          // .env .env.local .env.[mode] .env.[mode].local
          path: 'env/.env',
          safe: true,
          allowUndefined: false,
          verbose: true
        }
      ]
    ]
  };
};
