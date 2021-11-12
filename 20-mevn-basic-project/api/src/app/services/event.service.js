import { connectFunction } from "../../www/db/connection.js";
import EventRepository from "../../www/db/event.repository.js";
import ServiceException from "../exceptions/service.exception.js";

export default class EventService {
  constructor(repository) {
    this.repository = repository;
  }

  async save(event) {
    const connection = await connectFunction();

    await this.isUniqueName(event);

    const response = await this.repository.save(event);
    connection.close();

    return response;
  }

  async update(event, userId) {
    const connection = await connectFunction();

    await this.isUniqueName(event);
    await this.isMyEvent(event.id, userId);

    const response = await this.repository.update(event);
    connection.close();

    return response;
  }

  async getByUserId(userId) {
    const connection = await connectFunction();
    const repository = new EventRepository();

    const response = await repository.findByUserId(userId);
    connection.close();

    return response;
  }

  async findAll() {
    const connection = await connectFunction();
    const repository = new EventRepository();

    const response = await repository.getAll();
    connection.close();

    return response;
  }

  async delete(id, userId) {
    const connection = await connectFunction();
    const repository = new EventRepository();

    await this.isMyEvent(id, userId);

    const response = await repository.delete(id);
    connection.close();

    return response;
  }

  async isUniqueName(event) {
    const response = await this.repository.findByName(event.name);

    if (response && response.id !== event.id) {
      const exception = new ServiceException("The name already exists");
      throw exception;
    }
  }

  async isMyEvent(eventId, userId) {
    const repository = new EventRepository();
    const event = await repository.getById(eventId);

    if (event.userId !== userId) {
      const exception = new ServiceException(
        "You cannot modify an event that is not yours"
      );
      throw exception;
    }
  }
}
