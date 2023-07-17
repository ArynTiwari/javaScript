function print(n) {
  if (n === 0) {
    return 1;
  }
  return n * print(n - 1);
}
console.log(print(5));

/**
 * Reverse Array with recursion
 */

let a = [1, 2, 3, 4, 5, 6, 7, 8];
function rever(a, x, y) {
  if (x <= y) {
    let temp = a[x];
    a[x] = a[y];
    a[y] = temp;
    rever(a, x + 1, y - 1);
  }
}
rever(a, 0, a.length - 1);
console.log(a);
