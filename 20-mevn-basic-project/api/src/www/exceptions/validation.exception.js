export default class ValidationException {
  constructor(message) {
    this.message = message;
    this.origin = "validation";
  }
}
