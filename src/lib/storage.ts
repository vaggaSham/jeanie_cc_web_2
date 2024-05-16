export const setBoolAsync = (key: string, value: string) => {
  try {
    return localStorage.setItem(key, value.toString());
  } catch (err) {
    console.error(err);
  }
};

export const getBoolAsync = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    if (value === "true") {
      return Boolean(value);
    }

    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const setStringAsync = (key: string, value: string) => {
  try {
    return localStorage.setItem(key, value);
  } catch (err) {
    console.error(err);
  }
};

export const getStringAsync = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    }

    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const setJsonAsync = (key: string, value: string) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};

export const getJsonAsync = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }

    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
};
