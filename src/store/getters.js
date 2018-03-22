export default {
  isLogged: state => state.logged,
  getMessage: state => state.message,
  getRegisteredFlag: state => state.registeredFlag,
  getLoginError: state => state.loginError,
  getLoadingSpinner: state => state.showLoader,
  getSignUpServerError: state => state.signUpServerError
}
