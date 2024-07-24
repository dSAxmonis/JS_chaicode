const anyNum = "129"
console.log(anyNum);

const otherNum = new Number(234)
console.log(otherNum)


// console.log(otherNum.toString())
console.log(otherNum.toString().length);

const num1 = 123.6583
console.log(num1.toPrecision(3));

const zeros = 10000000
console.log(zeros.toLocaleString());  // commas acc to us 
console.log(zeros.toLocaleString("en-IN"));



// **********************MATHS**********************

console.log(Math);

console.log(Math.abs(-1));
console.log(Math.round(4.3));
console.log(Math.ceil(2.3));
console.log(Math.floor(2.7));
console.log(Math.min(2,5,3,8,2.3));

console.log(Math.random());  // give a random number in btw 0 to 1

console.log((Math.random()*10) + 1);   // multiple of 10.  to avoid 0, + 1 

const min = 10 
const max = 20 

console.log(Math.floor(Math.random()*(max-min+1) + min))  //give number from min to max