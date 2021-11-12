import { VerifyUser } from "../../app/services/entities/user.entities.js";

export default class AuthRepository {
  async verifyUser(email) {
    return await VerifyUser.findOne({ email });
  }
}
