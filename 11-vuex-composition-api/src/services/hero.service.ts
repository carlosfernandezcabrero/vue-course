import axios from "axios";

export class HeroService {
  static async getHeroes(): Promise<unknown> {
    return await axios.get("/api.json").then((res) => res.data);
  }
}
