
export const useLocalStorage = (key, defaultValue) => {
  const getData = () => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  };

  const setData = value => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [getData(), setData];
};
