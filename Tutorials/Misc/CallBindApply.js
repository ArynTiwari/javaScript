//call does the this binding
//this ki value hame tb pata chalti hai jab function call krte hai
//arrow function ka khud ka this nhi hota...wo apne ek level upar se lega
function about(hobby, favMusic) {
  console.log(this.firstName, this.age, hobby, favMusic);
}
const user1 = {
  firstName: "Aru",
  age: 21,
};
const user2 = {
  firstName: "Shruti",
  age: 22,
};
// about.call(user2, "reading", "TumHiHo","Hello");

// //apply : similar as call but extra arguments are passed as an array
// about.apply(user2, ["reading", "TumHiHo","Hello"]);
//bind: returns a function which can be used in future
