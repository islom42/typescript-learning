// Typescript is strict typed
// TypeScript code comiles into javascript
// let input = document.querySelector(".parent-div");

// console.log(input.value); // it is not supported by js
// ====================================
// npm install -g typescript
// ====================================

let input1 = document.querySelector(".input1") as HTMLInputElement;
let input2 = document.querySelector(".input2") as HTMLInputElement;
function addValue(n1: number, n2: number) {
  return n1 + n2;
}

console.log(addValue(+input1.value, +input2.value));

//=====================================
//=====================================

// Types: Number, string, boolean, null, undefined, Bigint, symbol, Object
//=====================================

function repeatNumber(num: number) {
  return 37037 * num * 3;
}
console.log(repeatNumber(8));
//=====================================
//=====================================

//let num; // let num: number;
let num: number;
num = 121;
// num = "error"; // Type '"error"' is not assignable to type 'number'
console.log(num);
//=====================================
//=====================================
let str: string;
str = "string";
console.log(str);
//=====================================
//=====================================
let bool: boolean;
bool = true;
console.log(bool);
//=====================================
//=====================================
let obj: object;
obj = { name: "Islom", age: 21 };
//=====================================
//=====================================
let obj2: { name: string; age: number };
/* obj2 = {       =
  name: 21,       = =
  age: "Islom",   = = = error accures 
}; */ //   = =
//                =
