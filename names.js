var left = ['captain', 'magician', 'stunning', 'incredible',];
var right = [' steve', ' bruce', ' loki', ' tony',];
var randnum = function (n) { return Math.floor(Math.random() * (n)); };
console.log(left[randnum(left.length)] + right[randnum(right.length)]);
