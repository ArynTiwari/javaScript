/**
 * Stores mixed data types but must be unique
 * They are dynamic
 * They do not maintain insertion order
 * They are iterables
 * Search and delete in faster in sets than array
 */

const arr = [1, 2, 3, 4];
let s = new Set(arr);
s.add(5);
//has method to check if value is present or not
console.log(s.has(4));
s.delete(1);
console.log(s.size);
s.add({ name_: "Aryan" });
for (const iterator of s) {
  console.log(iterator);
}
