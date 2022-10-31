function simplify(poly, arrofvars = [], arrofqty = [], ans = []) {
  poly = poly.match(/([+-])?\w+/g);
  for (let i = 0; i < poly.length; i++) {
    let qty = poly[i].slice(0, poly[i].search(/[a-z]/i)) || 1;
    let vars = poly[i].slice(poly[i].search(/[a-z]/i));
    if (qty == "-") qty = "-1";
    vars = vars
      .split("")
      .sort((a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      })
      .join("");
    arrofqty.push(qty);
    arrofvars.push(vars);
  }
  for (let j = 0; j < arrofvars.length; j++) {
    for (let k = j + 1; k < arrofvars.length; k++) {
      if (arrofvars[j] == arrofvars[k]) {
        ans.push(
          new Array(
            arrofvars[j].length * (Number(arrofqty[j]) + Number(arrofqty[k]))
          ).fill(
            `${Number(arrofqty[j]) + Number(arrofqty[k])}` + arrofvars[j],
            1
          )
        );
        arrofvars.slice(k, 1);
      } else ans.push(arrofvars[j]);
    }
  }
  return ans.join("");
}
console.log(simplify("2xy-yx+s"));
