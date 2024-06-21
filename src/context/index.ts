import { createContext } from "react";

export const INITIAL_STATE = {
  themeName: "light",

  
};

export type InitialStateType = typeof INITIAL_STATE;

export const AppContext = createContext({
  state: INITIAL_STATE,
  toggleTheme: () => {},
});
