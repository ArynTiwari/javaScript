/**
 * Asynchronus programming starts with setTimeout
 * both setTimeout ans setInterval return id
 * id can be used to call removeTimeout function to stop
 * the working of both functions
 */

console.log("Start");
const id = setTimeout(() => {
  console.log("hello");
}, 1000);

clearTimeout(id);
console.log("End");
