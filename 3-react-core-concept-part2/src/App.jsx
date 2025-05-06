import "./App.css";
import Counter from "./Counter";
import Users from "./Users";

function App() {
  /*
  Must learn - 
  1. react component
  2. jsx
  3. Props(read only)
  4. conditional rendering
  5. pass array of object destructuring
*/
  function handleClick1() {
    alert("Button 1 clicked");
  }
  const handleClick2 = (value) => {
    alert(`Button ${value} clicked`);
  };
  const addNum = (value) => {
    alert(`sum is ${2+value}`)
  }
  return (
    <>
      <h4>react core concepts part2</h4>
      <Users></Users>  

      <Counter></Counter>
      {/* 
         onClick - C is capital.
         handleClick() - ❌
         handleClick   - ✅
         direct addNum(3) or handleCLick(2) - ❌
     */}
      <button onClick={handleClick1}>Button1</button>
      {/* to prevent auto reload */}
      <button onClick={() => handleClick2(2)}>Button1</button>
      <button onClick={() => addNum(3)}>Add Number</button>
    </>
  );
}

export default App;

/*
  Must learn this 6 react core concept - 
  1. Component
  2. jsx
  3. props(properties)
  4. event
  5. state
  6. load data
  
*/