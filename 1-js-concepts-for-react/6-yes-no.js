// (advanced) truthy, falsy, Ternary operator, shortcut and or

// truthy - "hello", 5, {}, [],true
// falsely - "", 0, null, undefine,false
const myFault = 5;
if (myFault) {
  console.log("myFault is true");
} else {
  console.log("myFault is false ");
}

// use ternary operator to do the same task
console.log(myFault ? "myFault is true" : "myFault is false");

// number to string
const myMoney = 2000;
const strMyMoney = myMoney + "";
console.log(typeof strMyMoney);

// string to number
const yourMoney = "3000";
const numYourMoney  = +yourMoney;
console.log(typeof numYourMoney);

// toggler
let isActive = true;

const showUser = () => console.log("Cute goat white");
const hideUser = () => console.log('Cute Cow is a calf');

// use && if the left side true then the right side will be executed
isActive && showUser();
// use || if the left side is false then the right side will be executed
isActive || hideUser();

isActive = !isActive;