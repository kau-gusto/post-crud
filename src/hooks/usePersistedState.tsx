import React, { useEffect, useState } from "react";
import { StateType } from "../types/state";

export default function usePersistedState<T>(
  key: string,
  initialState: T
): StateType<T> {
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
