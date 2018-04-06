export default {
  isLogged: state => state.logged,
  getToken: state => state.token,
  getUserName: state => state.username,
  getMessage: state => state.message,
  getMessageType: state => state.messageType,
  getRegisteredFlag: state => state.registeredFlag,
  getLoginError: state => state.loginError,
  getLoadingSpinner: state => state.showLoader,
  news: state => state.news,
  newsLoaded: state => state.newsLoaded,
  getSignUpServerError: state => state.signUpServerError,
  getUserType: state => state.userType,
  getTotalNewsPages: state => state.totalNewsPages
}
