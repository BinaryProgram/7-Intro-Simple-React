// JSON, Fetch, keys, values, array add or remove using dots
const student = {
    name: 'Rehad',
    roll: 21,
    standard: 10,
    active: true
}

// convert student to javaScript object notation
const studentStringify = JSON.stringify(student);
console.log(studentStringify);

// json to javaScript like object
const  againJsLikeObject = JSON.parse(studentStringify);
console.log(againJsLikeObject);

// fetch from an api format.
// fetch('url').then(response => response.json()).then(data => console.log(data));
/*
    data can be -
    1. direct object or array
    2. array of object
    3. array inside object

*/

// key and values
const studentKey = Object.keys(student);
const studentValues = Object.values(student);
console.log(studentKey,"\n",studentValues);

// add and remove from an array
const products = [
  { name: "laptop", price: 73200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 81000, brand: "iphone", color: "golden" },
  { name: "watch", price: 32000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 13000, brand: "ray", color: "black" },
  { name: "camera", price: 150000, brand: "canon", color: "gray" },
];

const newProduct = [{name:'earbuds',price:3500, brand:"honor",color:"white"}];

// copy products then add newProduct;
const newProducts  =[...products,newProduct];

// create a new array without sunglass
const removeProduct = products.filter(product => product.name !== 'sunglass');
console.log(removeProduct);
