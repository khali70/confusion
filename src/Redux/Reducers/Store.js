export const getStore = (name) => {
  if (localStorage.getItem(name)) {
    return localStorage.getItem(name);
  } else if (sessionStorage.getItem(name)) {
    return sessionStorage.getItem(name);
  }
};
export const setStore = (name, value) => {
  if (localStorage.getItem("token")) {
    return localStorage.setItem(name, value);
  } else {
    return sessionStorage.setItem(name, value);
  }
};
export const deleteStore = (name) => {
  if (localStorage.getItem("token")) {
    return localStorage.removeItem(name);
  } else {
    return sessionStorage.removeItem(name);
  }
};
