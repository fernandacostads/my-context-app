import { INITIAL_STATE, InitialStateType } from ".";
import { AppContextActions } from "../enums/AppContextActions";
import { IDispatchAction } from "../interfaces/IDispatchAction";
export const appContextReducer = (
  state = INITIAL_STATE,
  action: IDispatchAction
): InitialStateType => {
  switch (action.type) {
    case AppContextActions.ToggleTheme:
      return {
        ...state,
        themeName: state.themeName === "light" ? "dark" : "light",
      };
    default:
      throw new Error();
  }
};
