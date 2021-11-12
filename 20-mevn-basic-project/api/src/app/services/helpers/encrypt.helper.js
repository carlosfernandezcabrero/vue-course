import { genSaltSync, hashSync } from "bcrypt";

export const getHash = (password) => {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
};
