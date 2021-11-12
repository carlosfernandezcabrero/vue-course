import { connectFunction } from "../../www/db/connection.js";

export class GenericService {
  constructor(repository) {
    this.repository = repository;
  }

  async getAll() {
    const connection = await connectFunction();
    const response = await this.repository.getAll();
    connection.close();

    return response;
  }

  async getById(id) {
    const connection = await connectFunction();
    const response = await this.repository.getById(id);
    connection.close();

    return response;
  }

  async delete(id) {
    const connection = await connectFunction();
    const response = await this.repository.delete(id);
    connection.close();

    return response;
  }
}
