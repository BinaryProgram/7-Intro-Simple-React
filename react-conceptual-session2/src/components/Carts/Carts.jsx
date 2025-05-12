import React from "react";
import Cart from "../Cart/Cart";
const Carts = (props) => {
  const { cartItems, handleDeleteCart } = props;
  return (
    <section className="mt-14 w-1/2 rounded-lg border-2 border-[#84dcc6] p-3">
      <header className="mt-5 text-center text-3xl font-medium">
        Cart Total - {cartItems.length}
      </header>
      <div className="rounded-box border-base-content/5 bg-base-100 mt-5 overflow-x-auto border">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartItems.map((cartItem, index) => (
              <Cart
                cartItem={cartItem}
                row={index}
                key={cartItem.id}
                handleDeleteCart={handleDeleteCart}
              ></Cart>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Carts;
