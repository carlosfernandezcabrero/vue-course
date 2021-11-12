import { Event } from "../../app/services/entities/event.entities.js";
import { useSave } from "./helpers/save-model.helper.js";
import { useUpdate } from "./helpers/update-model.helper.js";

export default class EventRepository {
  constructor() {
    this.getById = async (id) => await Event.findById(id);
    this.delete = async (id) => await Event.findByIdAndDelete(id);
  }

  async getAll() {
    const response = await Event.find();

    return response;
  }

  async update(event) {
    return await useUpdate(event, "updateEvent");
  }

  async save(event) {
    return await useSave(event, "registerEvent");
  }

  async findByName(name) {
    return await Event.findOne({ name });
  }

  async findByUserId(userId) {
    return await Event.find({ userId });
  }
}
