// Hooks
import { useState } from "react";

// A simple Introduction to State change in React
/*
    useState - return an array with two elements
    1- value (the current state)
    2 - setValue (the updater function)
         re-render the component so it reflects the new state

*/
export default function Counter() {
  const [count, updateSate] = useState(0);

  const increaseCount = () => {
    const newCount = count + 1;
    updateSate(newCount);
  };
  const reduceCount = () => {
    // const lessCount = count -1;
    // updateSate(lessCount);
    if (count !== 0) updateSate(count - 1);
  };

  return (
    <div style={{ border: "2px solid green", padding: "20px", margin: "20px" }}>
      <h3>Counter: {count}</h3>
      <button onClick={increaseCount}>Add</button>
      <button onClick={reduceCount}>Reduce</button>
    </div>
  );
}

/*
    5 use cases of useState()

    1. State management
    2. Conditional rendering
    3. Toggle flags (true/false)
    4. Counter
    5. Store API data in state
*/
