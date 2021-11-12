import axios from "axios";
import Router from "../router";
import { getToken } from "../shared/auth.service";
import useLogout from "../shared/logout.hook";
import { BASE_URL } from "../variables";

const baseURL = `${BASE_URL}/api/events`;
const isAuthError = (err) => err.response.data.origin === "authentication";
const headers = () => ({ token: getToken() });

export const deleteById = async (id) => {
  try {
    return await axios.delete(`${baseURL}/${id}`, { headers: headers() });
  } catch (err) {
    if (isAuthError(err)) {
      useLogout();
      Router.push("/login");
    }
    throw err;
  }
};

export const findByUserId = async (userId) => {
  try {
    return await (
      await axios.get(`${baseURL}/byUserId/${userId}`, { headers: headers() })
    ).data;
  } catch (err) {
    if (isAuthError(err)) {
      useLogout();
      Router.push("/login");
    }
    throw err;
  }
};

export const findAll = async () => {
  return await (
    await axios.get(`${baseURL}`)
  ).data;
};

export const findById = async (id) => {
  return await (
    await axios.get(`${baseURL}/${id}`)
  ).data;
};

export const save = async (event) => {
  try {
    await axios.post(
      `${baseURL}`,
      {
        ...event,
        finished: false,
      },
      { headers: headers() }
    );
    Router.push("/admin");
  } catch (err) {
    if (isAuthError(err)) {
      useLogout();
      Router.push("/login");
    }
    throw err;
  }
};

export const update = async (event) => {
  try {
    await axios.put(`${baseURL}/${event.id}`, event, {
      headers: headers(),
    });
    Router.push("/admin");
  } catch (err) {
    if (isAuthError(err)) {
      useLogout();
      Router.push("/login");
    }
    throw err;
  }
};
