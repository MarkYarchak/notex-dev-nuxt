exports.serverConfig = {
    httpHost: `http://${process.env.NUXT_HOST || '192.168.43.234'}`,
    wsHost: `ws://${process.env.NUXT_HOST || '192.168.43.234'}`,
    port: process.env.NUXT_PORT || '3000',
};
