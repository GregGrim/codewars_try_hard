circleIntersection=(a,b,r,s=Math.sqrt,d=s((a[0]-b[0])**2+(a[1]-b[1])**2)/2)=>~~(2*(r*r*Math.acos(d/r)-s(r*r-d*d)*d))|0

console.log(circleIntersection([10, 20],[-5, -15],20));

