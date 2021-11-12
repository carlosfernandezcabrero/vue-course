export default class ServiceException {
  constructor(message) {
    this.message = message;
    this.origin = "CUSTOM";
  }
}
