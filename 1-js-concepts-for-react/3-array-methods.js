// Array methods (map, forEach, filter and find)

const products = [
  { name: "laptop", price: 73200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 81000, brand: "iphone", color: "golden" },
  { name: "watch", price: 32000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 13000, brand: "ray", color: "black" },
  { name: "camera", price: 150000, brand: "canon", color: "gray" },
];

// map - return an array or empty array
const productsPrice = products.map(productPrice => productPrice.price)
// console.log(productsPrice);

// forEach() - return undefine. That why we don't store forEach to a variable.
products.forEach(product => {
    console.log(product.brand);
})

// filter() - return an array
const filterPrice = products.filter(product => product.price>20000);
console.log(filterPrice);
const filterName = products.filter(product => product.color.includes('a'))
console.log(filterName);
// find - when condition meet return the first then stop.
//Which array method returns the first element in the array that satisfies the provided testing function
const findPrice = products.find(product => product.price > 20000);
console.log(findPrice);

