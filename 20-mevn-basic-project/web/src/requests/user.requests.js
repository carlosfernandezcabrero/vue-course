import axios from "axios";
import { BASE_URL } from "../variables";

const baseURL = `${BASE_URL}/api/users`;

export async function findById(id) {
  const response = await axios.get(`${baseURL}/${id}/`);
  return response.data;
}
