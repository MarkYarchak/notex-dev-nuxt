import { serverConfig } from './nuxtServerConfig';

export const clientConfig = {
  httpHost: serverConfig.httpHost,
  wsHost: serverConfig.wsHost,
  port: serverConfig.port,
  endpoint: serverConfig.endpoint,
};

export const gqlHttpUrl = `${clientConfig.httpHost}:${clientConfig.port}/${clientConfig.endpoint}`;
export const gqlWsUrl = `${clientConfig.wsHost}:${clientConfig.port}/${clientConfig.endpoint}`;
