import { useState } from "react";
import Child from "./Child";
import Wrapper from "../hoc/Wrapper";
import Rating from "@mui/material/Rating";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkMiddleware } from "../actions/action";
import { increment, decrement } from "../features/counterSlice";

function Home() {
  const [counter, setCounter] = useState(0);
  const [stateSecond, setSecondChange] = useState(0);
  const [value, setValue] = React.useState(2);
  const [stateValue, setStateValue] = useState(0);
  const counterValue = useSelector((state) => state?.counter?.value);
  const dispatch = useDispatch();

  const handleFetchData = () => {
    dispatch(thunkMiddleware());
  };

  return (
    <div>
      <Child counter={counter} />
      <h1>{counterValue}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => dispatch(increment())}>Redux Increment</button>
      <button onClick={() => dispatch(decrement())}>Redux Decrement</button>
      <button onClick={() => setSecondChange(stateSecond + 1)}>
        Second Change
      </button>
      <button onClick={handleFetchData}>Fetch API</button>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
}

export default Wrapper(Home);
