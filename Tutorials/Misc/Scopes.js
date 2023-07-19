/**
 * Global
 * Block
 * Function
 */

/**
 * window is the Global object
 * using var and function add method to the window object
 */

/**
 * Function Scope
 * It is only created when the the function is called
 * If the function is called twice, two scopes will be created
 * Lexical env and scope are similar
 *
 */

let name_ = "Aryan";
function sayHi(hel) {
  let greet = "Hi";
  console.log(greet+ ` ${hel}` );
}
function hello(){
    let hel= "Shruti"
    sayHi(hel)
}
hello()
// sayHi();
// console.log(name_, sayHi);
