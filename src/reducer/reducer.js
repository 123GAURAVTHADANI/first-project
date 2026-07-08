import {
INCREMENT_CONSTANT,
FETCH_DATA_REQUEST,
FETCH_DATA_SUCCESS,
FETCH_DATA_FAILURE,
} from "../actions/action";

let initialState = {
counter: 0,
loading: false,
error: null,
data: [],
};
function counterReducer(state = initialState, action) {
switch (action.type) {
  case INCREMENT_CONSTANT: {
    return { ...state, counter: state.counter + 1 };
  }
  case FETCH_DATA_REQUEST:
    return { ...state, loading: true, error: null };
  case FETCH_DATA_SUCCESS:
    return { ...state, loading: false, data: action.payload };
  case FETCH_DATA_FAILURE:
    return { ...state, loading: false, error: action.payload };
  default:
    return state;
}
}
export default counterReducer;
