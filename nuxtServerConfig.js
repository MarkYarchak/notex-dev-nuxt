exports.serverConfig = {
    httpHost: `http://${process.env.NUXT_HOST || 'localhost'}`,
    wsHost: `ws://${process.env.NUXT_HOST || 'localhost'}`,
    port: process.env.NUXT_HOST || '3000',
};
