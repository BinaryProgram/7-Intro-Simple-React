import React from "react";
import PropTypes, { array } from "prop-types";
import "./Cart.css";
const Cart = (props) => {
  const { cart,handleRemoveCartProduct} = props;
  // LS - localStorage
  return (
    <div>
      <h3>Cart - {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img} alt="water bottle" />
            <div className="remove-cart" onClick={() => handleRemoveCartProduct(bottle.id)}><button>Remove</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};
Cart.propTypes = {
    lsCart:PropTypes.array.isRequired,
    handleRemoveCartProduct:PropTypes.func.isRequired
}
export default Cart;
