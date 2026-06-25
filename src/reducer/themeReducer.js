import { TOOGLE } from "../actions/action";

let initialState = {
  theme: "light",
};
function themeReducer(state = initialState, action) {
  switch (action.type) {
    case TOOGLE:
      return { ...state, theme: state.theme == "light" ? "dark" : "light" };

    default:
      return state;
  }
}

export default themeReducer;
