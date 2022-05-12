/* let x: any = 2;
any = 5;
any = "string"; */
// in any variable might be any data type
/* let y: [] = [5, 6, 7];
let arrStr: string[] = ["Only", "string"];
let numStr: number[] = [1, 2, 3];
let anyArr: any[] = ["string", 1, true]; */
//================================
var nestedObj;
nestedObj.name.name.name = "support of typescrip is great";
/* let a: 10;
a = 11; */ // like const keyword in js
//================================
//! Tuple - fixed length array
var arr;
arr = [10, 20];
var roles = [0, 1, 2, 3];
//================================
//! Enum
var ROLES;
(function (ROLES) {
    ROLES[ROLES["USER"] = 0] = "USER";
    ROLES[ROLES["MODERATOR"] = 1] = "MODERATOR";
    ROLES[ROLES["ADMIN"] = 2] = "ADMIN";
    ROLES[ROLES["OWNER"] = 3] = "OWNER";
})(ROLES || (ROLES = {}));
ROLES.USER; // 0
//================================
//================================
//! UNION TYPES
var input;
input = ["islom", 123];
if (typeof input[0] === "string") {
    input[0].concat();
}
//================================
//================================
//! Literal type - concrete type
var greeting;
greeting = "Hi";
var value;
value = { name: "islom" }; // withName
value = { age: 20 };
value = { name: "Islom", age: 20 };
