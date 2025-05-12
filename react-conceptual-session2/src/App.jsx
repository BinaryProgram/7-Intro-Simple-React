import { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import Carts from "./components/Carts/Carts";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleItem = (product) => {
    const isExist = cartItems.find((cartItem) => cartItem === product);
    if (!isExist) setCartItems([...cartItems, product]);
    else {
      toast("Item Already exist😞");
    }
  };
  // handle delete cart product
  const handleDeleteCart = (deleteCart) => {
    const updateCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== deleteCart.id,
    );
    setCartItems(updateCartItems);
  };

  return (
    <>
      <div className="flex justify-center border-2 border-amber-200">
        <h2 className="text-4xl font-bold">Product and Cart</h2>
      </div>
      <div className="mx-5 mt-5 flex flex-col gap-5 lg:flex-row">
        <Products handleItem={handleItem}></Products>
        <Carts
          cartItems={cartItems}
          handleDeleteCart={handleDeleteCart}
        ></Carts>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
