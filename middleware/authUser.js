const { gqlHttpUrl } = require('../nuxtServerConfig');

export default async ({ redirect, $axios }) => {
  return await $axios.post(gqlHttpUrl, {
    // need to get token data from apollo persist storage or from vuex server
    query: `{ checkUserLoginStatus (token: ${123}) { id, username, fullName } }`,
  }).catch(() => redirect('/login'));
};
