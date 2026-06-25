export const INCREMENT_CONSTANT = "INCREMENT";
export const TOOGLE = "TOOGLE";

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

export default INCREMENT;
