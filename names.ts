let left = [  'captain',  'magician',  'stunning',  'incredible',];

let right = [  ' steve',' bruce',' loki',' tony',];

let randnum = (n) => Math.floor(Math.random() * (n));
console.log( left[randnum(left.length)] + right[randnum(right.length)]);