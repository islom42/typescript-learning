// Typescript is strict typed
// TypeScript code comiles into javascript
// let input = document.querySelector(".parent-div");
// console.log(input.value); // it is not supported by js
// ====================================
// npm install -g typescript
// ====================================
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
function addValue(n1, n2) {
    return n1 + n2;
}
console.log(addValue(+input1.value, +input2.value));
//=====================================
//=====================================
// Types: Number, string, boolean, null, undefined, Bigint, symbol, Object
//=====================================
function repeatNumber(num) {
    return 37037 * num * 3;
}
console.log(repeatNumber(8));
//=====================================
//=====================================
//let num; // let num: number;
var num;
num = 121;
// num = "error"; // Type '"error"' is not assignable to type 'number'
console.log(num);
//=====================================
//=====================================
var str;
str = "string";
console.log(str);
//=====================================
//=====================================
var bool;
bool = true;
console.log(bool);
//=====================================
//=====================================
var obj;
obj = { name: "Islom", age: 21 };
//=====================================
//=====================================
var obj2;
/* obj2 = {       =
  name: 21,       = =
  age: "Islom",   = = = error accures
}; */ //   = =
//                =
