import { connectFunction } from "../../www/db/connection.js";
import UserRepository from "../../www/db/user.repository.js";
import ServiceException from "../exceptions/service.exception.js";
import { getHash } from "./helpers/encrypt.helper.js";

export default class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async findById(id) {
    const connection = await connectFunction();
    const repository = new UserRepository();

    const response = await repository.findById(id);
    connection.close();

    return response;
  }

  async save(user) {
    const connection = await connectFunction();

    await this.isUniqueEmail(user);
    await this.isUniqueName(user);

    user.password = getHash(user.password);

    const response = await this.repository.save(user);
    connection.close();

    return response;
  }

  async update(user) {
    const connection = await connectFunction();

    await this.isUniqueEmail(user);
    await this.isUniqueName(user);

    if (user.password) {
      user.password = getHash(user.password);
    }

    const response = await this.repository.update(user);
    connection.close();

    return response;
  }

  async isUniqueEmail(user) {
    const response = await this.repository.findByEmail(user.email);

    if (response && response.id !== user.id) {
      const exception = new ServiceException("The email already exists");
      throw exception;
    }
  }

  async isUniqueName(user) {
    const response = await this.repository.findByName(user.name);

    if (response && response.id !== user.id) {
      const exception = new ServiceException("The name already exists");
      throw exception;
    }
  }
}
