// six fundamental of js

// 1. how to declare  a variable using let const
const fatherName = "Akabbar";
let season = "Summer";
season = "Winter";

// 2. six basic condition - >, <, >=, <=, ===, !==
// multiple condition - &&,||
if (fatherName === "akabbar" || season === "Winter") {
} else if (fatherName === "Akabbar") {
} else {
}

// 3. array
// length, push, pop
const arr = [10, 23, 35, 40, 21];
arr[0] = 5;

// 4. Loop
for (const i = 0; i < arr.length; i++) {
  const num = arr[i];
  console.log(num);
}

// 5. Function
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const result = add(5, 6);

// 6. object
const address = {
  name: "Saklain",
  age: "27",
  profession: "Web Developer",
  hobby: ["Traveling", "Photography", "Gardening"],
};

// three ways to access object property name and value
const work = "profession";
console.log(address.name); // direct by property name
console.log(address['age']); // access via property name string
console.log(address[work]); // access via property name using work variable