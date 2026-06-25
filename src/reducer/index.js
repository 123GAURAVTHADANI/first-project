import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import counterReducer from "./reducer";

const reducer = combineReducers({
  themeReducer: themeReducer,
  counterReducer: counterReducer,
});

export default reducer;
