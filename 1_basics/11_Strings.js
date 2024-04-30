const name = "Abhijeet"
const repoCount = 50
console.log(name + repoCount + "Value");  // outdated 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Abhiakr')
console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)    // 0 1 2 3
console.log(newString);

const anotherString = gameName.slice(-8,4)    // takes negative index
console.log(anotherString);

const newStringOne = "   Abhijeet   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'));