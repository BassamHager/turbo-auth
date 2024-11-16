"use client";

import { definedTabs } from "@/constants";
import { getSession } from "@/lib/session";
import { Tab } from "@/types";
import { usePathname } from "next/navigation";
import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";

// types
type NavContextType = {
  navTabs: Tab[];
  dispatch: Dispatch<ReducerAction>;
  isAuthUser: boolean;
};

export enum ReducerActionType {
  UPDATE = "UPDATE",
}

interface ReducerAction {
  type: ReducerActionType;
  payload: string;
}

export const NavContext = createContext<NavContextType>({
  navTabs: definedTabs,
  dispatch: () => {},
  isAuthUser: false,
});

export function NavContextProvider({ children }: { children: ReactNode }) {
  const [navTabs, dispatch] = useReducer(reducer, definedTabs);
  const [isAuthUser, setIsAuthUser] = useState(false);

  function reducer(state: Tab[], action: ReducerAction) {
    switch (action.type) {
      case "UPDATE":
        return definedTabs.map((t) => ({
          ...t,
          isActive: t.name.toLowerCase() === action.payload.toLowerCase(),
        }));
      default:
        return state;
    }
  }

  const pathName = usePathname();

  const checkIsAuthUser = async () => {
    const session = await getSession();
    return !!session?.user.name;
  };

  useEffect(() => {
    checkIsAuthUser().then((isAuthUser) => setIsAuthUser(isAuthUser));

    const activeTabName = definedTabs.find((t) =>
      pathName.includes(t.name.toLowerCase())
    );

    dispatch({
      type: ReducerActionType.UPDATE,
      payload: activeTabName?.name || "home",
    });
  }, [pathName]);

  const value = { navTabs, dispatch, isAuthUser };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
