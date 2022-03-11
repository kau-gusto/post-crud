import React, { createContext, useContext, useState } from "react";
import { StateType } from "../types/state";

const InEditingContext = createContext<StateType<number>>([0, () => {}]);

export default function InEditingContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [inEditing, setInEditing] = useState(0);
  return (
    <InEditingContext.Provider value={[inEditing, setInEditing]}>
      {children}
    </InEditingContext.Provider>
  );
}

export function useInEditingContext() {
  return useContext(InEditingContext);
}
