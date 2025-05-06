// when button clicked product name and id will add to the local storage.
const productName = document.getElementById("product-name").value;
const productId = document.getElementById("product-id").value;
const store = () => {
  

  if (productName && productId) localStorage.setItem(productName, productId);

  document.getElementById("product-name").value = " ";
  document.getElementById("product-id").value = " ";
};

/*
    We use json.stringify() to store array or object to the local storage.

    we use json.parse() to convert again the array or object which javaScript
    understand.
*/
