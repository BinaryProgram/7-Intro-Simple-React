// let's confirm, cart is already in local storage or not
const getStoreCart = () => {
  const storeCart = localStorage.getItem("cart");
  if (storeCart) {
    return JSON.parse(storeCart);
  }
  return [];
};

// save cart to local storage
const saveCartToLS = (cart) => {
  // first - converted the cart in string format(local storage store only string)
  const cartStringy = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringy);
};

// add product id to local  storage
const addCartToLS = (id) => {
    const cart = getStoreCart();
    cart.push(id);

    // now save the cart data in local storage
    saveCartToLS(cart);
}
// remove product from both - UI and LS
const removeCartProduct = (removeId) => {
  const cartId  = getStoreCart();
  const remainingCart = cartId.filter((cartId) => cartId !== removeId);
  //save the remain cart product which id is not equal removeId
  saveCartToLS(remainingCart);
}
export {addCartToLS,getStoreCart,removeCartProduct};
