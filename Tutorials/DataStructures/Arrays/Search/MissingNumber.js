const a = [1, 2, 3, 4, 5, 6, 8, 9, 10];
function findMissing(a) {
  var size = a.length;
  if (a[0] != 1) return 1;
  if (a[size - 1] != size + 1) return size + 1;

  var low = 0;
  var high = a.length-1;
  while (low <= high) {
    console.log("Low is " + low);
    console.log("R is " + high);
    var mid = Math.floor((low + high) / 2);
    console.log("Mid is " + mid);
    console.log(a[mid]);
    if (a[mid] - mid === 1 && a[mid + 1] - (mid + 1) === 2) return a[mid] + 1;
    if (a[mid] - mid === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
console.log("floor " + Math.floor((8 - 0) / 2));
console.log(findMissing(a));
