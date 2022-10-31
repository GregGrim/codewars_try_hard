function nextBigger(n, arr = []) {
  arr = n.toString().split("").sort().toString();
  let max = n * 10;
  for (let m = n + 1; m < max; m++) {
    if (m.toString().split("").sort().toString() === arr) return m;
  }
  return -1;
}
console.log(nextBigger(513));
