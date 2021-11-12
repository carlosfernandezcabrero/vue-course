import { compareSync } from "bcrypt";

import { connectFunction } from "../../www/db/connection.js";
import ServiceException from "../exceptions/service.exception.js";
import { encode } from "./helpers/jwt.helper.js";

export default class AuthService {
  constructor(repository) {
    this.repository = repository;
  }

  async verifyUser(authentication) {
    const connection = await connectFunction();
    const response = await this.repository.verifyUser(authentication.email);
    if (response && compareSync(authentication.password, response.password)) {
      connection.close();
      return response;
    }

    connection.close();
    const exception = new ServiceException(
      "The email or password is not correct"
    );
    throw exception;
  }

  generateToken(id) {
    return encode(id);
  }
}
