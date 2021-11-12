export default class Validator {
  static validateString(...args) {
    if (args.find((r) => r.trim().length === 0) !== undefined) {
      return true;
    }

    return false;
  }
}
