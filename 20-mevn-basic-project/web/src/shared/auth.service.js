export function isAuth() {
  return !!localStorage.getItem("token_eventapp");
}

export function getToken() {
  return localStorage.getItem("token_eventapp");
}

export function getUser() {
  const data = localStorage.getItem("userId_eventapp");
  if (data) return data;
  return {};
}
