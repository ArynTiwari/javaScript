// let obj1 = {
//   k1: "v1",
//   k2: "v2",
// };
// let obj2 = Object.create(obj1);
// console.log(obj2.k1);
// __proto__:Object
//free space to add properties is called prototype

/**
 * Prototypes of a function
 */
/**
 * New keyword
 * 1. creates empty object
 * 2. return {}
 * 3. assigns proto === to functions prototype
 */
/**
 * Classes are fake :(
 * Internally, wo bhi constructor bana ke hi kaam krte h
 */
// class createUser {
//   constructor(firstName, lastName, age) {
//     console.log("Inside constructor", this);
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   about() {
//     return `this is ${this.firstName}`;
//   }
//   is18() {
//     return this.age >= 10;
//   }
// }

// let u1 = new createUser("Aryan", "Tiwari", 0);
// console.log(Object.getPrototypeOf(u1));

class Animal {
  constructor(name, age, type, sound) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.sound = sound;
  }
  eat() {
    return `${this.name} loves to eat ${this.type}`;
  }
  speaks() {
    return `${this.name} makes  ${this.sound}`;
  }
}
class Cat extends Animal {
  constructor(name, age, type, sound, legs) {
    super(name, age, type, sound);
    this.legs = legs;
  }
}
let an1 = new Animal("Horse", 8, "Vegetarian", "Nehhhh");
let c1 = new Cat("Billu", 2, "Non-Veg", "meow", 4);
console.log(c1, c1.speaks());
