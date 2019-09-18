const { serverConfig } = require('../nuxtServerConfig');

export default async ({ redirect, route, $axios }) => {
  try {
    const response = await $axios.post(`${serverConfig.httpHost}:${serverConfig.port}/graphql`, {
      query: `{ profileUser (username: ${route.params.username}) { id, username, fullName } }`,
    });
    if (!response.data.data.length) return redirect('/login');
  } catch (e) {
    console.log(e);
  }

};
