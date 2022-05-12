/* let x: any = 2;
any = 5;
any = "string"; */
// in any variable might be any data type
/* let y: [] = [5, 6, 7];
let arrStr: string[] = ["Only", "string"];
let numStr: number[] = [1, 2, 3];
let anyArr: any[] = ["string", 1, true]; */
//================================
let nestedObj: { name: { name: { name: string } }; age: number };
nestedObj.name.name.name = "support of typescrip is great";

/* let a: 10;
a = 11; */ // like const keyword in js
//================================
//! Tuple - fixed length array
let arr: [10, 20];
arr = [10, 20];
let roles: [0, 1, 2, 3] = [0, 1, 2, 3];
//================================
//! Enum
enum ROLES {
  USER, // 0
  MODERATOR, // 1
  ADMIN, // 2
  OWNER, // 3
}
ROLES.USER; // 0
//================================
//================================

//! UNION TYPES
let input: (string | number)[] | boolean | number;
input = ["islom", 123];

if (typeof input[0] === "string") {
  input[0].concat();
}
//================================
//================================

//! Literal type - concrete type
let greeting: "Hello" | "Hi" | "Greetings";
greeting = "Hi";
//================================
//================================

//! Type aliasas

type withName = { name: string };
type withAge = { age: number };

type with_name_and_age = withName & withAge;

let value: withName | withAge | with_name_and_age;

value = { name: "islom" }; // withName
value = { age: 20 };
value = { name: "Islom", age: 20 };
