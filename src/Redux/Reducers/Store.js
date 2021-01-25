/**
 * get data from the storge using key `name`
 * @storge localStorage|| sessionStorage
 * @param {string} name the key
 */
export const getStore = (name) => {
  if (localStorage.getItem(name)) {
    return localStorage.getItem(name);
  } else if (sessionStorage.getItem(name)) {
    return sessionStorage.getItem(name);
  }
};
/**
 * add data to the storge with key `name`
 * @storge localStorage|| sessionStorage
 * @param {string} name the key
 * @param {string} value the value as string
 */
export const setStore = (name, value) => {
  if (localStorage.getItem("token")) {
    return localStorage.setItem(name, value);
  } else {
    return sessionStorage.setItem(name, value);
  }
};
/**
 * delete data from the storge with key `name`
 * @storge localStorage|| sessionStorage
 * @param {string} name the key
 */
export const deleteStore = (name) => {
  if (localStorage.getItem("token")) {
    return localStorage.removeItem(name);
  } else {
    return sessionStorage.removeItem(name);
  }
};
