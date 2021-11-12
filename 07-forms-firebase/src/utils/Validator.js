export default class Validator {
  static validateString(...args) {
    let response = false;

    args.forEach((r) => {
      if (r.trim().length === 0) {
        response = true;
        return;
      }
    });

    return response;
  }
}
