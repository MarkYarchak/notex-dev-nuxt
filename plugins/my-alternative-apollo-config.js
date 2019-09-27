import { fullHttpUrl } from '../nuxtClientConfig';

export default function(context) {
  return {
    httpEndpoint: fullHttpUrl,
    getAuth:() => 'Bearer my-static-token' // use this method to overwrite functions
  }
}
