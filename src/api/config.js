export default {
  API_BASE_URL: process.env.NODE_ENV === 'production'
    ? 'http://januszpol-rest.herokuapp.com/api/v1.0' : 'http://localhost:3000/api/v1.0',
  API_LOGIN_BASE_URL: process.env.NODE_ENV === 'production'
    ? 'http://januszpol-rest.herokuapp.com' : 'http://localhost:3000'
}
