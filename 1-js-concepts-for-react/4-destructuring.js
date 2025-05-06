// Array and object Destructuring

// array destructuring
const arr = [17, 24];
const [first, second] = arr;
console.log(first, second);

function nums(num1, num2) {
  const numbers = [num1, num2];
  return numbers;
}
const [firstNumber, secondNumber] = nums(20, 27);
console.log(firstNumber, secondNumber);

const student = {
  name: "Saklain",
  age: 27,
  working: ["Web Developing", "Full-Stack"],
};

const [passion, role] = student.working;
console.log(passion, role);

// For object destructuring left side property name is same as object property name. But order is not required.
const { name, age } = { name: "Saklain", passion: "Web-developer", age: 27 };

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js", "react"],
  specification: {
    height: "173cm",
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 8000,
      brand: "siko",
    },
  },
};
// optional chaining is a safe option
const {color,brand} = employee?.specification?.watch;
console.log(color,brand);
