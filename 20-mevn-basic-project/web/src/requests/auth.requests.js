import axios from "axios";
import { BASE_URL } from "../variables";

const baseURL = `${BASE_URL}/api/`;

export async function loginRequest(user) {
  return await (
    await axios.post(`${baseURL}login`, user)
  ).data;
}
