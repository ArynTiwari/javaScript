// function myFunc(callback) {
//   console.log(arguments);
//   console.log("Hello");
//   callback();
// }
// function myFunc2() {
//   console.log("Inside my func 2");
// }

// function fetchData(callback) {
//   // Simulating an asynchronous operation (e.g., fetching data from a server)
//   setTimeout(function () {
//     var data = { name: "John", age: 30 };
//     callback(data); // Invoke the callback function with the fetched data
//   }, 2000);
// }

// function processData(data) {
//   console.log("Processing data:", data);
// }

// fetchData(processData); // Pass the processData function as a callback
/**
 * Callbacks inside callbacks lead to pyramid of doom
 */

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
      setTimeout(() => {
        console.log(4);
        setTimeout(() => {
          console.log(5);
          setTimeout(() => {
            console.log(6);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
