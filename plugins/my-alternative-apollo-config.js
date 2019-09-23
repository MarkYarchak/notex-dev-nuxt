export default function(context){
  return {
    httpEndpoint: 'http://192.168.43.234:3000/graphql',
    getAuth:() => 'Bearer my-static-token' // use this method to overwrite functions
  }
}
