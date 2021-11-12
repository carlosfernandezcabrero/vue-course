export const saveLocalStorage = function (key: string, value: string): void {
  localStorage.setItem(key, value);
};

export const readLocalStorage = function (key: string): string | null {
  const data = localStorage.getItem(key);
  return data;
};

export const removeLocalStorage = function (key: string): void {
  localStorage.removeItem(key);
};
