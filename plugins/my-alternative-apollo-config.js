import { clientConfig } from '../nuxtClientConfig';

export default function(context) {
  return {
    httpEndpoint: `http://${clientConfig.httpHost}:${clientConfig.port}/graphql`,
    getAuth:() => 'Bearer my-static-token' // use this method to overwrite functions
  }
}
