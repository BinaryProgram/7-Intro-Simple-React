import React from "react";

const Cart = (props) => {
  const { cartItem, row, handleDeleteCart } = props;

  return (
    <tr>
      <th>{row + 1}</th>
      <td>{cartItem.title}</td>
      <td>{cartItem.price}</td>
      <td>
        <button
          onClick={() => handleDeleteCart(cartItem)}
          className="btn btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Cart;
