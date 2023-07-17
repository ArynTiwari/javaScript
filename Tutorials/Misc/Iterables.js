/**
 * Iterables are those on which methods such as for-of ,sort etc can be applied
 * Array like objects are those which have length property and can be
 * accessed using indexes
 * Objects are not iterable
 */

// const user = { name_: "wv", age: 21 };
// for (const i in user) {
//   console.log(i);
// }

/**
 * Sets
 * Unique element storage
 * No index based access
 * Order is not maintained
 */
// let numbers = new Set([1, 2, 3, 4]);
// for (const i of numbers) {
//   console.log(i);
// }
// console.log(numbers.size)

/**
 * Map
 * in maps we can have anythings as key
 */

/**
 * Clone using obj.assign
 */

// const obj = {
//   key1: "val1",
//   key2: "val2",
//   //   key3: {
//   //     key4: "val4",
//   //     key5: "val5",
//   //   },
// };
/**
 * Optional chaining prevents app break
 */
// console.log(obj.key3?.key4);

/**
 * Methods
 * Functions inside an object are called Methods
 */
const obj = {
  name_: "Aru",
  age: 21,
  about: function (nam) {
    console.log(this);
    console.log(`This persons is ${this.name_} and his age is ${this.age}`);
  },
};
console.log(this);
obj.about("Shruti");
