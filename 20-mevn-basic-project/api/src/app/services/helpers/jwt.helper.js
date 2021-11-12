import jwt from "jsonwebtoken";
import AuthenticationException from "../../exceptions/authentication.exception.js";

const privateKey = "secret";
const expiresIn = 60 * 60 * 24;

const options = {
  expiresIn
};

export const encode = (id) => {
  const token = jwt.sign({ id }, privateKey, options);
  return token;
};

export const decode = () => {};

export const verify = (token) => {
  if (token) {
    try {
      return jwt.verify(token, privateKey, options);
    } catch (err) {
      const exception = new AuthenticationException(err.message);
      throw exception;
    }
  }
};
