/**
 * Promise is a value that we dont know right now but will come to
 * know after some time.
 * Promises are added to microtask queue
 * MicroTask queue ki priority jyda hoti hai
 * Promise > setTimeout==setInterval
 * then method hamesha romise return karta hai
 * so we can create a chain of promises
 * agar hum return nahi krenge then method se to undefined return hoga
 */

const bucket = ["coffe", "milk", "sugar"];
console.log("Start");
let doodh = new Promise((resolve, reject) => {
  if (bucket.includes("milk") && bucket.includes("sugar")) {
    resolve({ value: "Doodh pee lo" });
  } else {
    reject("Doodh ke lie chini nahi hai");
  }
});
setTimeout(() => {
  console.log("SetTimeOut");
}, 0);
doodh
  .then((jawab) => {
    console.log(jawab);
  })
  .catch((e) => {
    console.log(e);
  });

console.log("End");
