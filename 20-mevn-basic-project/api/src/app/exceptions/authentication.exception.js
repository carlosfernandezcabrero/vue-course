export default class AuthenticationException {
  constructor(message) {
    this.message = message;
    this.origin = "authentication";
  }
}
