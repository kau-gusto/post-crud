import React, { useEffect, useState } from "react";

export default function usePersistedState<T>(
  key: string,
  initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>((): T => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
