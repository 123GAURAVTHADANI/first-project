import { memo } from "react";

function Child({ onClick }) {
  console.log("Inside CHild");
  return (
    <div>
      <h1>Child</h1>
      <button onClick={onClick}>Button is clicked from child</button>
    </div>
  );
}
export default memo(Child);
