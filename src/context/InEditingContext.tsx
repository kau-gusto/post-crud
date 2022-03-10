import React, { createContext, useContext, useState } from "react";
import { StateType } from "../types/state";

const inEditingContext = createContext<StateType<number>>([0, () => {}]);

export default function InEditingContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [inEditing, setInEditing] = useState(0);
  return (
    <inEditingContext.Provider value={[inEditing, setInEditing]}>
      {children}
    </inEditingContext.Provider>
  );
}

export function useInEditingContext() {
  return useContext(inEditingContext);
}
