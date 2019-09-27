const serverConfig = module.exports.serverConfig = {
  httpHost: `http://${process.env.NUXT_HOST || 'localhost'}`,
  wsHost: `ws://${process.env.NUXT_HOST || 'localhost'}`,
  port: process.env.NUXT_PORT || '3000',
  endpoint: 'graphql',
};

module.exports.fullHttpUrl = `${serverConfig.httpHost}:${serverConfig.port}/${serverConfig.endpoint}`;
module.exports.fullWsUrl = `${serverConfig.wsHost}:${serverConfig.port}/${serverConfig.endpoint}`;
