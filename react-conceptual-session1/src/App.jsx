import { useState, useEffect } from "react";
import "./App.css";
import MyProduct from "./MyProduct";

function App() {
  const [count, setCount] = useState(0);
  const StateCount = () => {
    let total = count + 1;
    setCount(total);
  };
  /*
    Notes- 
    React does not re-render a component when a regular JavaScript variable changes.
    React updates the UI only when state or props change
    So, cnt value will not update the UI
  */
  let cnt = 0;
  const variableCount = () => {
    cnt = count + 1;
  };
  const [name, setName] = useState("Sam");
  useEffect(() => {
    console.log(`Now, I am ${name}`);
  }, [name]);
  /*
    This effect runs after every render where name changed.

    If you leave the dependency array empty ([]), it runs only once after the first render.
  */

  const handleUseEffect = () => {
    setName("Peter");
  };
  // fetching data from an api by using useEffect
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Main APp jsx</h1>
      <div style={{border:"2px solid tomato",borderRadius:"20px", padding:"20px"}}>
        {products.map((item) => (
          <MyProduct product = {item} key = {item.id}></MyProduct>
        ))}
      </div>
      <div>
        <h2>I am {name}</h2>
        <button onClick={handleUseEffect}>Dependent useEffect</button>
      </div>
      <div
        style={{
          border: "2px solid aqua",
          margin: "20px",
          borderRadius: "23px",
          padding: "15px",
        }}
      >
        <h2>StateCount : {count} </h2>
        <h2>VariableCount : {cnt} </h2>
        <button onClick={StateCount}>state</button>
        <button onClick={variableCount}>variable</button>
      </div>
    </>
  );
}

export default App;

/*
  UseEffect mainly used for - 
  1. Fetching data from an API
  2. Subscribing or setting up listeners 
  3. Working with timers
  4. Syncing with external systems or manual DOM changes
*/
