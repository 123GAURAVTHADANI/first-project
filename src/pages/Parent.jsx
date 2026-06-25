import { useCallback, useState } from "react";
import Child from "./Child";
import INCREMENT from "../actions/action";
import { useDispatch, useSelector } from "react-redux";

export default function Parent() {
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const handleClick = () => {
    console.log("Button is clicked");
  };

  const handleIncrement = () => {
    dispatch(INCREMENT());
  };
  const state_value = useSelector((state) => state.counterReducer.counter);

  return (
    <div>
      <p>COunt : {counter}</p>
      <h1>{state_value}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
