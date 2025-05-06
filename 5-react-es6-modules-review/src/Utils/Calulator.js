// ES6 Modules, import default, relative path
const add = (num1,num2) => {
    return num1 + num2;
}
const multiply = (num1,num2) => {
    return num1*num2;
}
const dividedFirstNumBySecondNum = (num1,num2) => {
    return num1/num2;
}
// export default add;
// we can pass it like an object
// const result = {add:add};
// export default result;

// best way to export all
export {add,multiply,dividedFirstNumBySecondNum};