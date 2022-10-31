function regexBelow(n) {
  let str = "";
  for (let i = 0; i < n - 1; i++) {
    str += `${i}|`;
  }
  str += `${n-1}`;
  regex = new RegExp (`^(${str})$`)
  console.log(regex)
  return regex.test(122)
}
console.log(regexBelow(123))
`1234`
/^\d{0,num.length-1}|$/