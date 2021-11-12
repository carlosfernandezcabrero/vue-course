export const getException = (error) => {
  if (error.response) {
    if (error.response.status === 404) {
      return "Page not found";
    }
  }

  return "Internal Error";
};
