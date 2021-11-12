import axios, { AxiosResponse } from "axios";

export class ColorService {
  static async loadColor(): Promise<AxiosResponse<any>> {
    return await axios.get("/api.json").then((r) => r.data);
  }
}
