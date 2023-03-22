export default {
  meEndpoint: '/api/users/current',
  loginEndpoint: '/api/users/login',
  registerEndpoint: '/api/users/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
