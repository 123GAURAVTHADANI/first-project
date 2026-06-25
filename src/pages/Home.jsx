import { useState } from "react";
import Child from "./Child";
import Wrapper from "../hoc/Wrapper";
import Rating from "@mui/material/Rating";
import * as React from "react";
import { useSelector } from "react-redux";

function Home() {
  const [counter, setCounter] = useState(0);
  const [stateSecond, setSecondChange] = useState(0);
  const [value, setValue] = React.useState(2);

  console.log("Inside Home");

  return (
    <div>
      <Child counter={counter} />
      <h1>{state_value}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setSecondChange(stateSecond + 1)}>
        Second Change
      </button>
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
