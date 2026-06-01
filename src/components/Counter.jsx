import { useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <p className="count-display">Count: {count}</p>
      <div className="counter-actions">
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
