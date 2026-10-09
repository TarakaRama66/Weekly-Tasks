 import { useState } from "react";
 
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null
        ? JSON.parse(saved)
        : initialValue;
    } catch {
      return initialValue;
    }
  });
 
  function updateValue(nextValue) {
    setValue((previous) => {
      const next =
        typeof nextValue === "function"
          ? nextValue(previous)
          : nextValue;
 
      try {
        localStorage.setItem(key, JSON.stringify(next));
      } catch (error) {
        console.error("Unable to save users:", error);
      }
 
      return next;
    });
  }
 
  return [value, updateValue];
}