export const INCREMENT_CONSTANT = "INCREMENT";
export const TOOGLE = "TOOGLE";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// action creator
const INCREMENT = () => {
  return {
    type: INCREMENT_CONSTANT,
  };
};

const TOGGLE_THEME = () => {
  return {
    type: TOOGLE,
  };
};

export const thunkMiddleware = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
      });
  };
};
export default INCREMENT;
