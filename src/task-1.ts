import "./style.css";

let age: number = "Jacob";
// ❌ Error: Type 'string' is not assignable to type 'number'
console.log(age);

age = true;
// ❌ Error: Type 'boolean' is not assignable to type 'number'
