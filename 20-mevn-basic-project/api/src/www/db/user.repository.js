import { User } from "../../app/services/entities/user.entities.js";
import { useSave } from "./helpers/save-model.helper.js";
import { useUpdate } from "./helpers/update-model.helper.js";

export default class UserRepository {
  async save(user) {
    return await useSave(user, "registerUser");
  }

  async update(user) {
    return await useUpdate(user, "updateUser");
  }

  async findById(id) {
    return await User.findOne({ id });
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findByName(name) {
    return await User.findOne({ name });
  }
}
