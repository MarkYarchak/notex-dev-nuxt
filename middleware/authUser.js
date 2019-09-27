const { fullHttpUrl } = require('../nuxtClientConfig');

export default async ({ redirect, route, $axios }) => {
  try {
    const response = await $axios.post(fullHttpUrl, {
      query: `{ profileUser (username: ${route.params.username}) { id, username, fullName } }`,
    });
    if (!response.data.data) return redirect('/login');
  } catch (e) {
    console.log(e);
  }

};
