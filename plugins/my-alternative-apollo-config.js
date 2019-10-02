import { gqlHttpUrl } from '../nuxtClientConfig';

export default function(context) {
  return {
    httpEndpoint: gqlHttpUrl,
    getAuth:() => 'Bearer my-static-token' // use this method to overwrite functions
  }
}
