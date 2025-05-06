import React from "react";
import "./Bottle.css";
const Bottle = (props) => {
  const { bottle,addCart } = props;

  return (
    <div className="bottle">
      <h4>Bottle - {bottle.name}</h4>
      <img src={bottle.img} alt="water bottle" />
      <h3>Price - {bottle.price}</h3>
      <button onClick={() =>addCart(bottle) }>Purchase</button>
    </div>
  );
};

export default Bottle;
