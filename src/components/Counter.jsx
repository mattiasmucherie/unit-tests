import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <p role="dialog">You have clicked {counter} times.</p>
      <div>
        <button onClick={increaseCount}>Increase count</button>
        <button onClick={decreaseCount}>Decrease count</button>
      </div>
    </div>
  );
}

export default Counter;
