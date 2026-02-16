import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // 🔹 READ FROM LOCALSTORAGE
  const readValue = () => {
    try {
      if (typeof window === "undefined") return initialValue;

      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(readValue);

  // 🔹 SET VALUE
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  };

  // 🔹 REMOVE VALUE
  const removeValue = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error removing localStorage:", error);
    }
  };

  // 🔹 SYNC BETWEEN TABS
  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return [storedValue, setValue, removeValue];
}

export default useLocalStorage;
