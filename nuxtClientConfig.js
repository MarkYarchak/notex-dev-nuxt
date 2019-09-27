export const clientConfig = {
  httpHost: `http://${process.env.NUXT_HOST || 'localhost'}`,
  wsHost: `ws://${process.env.NUXT_HOST || 'localhost'}`,
  port: process.env.NUXT_PORT || '3000',
  endpoint: 'graphql',
};

export const fullHttpUrl = `${clientConfig.httpHost}:${clientConfig.port}/${clientConfig.endpoint}`;
export const fullWsUrl = `${clientConfig.wsHost}:${clientConfig.port}/${clientConfig.endpoint}`;
