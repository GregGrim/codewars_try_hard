function gap(g, m, n) {
  let arr = [];
  for (m; m <= n; m++) {
    let s = Math.floor(Math.sqrt(m));
    let i = 2;
    while (i < s+1 && m % i !== 0) {
      i++;
    }
    i--;
    if (i == s) arr.push(m);
    if (arr.length == 2) {
      if (arr[1] - arr[0] == g) {
        return arr;
      } else arr.shift();
    }
  }
  return null;
}
