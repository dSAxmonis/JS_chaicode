const name = "Monis"
const age = 18

// console.log(name + age + "single");

console.log(`my name is ${name} I am ${age} and I am single`);


const gameName = new String("Monis-Js-playlist");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-17, 6)
console.log(anotherString);

console.log(gameName.replace('-', '_'))
