import { INCREMENT_CONSTANT } from "../actions/action";

let initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_CONSTANT: {
      return { ...state, counter: state.counter + 1 };
    }
    default:
      return state;
  }
}
export default counterReducer;
