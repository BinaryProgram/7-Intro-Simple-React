// template string, arrow function, spread operator

// template string
const arr = [13,18,25,27];
const person = {
  name: "Saklain",
  age: "27",
  profession: "Web Developer",
  hobbies: ["Traveling", "Photography", "Gardening"],
};
const aboutMe = `My name is ${person.name} and age is ${person.age}. Favorite number is ${arr[0]}. 
I am learning ${person.profession}. My hobby is ${person.hobbies[0]} `;
console.log(aboutMe);

// arrow function
// implicit return
const getNum = () => 27;
const checkEven = num => num%2 === 0;
const summation = (n1,n2,n3) => n1+n2+n3;
// explicit return
const doMath = (first,second) => {
    const sum = first + second;
    return sum;
}

// spread operator
const newArr = [...arr];
arr.push(10);
arr.push(15);
newArr.push(57);
console.log(newArr);
console.log(arr);