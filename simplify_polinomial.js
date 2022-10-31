// function simplify(poly) {
//   poly = poly.replace("+", " +");
//   poly = poly.replace("-", " -");
//   console.log(poly);
//   poly = poly.split(" ");
//   for (let i = 0; i < poly.length; i++) {
//     poly[i] =
//       poly[i].match(/[a-z]+$/).sort((a, b) => b.localeCompare(a)).toString();
//   }
//   return poly;
// }
// console.log(simplify("dc+dcba"));
function simplify(poly) {
  let arr = poly.match(/[a-z]+/g);
  arr = arr.map((a) =>
    a
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
  );
  let signs = poly.match(/[+-]\d*/g);
  if (!/[-]\d*/.test(poly[0])) signs.unshift("1");
  console.log(signs);
  return arr;
}
console.log(simplify("dc+dcba"));
