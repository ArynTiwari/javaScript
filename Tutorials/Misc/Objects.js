const obj = {
  name_: "Aryan",
  age: 21,
  hobbies: ["cricket", "bgmi", "coding", "sci-fi movies"],
  address: {
    flat: 205,
    street: "Kydganj",
    city: "PryagRaj",
    state: "UttarPradesh",
  },
};
/**
 * Accessing
 * Adding key value pair
 * Iterate (for in loop, object.keys)
 * Computed Properties
 * Spread Operator
 * Destructuring
 * Objects inside Arrays
 */
//accessing
// console.log(obj.address);
// console.log(obj["name_"]);

//adding
// const mail = "email";
// obj[mail] = "arutiwari500@gmail.com";
// console.log(obj);

//iterate
//for-in
// for (const key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }
//Object.keys
// console.log(Object.keys(obj));
// for (const key of Object.keys(obj)) {
//   console.log(`${key}: ${obj[key]}`);
// }
//Computed Properties
// const k1 = "name_";
// const k2 = "email";
// const val1 = "aru";
// const val2 = "aruuu";
// let obj2 = {
//   [k1]: val1,
//   [k2]: val2,
// };
// // obj2[k1] = val1;
// // obj2[k2] = val2;

// console.log(obj2);

//Spred Operator
// let newObj = { ...obj };
// console.log(newObj);

//Destructuring
// let {
//   name_: nam,
//   age: ag,
//   address: { flat, street: strt },
// } = obj;
// console.log(nam, ag, flat, strt);

//Objects Inside Arrays

const users = [
  { userId: 1, name_: "Aru" },
  { userId: 2, name_: "Nammu" },
];
// for (const iterator of users) {
//   console.log(iterator.userId)
// }
//Nested Destructure
let [{name_:nam,userId:id},us2] = users
console.log(nam,id)