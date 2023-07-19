function printFibb(n) {
  let ans = [0, 1];
  if (n === 0) {
    return ans[0];
  }
  if (n === 1) {
    return ans[1];
  }
  for (let i = 2; i < n; i++) {
    ans[i] = ans[i - 1] + ans[i - 2];
  }
  return ans;
}
console.log(printFibb(7));
