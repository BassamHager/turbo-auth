import { createContext, ReactNode, useState } from "react";

export const AppContext = createContext<any>({});

export function AppContextProvider({ children }: { children: ReactNode }) {
  // state

  // value
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
