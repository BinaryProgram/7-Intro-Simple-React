import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import "./Bottles.css";
import {
  addCartToLS,
  getStoreCart,
  removeCartProduct,
} from "../../utilities/localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchBottles = async () => {
      const response = await fetch("bottles.json");
      const data = await response.json();
      setBottles(data);
    };
    fetchBottles();
  }, []);
  const handleCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    // console.log(bottle);
    // LocalStorage has limited capacity(10mb google chrome). id is enough to track the stored cart product.
    addCartToLS(bottle.id);
  };
  /* 
    - Load cart data from local storage cart 
      => each time useEffect bottles dependency
      will change useEffect will rendered. It
      will load card data from LS.
      Without dependency card data won't be loaded.
  */
  useEffect(() => {
    if (bottles.length) {
      const getCart = getStoreCart();
      const storedCart = [];
      for (const id of getCart) {
        const bottle = bottles.find((product) => product.id === id);
        if (bottle) storedCart.push(bottle);
        setCart(storedCart);
      }
    }
  }, [bottles]);

  // handle removeCartProduct from - LS and UI
  const handleRemoveCartProduct = (clickedCartProductId) => {
    // visual remove product from cart - UL
    // remove from localStorage
    const remainCartProduct = cart.filter(
      (product) => product.id !== clickedCartProductId
    );
    setCart(remainCartProduct);
    removeCartProduct(clickedCartProductId);
  };
  return (
    <div>
      <h3>Total Bottles: {bottles.length}</h3>
      <Cart cart={cart} handleRemoveCartProduct={handleRemoveCartProduct}></Cart>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} addCart={handleCart}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
